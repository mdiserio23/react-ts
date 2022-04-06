import Todo from "../../models/todo";
import TodoComponent from "./TodoComponent";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <>
      <ul>
        {props.items.map((item) => (
          <TodoComponent key={item.id} id={item.id} text={item.text} />
        ))}
      </ul>
    </>
  );
};
export default Todos;
