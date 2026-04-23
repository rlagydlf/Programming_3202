import Button from './Button.jsx'
import Checkbox from './Checkbox.jsx'
export default function TodoItem({ todo, ...rest }) {
    return (
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            <Checkbox 
            id={todo.id} 
            checked={todo.isCompleted}
            onChange={() => rest.toggleTodo(todo.id)}>
                {todo.text}
            </Checkbox>
            <Button className="todo__button todo__button--edit" onClick={() => rest.editTodo(todo.id)}>✏️</Button>
            <Button className="todo__button todo__button--delete" onClick={() => rest.deleteTodo(todo.id)}>🗑️</Button>
        </li>
    )
}