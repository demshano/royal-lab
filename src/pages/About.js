import React from 'react'

export const About = () => {
  return (
    <div>

      <div className="mt-4" style={{ maxWidth: "100%" }}>
        <img
          src="image_slide_2.jpg"
          alt="lab technician"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="flex justify-center items-center mt-10">
        <p className="sm:text-5xl text-4xl font-bold text-green-800">Royal Labotary</p>
      </div>

      <div className='flex justify-center item-center mx-12 text-xl mt-10 mb-24'>
        <p>"Royal Laboratory Service is a premier medical laboratory service provider that
          offers a wide range of diagnostic and testing services. Our state-of-the-art facilities
          and experienced team of professionals ensure accurate and reliable test results, enabling
          us to provide exceptional service to our clients. We specialize in providing a broad range
          of medical laboratory services, including clinical chemistry, hematology, microbiology, and
          immunology, among others. At Royal Laboratory Service, we are committed to delivering
          top-quality services to our clients with the highest level of accuracy and efficiency."</p>
      </div>


    </div>
  )
}
