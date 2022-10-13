import React, { useState, useRef, useEffect } from 'react';
import { Boop } from './Boop';
import { Switch, Popover } from '@headlessui/react';
import {
  DatePicker,
  LocalizationProvider,
  AdapterMoment,
  AdapterDayjs,
} from '@mui/x-date-pickers';
import MomentUtils from '@date-io/moment';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';

export const Todo = ({ todo, focus = false }) => {
  const textArea = useRef(null);

  const [hover, setHover] = useState(focus);
  const [enabled, setEnabled] = useState(false);
  const [hoverToolTip, setHoverToolTip] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());

  useEffect(() => {
    if (hover) {
      handleTextFocus();
      setHover(false);
    }
  }, [focus]);

  function handleShowHoverToolTip() {
    setHoverToolTip(true);
  }
  function handleLeaveHoverToolTip() {
    setHoverToolTip(false);
  }

  function handleTextFocus() {
    textArea.current.focus();
  }

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'white',
    },
    '& label.Mui': {
      color: 'white',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        // color: 'white',
      },
      color: 'white',
    },
    '& .MuiOutlinedInput-root:hover': {
      color: 'white',
    },
  });

  return (
    <div
      className={`flex ${
        todo
          ? 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700'
          : 'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 shadow-lg  shadow-blue-500'
      }   rounded-lg px-5 py-5 mt-5 `}
    >
      {todo ? <div className="basis-[83%]">{todo.title}</div> : ''}
      {todo ? (
        ''
      ) : (
        <div className="flex w-full">
          <input
            ref={textArea}
            className="bg-inherit border border-solid border-slate-300 rounded-md focus:outline-none focus-visible:ring-2  focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 flex basis-[50%] p-2"
            placeholder="Enter your task here"
          ></input>

          <div className="flex justify-between basis-[11%] ml-[2%] mr-[2%]  items-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-[#0071f3dc]' : 'bg-gray-800'}
            relative inline-flex h-[20px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
              pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </Switch>
            <Popover>
              {({ open }) => (
                <>
                  <Boop scale={1.18}>
                    <Popover.Button
                      onMouseOver={() => handleShowHoverToolTip()}
                      onMouseLeave={() => handleLeaveHoverToolTip()}
                      className="flex items-center mt-1.5 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                      </svg>
                    </Popover.Button>
                  </Boop>
                  {hoverToolTip && (
                    <div className="absolute">
                      <Popover.Panel static>
                        <div className="relative bg-slate-500 p-3 z-50">
                          This toggle switch is for scheduling your Todo. Want
                          your To-do to come into effect on another day other
                          than today? Turn on the switch and select your desired
                          day
                        </div>
                      </Popover.Panel>
                    </div>
                  )}
                </>
              )}
            </Popover>
          </div>
          {enabled && (
            <div className="flex basis-[35%]">
              <LocalizationProvider dateAdapter={MomentUtils}>
                <DatePicker
                  label="Basic example"
                  value={dateValue}
                  disablePast={true}
                  onChange={(newValue) => {
                    setDateValue(newValue);
                  }}
                  renderInput={(params) => (
                    <CssTextField {...params} size="small" label="" />
                  )}
                />
              </LocalizationProvider>
            </div>
          )}
        </div>
      )}
      {todo ? (
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
      ) : (
        <div className="mt-4 mb-4"></div>
      )}
    </div>
  );
};
