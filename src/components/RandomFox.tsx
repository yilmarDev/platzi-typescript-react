const random = () => Math.floor(Math.random() * 123 + 1);

export const RandomFox = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg`;

  return <img className="rounded" width={320} height="auto" src={image}></img>;
};
