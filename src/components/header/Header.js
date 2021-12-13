import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { ContactBar } from '../contactbar/ContactBar'

export const Header = () => {
    return (
        <div>
            <ContactBar/>
            <Navbar/>
        </div>
    )
}
