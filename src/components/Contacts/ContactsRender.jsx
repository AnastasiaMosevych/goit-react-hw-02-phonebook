import { Component } from "react";
import { Container, ContactsList, ListItem } from "./Contacts.styled";


export class ContactsRender extends Component {
    render() {
        const { contacts } = this.props;
        return <Container>
            <ContactsList>
                {contacts.map(contact => ( 
                    <ListItem key={contact.id}>{contact.name}: {contact.number}</ListItem>
                ))}  
            </ContactsList>
        </Container>
    }
}