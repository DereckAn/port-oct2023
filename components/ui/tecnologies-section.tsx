import { tecnologies } from "@/assets/constants";

const Tecnologies = () => {
  return (
    <div className="logos pt-4">
      <div className="logos-slide">
        {tecnologies.map((item) => (
          <item.icon key={item.name} size={50} />
        ))}
      </div>
      <div className="logos-slide ">
        {tecnologies.map((item) => (
          <item.icon key={item.name} size={50} />
        ))}
      </div>
    </div>
  );
};


export default Tecnologies;
