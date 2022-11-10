import { React, useState, useEffect } from 'react';
import style from './stats.module.css'
import { observer } from "mobx-react-lite"
import state from '../state/state';
import { toJS } from 'mobx'
import { heroes, heroesTitle } from '../heroes';
import Filter from './Filter';
import FilterStats from './FilterStats';

const Stats = observer(() => {
    useEffect(() => {
        state.returnHeros()
    }, []);

    const array = toJS(state.heroesStats)

    const price = (value) => {
        state.sortByPrice(value)
    }

    const level = (value) => {
        state.sortByLevel(value)///FIX
    }

    const randedD = (value, name) => {
        state.sortByRD(value, name)
    }

    return (
        <div className={style.main}>
            <div className={style.wrap}>
                <div className={style.options}>
                    <Filter className={style.fHero}/>
                    {/* STATS */}
                    <FilterStats sort={randedD} name={"hitpoints"}/>
                    <FilterStats sort={randedD} name={"meleeSkill"}/>
                    <FilterStats sort={randedD} name={"fatigue"}/>
                    <FilterStats sort={randedD} name={"rangedSkill"}/>
                    <FilterStats sort={randedD} name={"resolve"}/>
                    <FilterStats sort={randedD} name={"meleeDefense"}/>
                    <FilterStats sort={randedD} name={"initiative"}/>
                    <FilterStats sort={randedD} name={"rangedDefense"}/>
                    {/* STATS */}
                    <FilterStats sort={price} name={"price"}/>
                    <FilterStats sort={level} name={"level"}/>
                </div>
                <div className={style.title}>
                    <b className={style.heroName}>Name</b>
                    {heroesTitle.map(el => (
                        <img src={el} alt=""
                            key={Math.floor(Math.random() * 16777215).toString(16)}
                        />
                    ))}
                </div>
                {array.map(el =>
                    <div className={style.item}
                        key={Math.floor(Math.random() * 16777215).toString(16)}>
                        <div className={style.name}>
                            <img src={el.img} alt="" className={style.img} />
                            <b>{el.name}</b>
                        </div>
                        {el.stats.map(item =>
                            <ul className={style.list}
                                key={Math.floor(Math.random() * 16777215).toString(16)}
                            >
                                <li className={style.li}>{item.max}</li>
                                <li className={style.li}>{item.min}</li>
                            </ul>
                        )}
                        <div className={style.price}

                        >{el.price}</div>
                        <div className={style.level}>{el.level}</div>
                        <div className={style.special}></div>
                        <div className={style.specialIcon}></div>
                    </div>)}
            </div>
        </div>
    )
})

export default Stats;
