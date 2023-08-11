import Image from 'next/image';
import { RandomFox } from '@/components/RandomFox';
import { Marker } from '@/components/Marker';
import Resizable from '@/components/Resizable';

const random = () => Math.floor(Math.random() * 123 + 1);

export default function Home() {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;

  return (
    <div className="">
      <head>
        <title>TypeScript & React</title>
        <meta
          name="description"
          content="Generated by YilmarDev with a Platzi Course
          "
        />
        <link rel="stylesheet" href="./favicon.ico" />
      </head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello Platzi and TypeScript
        </h1>
        <RandomFox image={image} alt="Random fox to display" />

        {/* <Marker /> */}
      </main>

      <footer>By YilmarDev</footer>
      <div
        style={{
          width: '500px',
          height: '500px',
          border: '1px solid orange',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Resizable />
      </div>
    </div>
  );
}
