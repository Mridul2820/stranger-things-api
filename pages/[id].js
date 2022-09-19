import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { API_HOST, API_URL, BASE_URL } from '../constants';

const Character = ({ character }) => {
  return (
    <div className="min-h-[calc(100vh-66px)] py-8 px-4">
      <Head>
        <title>
          {character.character_name
            ? character.character_name
            : 'Character Detail'}{' '}
          - Stranger Things API
        </title>
        <meta
          name="description"
          content={`${
            character.character_name
              ? character.character_name
              : 'Character Detail'
          } - Stranger Things API`}
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="canonical" content={`${BASE_URL}/${character.id}`} />

        <meta
          property="og:title"
          content={`${
            character.character_name
              ? character.character_name
              : 'Character Detail'
          }`}
        />
        <meta
          property="og:description"
          content={`${
            character.character_name
              ? character.character_name
              : 'Character Detail'
          } - Stranger Things API`}
        />
        <meta
          property="og:image"
          content={
            character.image ? character.image : '/assets/st_api_logo.jpg'
          }
        />
        <meta property="og:url" content={`${BASE_URL}/${character.id}`} />

        <meta
          name="twitter:title"
          content={`${
            character.character_name
              ? character.character_name
              : 'Character Detail'
          }`}
        />
        <meta
          name="twitter:description"
          content={`${character.character_name} - Stranger Things API`}
        />
        <meta
          name="twitter:image"
          content={
            character.image ? character.image : '/assets/st_api_logo.jpg'
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div className="flex justify-center flex-col items-center">
          {character.image && (
            <Image
              height={250}
              width={250}
              src={character.image}
              alt={character.character_name}
              className="w-32 h-32 rounded-full align-top"
              objectFit="cover"
            />
          )}
          {character.character_name && (
            <h1 className="text-3xl font-bold pt-5 pb-2">
              {character.character_name}
            </h1>
          )}
          {character.portrayed_by && (
            <p className="text-gray-400">By: {character.portrayed_by}</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Character;

export async function getStaticProps({ params }) {
  const data = await fetch(
    `https://stranger-things-character-api.p.rapidapi.com/characters/${params.id}`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'stranger-things-character-api.p.rapidapi.com',
      },
    }
  );

  if (!data.ok) {
    return {
      notFound: true,
    };
  }

  const character = await data.json();

  return {
    props: {
      character,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch(`${API_URL}/characters`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  });

  const characters = await data.json();

  const pathsArr = characters?.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths: pathsArr,
    fallback: 'blocking',
  };
}
