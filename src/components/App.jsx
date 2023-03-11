import { Component } from "react";
import { Title } from "components/Common/Title";
import { ContactList } from "components/ContactList/ContactList";
import { PhonebookForm } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Container } from "./ContactList/ContactList.styled";
import nextId from "react-id-generator";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  updateContacts = ({ name, number }) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { name, number, id: nextId() }],
    }))
  }

  updateFilter = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  render() {
    return (
      <Container>
        <Title title="Phonebook" />
        <PhonebookForm updateContacts={this.updateContacts} />
        <Title title="Contacts" />
        <Filter updateFilter={this.updateFilter}/>
        <ContactList contacts={this.state.contacts} filter={this.state.filter} updateFilter={this.updateFilter} />
      </Container>
  );
  }
};
