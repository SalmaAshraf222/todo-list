import EditList from "../components/editList/editList"

const ListItems=({items,deleteItemHandler ,toggleComplete
  ,editItem,setItems
})=>{

  
  
const editItemHandler=(any)=>{
  editItem(any)
}

  const handleUpdate=(itemId,updatedVal)=>{
    setItems(items.map((item)=>{
      if(item.id===itemId){
        return{...item,text:updatedVal,edit:!item.edit}
      }else{
        return item
      }
     }))
   
  }
  
return(
        <div  className="container-fluid d-flex justify-content-center  w-75 " style={{height:"50vh"}}>
          <div className="row "  >
          <div className="col mt-3" >
          {items.map(item=>(
            <ul  key={item.id}>
 <li className="my-3 ">
  <div className="col" onClick={()=>toggleComplete(item.id)}
 style={{ textDecoration: item.complete? "line-through" : null }}>
  {item.text} 
    </div> 

    <div>
    <button className='ms-2 btn btn-light' onClick={(e)=>editItemHandler(item.id)}>Edit</button>

<button className='ms-2 btn btn-light' onClick={()=>deleteItemHandler(item.id)}>Delete</button>

{item.edit===true?<EditList items={items} itemId={item.id} newVal={item.text} handleUpdate={handleUpdate}/>:null}

    </div>
  
      </li>
   </ul>
          ))}
 
 </div>    
 </div>
          </div>
    )
}
export default ListItems;