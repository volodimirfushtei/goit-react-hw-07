import s from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps.js";
import { selectContacts } from "../../redux/Contacts/selectors.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts) || [];
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul className={s.contacts}>
      {contacts.map((contact) => (
        <Contact
          value={contact.id}
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => handleDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
