export default interface Todo {
  id: string;
  text: string;
}

export interface NewTodoComponent {
  onAddTodo: (text: string) => void;
}
