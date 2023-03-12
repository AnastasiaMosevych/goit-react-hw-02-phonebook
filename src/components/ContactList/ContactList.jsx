import { Component } from "react";
import { Container, ContactsList } from "./ContactList.styled";
import { ContactListItem } from "./ListItem";
import PropTypes from 'prop-types';

export class ContactList extends Component {
    render() {
        const { contacts, filter, deleteContact } = this.props;
        return <Container>
            <ContactsList>
                {contacts.map((contact) => {
                    if (filter==="" || contact.name.toLowerCase().includes(filter.toLowerCase())) {
                        return <ContactListItem key={contact.id} contact={contact} deleteContact={deleteContact} />
                    } else {
                        return null;
                    }
                }  
                )} 
            </ContactsList>
        </Container>
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            })),
    filter: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
        
}
