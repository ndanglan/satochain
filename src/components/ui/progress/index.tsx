'use client';

import React, { useEffect, useRef, useState } from 'react';

type Props = {
  progress: number; //%
};

const Progress = ({ progress }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeWidth, setActiveWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setActiveWidth((width * progress) / 100);
    }
  }, []);
  return (
    <div
      ref={containerRef}
      className="flex h-1 w-full items-center bg-M3-sys-dark-surface-container-highest"
    >
      <div
        className="h-full bg-M3-sys-dark-primary"
        style={{
          width: `${activeWidth}px`,
        }}
      ></div>
    </div>
  );
};

export default Progress;
