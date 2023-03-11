import { Input, Label } from "components/Phonebook/Phonebook.styled"

export const Filter = ({updateFilter}) => {
    return <>
        <Label>Find contacts by name</Label>
        <Input onChange={updateFilter} type="search" name="filter"></Input>
    </>
}