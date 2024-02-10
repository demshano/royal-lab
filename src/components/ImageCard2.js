import React from "react";

export const ImageCard2 = ({ imageSrc, text, borderColor }) => {
  return (
    <div
      className={` w-[80px] h-[80px]   sm:w-[160px] sm:h-[160px]   ml-8 rounded-lg border ${borderColor} hover:border-4 overflow-hidden shadow-xl shadow-slate-300 hover:shadow-slate-500 flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-lg hover:scale-105`}
    >
      {/* xl:w-[150px] xl:h-[150px] lg:w-[120px] lg:h-[120px] md:w-[90px] md:h-[90px] */}
      {/*eslint-disable-next-line  */}
      <img
        src={imageSrc}
        alt="image"
        className="w-2/4 h-auto transform transition-transform hover-move"
        style={{ maxHeight: "70%" }}
      />
      <div className={`p-4 text-center `}>
        <p className="text-white font-semibold">{text}</p>
      </div>
    </div>
  );
};
