import { FaCircle, FaCross, FaPen, FaTimes } from "react-icons/fa";


export default function Icons({name}){
    if(name == 'circle'){
         return <FaCircle/>
    }
    else if(name == 'cross') {
        return <FaTimes/>
    }else{
        return <FaPen/>
    }

}
