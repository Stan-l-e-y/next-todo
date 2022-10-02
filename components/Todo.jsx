import React from 'react';
import { Boop } from './Boop';

export const Todo = () => {
  return (
    <div className="flex bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700  rounded-lg px-5 py-5 mt-5">
      <div className="basis-[89%]">todo</div>
      <div className="flex justify-between basis-[11%]">
        <div className="flex bg-gray-800 p-0.5 rounded-md">
          <Boop scale={1.15}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.9}
              stroke="currentColor"
              className="w-6 h-6 myBlue  hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </Boop>
        </div>
        <div className="flex bg-gray-800 p-0.5 rounded-md">
          <Boop scale={1.15}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.9}
              stroke="currentColor"
              className="w-6 h-6 text-red-600 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Boop>
        </div>
      </div>
    </div>
  );
};
