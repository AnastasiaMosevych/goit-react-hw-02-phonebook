import { Input, Label } from "components/App.styled"

export const SearchInput = ({handleChange}) => {
    return <>
        <Label>Find contacts by name</Label>
        <Input onChange={handleChange} type="search" name="filter"></Input>
    </>
}