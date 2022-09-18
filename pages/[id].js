import React from "react";
import Head from "next/head";
import { API_HOST, API_URL } from "../constants";

const Character = ({ character }) => {
  console.log(character);

  return (
    <div className="min-h-[calc(100vh-66px)] py-8 px-4">
      <Head>
        <title>{character.character_name} - Stranger Things API</title>
        <meta
          name="description"
          content={`${character.character_name} - Stranger Things API`}
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={`${character.character_name}`} />
        <meta
          property="og:description"
          content={`${character.character_name} - Stranger Things API`}
        />
        <meta property="og:image" content={character.image} />
        <meta
          property="og:url"
          content={`https://stranger-things-api.vercel.app/${character.id}`}
        />

        <meta name="twitter:title" content={`${character.character_name}`} />
        <meta
          name="twitter:description"
          content={`${character.character_name} - Stranger Things API`}
        />
        <meta name="twitter:image" content={character.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <p className="text-center font-bold text-3xl">Stranger Things API</p>
        <div className="flex justify-center my-5">
          <a
            href="https://rapidapi.com/Mridul2820/api/stranger-things-character-api"
            className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            API Docs
          </a>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img
            src={character.image}
            alt={character.character_name}
            className="w-32 h-32 rounded-full"
            loading="lazy"
          />
          <h1 className="text-3xl font-bold pt-5 pb-2">
            {character.character_name}
          </h1>
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
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": "stranger-things-character-api.p.rapidapi.com",
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
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  });

  const characters = await data.json();

  const pathsArr = characters?.map((character) => ({
    params: { id: character.id.toString() },
  }));

  return {
    paths: pathsArr,
    fallback: "blocking",
  };
}
