const Experiences = () => {
  return (
    <div className="mt-24 md:text-left space-y-4">
      <h1 className="text-xl font-bold text-center">
        And... Where do I work?{" "}
      </h1>
      <div className="space-x-4 flex">
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-md hover:shadow-lg m-4 md:m-0 text-white">
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
              Developed two projects, one alone and the other in a team using
              SCRUM methodologies. Managed components and states with React and
              Redux. Designed a beautiful UX/UI with CSS components. Created
              from scratch a relational database with PostgreSQL and Sequelize.
              Implemented authentication and authorization through JSON Web
              Tokens. Improved page loading by 50% with optimizations. Built a
              paywall with Stripe API and automated emails. Made a really good
              video.{" "}
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Experiences;
