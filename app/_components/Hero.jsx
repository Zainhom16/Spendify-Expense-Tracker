import React from "react";

function Hero() {
  return (
    <div className="mx-auto max-w-screen-x1 px-4 py-10 lg:flex lg:h-screen lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Manage Your Transactions.
          <strong className="font-extrabold text-primaryColor sm:block">
            Increase Savings.
          </strong>
        </h1>

        <p className="mt-4 m:text-x3/relaxed">
          Track and categorize your expenses effortlessly with our expense
          tracker.
          <br /> Set budgets, balance your finances, and gain control over your
          money management journey.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primaryColor px-12 py-3 text-sm font-medium text-white shadow hover:bg-darkPrimary focus:outline-none focus:ring active:bg-primaryColor sm:w-auto"
            href="/sign-in"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
