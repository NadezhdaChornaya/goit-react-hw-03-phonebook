import React, { useState } from 'react';
import PropTypes from "prop-types";
import { FormWrapper } from './styledForm';
// ========================================
// import React, { Component } from 'react';
// import PropTypes from "prop-types";
// import { FormWrapper } from './styledForm';

// ========================= hooks ContactForm ================================

const ContactForm = ({ addContact }) => {
    const [state, setState] = useState({
        name: '',
        number: '',
    });

    const hadlleSubmit = e => {
        e.preventDefault();
        addContact({ ...state })
        setState({
            name: '',
            number: '',
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({
            ...prev, [name]: value
        }))
    }

    return (
        <>
            <FormWrapper className="wrapper" onSubmit={hadlleSubmit}>
                <label className="label">Name
                     <input className="input" type="text" name="name" value={state.name} onChange={handleChange}></input>
                </label>
                <label className="label">Number
                     <input className="input" type="tel" name="number" value={state.number} onChange={handleChange}></input>
                </label>
                <div className="buttonWrapper">
                    <button className="button" type="submit">Add contact</button>
                </div>
            </FormWrapper>

        </>
    )
}

export default ContactForm

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired
};
// ========================= class ContactForm ================================
// export default class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     }

//     hadlleSubmit = e => {
//         e.preventDefault();


//         this.props.addContact({ ...this.state })
//         this.setState({
//             name: '',
//             number: '',
//         })
//     }

//     handleChange = e => {
//         const { name, value } = e.target;
//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         const { name, number } = this.state;
//         return (

//             <>

//                 <FormWrapper className="wrapper" onSubmit={this.hadlleSubmit}>
//                     <label className="label">Name
//                     <input className="input" type="text" name="name" value={name} onChange={this.handleChange}></input>
//                     </label>
//                     <label className="label">Number
//                     <input className="input" type="tel" name="number" value={number} onChange={this.handleChange}></input>
//                     </label>
//                     <div className="buttonWrapper">
//                         <button className="button" type="submit">Add contact</button>
//                     </div>
//                 </FormWrapper>

//             </>
//         )

//     }
// }

// ContactForm.propTypes = {
//     addContact: PropTypes.func.isRequired
// };