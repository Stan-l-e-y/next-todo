import Head from 'next/head';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import styles from '../styles/Home.module.css';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import { useEffect, useState, Fragment } from 'react';
import Moment from 'moment';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Todo } from '../components/Todo';
import { PrismaClient } from '@prisma/client';
import { Prisma } from '@prisma/client';
import safeJsonStringify from 'safe-json-stringify';

const options = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Completed' },
  { id: 3, name: 'Not Completed' },
];

export default function Home({ todosData }) {
  //setup func for adding a new item
  const { data: session, status } = useSession();
  const [selected, setSelected] = useState(options[0]);
  const [todos, setTodos] = useState(todosData);
  const [showAddTodo, setShowAddTodo] = useState(false);

  const handleShowAddTodo = () => {
    setShowAddTodo(true);
  };

  useEffect(() => {
    if (session) {
      //if todos change(you added a todo and did setTodo) then use SWR to fetch new todos data maybe idk
      console.log(todos);
    }
  }, [todos]);

  if (session) {
    return (
      <div className="">
        <Head>
          <title>Next To-do</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-[4rem] pt-18">
              Welcome to <span className="text-[#0070f3]">Next To-do</span>
            </h1>
            <h2 className="pt-10 text-2xl">
              {Moment().format('dddd, MMMM Do YYYY')}
            </h2>
          </div>
          <div
            id="todoOptions"
            className="pt-10 flex items-stretch justify-items-center w-[40rem]"
          >
            <input
              type="email"
              className="form-control
                    self-start
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-white
                    border border-solid border-gray-700
                    rounded-lg
                    transition
                    ease-in-out
                    m-0 focus:outline-none  focus-visible:ring-2  focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 bg-inherit"
              id="filter"
              placeholder="Search for a To-do"
            ></input>

            <div className=" w-72 ml-4">
              <Listbox value={selected} by="name" onChange={setSelected}>
                <div className="relative ">
                  <Listbox.Button className="relative w-full cursor-default border border-solid border-gray-700 rounded-lg bg-inherit py-1.5 pl-3 pr-10 text-left shadow-md focus:outline-none  focus-visible:ring-2  focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 ">
                    <span className="block truncate">{selected.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 bg-gray-800 max-h-60 w-full overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {options.map((option) => {
                        return (
                          <Listbox.Option
                            key={option.id}
                            className="relative cursor-default select-none py-2 pl-10 pr-4 "
                            value={option}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {option.name}
                                </span>

                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#0070f3]">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        );
                      })}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div>
            {showAddTodo ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-500 mt-2 hover:cursor-pointer"
                onClick={() => setShowAddTodo(!showAddTodo)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-500 mt-2 hover:cursor-pointer"
                onClick={() => setShowAddTodo(!showAddTodo)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            )}

            <div className="todo-container w-[40rem] ">
              {showAddTodo ? <Todo focus={showAddTodo} /> : ''}
              {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />;
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <h1 className="text-[4rem] pt-18">
        Welcome to <span className="text-[#0070f3]">Next Todo!</span>
      </h1>
      <h2 className="pt-10 text-2xl">Please sign in to view content</h2>
    </main>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (session) {
    const prisma = new PrismaClient();
    const rawTodos = await prisma.todo.findMany({
      where: {
        userId: session.user.id,
      },
    });
    const todosData = JSON.parse(safeJsonStringify(rawTodos));

    return {
      props: { todosData },
    };
  }

  //here i can just do return {redirect: {destination: "/login", permanent: false}}
  return {
    props: {
      // session: await unstable_getServerSession(
      //   context.req,
      //   context.res,
      //   authOptions
      // ),
    },
  };
}
