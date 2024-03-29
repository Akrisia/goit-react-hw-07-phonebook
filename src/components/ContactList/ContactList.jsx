import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact, getContacts } from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';

const ContactList = () => {
    const items = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const onDeleteContact = id => dispatch(deleteContact(id));

    return (
        <>
            {items.length > 0 && (
              <ul className={s.list}>
                    {items.map(({ name, phone, id }) => {
                        return (
                            <li key={id} className={s.item}>
                                {name}: {phone}
                                <button type='button' className={s.button} id={id} onClick={() => onDeleteContact(id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
                )}
            </>
        )
    };

export default ContactList;