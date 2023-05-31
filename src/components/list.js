import { useState } from 'react';

const List=({addItem,deleteItemHandler})=>{
    const[text,setText]=useState("")
    const[newId , setNewId] = useState(0)
    // const[items,setItems]=useState([])

const handleChange=(e)=>{
setText(e.target.value)
}

const handleClick=(event)=>{
    event.preventDefault()
   
    setNewId(newId + 1)
    addItem(text , newId)
// setItems([
//     ...items,
//     {text:text}
// ])
setText("")
}

const handleDelete=()=>{
  deleteItemHandler(text)
}

    return(
        <div className='container-fluid d-flex  justify-content-center mt-3 '>
       
            <form className='row d-flex justify-content-center'>
              <input type="text"
              className='form-control'
              value={text}
              onChange={handleChange}/>

              <button  
              className='mt-3 btn btn-light w-25'
              onClick={handleClick}>Add</button>
               <button  
              className='mt-3 ms-2 btn btn-light w-25'
              onClick={handleDelete}>Clear</button>


            </form>
        

        </div>
    )
}
export default List;