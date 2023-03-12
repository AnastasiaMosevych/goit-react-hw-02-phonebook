import { Input, Label } from "components/Phonebook/Phonebook.styled";
import PropTypes from 'prop-types';

export const Filter = ({updateFilter}) => {
    return <>
        <Label>Find contacts by name</Label>
        <Input onChange={updateFilter} type="search" name="filter"></Input>
    </>
}

Filter.propTypes = {
    updateFilter: PropTypes.func.isRequired,
}