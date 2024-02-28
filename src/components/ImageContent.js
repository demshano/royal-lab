export const ImageContent = ({ testName }) => {
  //   testName  = useParams();
  // Define content for each type of test
  const testContent = {
    "Chemical Pathology":
      "Efficiently managing tasks and deadlines is crucial for success in any endeavor. With proper planning and organization, individuals can maximize productivity and achieve their goals effectively. Utilizing tools such as calendars, to-do lists, and time management techniques can help individuals stay focused and on track. By prioritizing tasks and allocating time wisely, one can make significant progress towards reaching their objectives",
    Haematology: "Efficiently managing tasks and deadlines is crucial for success in any endeavor. With proper planning and organization, individuals can maximize productivity and achieve their goals effectively. Utilizing tools such as calendars, to-do lists, and time management techniques can help individuals stay focused and on track. By prioritizing tasks and allocating time wisely, one can make significant progress towards reaching their objectives",
    Microbiology: "Efficiently managing tasks and deadlines is crucial for success in any endeavor. With proper planning and organization, individuals can maximize productivity and achieve their goals effectively. Utilizing tools such as calendars, to-do lists, and time management techniques can help individuals stay focused and on track. By prioritizing tasks and allocating time wisely, one can make significant progress towards reaching their objectives",
    "Flow Cytometry": "Efficiently managing tasks and deadlines is crucial for success in any endeavor. With proper planning and organization, individuals can maximize productivity and achieve their goals effectively. Utilizing tools such as calendars, to-do lists, and time management techniques can help individuals stay focused and on track. By prioritizing tasks and allocating time wisely, one can make significant progress towards reaching their objectives",
    Histopathology: "Efficiently managing tasks and deadlines is crucial for success in any endeavor. With proper planning and organization, individuals can maximize productivity and achieve their goals effectively. Utilizing tools such as calendars, to-do lists, and time management techniques can help individuals stay focused and on track. By prioritizing tasks and allocating time wisely, one can make significant progress towards reaching their objectives",
    "Molecular Diagnostics": "Efficiently managing tasks and deadlines is crucial for success in any endeavor. With proper planning and organization, individuals can maximize productivity and achieve their goals effectively. Utilizing tools such as calendars, to-do lists, and time management techniques can help individuals stay focused and on track. By prioritizing tasks and allocating time wisely, one can make significant progress towards reaching their objectives",
    Cytogenetics: "Efficiently managing tasks and deadlines is crucial for success in any endeavor. With proper planning and organization, individuals can maximize productivity and achieve their goals effectively. Utilizing tools such as calendars, to-do lists, and time management techniques can help individuals stay focused and on track. By prioritizing tasks and allocating time wisely, one can make significant progress towards reaching their objectives",

    // Add content for other types of tests as needed
  };

  // Get the content based on the testName
  const content = testContent[testName];

  return (

    <div className="bg-gray-200 flex-col mx-8 mb-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center mt-4">{testName}</h2>
      <p className="text-center mx-4 mb-4">{content}</p>
    </div>

    //
  );
};
