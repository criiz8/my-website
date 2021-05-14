import React, { useState, useEffect } from "react";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme
      ? localStorage.theme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "white"
  );

  useEffect(() => {
    if (darkMode === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "white";
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-row-reverse p-4 md:p-0 md:pt-8">
      <button
        aria-label="theme-toggle"
        onClick={() =>
          darkMode === "dark" ? setDarkMode("white") : setDarkMode("dark")
        }
      >
        {darkMode === "dark" ? (
          <svg
            className="h-6 w-6 text-gray-800 dark:text-gray-100 hover:text-black  dark:hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <circle cx="12" cy="12" r="5" />{" "}
            <line x1="12" y1="1" x2="12" y2="3" />{" "}
            <line x1="12" y1="21" x2="12" y2="23" />{" "}
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
            <line x1="1" y1="12" x2="3" y2="12" />{" "}
            <line x1="21" y1="12" x2="23" y2="12" />{" "}
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg
            className="h-6 w-6 text-gray-800  dark:text-gray-100 hover:text-black dark:hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
          </svg>
        )}
      </button>
      <a
        href="/full_stack_dev-cristian_ariza-resume.pdf"
        className="text-lg text-gray-800 dark:text-gray-100 font-semibold hover:text-black dark:hover:text-white mr-4"
      >
        Resume
      </a>
      <a
        href="/"
        className="text-lg text-purple-600 dark:text-purple-500 font-bold hover:text-purple-800 dark:hover:text-purple-400 mr-auto"
      >
        cristian ariza
      </a>
    </div>
  );
};

export default Nav;
