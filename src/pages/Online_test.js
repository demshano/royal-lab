import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ImageCard } from '../components';

export const Online_test = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className=''>

      <div className='mt-16' style={{ maxWidth: "100%" }}>
        <img
          src="scientist.jpg"
          alt="lab technician"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex flex-wrap justify-around mt-20 md:flex-row md:justify-center lg:flex-row lg:justify-around">
        <Link to="/test">
          <ImageCard
            imageSrc="test-tube.png"
            text="OUR TESTS"
            color="bg-green-700"
          />
        </Link>

        {/* <Link to="online_test">
          <ImageCard
            imageSrc="book-a-test.png"
            text="BOOK A ONLINE TEST"
            color="bg-green-600"
          />
        </Link> */}

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

      <div className="flex justify-center items-center mt-24">
        <p className="text-5xl font-bold text-green-800">BOOK A MOBILE TEST</p>
      </div>

      <div className='flex flex-wrap justify-center items-center sm:space-x-20 sm:flex-col-3 sm:space-y-4 mt-16 mb-12'>

        <div className='text-center' onClick={toggleModal} >
          <div className="hover:scale-110 transition-transform duration-300"><img src="hotline_number.png" alt="hot-line Number" width='150px' /></div>
          <div><p>Contact Mobile Unit</p></div>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white py-8 px-32 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Contact Numbers</h2>


              <div className='flex space-x-16'>
                <p className='text-2xl text-gray-500 font-semibold tracking-widest'>WhatsApp: </p>
                <p className='text-2xl text-gray-500 font-semibold '>070 796 796 2</p>
              </div>

              <div className='flex mt-4 space-x-4'>
                <p className='text-2xl text-gray-500 font-semibold tracking-widest'>Telephone No: </p>
                <p className='text-2xl text-gray-500 font-semibold '>070 796 796 2</p>
              </div>


              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}

        <div className='text-center'>
          <div className="hover:scale-110 transition-transform duration-300"><img src="find_the_nearest_lab.png" alt="LHD-centers" className='' width='150px' /></div>
          <div className=''>
            <p className=''>Find The Nearest</p>
            <p className=''> LHD Center</p>
          </div>
        </div>

        <div className='text-center'>
          <div className="hover:scale-110 transition-transform duration-300"><img src="submit_inq.png" alt="inquiries" width='150px' /></div>
          <div>Submit Inquiries</div>
        </div>

      </div>



    </div>
  )
}
