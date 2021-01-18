import React from 'react'
import PropTypes from "prop-types";
import { FilterWrapper } from './styledFilter'

export const Filter = ({ value, onChangeFilter }) => {
    // const onHandleChangeFilter = e => {
    //     onChangeFilter(e.target.value)
    // }
    return (

        <FilterWrapper className="wrapper">
            <h3 className="titleFilter">Find contacts by name</h3>
            <input name="filter" type="text" className="input" placeholder="Search..." value={value} onChange={onChangeFilter}></input>
        </FilterWrapper>
    )
}

Filter.propTypes = {
    onChangeFilter: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}
