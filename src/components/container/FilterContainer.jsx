import React from 'react'
import Filter  from '../pure/Filter'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../store/actions/actions'



const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onclick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer