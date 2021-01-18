import React from 'react';
import PropTypes from "prop-types";
import { UlContactList } from './styledList';


export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <UlContactList className="wrapper">
            {contacts.map(({ id, name, number }) => {
                return (
                    <li key={id} className="itemContact">
                        {`${name}:  ${number}`}
                        <button className="button" type="button" data-id={id} onClick={deleteContact}>Delete</button>
                    </li>

                )
            })}

        </UlContactList >
    )
}

ContactList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}