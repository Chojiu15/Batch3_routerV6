import { useNavigate } from "react-router-dom";

const GoBack = () => {
 const navigate = useNavigate();

 const handleClick = () => {
   navigate('/');
 };
 
 return (
   <div>
     <button onClick={handleClick}>go back</button>
   </div>
 );
};

export default GoBack;