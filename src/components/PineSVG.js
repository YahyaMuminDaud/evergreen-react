import React from 'react';
import logoOg from '../assets/EVERGREEN-og.png';
import logoW from '../assets/EVERGREEN-w.png';

export default function PineSVG({ width = 60, height = 60, variant = 'w' }) {
  const src = variant === 'og' ? logoOg : logoW;
  return (
    <img
      src={src}
      alt="Evergreen Matf LLC"
      width={width}
      height={height}
      style={{ borderRadius: '50%', objectFit: 'cover' }}
    />
  );
}