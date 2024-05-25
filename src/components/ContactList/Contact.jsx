
import css from "./ContactList.module.css"
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({ data:{ name, number, id}, onDelete }) => {
 
  return (
    <li className={css.contactContainer}>
      <div className={css.contact}>
        <div><p><IoPerson />  {name}</p>
        <p><FaPhoneAlt />  {number}</p></div>
        <button className={css.btnDelete} onClick={()=> onDelete(id)}>Delete</button>
      </div>
          
    </li>
  )
}

export default Contact