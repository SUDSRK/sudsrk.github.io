import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1999-12-16T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'projects',
    label: 'Projects Done',
    value: '14',
  },
  {
    key: 'lines',
    label: 'Lines of Code',
    value: '250000+',
  },
  {
    key: 'commits',
    label: 'Total Github Lifetime Contributions',
    value: '1500+',
  },
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'height',
    label: 'Height',
    value: '173 cm',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Gurugram, India',
  },
  {
    key: 'hometown',
    label: 'Hometown',
    value: 'Patna, India',
  },
];

export default data;
