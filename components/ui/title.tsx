interface TitleProps {
    title: string;
}

const Title = ({title}:TitleProps) => {
    return ( 
        <h1 className="text-3xl text-white my-10 font-light">
            {title}
        </h1>
     );
}
 
export default Title;