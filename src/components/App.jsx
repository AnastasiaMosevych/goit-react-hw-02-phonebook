import { Component } from "react";
import { FormStyle, Label, Input, SubmitBtn } from './App.styled';
import { Title } from "components/Common/Title";
import { ContactsRender } from "components/Contacts/ContactsRender";
import nextId from "react-id-generator";


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

   handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { name: this.state.name, id: nextId() }],
      name: ''
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
          >
          </Input>
        </div>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormStyle>
        <Title title="Contacts"></Title>
        <ContactsRender contacts={this.state.contacts} />
        </>
  );
  }
};
