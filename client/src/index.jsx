import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/Listwatch.jsx'
import Navbar from './components/Navbar.jsx'



const App = () => {
  const [items, setItems] = useState([])
  const [render,setrender]=useState(false)

console.log("render is here", render)

  useEffect(() => {
    $.ajax({
      url: ' http://localhost:3000/api/watch/getall',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [render])
  console.log(items)

  return (
    <div>
    <Navbar />
      <h1 id="allwatch">watch list</h1>
      <List items={items} render={render} setrender={setrender} />
       

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
