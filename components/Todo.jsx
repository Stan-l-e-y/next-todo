import React from 'react';
import { Boop } from './Boop';

export const Todo = () => {
  return (
    <div className="flex bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700  rounded-lg px-5 py-5 mt-5">
      <div className="basis-[83%]">todo</div>
      <div className="flex justify-between basis-[17%]">
        <Boop scale={1.15}>
          <div className="flex bg-gray-800 p-0.5 rounded-md">
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
          </div>
        </Boop>
        <Boop scale={1.15}>
          <div className="flex bg-gray-800 p-0.5 rounded-md">
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
          </div>
        </Boop>
        <Boop scale={1.15}>
          <div className="flex bg-gray-800 p-0.5 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.9}
              stroke="currentColor"
              className="w-6 h-6 text-orange-500 hover:cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
        </Boop>
      </div>
    </div>
  );
};
