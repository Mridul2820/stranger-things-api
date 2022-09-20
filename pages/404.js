import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-130px)] flex flex-col justify-center items-center gap-4">
      <Head>
        <title>Stranger Things API</title>
      </Head>
      <h1 className="text-9xl font-bold text-center">404</h1>
      <h2 className="text-3xl font-bold text-center">
        Something More Stranger
      </h2>
      <p className="text-center">Sorry, Page Not Found</p>
      <Link href="/">
        <a className="btn">Go to Home</a>
      </Link>
      <img
        src="/assets/st_api_logo.jpg"
        alt="404"
        className="w-36 h-36 rounded-md align-top"
      />
    </div>
  );
};

export default NotFound;
