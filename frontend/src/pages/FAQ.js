import React from "react";

function FAQ() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          Frequently asked questions.
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                What programs are offered through Martex Academy's
                Apprenticeship?
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Martex Academy offers apprenticeships in software development,
                digital marketing, graphic design, and more, providing hands-on
                training and real-world experience.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                How is the selection process for apprenticeships conducted?
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Apprenticeships are awarded to highly motivated individuals
                based on their dedication, passion, and commitment to personal
                and professional growth. Financial need is also considered
                during the selection process.
              </p>
            </div>
          </div>

          <div>
            <div className="inline-block p-3 text-white bg-orange-600 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-white">
                How does the apprenticeship repayment system work?
              </h1>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                Upon graduation and successful job placement, apprenticeship
                recipients contribute 10% of their monthly income until the
                investment made in their education is repaid. The terms are
                negotiated with the employing company's HR department.
              </p>
            </div>
          </div>

          {/* Additional FAQs can be added in a similar format */}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
