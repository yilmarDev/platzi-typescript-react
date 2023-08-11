'use client';
import React from 'react';
type Props = {};

export const Marker = (props: Props) => {
  const addL = () => console.log('añadiendo');
  const removeL = () => console.log('quitando');
  return (
    <div>
      {' '}
      <div
        onMouseDown={addL}
        onMouseUp={removeL}
        style={{
          width: '40px',
          height: '40px',
          backgroundColor: 'orange',
          margin: '50px',
        }}
      ></div>
    </div>
  );
};
