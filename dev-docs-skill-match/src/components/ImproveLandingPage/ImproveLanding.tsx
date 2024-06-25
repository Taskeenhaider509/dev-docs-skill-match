import React from 'react';

const ImproveLanding: React.FC = () => {
  return (
    <div className="bg-secondary">
      <div className="custom-container pt-60 md:pt-72">
        <h2 className="m-0 text-center font-urbanist text-xl font-bold text-white md:text-4xl">
        Improve your hiring now.
        </h2>
        <p className="m-0 mt-10 p-0 text-center font-urbanist text-base font-medium leading-relaxed text-white md:mt-6 md:text-2xl">
        Start using SkillMatch today, or talk to us about your hiring challenges to discover how we can help.
        </p>
        <div className="flex justify-center gap-3 pb-75 pt-30 md:gap-5 md:pb-87 md:pt-46">
          <a
            href={"/book-demo"}
            className="link link-request-demo md:link">
            Request A Demo
          </a>
          <a
            href={"/signup?type=company"}
            className="link link-start-free-trial md:link">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImproveLanding;
