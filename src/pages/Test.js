import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageCard, TestComponent } from "../components";

export const Test = () => {




  // Define the list of tests
  const [tests] = useState([
    { testName: "ALBUMIN SERUM", testCode: "ALB" },
    { testName: "ALKALINE PHOSPHATE", testCode: "ALP" },
    { testName: "ASOT", testCode: "ASOT" },
    { testName: "BILIRUBIN TOTAL", testCode: "T BIL" },
    { testName: "BILIRUBIN DIRECT", testCode: "D BIL" },
    { testName: "BILIRUBIN INDIRECT", testCode: "ID BIL" },
    { testName: "BLOOD GROUPING & RH", testCode: "BGRH" },
    { testName: "BLOOD SUGAR SERIES (4 BSS)", testCode: "4 BSS" },
    { testName: "BLOOD SUGAR (FBS)", testCode: "FBS" },
    { testName: "BLOOD SUGAR (RBS)", testCode: "RBS" },
    { testName: "BLOOD SUGAR (PPBS)", testCode: "PPBS" },
    { testName: "BLOOD SUGAR (OGTT)", testCode: "OGTT" },
    { testName: "BLOOD UREA", testCode: "BU" },
    { testName: "CALCIUM TOTAL", testCode: "CALCIUM" },
    { testName: "CHOLESTEROL TOTAL", testCode: "TC" },
    { testName: "CREATIVE PROTEIN", testCode: "CRP" },
    { testName: "CREATININE", testCode: "CREATININE" },
    { testName: "DENGUE ANTIBODY", testCode: "DENGUE AB" },
    { testName: "DENGUE NS 1 ANTIGEN", testCode: "DENGUE NS1" },
    { testName: "DIFFERENTIAL COUNT", testCode: "DC" },
    { testName: "EGFR", testCode: "EGFR" },
    { testName: "ELECTROLYTES (Na,K,Cl)", testCode: "Na,K,Cl" },
    { testName: "ESR", testCode: "ESR" },
    { testName: "FULL BLOOD COUNT", testCode: "FBC" },
    { testName: "GAMMA GT", testCode: "GGT" },
    { testName: "HAEMOGLOBIN", testCode: "HB" },
    { testName: "HBA1C", testCode: "HBA1C" },
    { testName: "HCG (URINE)", testCode: "HCG" },
    { testName: "HEPATITIS ANTIGEN (HBsAg)", testCode: "HBsAg" },
    { testName: "HEPATITIS C ANTIBODY (HCV)", testCode: "HCV" },
    { testName: "LIPID PROFILE", testCode: "LP" },
    { testName: "LIVER PROFILE", testCode: "LIVER" },
    { testName: "MALARIA PARASITE PCV/HCT", testCode: "MALARIA" },
    { testName: "PLATELET COUNT", testCode: "PLATELET" },
    { testName: "TOTAL PROTEIN", testCode: "TP" },
    { testName: "PHOSPHORUS", testCode: "PHOSPHORUS" },
    { testName: "RENAL PROFILE -1/RFT (BU/CRE)", testCode: "RENAL-1" },
    { testName: "RENAL PROFILE-2/RFT", testCode: "RENAL-2" },
    { testName: "RHEUMATOID FACTOR (RF)", testCode: "RF" },
    { testName: "SEMEN ANALYSIS", testCode: "SEMEN" },
    { testName: "SGOT (AST)", testCode: "SGOT" },
    { testName: "SGPT (ALT)", testCode: "SGPT" },
    { testName: "STOOL FULL REPORT", testCode: "STOOL" },
    { testName: "STOOL OCULT BLOOD", testCode: "STOOL BLOOD" },
    { testName: "TROPONIN I", testCode: "TROPONIN" },
    { testName: "TSH", testCode: "TSH" },
    { testName: "T3/T4", testCode: "T3/T4" },
    { testName: "TSH/T3/T4", testCode: "TSH/T3/T4" },
    { testName: "WBC/DC", testCode: "WBC/DC" },
    { testName: "URIC ACID", testCode: "URIC ACID" },
    { testName: "URINE FULL REPORT (UFR)", testCode: "UFR" },
  ]);


  // const [expanded, setExpanded] = useState(false);

  // Chunk the tests into groups of 7
  const chunkedTests = tests.reduce((acc, curr, index) => {
    const chunkIndex = Math.floor(index / 7);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(curr);
    return acc;
  }, []);

  const [displayedChunkIndex, setDisplayedChunkIndex] = useState(0);

  const handleShowMoreTests = () => {
    setDisplayedChunkIndex((prevIndex) => prevIndex + 1);
  };


  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

/*eslint-disable-next-line  */
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

      <div className="flex flex-wrap md:space-x-8 justify-around mt-16   md:justify-center">

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
          className="w-[300px] sm:w-[400px] md:w-[600px] p-4 border-b-2 border-green-500 focus:border-green-500 outline-none"
        />
      </div>
      {/* -------search bar end */}

      <div className="flex justify-center item-center mt-12">
        <p className="text-3xl text-green-800 font-bold tracking-widest">
          TESTS
        </p>
      </div>

      {/* ----------------test components start */}

      <div>
        <div className="space-y-4 flex flex-col mt-8 mb-8 justify-center items-center">
          {/* Display the currently selected chunk of tests */}
          {chunkedTests[displayedChunkIndex].map((test, index) => (
            <TestComponent
              key={index}
              testName={test.testName}
              testCode={test.testCode}
            />
          ))}
          {/* Display "Show more tests" button if there are more chunks available */}
          {displayedChunkIndex < chunkedTests.length - 1 && (
            <div
              className="cursor-pointer"
              onClick={handleShowMoreTests}
            >
              Show more tests
            </div>
          )}
        </div>
      </div>

      {/* ----------------test components start */}

      {/* ------end */}
    </div>
  );
};
