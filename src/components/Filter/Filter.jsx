import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

export function Filter({handleChange, value}) {
    return (
        
          <input className={css.inputSearch} type="text" value={value} onChange={handleChange} name="filter" placeholder='Search'/>
            )
}

Filter.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}