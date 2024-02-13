import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import Snackbar from '@mui/material/Snackbar';

export const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const emailjsConfig = {
    service_id: 'service_bjejxql',
    template_id: 'template_gnlwknk',
    user_id: '7rptrAhiGmBKVB_kO', // API Key
    to_email: 'ahdm16059@gmail.com', // Your email address
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      emailjsConfig.service_id,
      emailjsConfig.template_id,
      form.current,
      emailjsConfig.user_id
    )
      .then((result) => {
        setOpen(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };



  return (
    <main>

    <div className="mt-16" style={{ maxWidth: "100%" }}>
      <img
        src="contact-us.jpg"
        alt="lab-technician"
        style={{ width: "100%", height: "auto" }}
      />
    </div>

    <div className="flex justify-center items-center mt-12">
      <p className="text-5xl font-bold text-green-800">CONTACT US</p>
    </div>

    {/* -------start----grid */}

    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 mb-16">


      <div className="flex justify-center items-center h-screen ">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
          <form ref={form} onSubmit={handleSubmit}>
            <p className="text-lg font-bold mb-4">Email Us</p>
            <div className="mb-4">
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-green-500"
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-green-500"
                type="text"
                placeholder="Subject"
                required
              />
              <textarea
                className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 focus:outline-none focus:border-green-500"
                placeholder="Message"
                rows="6"
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* grid----2 */}

      <div className=' flex flex-col justify-center item-center space-y-8'>

<div className=' py-8 mx-20 rounded-lg shadow-xl'>

  <div className='mx-8'>
    <p className='font-bold text-lg'>Call Us</p>
  </div>

  <div className="flex justify-center item-center mt-8">
    <img src="whatsApp-bg_green.png" alt="whatsApp-logo" className='w-[30px] sm:w-[50px]' />
    <p className="ml-2 text-xl sm:text-3xl text-black font-bold">070 796 796 2</p>
  </div>

  <div className="flex justify-center item-center mt-2">
    <img src="call_bg_green.png" alt="calling-logo" className='w-[30px] sm:w-[50px]' />
    <p className="ml-2 text-xl sm:text-3xl text-black font-bold">063 31 31 797</p>
  </div>
</div>

</div>


{/* grid----2 */}


    </div>
    {/* -------end----grid */}


    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
      message="Email sent successfully!"
      severity="success"
    />

  </main>
  )
}
