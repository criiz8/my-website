const Skills = () => {
  return (
    <div className="mb-8 md:mb-12">
      <h1 className="text-xl font-bold text-center mb-2 md:mb-6">
        So... What do I know?{" "}
      </h1>
      <div className="flex flex-wrap justify-center">
        <div className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg rounded-xl w-64 m-2 md:m-4 p-4 text-left space-y-4">
          <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
            Front End
          </h1>
          <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
            React - Redux - JavaScript - CSS - SASS - Tailwind - HTML{" "}
          </h2>
        </div>{" "}
        <div className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg rounded-xl w-64 m-2 md:m-4 p-4 text-left space-y-4">
          <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
            Back End
          </h1>
          <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
            Node - Express - PostgreSQL - Sequelize
          </h2>
        </div>{" "}
        <div className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg rounded-xl w-64 m-2 md:m-4 p-4 text-left space-y-4">
          <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
            Automation
          </h1>
          <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
            Git - GitHub - Deployment - Mocha - Jest - Postman
          </h2>
        </div>{" "}
        <div className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg rounded-xl w-64 m-2 md:m-4 p-4 text-left space-y-4">
          <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
            Agile Mindset
          </h1>
          <h2 className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
            SCRUM - Fast Learner - Leader
          </h2>
        </div>{" "}
      </div>
    </div>
  );
};

export default Skills;
