import { useNavigate } from "react-router-dom";

const GoBack = () => {
 const navigate = useNavigate();

 const handleClick = () => {
   navigate(-2);
 };
 
 return (
   <div>
     <button onClick={handleClick}>go back</button>
   </div>
 );
};

export default GoBack;