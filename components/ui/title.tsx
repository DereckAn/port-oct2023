import { cn } from "@/libs/utils";

interface TitleProps {
    title: string;
    className?: string;
}

const Title = ({title, className}:TitleProps) => {
    return ( 
        <h1 className={cn("text-3xl text-white my-10 font-light", className)}>
            {title}
        </h1>
     );
}
 
export default Title;