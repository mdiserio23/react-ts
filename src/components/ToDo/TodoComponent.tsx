import Todo from "../../models/todo";

const TodoComponent: React.FC<Todo> = (props) => {
  return <li>{props.text}</li>;
};
export default TodoComponent;
