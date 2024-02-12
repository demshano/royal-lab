import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageCard, TestComponent } from "../components";

export const Test = () => {
  // Define the list of tests
  const [tests] = useState([
    { testName: "aluminium", testCode: "T001" },
    { testName: "copper", testCode: "T002" },
    { testName: "zink", testCode: "T003" },
    { testName: "zinkobolt", testCode: "T004" },
    { testName: "uria", testCode: "T005" },
    // Add more tests as needed
  ]);

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the tests based on the search query
  const filteredTests = tests.filter((test) =>
    test.testName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">

      <div className="mt-16" style={{ maxWidth: "100%" }}>
        <img
          src="scientist.jpg"
          alt="lab technician"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-wrap justify-around md:space-x-4   mt-20 md:flex-row md:justify-center lg:flex-row lg:justify-around">

        {/* <Link to="/test">
          <ImageCard
            imageSrc="test-tube.png"
            text="OUR TESTS"
            color="bg-green-700"
          />
        </Link> */}

        <Link to="/online_test">
          <ImageCard
            imageSrc="book-a-test.png"
            text="BOOK A ONLINE TEST"
            color="bg-green-600"
          />
        </Link>

        <Link to="/accreditation">
          <ImageCard
            imageSrc="report.png"
            text="ACCREDITATION"
            color="bg-green-500"
          />
        </Link>

        <Link to="/lab_network">
          <ImageCard
            imageSrc="location.png"
            text="LABORATORY NETWORK"
            color="bg-green-400"
          />
        </Link>
      </div>

      <div className="flex justify-center items-center mt-12">
        <p className="text-5xl font-bold text-green-800">FIND A TEST</p>
      </div>

      {/* --------------Search bar */}
      <div className="flex justify-center item-center mt-8 ">
        <input
          type="text"
          placeholder="Search tests..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-[600px] p-4 border-b-2 border-green-500 focus:border-green-500 outline-none"
        />
      </div>
      {/* -------search bar end */}

      <div className="flex justify-center item-center mt-12">
        <p className="text-3xl text-green-800 font-bold tracking-widest">
          TESTS
        </p>
      </div>

      {/* ----------------test components start */}

      <div className="space-y-4 flex flex-col mt-8 mb-8 justify-center items-center">
        {/* Display filtered tests */}
        {filteredTests.map((test, index) => (
          <TestComponent
            key={index}
            testName={test.testName}
            testCode={test.testCode}
            className=""
          />
        ))}
      </div>

      {/* ----------------test components start */}

      {/* ------end */}
    </div>
  );
};
