interface ArrowsProps {
  handlePrev: () => void;
  handleNext: () => void;
}
const Arrows = ({ handleNext, handlePrev }: ArrowsProps) => {
  return (
    <div className="absolute bottom-[200px] right-14 z-10 flex items-center gap-1">
      <button
        onClick={handlePrev}
        className={` bg-[#eee5] fill-white font-mono w-10 h-10 flex items-center 
  justify-center rounded-tl-lg rounded-bl-lg text-lg transition duration-500
   hover:bg-primary hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animation-delay-5 animate-show-content`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 18L8 12L16 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className={` bg-[#eee5] fill-white font-mono w-10 h-10 flex items-center 
  justify-center rounded-tr-lg rounded-br-lg text-lg transition duration-500
   hover:bg-primary hover:fill-black translate-y-[30px] blur-[20px] opacity-0 animation-delay-5 animate-show-content`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6L16 12L8 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Arrows;
