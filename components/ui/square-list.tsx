interface SquareListProps {
    details: string[];
}

const SquareList = ({details} : SquareListProps) => {
    return ( 
        <ul className="space-y-3 mb-10 ml-6">
        {details.map((item) => (
          <li
            className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
     );
}
 
export default SquareList;