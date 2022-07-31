import './item.scss'

export const Item = ({children, element , todos, setTodos}) =>{

    const {id, isComplited} = element;
    const  deleteTodo = (todoId) =>{
        const filtredTodos = todos.filter(todo => todo.id !== todoId)

        setTodos([...filtredTodos])
        window.localStorage.setItem("todos", JSON.stringify([...filtredTodos]))

    }

    const editTodos = (todoId) =>{
        const editText = prompt("textni kiriting!")
        const findEdit = todos.find(el => el.id === todoId )
        findEdit.heading = editText
        setTodos([...todos])
        window.localStorage.setItem("todos", JSON.stringify([...todos]))
    }

    const changeTodo = (todoId) =>{
        const findEdit = todos.find(el => el.id === todoId )
        findEdit.isComplited = !findEdit.isComplited
        setTodos([...todos])
        window.localStorage.setItem("todos", JSON.stringify([...todos]))


    }

    return (
        <li className='my-3 d-flex align-items-center'>
            <span className='me-5'> {id}</span>
            <input onChange={() => changeTodo(id)} defaultChecked={isComplited} className='form-check-input' type="checkbox"/>
            <p className= {isComplited ? "text-decoration-line-through m-0 p-0 ms-3 text-black-50" : "m-0 p-0 ms-3" } >{children}</p>

            <div className='ms-5'>
                <button onClick={() =>  editTodos(id)} className='btn btn-warning'>Edit</button>
                <button onClick={ () => deleteTodo(id)} className='btn btn-danger ms-4'>Delete</button>
            </div>

        </li>
    )
}
