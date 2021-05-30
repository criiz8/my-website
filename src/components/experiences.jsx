const Experiences = () => {
  return (
    <div className="mt-8 md:mt-12 mb-8 md:mb-12">
      <h1 className="text-xl font-bold text-center mb-2 md:mb-6">
        And... Where have I worked?{" "}
      </h1>
      <div className="flex justify-center m-2">
        <div className="bg-white dark:bg-gray-700 text-left text-white shadow-md hover:shadow-lg rounded-xl w-192 m-2 md:m-4 p-4 space-y-4">
          <div className="flex justify-content flex-row-reverse text-xl">
            {" "}
            <h1 className="text-gray-700 dark:text-gray-300">
              Buenos Aires // Argentina
            </h1>
            <h1 className="text-purple-600 dark:text-purple-400 font-bold mr-auto">
              Associate Developer // Accenture
            </h1>
          </div>
          <h2 className="text-lg text-gray-700 dark:text-gray-300">
            May 2021 to Present
          </h2>{" "}
          <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
            • Working on description.
            <br />
            • Working on description x2.
            <br />• Working on description x3.
            <br />• Working on description x4.
          </h2>
        </div>
      </div>{" "}
      <div className="flex justify-center m-2">
        <div className="bg-white dark:bg-gray-700 text-left text-white shadow-md hover:shadow-lg rounded-xl w-192 m-2 md:m-4 p-4 space-y-4">
          <div className="flex justify-content flex-row-reverse text-xl">
            {" "}
            <h1 className="text-gray-700 dark:text-gray-300">
              Buenos Aires // Argentina
            </h1>
            <h1 className="text-purple-600 dark:text-purple-400 font-bold mr-auto">
              Full Stack Developer // Henry
            </h1>
          </div>
          <h2 className="text-lg text-gray-700 dark:text-gray-300">
            Jan 2021 to Apr. 2021
          </h2>{" "}
          <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
            • Developed two projects,{" "}
            <a href="https://mondocountries.netlify.app/" className="underline">
              Mondo Countries
            </a>{" "}
            by my own and{" "}
            <a href="https://g4shirts.netlify.app/" className="underline">
              G4 Shirts
            </a>{" "}
            in a team using SCRUM methodologies.
            <br /> • Managed components and states with React and Redux.
            <br /> • Created from scratch a relational database with PostgreSQL
            and Sequelize.
            <br />
            • Implemented authentication and authorization through JSON Web
            Tokens.
            <br /> • Built a paywall with Stripe API and automated emails.
          </h2>
        </div>
      </div>{" "}
    </div>
  );
};

export default Experiences;
