import React from "react";

export default function SearchEvents({ searchFunction }) {
  return (

    <div className="flex justify-start items-center md:px-0 ">
                <p className="mr-5 md:block">Search</p>


      <div className="block md:flex ">
        <div className="block md:flex border-1  rounded-lg  rounded-lg w-full w-80">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div class="relative w-full">
            <input
              type="search"
              onChange={(e) => searchFunction(e.target.value)}
              id="default-search"
              class="block p-4 w-full text-sm border-black text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
              required
            />

            <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          {/*  <input
                      type="text"
                      className="px-4 md:w-80 rounded-lg "
                      placeholder=""
                      onChange={(e)=>searchFunction(e.target.value)}
                    />
                    <button className="px-2 py-2 m-1 text-white bg-black-50  rounded">
                      <svg
                        width="24"
                        height="24"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5 15.5L19 19"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                          stroke="black"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button> */}
        </div>
      </div>
    </div>
  );
}
