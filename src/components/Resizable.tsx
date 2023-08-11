'use client';
import React, { useState } from 'react';
import './Resizable.scss';

type Props = {};

const Resizable = (props: Props) => {
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseDown = (e: any) => {
    setIsMoving(true);
    console.log('Presionaste');
  };

  const handleMouseMove = (e: any) => {
    if (isMoving) {
      console.log('Te estas moviendo');
    }
  };

  const handleMouseExit = (e: any) => {
    if (isMoving) {
      setIsMoving(false);
      console.log('Soltaste');
    }
  };

  return (
    <>
      <div className="resizable">
        Resizable
        <div
          className="resizer top-resizer"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseOut={handleMouseExit}
          onMouseLeave={handleMouseExit}
        ></div>
      </div>
    </>
  );
};

export default Resizable;
