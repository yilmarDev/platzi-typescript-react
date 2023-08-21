import { useState, useEffect, useRef } from 'react';

type props = {
  image: string;
  alt: string;
};

export const LazyImage = ({ image, alt }: props): JSX.Element => {
  const [src, setSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );

  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(image);
        }
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [image]);

  return (
    <>
      <img
        ref={node}
        width={320}
        height="auto"
        alt={alt}
        src={src}
        className="rounded bg-gray-300"
      />
    </>
  );
};
