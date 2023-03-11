import { Component } from "react";
import { ContactsList } from "./Contacts.styled";


export class ContactsRender extends Component {
    render() {
        const { contacts } = this.props;
        return <>
            <ContactsList>
                {contacts.map(contact => ( 
                    <li key={contact.id}>{contact.name}</li>
                ))}  
            </ContactsList>
        </>
    }
}