import axios from 'axios'
import React, { useState } from 'react'

import Deletewatch from './Deletewatch.jsx'

const Updatewatch= (props) => {
const [upprice,setprice]=useState('')
const [description,setdescription]=useState('')
const [quantity,setquantity]=useState('')

const handelclick=(id)=>{
console.log('id is heree',id);
  axios.put(`http://localhost:3000/api/watch/update/${id}`,
  {price:upprice,
    description:description,
    quantity:quantity})
    .then((result)=>{console.log(result),props.setrender(!(props.render))})
    .catch((err)=>{console.log(err)})
}

  return (
    <div>
     <div>
    <ul><input
   type="text"
    placeholder='price'
      onChange={(e)=>{setprice(e.target.value)}}/>
      </ul>
<ul>
<input
 type="text"
 placeholder="descriprtion"
 onChange={(e)=>{setdescription(e.target.value)}} /> 
 </ul>
 <ul><input 
type="number" 
placeholder='quantity'
onChange={(e)=>{setquantity(e.target.value)}}/></ul>
</div>
<div>
<ul><button onClick={()=>{handelclick(props.item._id)}}>make your update</button></ul>
<ul><Deletewatch item={props.item}  render={props.render} setrender={props.setrender}/></ul></div>

    </div>
    
    )
}

export default Updatewatch
