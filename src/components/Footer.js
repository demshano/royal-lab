import { Link } from "react-router-dom";
import '../styles/home.css';

export const Footer = () => {

  return (
    <div className="text-white bgColor w-full wwa">

      <div className="grid lg:grid-cols-2 ">

        {/* -grid---1 */}

        <div className="flex flex-col-2 justify-center space-x-12">

          <div>

            <div>
              <Link to="/">
                <img src="royal-lab-logo.png" alt="lab-logo" width="270px" />
              </Link>
            </div>


            <div className="space-x-7 flex-col">

              <div className=" text-gray-400  flex">
                <p className="text-xs">WhatsApp : </p>
                <p className="text-xs mx-2">+94 70 796 796 2</p>
              </div>

              <div className=" text-gray-400  flex mt-2  ">
                <p className="text-xs sm:ml-2 ml-0">Tel No : </p>
                <p className="text-xs mx-2">+94 70 796 796 2</p>
              </div>

            </div>


          </div>

          <div className="text-center text-gray-500 font-bold flex flex-col mt-6 italic text-sm sm:text-xl sm:leading-normal leading-loose">
            <p className="text-white">Royal Laboratory service</p>
            <p>No 04, Infront of hospital</p>
            <p>(Near the peoples Bank)</p>
            <p>Ampara</p>
          </div>

        </div>

        {/* -grid---1 */}


        {/* -grid--------2 */}
        <div>

          <div className="flex flex-col-4 mt-12 justify-around font-medium">

            <div>
              <Link to="test" className="hover:text-gray-400  hover:border-b-2 hover:border-sky-800 transition duration-700 ease-in-out">
                Our Tests
              </Link>
            </div>

            <div>
              <Link to="about" className="hover:text-gray-400 hover:border-b-2 hover:border-sky-800 transition duration-700 ease-in-out">
                About Us
              </Link>
            </div>

            <div>
              <Link to="careers" className="hover:text-gray-400 hover:border-b-2 hover:border-sky-800 transition duration-700 ease-in-out">
                Careers
              </Link>
            </div>

            <div>
              <Link to="contact" className="hover:text-gray-400 hover:border-b-2 hover:border-sky-800 transition duration-700 ease-in-out">
                Contact
              </Link>
            </div>

          </div>

          <div className="flex flex-col-2 justify-center item-center space-x-4 mt-6">
            <div>
              <a href="https://www.facebook.com/Royallab181" target="_blank" rel="noreferrer">
                <img src="fb-white.png" alt="fb-logo" width="30px" />
              </a>
            </div>

            <div>
              <a href="https://www.youtube.com/channel/UCHR7zhBddVNCHhlIl5xlRlw" target="_blank" rel="noreferrer">
                <img src="yt-white-no-triangle.png" alt="yt-logo" width="40px" />
              </a>

            </div>
          </div>

        </div>
        {/* -grid--------2 */}

        {/*----------------- end */}
      </div>

      <div className="flex justify-center mt-4 text-gray-300 pb-4">
        <p>© 2024 All Rights Reserved.</p>
      </div>
    </div>
  );
};
