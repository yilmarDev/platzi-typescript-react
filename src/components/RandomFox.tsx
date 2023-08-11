type props = {
  image: string;
  alt: string;
};

export const RandomFox = ({ image, alt }: props): JSX.Element => {
  return (
    <img className="rounded" width={320} height="auto" src={image} alt={alt} />
  );
};
