import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { PhonebookWrapper } from './styledApp'



// ========================= hooks App================================
const App = () => {
    const [state, setState] = useState({
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',

    });

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }, [state.contacts])

    useEffect(() => {
        const localContacts = localStorage.getItem('contacts');
        if (localContacts) {
            setState((prev => (
                { ...prev, contacts: [...JSON.parse(localContacts)] }
            ))
            )
        }
    }, [])

    const handleChangeFilter = (e) => {
        setState(prevState => ({ ...prevState, filter: e.target.value }));
    }

    const getVisibleContacts = () => {
        const { contacts, filter } = state;

        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())

        );
    };


    const addContact = (contactsObj) => {
        const contact = {
            id: uuidv4(),
            name: contactsObj.name,
            number: contactsObj.number,
        }
        console.log(contactsObj)
        if (!contactsObj.name.length) {
            alert('Please, enter your name')
        }
        else if (!contactsObj.number.length) {
            alert('Please, enter your number')
        }
        else {
            if (state.contacts.some((contact) =>
                contact.name.toLowerCase() === contactsObj.name.toLowerCase())) {
                alert(`${contactsObj.name} is already in contacts.`)
            }
            else {
                setState(prev => ({
                    ...prev, contacts: [...prev.contacts, contact]
                }))

            }

        }

    }

    const deleteContact = (e) => {
        const contactId = e.target.dataset.id
        setState(prevState =>
            ({ ...prevState, contacts: prevState.contacts.filter(({ id }) => id !== contactId) })
        )
    }
    return (
        <PhonebookWrapper>

            <h1 className="mainTitle">Phonebook</h1>
            <ContactForm addContact={addContact} />
            <h2 className="title">Contacts</h2>
            {state.contacts.length > 1 && (
                <Filter value={state.filter} onChangeFilter={handleChangeFilter} />
            )}
            {state.contacts.length > 0 && (
                <ContactList contacts={getVisibleContacts()} deleteContact={deleteContact} />
            )}
        </PhonebookWrapper>
    )
}

export default App
// ========================= class App ================================
// export default class App extends Component {
//     state = {
//         contacts: [
//             // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
//         filter: '',

//     }

//     componentDidMount() {
//         const localContacts = localStorage.getItem('contacts');
//         if (localContacts) {
//             this.setState({ contacts: JSON.parse(localContacts) })
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.contacts !== this.state.contacts) {
//             localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//         }
//     }

//     handleChangeFilter = (e) => {
//         this.setState({ filter: e.target.value });
//     }

//     getVisibleContacts = () => {
//         const { contacts, filter } = this.state;

//         return contacts.filter((contact) =>
//             contact.name.toLowerCase().includes(filter.toLowerCase())
//         );
//     };


//     addContact = (contactsObj) => {
//         const contact = {
//             id: uuidv4(),
//             name: contactsObj.name,
//             number: contactsObj.number,
//         }
//         if (!contactsObj.name.length) {
//             alert('Please, enter your name')
//         }
//         else if (!contactsObj.number.length) {
//             alert('Please, enter your number')
//         }
//         else
//             this.setState((prevState) => {
//                 return prevState.contacts.find(
//                     (contact) => contact.name.toLowerCase() === contactsObj.name.toLowerCase()
//                 )
//                     ? alert(`${contactsObj.name} is already in contacts.`)
//                     : {
//                         contacts: [...prevState.contacts, contact]
//                     }
//             })
//     }

//     deleteContact = (e) => {
//         const contactId = e.target.dataset.id
//         this.setState(prevState => {
//             return {
//                 contacts: prevState.contacts.filter(({ id }) => id !== contactId)
//             }
//         })
//     }

//     render() {
//         const { contacts, filter } = this.state;
//         const visibleContacts = this.getVisibleContacts();

//         return (

//             <PhonebookWrapper>

//                 <h1 className="mainTitle">Phonebook</h1>
//                 <ContactForm addContact={this.addContact} />
//                 <h2 className="title">Contacts</h2>
//                 {contacts.length > 1 && (
//                     <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
//                 )}
//                 {contacts.length > 0 && (
//                     <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
//                 )}
//             </PhonebookWrapper>

//         )
//     }
// }
