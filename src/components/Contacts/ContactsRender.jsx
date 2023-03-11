import { Component } from "react";
import { Container, ContactsList, ListItem } from "./Contacts.styled";
import { SearchInput } from "./SearchInput";


export class ContactsRender extends Component {
    render() {
        const { contacts, filter, handleChange } = this.props;
        return <Container>
            <SearchInput filter={filter} handleChange={handleChange}/>
            <ContactsList>
                {contacts.map((contact) => {
                    if (filter==="" || contact.name.toLowerCase().includes(filter.toLowerCase())) {
                        return <ListItem key={contact.id}>{contact.name}: {contact.number}</ListItem>
                    }
                }
                )} 
            </ContactsList>
        </Container>
    }
}