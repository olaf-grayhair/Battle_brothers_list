import { makeAutoObservable, observable, values, entries, keys, makeObservable, action, toJS } from "mobx"
import { strLength } from "../constants/legthOfstring"
import { heroes } from "../heroes"

// Model the application state.
class State {
    heroesStats = []

    constructor() {
        makeObservable(this, {
            heroesStats: observable,
            sortByPrice: action,
            sortByLevel: action,
            filerHeroes: action,
            sortByRD: action,
            returnHeros: action,
        }, { deep: true })
    }

    returnHeros() {

        this.heroesStats = heroes
    }


    filerHeroes(name) {

        this.heroesStats = heroes.filter(el => {
            if (name === 'all') {
                return this.heroesStats
            }

            if (el.special.toLowerCase().includes(name.toLowerCase())) {
                return this.heroesStats
            }

            if (name === 'else' && !el.special.toLowerCase().includes('lowborn') && !el.special.toLowerCase().includes('combat')) {
                return this.heroesStats
            }

        })
    }

    sortByPrice(value) {
        if (value === 'max') {
            this.heroesStats = this.heroesStats.sort((a, b) => a.price - b.price)
        }
        if (value === 'min') {
            this.heroesStats = this.heroesStats.sort((a, b) => b.price - a.price)
        }
        if (value === 'default') {
            this.heroesStats = heroes
        }
    }

    sortByLevel(value) {
        if (value === 'max') {
            this.heroesStats = this.heroesStats.sort((a, b) => strLength(a.level) - strLength(b.level))
        }
        if (value === 'min') {
            this.heroesStats = this.heroesStats.sort((a, b) => strLength(b.level) - strLength(a.level))
        }
        if (value === 'default') {
            this.heroesStats = heroes
        }
    }
    
    sortByRD(value, name) {
        if (value === 'min') {
            this.heroesStats = this.heroesStats.sort((a, b) => {
                return (
                    b.stats.filter(el => el.skill === name).map(el => el.max)
                    -
                    a.stats.filter(el => el.skill === name).map(el => el.max)
                );
            });
        }

        if (value === 'max') {
            this.heroesStats = this.heroesStats.sort((a, b) => {
                return (
                    a.stats.filter(el => el.skill === name).map(el => el.max)
                    -
                    b.stats.filter(el => el.skill === name).map(el => el.max)
                );
            });
        }
        if (value === 'default') {
            console.log('def');
            return this.heroesStats = heroes
        }
    }



}

export default new State