import * as React from "react";
import Table from 'react-bootstrap/Table';

const TodoList = ({todoList, markAsDone})=>{
  const DoneBtnHandler= (id)=>{
    markAsDone(id);
  }
  return (
    <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>item</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {(todoList || []).map(function(el, key){
            return(
            <tr className={el.status === 2?'mark-done':''}>
                <td>{key + 1}</td>
                <td>{el.todo}</td>
                <td>
                  <button onClick={()=>{DoneBtnHandler(el.id)}}className= 'btn btn-success btn-sm'>Done</button>
                </td>
            </tr>
            )
        
        })}
        {/* <tr>
          {/* <td>1</td>
          <td>Go to Gym</td>
          
        </tr> */} 
      </tbody>
    </Table>
  </>
  )
}



export default TodoList;
