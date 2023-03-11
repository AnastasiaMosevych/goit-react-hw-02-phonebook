import { Component } from "react";
import { FormStyle, Label, Input, SubmitBtn } from './App.styled';
import { Title } from "components/Common/Title";
import { ContactsRender } from "components/Contacts/ContactsRender";
import nextId from "react-id-generator";


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { name: this.state.name, number: this.state.number, id: nextId() }],
      name: '',
      number: ''
    }))
  }

  render() {
    return (
      <>
      <Title title="Phonebook"/>
      <FormStyle onSubmit={this.handleSubmit}>
        <div>
          <Label>Name</Label>
            <Input onChange={this.handleChange}
              type="text"
              value={this.state.name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required  
            />
          <Label>Number</Label>
            <Input onChange={this.handleChange}
              type="tel"
              value={this.state.number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
        </div>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormStyle>
        <Title title="Contacts" />
        <ContactsRender contacts={this.state.contacts} filter={this.state.filter} handleChange={this.handleChange} />
        </>
  );
  }
};
