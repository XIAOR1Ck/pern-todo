import React, { Fragment, useEffect, useState } from "react";

const ListToDos = () => {
    const [todos, setToDos] = useState([]);
    //delete todo function
    
    const deleteTodo = async (id) => {
            try {
                const deleteTodo = await fetch(`http://127.0.0.1:5000/todos/${id}`, {
                method: "DELETE",

            });
            setToDos(todos.filter(todo => todo.todo_id !== id));

            } catch (err) {
                console.error(err.message) 
                
            }
    }

    // Fetch todo function
     const getTodos = async () => {
        try {
           const response = await fetch("http://127.0.0.1:5000/todos");
            const jsonData =  await response.json();

            setToDos(jsonData);
        
        } catch (err) {
            console.error(err.message);
            
        }
    }
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                    {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr> */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>

                            <td>Edit</td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                        </tr>

                    ))}
                  
                </tbody>
              </table>
        </Fragment>
    );
}

export default ListToDos;
