import { cn } from "@/libs/utils";

interface ButtonProps {
  type?: "button" | "submit"; // note: El simbolo de interrogacion es para que sea opcional
  label: string;
  className?: string;
  onClick: () => void;
}

// note: por defecto el type es button
const Button = ({
  type = "button",
  label,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "py-3 px-4  border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 rounded-lg w-full font-medium ",
        className
      )}
    >
      {label}
    </button>
  );
};

export default Button;
