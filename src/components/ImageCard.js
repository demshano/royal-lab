import "../styles/imageCard.css";
export const ImageCard = ({ imageSrc, text, color }) => {
  return (
    <div
      className={`w-[170px] h-[170px] rounded-lg overflow-hidden shadow-xl shadow-slate-300 hover:shadow-slate-500 ${color} flex flex-col items-center justify-center transition-transform duration-300 hover:shadow-lg hover:scale-105`}
    >
        {/*eslint-disable-next-line  */}
      <img
        src={imageSrc}
        alt="image"
        className="w-2/4 h-auto transform transition-transform hover-rotate"
        style={{ maxHeight: "70%" }}
      />
      <div className="p-4 text-center">
        <p className="text-white font-semibold">{text}</p>
      </div>
    </div>
  );
};
