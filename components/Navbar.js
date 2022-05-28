import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/azulatravellogo.png'
import { AiFillHome } from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav className="nav-container">
        <div className="nav-item-container">
<Link href="/">
    <Image
    src={logo}
    alt="Travel Blog Logo"
    width="300"
    height="300"
    />
</Link>
<div className="nav-item-container">
<AiFillHome/>

</div>

        </div>

    </nav>
  )
}

export default Navbar
