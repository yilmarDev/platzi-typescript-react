import { useState, useEffect, useRef } from 'react';
import type { ImgHTMLAttributes } from 'react';

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type imageNative = ImgHTMLAttributes<HTMLImageElement>;

type props = LazyImageProps & imageNative;

export const LazyImage = ({
  src,
  onLazyLoad,
  ...imgProps
}: props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);

  const [isLazyLoaded, setIsLazyLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  );

  useEffect(() => {
    if (isLazyLoaded) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) return;

        setCurrentSrc(src);
        observer.disconnect();
        setIsLazyLoaded(true);

        if (typeof onLazyLoad === 'function') onLazyLoad(node.current);
      });
    });

    if (node.current) observer.observe(node.current);

    return () => {
      observer.disconnect();
    };
  }, [src, onLazyLoad, isLazyLoaded]);

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
