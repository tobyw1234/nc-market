import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";





export default function Items() {
 const [Data, setData] = useState([])
 const [isLoading, setisLoading] = useState(true)

 useEffect(() => {
  setisLoading(true)
  fetch(`https://liamandtoby-marketplace-api.herokuapp.com/api/items`)
   .then((res) => {
    
    return res.json()
   }).then((res) => {
   
    setData(res.items)
    
    setisLoading(false)
   })
 },[])
  
  

 

 return (
  Data.map((item) => {
   return (
    <div className="grid-container" key={uuidv4()} >
     <ul key={uuidv4()}>
      <li key={uuidv4()}>
       Item: {item.item_name}
      </li>
      <li key={uuidv4()}>
       description:{item.description}
      </li>
      <li key={uuidv4()}>
       price:{"£" + (item.price/100)}
      </li>
      <img key={uuidv4()} src={item.img_url} alt={item.item_name}></img>
       </ul>
    </div>
   )
   })
    
  )
}
