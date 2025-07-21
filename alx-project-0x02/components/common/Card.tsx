import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-md shadow-md p-6 m-4 bg-white max-w-sm mx-auto">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
