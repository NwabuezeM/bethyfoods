import React from 'react'
import Soups from './soups'
import Rice from './rice'
import PepperSoup from './pepperSoup'
import Snacks from './snacks'
import Others from './others'
import Drinks from './drinks'
import ScrollToHashElement from "../../../components/scrollToHashElement"


function MenuList() {
    return (
        <div>
            <ScrollToHashElement />
            <section id='soups'>
                <Soups />
            </section>
            <ScrollToHashElement />
            <section id='rice'>
                <Rice />
            </section>
            <ScrollToHashElement />
            <section id='peppersoup'>
                <PepperSoup />
            </section>
            <ScrollToHashElement />
            <section id='snacks'>
                <Snacks />
            </section>
            <ScrollToHashElement />
            <section id='others'>
                <Others />
            </section>
            <ScrollToHashElement />
            <section id='drinks'>
                <Drinks />
            </section>
        </div>
    )
}

export default MenuList