import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { API_HOST, API_URL, BASE_URL } from '../constants';

export default function Home({ characters }) {
  const [search, setSearch] = useState('');

  const filteredCharacters = characters.filter((character) => {
    return (
      character.character_name.toLowerCase().includes(search.toLowerCase()) ||
      character.portrayed_by.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <Head>
        <title>Stranger Things API</title>
        <meta name="description" content="Stranger Things API" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="canonical" content={BASE_URL} />
        <meta property="og:title" content="Stranger Things API" />
        <meta property="og:description" content="Stranger Things API" />
        <meta property="og:image" content="/assets/st_api_logo.jpg" />
        <meta property="og:url" content={BASE_URL} />
        <meta name="twitter:title" content="Stranger Things API" />
        <meta name="twitter:description" content="Stranger Things API" />
        <meta name="twitter:image" content="/assets/st_api_logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="p-5">
        <h1 className="text-center font-bold text-3xl mb-5">
          Stranger Things API
        </h1>

        <div className="flex justify-center">
          <input
            type="text"
            className="w-full border-2 border-gray-300 p-2 rounded-md outline-none focus:border-blue-400 mb-5 bg-transparent max-w-sm mx-auto "
            placeholder="Search for a character"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap justify-center">
          {filteredCharacters?.map((character) => (
            <div
              key={character.id}
              className="flex flex-col items-center justify-center p-5 m-3 border border-slate-600 rounded-sm max-w-[250px] w-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {character.image ? (
                <Image
                  height={250}
                  width={250}
                  src={character.image}
                  alt={character.character_name}
                  className="w-32 h-32 rounded-full align-top"
                  objectFit="cover"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/150"
                  alt={character.character_name}
                  className="w-32 h-32 rounded-full"
                  loading="lazy"
                />
              )}
              <p className="mt-2 text-xl font-semibold text-center">
                {character.character_name}
              </p>
              {character.portrayed_by && (
                <p className="mt-1 text-gray-400 text-center">
                  By: {character.portrayed_by}
                </p>
              )}

              <div className="flex mt-2">
                <Link href={`/${character.id}`}>
                  <a className="btn">More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/characters`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': API_HOST,
    },
  });

  const characters = await data.json();

  if (!characters) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      characters,
    },
  };
}
