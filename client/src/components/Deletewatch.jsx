import React from 'react'
import axios from 'axios'


const Deletewatch = (props) => {

 const handeldelete=()=>{
  axios.delete(`http://localhost:3000/api/watch/del/${props.item._id}`)
  .then((result)=>{console.log(result),props.setrender(!(props.render))})
  .catch((err)=>{console.log(err)})
}
  return (
    <div >
    <button onClick={()=>{handeldelete()}}>delete your watch</button>  
    </div>
  )
}

export default Deletewatch
