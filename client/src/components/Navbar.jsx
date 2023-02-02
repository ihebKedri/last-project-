import React, {useState} from 'react'
import Addwatch from './Addwatch.jsx'


const Navbar = (props) => {
    const[show,setshow]=useState(false)
  return (
<div className='navbar'>

<ul className='logo'>
WATCHES CLASSIC
</ul>

<div>
<button on onClick={()=>{setshow(!show)}}>add new watch</button>
  {show && <Addwatch  show={show} setshow={setshow}/>}</div>
 
</div>
  )
}

export default Navbar
