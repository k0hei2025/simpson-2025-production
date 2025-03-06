import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import React, { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type HomeProps = {
  response: {
    id: number;
    name: string;
    normalized_name: string;
    gender: string;
  }[];
}

export default function Home({response}:HomeProps) {

  

  const router = useRouter();
  // Get the base path for assets in production
  const basePath = process.env.NODE_ENV === 'production' ? '/simpson-2025-production' : '';
  
  return (
    <div className="container mx-auto mt-10">
      {response.map((character, index) => (
        <React.Fragment key={index}>
          <div className="border rounded-lg shadow p-4 mb-4">
            <p key={character.id} className="text-xl font-bold mb-2">
              ID: {character.id}
            </p>
            <p className="text-lg mb-2">
              Name: {character.name}
            </p>
            <p className="text-lg mb-2">
              Normalized Name: {character?.normalized_name}
            </p>
            <p className="text-lg mb-2">
              Gender: {character?.gender}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export const getStaticProps:GetStaticProps = async () => {
  const api = 'https://api.sampleapis.com/simpsons/characters';
  const res = await fetch(api);
  const data = await res.json();

  return {
    
    props: {response: data},
  };
}