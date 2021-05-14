const Experiences = () => {
  return (
    <div className="mt-16 md:mt-24 md:text-left space-y-4">
      <h1 className="text-xl font-bold text-center">
        And... Where have I worked?{" "}
      </h1>
      <div></div>
      <div className="space-x-4 flex justify-center">
        <div className="w-192 bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg m-4 md:m-0 text-white">
          <div className="text-left space-y-4">
            <div className="flex justify-content flex-row-reverse">
              {" "}
              <h1 className="text-xl text-gray-700  dark:text-gray-300">
                Buenos Aires // Argentina
              </h1>
              <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold mr-auto">
                Full Stack Developer // Accenture
              </h1>
            </div>
            <h2 className="text-lg text-gray-700 dark:text-gray-300">
              May 2021 to Present
            </h2>{" "}
            <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              • I haven't started yet.
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="space-x-4 flex justify-center">
        <div className="w-192 bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg m-4 md:m-0 md:mt-4 text-white">
          <div className="text-left space-y-4">
            <div className="flex justify-content flex-row-reverse">
              {" "}
              <h1 className="text-xl text-gray-700  dark:text-gray-300">
                Buenos Aires // Argentina
              </h1>
              <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold mr-auto">
                Full Stack Developer // Henry
              </h1>
            </div>
            <h2 className="text-lg text-gray-700 dark:text-gray-300">
              Jan 2021 to Present
            </h2>{" "}
            <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              • Developed two projects,{" "}
              <a
                href="https://mondocountries.netlify.app/"
                className="underline"
              >
                {" "}
                Mondo Countries
              </a>{" "}
              by my own and{" "}
              <a href="https://g4shirts.netlify.app/" className="underline">
                {" "}
                G4Shirts
              </a>{" "}
              in a team using SCRUM methodologies.
              <br /> • Managed components and states with React and Redux.
              <br /> • Designed a beautiful UX/UI with CSS components.
              <br /> • Created from scratch a relational database with
              PostgreSQL and Sequelize.
              <br />
              • Implemented authentication and authorization through JSON Web
              Tokens.
              <br /> • Improved page loading by 50% with optimizations.
              <br /> • Built a paywall with Stripe API and automated emails.
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Experiences;
