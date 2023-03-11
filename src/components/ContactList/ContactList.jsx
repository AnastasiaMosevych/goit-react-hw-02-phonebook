import { Component } from "react";
import { Container, ContactsList } from "./ContactList.styled";
import { ContactListItem } from "./ListItem";

export class ContactList extends Component {
    render() {
        const { contacts, filter } = this.props;
        return <Container>
            <ContactsList>
                {contacts.map((contact) => {
                    if (filter==="" || contact.name.toLowerCase().includes(filter.toLowerCase())) {
                        return <ContactListItem key={contact.id} contact={contact}/>
                    } else {
                        return null;
                    }
                }  
                )} 
            </ContactsList>
        </Container>
    }
}