import React from "react";
import Updatewatch from "./Updatewatch.jsx";

const List = (props) => {


console.log('your data is here',props);


  return (
  <div>
  <div className="item">
    {props.items.map((item, index) => (
      <div key={index}>
      <ul>
      <img src={item.image}/>
      <li>Name:{item.name}</li>
      <li>Price:{item.price}</li>
      <li>Description:{item.description}</li>
      <li>Quantity:{item.quantity}</li>
      <li>Quality:{item.quality}</li></ul>
     
        <Updatewatch item={item} render={props.render} setrender={props.setrender}/>
      </div>
    ))}
  </div></div>
);
}
export default List;
