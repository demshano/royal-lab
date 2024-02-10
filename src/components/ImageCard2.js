import React from "react";

export const ImageCard2 = ({ imageSrc, text, borderColor }) => {
  return (
    <div
      className={`w-[170px] h-[170px] ml-8 rounded-lg border ${borderColor} hover:border-4 overflow-hidden shadow-xl shadow-slate-300 hover:shadow-slate-500 flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-lg hover:scale-105`}
    >
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
