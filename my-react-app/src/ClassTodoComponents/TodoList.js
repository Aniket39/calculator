import * as React from "react";
import Table from 'react-bootstrap/Table';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>item</th>
            </tr>
          </thead>
          <tbody>
            {(this.props.todoList || []).map(function(el){
                return(
                <tr>
                    <td>{el.id}</td>
                    <td>{el.todo}</td>
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
    );
  }
}

export default TodoList;
