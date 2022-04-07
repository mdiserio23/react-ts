import { useContext } from "react";
import TodoContext from "../../store/todo-context";
import TodoComponent from "./TodoComponent";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const ctx = useContext(TodoContext);
  const onRemoveItemHandler = (id: string): void => {
    ctx.onRemoveItem(id);
  };
  return (
    <>
      <ul className={classes.todos}>
        {ctx.items.map((item) => (
          <TodoComponent
            onRemoveItem={onRemoveItemHandler}
            key={item.id}
            id={item.id}
            text={item.text}
          />
        ))}
      </ul>
    </>
  );
};
export default Todos;
