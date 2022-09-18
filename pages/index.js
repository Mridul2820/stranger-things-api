import React from "react";
import Head from "next/head";
import { API_HOST, API_URL } from "../constants";

export default function Home({ characters }) {
  return (
    <div className="bg-slate-900 text-white">
      <Head>
        <title>Stranger Things API</title>
        <meta name="description" content="Stranger Things API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-5">
        <h1 className="text-center font-bold text-3xl">Stranger Things API</h1>

        <div className="flex flex-wrap justify-center mt-5">
          {characters?.map((character) => (
            <div
              key={character.id}
              className="flex flex-col items-center justify-center p-5 m-3 border border-slate-600 rounded-sm max-w-[250px] w-full shadow-md"
            >
              {character.image ? (
                <img
                  src={character.image}
                  alt={character.character_name}
                  className="w-32 h-32 rounded-full"
                  loading="lazy"
                />
              ) : (
                <img
                  src="https://via.placeholder.com/150"
                  alt={character.character_name}
                  className="w-32 h-32 rounded-full"
                  loading="lazy"
                />
              )}
              <p className="mt-2 text-xl font-semibold">
                {character.character_name}
              </p>
              {character.portrayed_by && (
                <p className="mt-1 text-gray-400">
                  By: {character.portrayed_by}
                </p>
              )}

              <div className="flex mt-2">
                <a
                  href={`/${character.id}`}
                  className="px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-5 flex justify-center">
        <p className="text-sm border-t-2 border-t-slate-600 inline-block pt-1 text-center">
          Made with ❤️ by{" "}
          <a
            className="text-blue-500 hover:text-blue-700"
            href="https://www.mridul.tech/"
            target="_blank"
          >
            Mridul
          </a>
        </p>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/characters`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": API_HOST,
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
