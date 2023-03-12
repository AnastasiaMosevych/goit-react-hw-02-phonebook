import { Component } from "react";
import { Title } from "components/Common/Title";
import { ContactList } from "components/ContactList/ContactList";
import { PhonebookForm } from "./Phonebook/Phonebook";
import { Filter } from "./Filter/Filter";
import { Container } from "./ContactList/ContactList.styled";
import nextId from "react-id-generator";
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  addContacts = ({ name, number }) => {
    let contactIsNew = true;
    this.state.contacts.forEach((contact) => {
      if (name.toLowerCase() === contact.name.toLowerCase()) {
        contactIsNew = false;
      }  
    })
    if (contactIsNew === false) {
        return alert(`${name} is already in contacts`)
    } else {
        this.setState((prevState) => ({
        contacts: [...prevState.contacts, { name, number, id: nextId() }],
      }))
      }      
  }

  deleteContact = (e) => {
    e.preventDefault();
    let idToRemove = e.target.value;
    let filteredContacts = this.state.contacts.filter((contact) => contact.id !== idToRemove);
    this.setState({
      contacts: filteredContacts,
    })
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
        <PhonebookForm addContacts={this.addContacts} />
        <Title title="Contacts" />
        <Filter updateFilter={this.updateFilter}/>
        <ContactList contacts={this.state.contacts} filter={this.state.filter} updateFilter={this.updateFilter} deleteContact={this.deleteContact} />
      </Container>
  );
  }
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }))
}
