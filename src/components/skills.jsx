const Skills = () => {
  return (
    <div className="pt-6 md:text-left space-y-4">
      <h1 className="text-xl font-bold text-center pb-6">
        So... What do I know?{" "}
      </h1>
      <div className="space-x-6 flex flex-wrap justify-center">
        <div className="bg-white dark:bg-gray-700 shadow-md rounded-xl p-8 md:p-0 w-64 hover:shadow-lg">
          <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
            <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
              Front End
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              React - Redux - JavaScript - CSS - SASS - Tailwind - HTML{" "}
            </p>
          </div>
        </div>{" "}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 md:p-0 w-64 shadow-md hover:shadow-lg">
          <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
            <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
              Back End
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              Node - Express - PostgreSQL - Sequelize
            </p>
          </div>
        </div>{" "}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 md:p-0 w-64 shadow-md hover:shadow-lg">
          <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
            <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
              Automation
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              Git - GitHub - Deployment
            </p>
          </div>
        </div>{" "}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-8 md:p-0 w-64 shadow-md hover:shadow-lg">
          <div className="pt-6 md:p-4 text-center md:text-left space-y-4">
            <h1 className="text-xl text-purple-600 dark:text-purple-400 font-bold">
              Agile Mindset
            </h1>
            <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold">
              SCRUM - Fast Learner - Leader
            </p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Skills;
