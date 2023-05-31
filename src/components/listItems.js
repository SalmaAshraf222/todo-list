const ListItems=({items,deleteItemHandler})=>{
    return(
        <div  className="container-fluid d-flex justify-content-center border border-light shadow rounded w-75" style={{height:"50vh"}}>
          <div className="row">
          <div className="col mt-3">
          {items.map(item=>(
            <ul>
 <li key={item.id}
 >
   {item.text}
   <button className='ms-2 btn btn-light' onClick={()=>deleteItemHandler(item.id)}>
     Delete
   </button>      
      </li>
   </ul>
          ))}
 
 </div>    
 </div>
          </div>
    )
}
export default ListItems;