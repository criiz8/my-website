const Footer = () => {
  return (
    <div className="pb-4 md:pb-8 mt-8 md:mt-12">
      <div className="flex justify-center mb-2 md:mb-4">
        <a
          href="https://linkedin.com/in/crisariza"
          aria-label="Linkedin"
          className="mr-4"
        >
          <svg
            className="h-6 w-6 text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
            <rect x="2" y="9" width="4" height="12" />{" "}
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>{" "}
        <a href="https://github.com/crisariza" aria-label="Github">
          <svg
            className="h-6 w-6 text-gray-900 dark:text-gray-200 hover:text-black dark:hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </div>
      <div className="text-gray-900 text-center dark:text-gray-200">
        <p>
          © 2021.{" "}
          <a
            href="mailto:hi@crisariza.com?subject=Hi Cris!"
            className="hover:text-black dark:hover:text-white"
          >
            hi@crisariza.com
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
