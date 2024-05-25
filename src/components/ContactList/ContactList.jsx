import Contact from "./Contact"

const ContactList = ({ contacts, onDelete}) => {
  return (

    <ul>
      {contacts.map(contact => (
        <Contact data={contact} key = {contact.id} onDelete={onDelete} />
      ))}
    </ul>

 
  )
}

export default ContactList