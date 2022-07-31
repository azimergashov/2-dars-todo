
import { List} from './components'
import { Item} from './components'
import { useState} from 'react'
function App() {

  const [todos, setTodos] = useState(JSON.parse( window.localStorage.getItem("todos")) || [])

  const getValue = (evt) =>{
    evt.preventDefault()
    const input = document.querySelector(".input")
    const inputValue = input.value

    let object =  {
      id:  todos.at(-1)?.id ? todos.at(-1).id +1 : 1,
      heading : inputValue,
      isComplited : false
    }
    setTodos([...todos, object])

    input.value = null

  }

  window.localStorage.setItem("todos", JSON.stringify(todos))

  return (
    <div className="App container">

      <form onSubmit={ getValue }>
        <input  className='form-input input' placeholder='Todo kriting!' required/>
        <button type='submit'>submit</button>
      </form>

      {
        todos.length &&   <List>
        {
          todos.map(el =>(
            <Item todos={todos} setTodos ={setTodos} key= {el.id} element ={el}> {el.heading}</Item>
          ))
        }
      </List>
      }

    </div>
  );
}

export default App;
