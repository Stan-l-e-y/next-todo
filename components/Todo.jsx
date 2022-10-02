import React from 'react';
import { Boop } from './Boop';

export const Todo = () => {
  return (
    <div className="flex bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700  rounded-lg px-5 py-5 mt-5">
      <div>todo</div>
      <Boop scale={1.15}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 myBlue bg-gray-800"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </Boop>
    </div>
  );
};
