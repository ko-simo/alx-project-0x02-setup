import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md shadow-md p-6 m-4 bg-white max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-1">📧 {email}</p>
      <p className="text-gray-700">
        🏠 {address.street}, {address.suite}, {address.city} - {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
