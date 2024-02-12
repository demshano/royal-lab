import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="text-white bg-green-950 w-full">

      <div className="grid lg:grid-cols-2 ">

        {/* -grid---1 */}

        <div className="flex flex-col-2 justify-center space-x-12">

          <div>

            <img src="royal-lab-logo.png" alt="lab-logo" width="270px" />

            <div>

              <div className="sm:flex text-gray-400 sm:space-x-4">
                <p>WhatsApp: </p>
                <p>+94 70 796 796 2</p>
              </div>

              <div className="sm:flex sm:ml-8 text-gray-400 sm:space-x-4 mt-2">
                <p>Tel No: </p>
                <p>+94 70 796 796 2</p>
              </div>
            </div>


          </div>

          <div className="text-center text-gray-300 flex flex-col justify-center italic text-xl">
            <p>Royal Laboratory service</p>
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
              <Link to="test" className="hover:text-gray-400">
                Our Tests
              </Link>
            </div>

            <div>
              <Link to="about" className="hover:text-gray-400">
                About Us
              </Link>
            </div>

            <div>
              <Link to="careers" className="hover:text-gray-400">
                Careers
              </Link>
            </div>

            <div>
              <Link to="contact" className="hover:text-gray-400">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col-2 justify-center item-center space-x-4 mt-6">
            <div>
              <img src="fb-white.png" alt="fb-logo" width="30px" />
            </div>

            <div>
              <img src="yt-white-no-triangle.png" alt="yt-logo" width="40px" />
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
