import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { PhonebookWrapper } from './styledApp'

export default class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',

    }

    handleChangeFilter = (e) => {
        this.setState({ filter: e.target.value });
    }

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;

        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };


    addContact = (contactsObj) => {
        const contact = {
            id: uuidv4(),
            name: contactsObj.name,
            number: contactsObj.number,
        }

        this.setState((prevState) => {
            return prevState.contacts.find(
                (contact) => contact.name.toLowerCase() === contactsObj.name.toLowerCase()
            )
                ? alert(`${contactsObj.name} is already in contacts.`)
                : {
                    contacts: [...prevState.contacts, contact]
                }
        })
    }

    deleteContact = (e) => {
        const contactId = e.target.dataset.id
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(({ id }) => id !== contactId)
            }
        })
    }

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (

            <PhonebookWrapper>

                <h1 className="mainTitle">Phonebook</h1>
                <ContactForm addContact={this.addContact} />
                <h2 className="title">Contacts</h2>
                {visibleContacts.length > 1 && (
                    <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
                )}
                {visibleContacts.length > 0 && (
                    <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
                )}
            </PhonebookWrapper>

        )
    }
}
