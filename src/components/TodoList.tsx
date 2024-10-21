import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import {Link} from "react-router-dom";

interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
}


const TodoList : React.FC = () => {

    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if(newTodo !== '') {
            const newId = crypto.randomUUID();
            const newTodoItem: TodoItem = {
                id: newId,
                text: newTodo,
                completed: false
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const removeTodo = (id: string) => {
        const updatedTodos = todos.filter((todos) => todos.id !== id);
        setTodos(updatedTodos);
    };

    const toggleComplete = (id:string) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) return {...todo, completed: !todo.completed};
            return todo;
        }); 
        setTodos(updatedTodos);
    };

    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-5">

                                <h6 className="mb-3">My Todo List</h6>

                                <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={addTodo}>
                                    <div data-mdb-input-init className="form-outline flex-fill">
                                        <input
                                            type="text"
                                            id="form3"
                                            className="form-control form-control-lg"
                                            placeholder="What do you need to do today?"
                                            value={newTodo}
                                            onChange={(event) => setNewTodo(event.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit" // Make sure this is type="submit"
                                        className="btn btn-primary btn-lg ms-2"
                                    >
                                        Add
                                    </button>
                                </form>

                                <ul className="list-group mb-0">
                                    {todos.map((todo) => (
                                        <li
                                            key={todo.id}
                                            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                                        >
                                            <div className="d-flex align-items-center">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    checked={todo.completed}
                                                    onChange={() => toggleComplete(todo.id)}
                                                />
                                                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                                    {todo.text}
                                                </span>
                                            </div>
                                            <a href="#!" onClick={() => removeTodo(todo.id)} title="Remove item">
                                                <i className="fas fa-times text-primary"></i> {/* Font Awesome remove icon */}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <footer>
                    <p className="text-center py-5">Return to <Link to="/">Homepage</Link></p>
                </footer>
                </div>
            </div>
        </section>
    );
}

export default TodoList;