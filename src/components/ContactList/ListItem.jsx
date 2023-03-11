import { ListItem } from "./ContactList.styled"

export const ContactListItem = ({ contact }) => {
    return <ListItem>{contact.name}: {contact.number}</ListItem>
}