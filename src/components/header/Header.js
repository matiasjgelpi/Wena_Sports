import React from 'react'
import { NavBar} from '../navbar/Navbar'
import { ContactBar } from '../contactbar/ContactBar'

export const Header = () => {
    return (
        <div>
            <ContactBar/>
            <NavBar/>
        </div>
    )
}
