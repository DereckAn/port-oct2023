import Image from "next/image";

interface CardTestimonialsProps {
    message: string;
    image: string;
    name: string;
    job: string;
}

const CardTestimonials = ({message, image, name, job} : CardTestimonialsProps) => {
  return (
    <div className="p-10 rounded-xl border border-gray-500/30">
      <p className="mb-10 text-gray-300 font-medium">
        {message}
      </p>
      <div className="flex item-center gap-4">
        <div className="relative w-12 h-12 rounded-full  ">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-white font-medium text-xl">{name}</h3>
          <h5 className="text-gray-500 font-medium uppercase tracking-widest text-sm">
            {job}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
