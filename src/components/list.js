import { useState } from 'react';

const List=({addItem,deleteAllItems})=>{
    const[text,setText]=useState("")
    const[newId , setNewId] = useState(0)
    const [complete,setComplete]=useState()
    const [edit,setEdit]=useState()

   

 const handleChange=(e)=>{
setText(e.target.value)

};


const handleClick=(event)=>{
    event.preventDefault()
    setNewId(newId + 1)
    addItem(text , newId,complete,edit)
   
setText("")
}

const handleDelete=(e)=>{
  e.preventDefault()
  deleteAllItems(text)
}



    return(
        <div className='container-fluid d-flex  justify-content-center mt-3 '>
       
            <form className='row d-flex justify-content-center'>
              <input type="text"
              className='form-control'
            value={text}
              onChange={handleChange}
              />
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