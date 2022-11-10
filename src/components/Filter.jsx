import { observer } from 'mobx-react-lite';
import {React, useState} from 'react';
import state from '../state/state';
import style from './stats.module.css'


const Filter = observer(() => {
    // const [state, setstate] = useState('')
    const setValue = (name) => {
        state.filerHeroes(name)
    }

    return (
        <div className={style.filter}>
            <select onChange={(e) => setValue(e.target.value)}>
                <option value="all">All</option>
                <option value="combat">Combat</option>
                <option value="lowborn">Lowborn</option>
                <option value="noble">Noble</option>
                <option value="else">Else</option>
            </select>
        </div>
    );
})

export default Filter;