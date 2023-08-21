import { useState, useEffect, useRef } from 'react';
import type { ImgHTMLAttributes } from 'react';

type LazyImageProps = {
  src: string;
};

type imageNative = ImgHTMLAttributes<HTMLImageElement>;

type props = LazyImageProps & imageNative;

export const LazyImage = ({ src, ...imgProps }: props): JSX.Element => {
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );

  const node = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src);
        }
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <>
      <img
        ref={node}
        src={currentSrc}
        className="rounded bg-gray-300"
        {...imgProps}
      />
    </>
  );
};
