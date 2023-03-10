import { Component } from "react";
// import { nanoid } from 'nanoid';
import { FormStyle, Label, Input, SubmitBtn } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (
      <>
      <FormStyle>
        <div>
          <Label>Name</Label>
          <Input type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required  
          >
          </Input>
        </div>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormStyle>
        </>
  );
  }
};
