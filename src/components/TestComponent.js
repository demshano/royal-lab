import React from "react";

export const TestComponent = ({ testName, testCode }) => {
  return (
    <div className="test-item w-[300px] sm:w-[450px] md:w-[650px] py-4 bg-slate-300 rounded-xl border-l-4 border-green-500 pl-4 hover:shadow-green-hover">
      <h3>{testName}</h3>
      <p>Test Code: {testCode}</p>
    </div>
  );
};
