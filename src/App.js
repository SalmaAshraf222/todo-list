import {  useState } from 'react';
import './App.css';
import List from './components/list';
import ListItems from './components/listItems';
import Pagination from './components/pagination';

function App() {
  const[items,setItems]=useState([])
const[currentPage,setCurrentPage]=useState(1)
const [itemsPerPage,setItemsPerPage]=useState(7)

const addItem=(text , itemId)=>{
  setItems([
    ...items,
    {
      text:text ,
      id : itemId
      }
])
// setCurrentPage(currentPage+1)

console.log(items)
}

const deleteItemHandler = (any) => {
  setItems(
    items.filter(
      a => a.id !== any
  ))

}
const lastIndex=currentPage*itemsPerPage;
const firstIndex=lastIndex-itemsPerPage;
const currenItems=items.slice(firstIndex,lastIndex)

  return (
    <div className='container-fluid '
     style={{height:"100vh",
     }}>
      <h1 
      className='mt-3 ms-3 border border-light rounded shadow-sm w-25 d-flex justify-content-center '
      ><em>Your todo list</em></h1>
   
    <div className="row mt-5 d-flex justify-content-center" >
    <h5 className='d-flex  justify-content-center mt-3'>Type to add to your list</h5>
    <List addItem={addItem} deleteItemHandler={deleteItemHandler} />
    </div>

<div className='row '>
  <h5 className='mt-3' style={{marginLeft:"170px"}}>Items appear below</h5>
  <ListItems items={currenItems} deleteItemHandler={deleteItemHandler}/>

  
  <Pagination totalPosts={items.length} postsPerPage={itemsPerPage} setCurrentPage={setCurrentPage}/>


{/* {items.filter(item=>item.id<10).map((item) => (
       <ListItems deleteItemHandler={deleteItemHandler} item={item} />  
       ))} */}
</div>


</div>


  );
}

export default App;
