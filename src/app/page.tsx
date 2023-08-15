import Image from 'next/image';
import { RandomFox } from '@/components/RandomFox';

export default function Home() {
  const random = () => Math.floor(Math.random() * 123 + 1);
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;

  return (
    <>
      <head>
        <title>TypeScript & React</title>
        <meta
          name="description"
          content="Generated by YilmarDev with a Platzi Course"
        />
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </head>
      <body>
        <main>
          <h1 className="text-3xl font-bold underline">
            Hello Platzi and TypeScript
          </h1>
          <RandomFox image={image} alt="Random fox to display" />
          <footer>By YilmarDev</footer>
        </main>
      </body>
    </>
  );
}
