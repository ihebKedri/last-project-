import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar.jsx'

const Addwatch = (props) => {
  const[name,setname]=useState('')
  const[price,setprice]=useState('')
  const[description,setdescription]=useState('')
  const[quantity,setquantity]=useState('')
  const[quality,setquality]=useState('')
  const[image,setimage]=useState('')

const handeladd=()=>{
  axios.post("http://localhost:3000/api/watch/add",{
  name:name,
  price:price,
  description:description,
  quantity: quantity,
  quality:quality ,
  image:image})
  .then((result)=>{console.log(result),props.setshow(!(props.show))})
  .catch((err)=>{console.log(err)})
}
  return (
    <div>
       <ul> <input 
      type="text"
      placeholder='name'
      onChange={(e)=>{setname(e.target.value),console.log(e.target.value)}} /></ul>
      <ul><input 
      type="text"
      placeholder='price'
      onChange={(e)=>{setprice(e.target.value)}} /></ul>
      <ul><input 
      type="text"
      placeholder='description'
      onChange={(e)=>{setdescription(e.target.value)}} /></ul>
      <ul><input 
      type="text"
      placeholder='quantity'
      onChange={(e)=>{setquantity(e.target.value)}} /></ul>
      <ul><input 
      type="text"
      placeholder='quality'
      onChange={(e)=>{setquality(e.target.value)}} /></ul> 
      <ul> <input 
      type="text"
      placeholder='image'
      onChange={(e)=>{setimage(e.target.value)}} /></ul>
      
      <button  onClick={()=>{handeladd()}}>add now</button>
     
    </div>
  )
}

export default Addwatch
