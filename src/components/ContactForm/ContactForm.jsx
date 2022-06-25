import React, { Component } from "react";
import { nanoid } from 'nanoid'
import s from './ContactForm.module.css'

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    nameInputId = nanoid(4);
    numberInputId = nanoid(4);

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
 
      const newContacts = {
        id: nanoid(5),
        name: this.state.name,
        number: this.state.number,
      };
      // console.log(newContacts)
      this.setState(() => ({
        name: '',
        number: '',
      }));
      this.props.addContact(newContacts);

  };


    render() {
      return (
        <div className={s.form }>
          <form onSubmit={this.handleSubmit}>
            <label className={s.formLabel} htmlFor={this.nameInputId}>
              Name
            </label>
              <input
              className={s.formInput}
              id={this.nameInputId}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <label className={s.formLabel} htmlFor={this.numberInputId}>
              Number
            </label>
              <input
              className={s.formInput}
              id={this.numberInputId}
              type="tel"
              name="number"
              onChange={this.handleChange}
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <button type="submit">Add Contact</button>
          </form>        
        </div>
      );
    }
}