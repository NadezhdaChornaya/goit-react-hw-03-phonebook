import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FormWrapper } from './styledForm';

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    hadlleSubmit = e => {
        e.preventDefault();


        this.props.addContact({ ...this.state })
        this.setState({
            name: '',
            number: '',
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, number } = this.state;
        return (

            <>

                <FormWrapper className="wrapper" onSubmit={this.hadlleSubmit}>
                    <label className="label">Name
                    <input className="input" type="text" name="name" value={name} onChange={this.handleChange}></input>
                    </label>
                    <label className="label">Number
                    <input className="input" type="tel" name="number" value={number} onChange={this.handleChange}></input>
                    </label>
                    <div className="buttonWrapper">
                        <button className="button" type="submit">Add contact</button>
                    </div>
                </FormWrapper>

            </>
        )

    }
}

ContactForm.propTypes = {
    AddContact: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};