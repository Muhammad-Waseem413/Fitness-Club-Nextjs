import React from "react";
import Head from "next/head";

function HeadSection({ title }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default HeadSection;
