import { useParams } from 'react-router-dom';

export const ImageContent = ({ testName }) => {
    //   testName  = useParams();
  // Define content for each type of test
  const testContent = {
    "Chemical Pathology":
      "Content for Chemical Pathology test...gjrhoi",
    Haematology: "Content for Haematology test...",
    Microbiology: "Content for Microbiology test...",
    "Flow Cytometry": "content here",
    Histopathology: "content here",
    "Molecular Diagnostics": "content here",
    Cytogenetics: "content here",

    // Add content for other types of tests as needed
  };

  // Get the content based on the testName
  const content = testContent[testName];

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mb-4">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">{testName}</h2>
        <p className="text-center">{content}</p>
      </div>
    </div>
    //
  );
};
