import React from 'react';
import style from './stats.module.css'
import state from '../state/state';

const FilterStats = ({sort, name}) => {
    const setValue = (value) => {
        sort(value, name)
    }
    
    return (
        <div className={style.smallFilter}>
            <select onChange={(e) => setValue(e.target.value)}>
                <option value="default" className={style.namedOption}>{name}</option>
                <option value="min">Max</option>
                <option value="max">Min</option>
            </select>
        </div>
    );
}

export default FilterStats;
