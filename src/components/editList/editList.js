import { useState } from "react"

const EditList=({newVal,items , itemId,handleUpdate})=>{
    const [updatedVal,setupdatedVal]=useState(newVal)

    const handleChange=(e)=>{
        setupdatedVal(e.target.value)
   }
   
  const handleUpdateClick=(event,itemId)=>{
    event.preventDefault()
    console.log(updatedVal); 
    handleUpdate(itemId,updatedVal)
  
   }
  
 
console.log(items);


return(
    <div className='container-fluid 
    mt-3
     '>
       
        <form className='row '>
            <input
            type="text"
            className='form-control w-50'
          value={updatedVal}
        onChange={handleChange}
            />
         
    <button className='ms-3 w-25 btn btn-light' onClick={(event)=>handleUpdateClick(event,itemId)} >Update</button>

        </form>
          



</div>
)
}
export default EditList;