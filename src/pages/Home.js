import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from 'react-responsive';
import { ImageSlider2, ImageCard, ImageCard2, ImageContent } from "../components";
import { Link, useNavigate } from "react-router-dom";
import '../styles/home.css';
export const Home = () => {

  const navigate = useNavigate();
  // State to keep track of the clicked card
  const [clickedCard, setClickedCard] = useState(null);

  const imageContentRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); // Change the max-width to your desired breakpoint for mobile

  const scrollToImageContent = () => {

    if (isMobile) {
      imageContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  };

  // Function to handle card click
  const handleCardClick = (text) => {
    setClickedCard(text);
    scrollToImageContent();
    console.log("hey");
  };



  return (
    <div className="wwa ml-0 overflow-x-hidden">

      <div onClick={() => navigate('/')} className="">
        <ImageSlider2 className="bg-green" />
      </div>

      <div className="flex flex-wrap md:space-x-8 justify-around mt-16   md:justify-center">

        <Link to="test">
          <ImageCard
            imageSrc="test-tube.png"
            text="OUR TESTS"
            color="bg-sky-700"
          />
        </Link>

        <Link to="online_test">
          <ImageCard
            imageSrc="book-a-test.png"
            text="BOOK A ONLINE TEST"
            color="bg-sky-600"
          />
        </Link>

        <Link to="accreditation">
          <ImageCard
            imageSrc="report.png"
            text="ACCREDITATION"
            color="bg-sky-500"
          />
        </Link>

        <Link to="lab_network">
          <ImageCard
            imageSrc="location.png"
            text="LABORATORY NETWORK"
            color="bg-sky-400"
          />
        </Link>
      </div>

      <div className="mt-12">
        <p className="wwa flex justify-center items-center text-5xl font-bold text-green-800">
          Who We Are
        </p>

        <div className="flex mx-auto max-w-3xl px-4 mt-8">
          <p className="wwa text-center font-mono text-slate-500 ">
            "Royal Laboratory Service is a premier medical laboratory service provider that offers a
            wide range of diagnostic and testing services. Our state-of-the-art facilities and experienced
            team of professionals ensure accurate and reliable test results, enabling us to provide
            exceptional service to our clients. We specialize in providing a broad range of medical
            laboratory services, including clinical chemistry, hematology, microbiology, and immunology,
            among others. At Royal Laboratory Service, we are committed to delivering top-quality services
            to our clients with the highest level of accuracy and efficiency."
          </p>
        </div>
      </div>

      {/* ----------------------------- */}

      <div className=" mt-8  bg-gradient-to-r from-green-500 to-blue-500">



        <div className=" flex p-4 text-black">
          <h1 className="text-4xl text-center sm:text-left wwa  font-bold">PATHOLOGY SERVICES</h1>
        </div>

        {/* -------------------------------components start */}

        <div className="mt-8 mb-8 flex flex-wrap  justify-center items-center">
          <div
            className="mt-4 "
            onClick={() => handleCardClick("Chemical Pathology")}
          >
            <ImageCard2
              imageSrc="clinical-icon.png"
              text="Chemical Pathology"
              borderColor="border-green-700"

            />
          </div>

          <div
            className="mt-4"
            onClick={() => handleCardClick("Haematology")}
          >
            <ImageCard2
              imageSrc="test-tube.png"
              text="Haematology"
              borderColor="border-green-700"

            />
          </div>

          <div
            className="mt-4"
            onClick={() => handleCardClick("Flow Cytometry")}
          >
            <ImageCard2
              imageSrc="flow.png"
              text="Flow Cytometry"
              borderColor="border-green-700"

            />
          </div>

          <div
            className="mt-4"
            onClick={() => handleCardClick("Histopathology")}
          >
            <ImageCard2
              imageSrc="histopathology.png"
              text="Histopathology"
              borderColor="border-green-700"

            />
          </div>

          <div
            className="mt-4"
            onClick={() => handleCardClick("Microbiology")}
          >
            <ImageCard2
              imageSrc="microbiology-icon.png"
              text="Microbiology"
              borderColor="border-green-700"

            />
          </div>

          <div
            className="mt-4"
            onClick={() => handleCardClick("Molecular Diagnostics")}
          >
            <ImageCard2
              imageSrc="moleculer.png"
              text="Molecular Diagnostics"
              borderColor="border-green-700"

            />
          </div>

          <div
            className="mt-4"
            onClick={() => handleCardClick("Cytogenetics")}
          >
            <ImageCard2
              imageSrc="cytogenetics.png"
              text="Cytogenetics"
              borderColor="border-green-700"

            />
          </div>



        </div>
        {/* ----------------components end */}


        {/*---------------- ImageContent */}

        <div ref={imageContentRef} className="text-black w-full mt-4 ">
          {clickedCard && <ImageContent testName={clickedCard} />}
        </div>

        {/*---------------- ImageContent */}



      </div>




      {/* ----------------- */}



      <div className="flex justify-center item-center mt-16">
        <p className="text-5xl font-bold text-green-800">
          Mobile Test Services
        </p>
      </div>

      {/* ------------ */}

      {/* mobile test start */}

      <div className="w-full bg-green-900 mt-16 mb-16 px-4">

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">

          {/* -------grid----1 */}

          <div className="flex flex-col justify-center sm:text-left mt-4 mb-4">
            <p className="wwa text-3xl sm:text-4xl font-semibold text-sky-400">Royal Lab At Your Door Step</p>

            <div className="text-white mt-6 text-xl">
              <p>done? Don't worry. We now collect your blood and </p>
              <p>urine samples right from your home.</p>
            </div>

            <div className="text-white font-semibold flex sm:justify-start justify-center mt-6">
              <button onClick={() => { navigate('/contact') }} className="px-4 py-2 bg-sky-400 rounded-md">Contact Us</button>
            </div>

            <div className="callNumbers  mt-6">
              <p className="text-3xl font-semibold text-sky-400">For Sample Pickup Call:</p>

              <div className="flex sm:justify-start justify-center item-center mt-8">
                <img src="whatsApp-3.png" alt="whatsApp-logo" width="30px" />
                <p className="ml-2 text-2xl text-white font-bold">070 796 796 2</p>
              </div>

              <div className="flex sm:justify-start sm:ml-0 ml-[-13px] justify-center  item-center mt-2">
                <img src="call-3.png" alt="calling-logo" width="30px" />
                <p className="ml-2 text-2xl text-white font-bold">063 31 31 797</p>
              </div>

            </div>

          </div>
          {/* ------grid-------1 */}

          {/* -grid-2 */}

          <motion.div
            initial={{ x: '100vw' }} // initial position (off screen to the left)
            animate={{ x: 0 }} // animate to the original position (0)
            transition={{ type: 'spring', duration: 2 }} // spring animation with a duration of 2 seconds
            className="w-full  pl-4 mx-auto mb-4"
          >
            <img src="online_test_2.png" alt="online-test-logo" className="w-[900px]" />
          </motion.div>

          {/* -grid-2 */}



        </div>

      </div>



      {/* mobile test end */}

      {/* last line */}
    </div>
  );
};
