import { useState, useRef } from "react";
import { ImageSlider, ImageCard,ImageCard2,ImageContent,} from "../components";
import { Link } from "react-router-dom";
export const Home = () => {
  // State to keep track of the clicked card
  const [clickedCard, setClickedCard] = useState(null);

  const imageContentRef = useRef(null);

  const scrollToImageContent = () => {
    imageContentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to handle card click
  const handleCardClick = (text) => {
    setClickedCard(text);
    scrollToImageContent();
    console.log("hey");
  };

  //   // Function to render component based on clicked card
  //   const renderComponent = () => {
  //     switch (clickedCard) {
  //       case 'Chemical Pathology':
  //         return <ImageContent testName='Chemical Pathology' content='Chemicalhrjfgefuyfcgefyefefefurdhebcfeu'/>;
  //       case 'Haematology':
  //         return <ImageContent testName='Haematology' content='Haematologyhrjfgefuyfcgefyefefefurdhebcfeu'/>;
  //       // Add more cases for other card texts as needed
  //       default:
  //         return null;
  //     }
  //   };

  return (
    <div>
      <ImageSlider className="bg-green" />

      <div className="flex flex-wrap justify-around mt-20 md:flex-row md:justify-center lg:flex-row lg:justify-around">
        <Link to="test">
          <ImageCard
            imageSrc="test-tube.png"
            text="OUR TESTS"
            color="bg-green-700"
          />
        </Link>

        <Link to="online_test">
          <ImageCard
            imageSrc="book-a-test.png"
            text="BOOK A ONLINE TEST"
            color="bg-green-600"
          />
        </Link>

        <Link to="accreditation">
          <ImageCard
            imageSrc="report.png"
            text="ACCREDITATION"
            color="bg-green-500"
          />
        </Link>

        <Link to="lab_network">
          <ImageCard
            imageSrc="location.png"
            text="LABORATORY NETWORK"
            color="bg-green-400"
          />
        </Link>
      </div>

      <div className="mt-20">
        <p className="flex justify-center items-center text-5xl font-bold text-green-800">
          Who We Are
        </p>

        <div className="flex mx-auto max-w-3xl px-4">
          <p className="text-center font-mono text-slate-500 mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sit quibusdam rem, rerum ullam optio ex tenetur? Et facilis, iste
            sequi possimus laudantium sit iure ut, officiis minima beatae sed
            vero! Nobis dolorum, atque animi distinctio deserunt sunt quod
            temporibus, mollitia natus illo quo deleniti expedita suscipit
            eligendi earum id. Ut officiis recusandae facilis cupiditate eius
            laborum enim quo? In voluptatum voluptas ducimus aliquam quaerat
            molestias quo id natus obcaecati expedita minima necessitatibus
            inventore, quidem ipsa perspiciatis animi voluptates nemo quis
            doloremque alias sint amet, sit adipisci officia? Iste nobis ex qui
            sapiente dolore placeat numquam obcaecati et sequi quibusdam!
          </p>
        </div>
      </div>

      {/* ----------------------------- */}

      <div className="flex justify-center items-center mt-8  bg-gradient-to-r from-green-500 to-blue-500">
        <div className="relative p-36">
          {/* <img
            src="image1_1.jpg"
            alt="image1"
            className="w-full h-auto rounded-lg lg:w-[1368px] lg:h-[713px]"
          /> */}

          {/* <div class="h-14 bg-gradient-to-r from-green-500 to-blue-500"></div> */}

          <div className=" flex ml-[-80px] mt-[-110px] p-4 text-white">
            <h1 className="text-4xl text-center sm:text-left   font-bold">
              PATHOLOGY SERVICES
            </h1>
          </div>

          {/* -------------------------------components start */}

          <div className="w-full h-full  mt-8 flex flex-wrap  justify-center items-center">
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

          <div ref={imageContentRef} className="py-8">
            {clickedCard && <ImageContent testName={clickedCard} />}
          </div>
        </div>
      </div>

      {/* ----------------- */}

      {/* mobile test start */}

      <div>
        <div className="flex justify-center item-center">
          <p className="text-5xl font-bold text-green-800">
            Mobile Test Services
          </p>
        </div>

        <div className="bg-green-800 flex w-full h-[400px] mt-8 mb-16"></div>
      </div>

      {/* mobile test end */}

      {/* last line */}
    </div>
  );
};
