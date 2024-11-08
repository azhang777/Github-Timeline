"use client";

import { ChangeEvent, FormEvent } from "@/types/event";
import Button from "./button";

export default function Search() {
  function handleSubmit(e: ChangeEvent) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form
      className="w-2/3"
      action=""
      autoComplete="off"
      onSubmit={(e) => handleSubmit(e.target.VA`  LUE `)}
    >
      <label htmlFor="search-git-user" className="sr-only">
        Search Github User
      </label>
      <div className="relative flex justify-center shadow-sm">
        <input
          type="text"
          id="search-git-user"
          name="search-git-user"
          className="block w-6/12 rounded-full p-4 text-center text-sm focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="Search Github User"
        />

        <Button
          type="submit"
          className="inline-flex border border-transparent disabled:pointer-events-none"
        >
          Search
        </Button>
      </div>
    </form>
  );
}

{
  /*
  
        <div>
        <label
          htmlFor="hs-trailing-button-add-on-with-icon-and-button"
          className="sr-only"
        >1  
          Label
        </label>
        <div className="relative flex rounded-lg shadow-sm">
          <input
            type="text"
            id="hs-trailing-button-add-on-with-icon-and-button"
            name="hs-trailing-button-add-on-with-icon-and-button"
            className="block w-full rounded-s-lg border-gray-200 px-4 py-3 ps-11 text-sm shadow-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
            <svg
              className="size-4 shrink-0 text-gray-400 dark:text-neutral-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-x-2 rounded-e-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Search
          </button>
        </div>
      </div>
  */
}
