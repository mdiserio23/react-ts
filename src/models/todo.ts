export default interface Todo {
  id: string;
  text: string;
}
export interface ITodoComponent extends Todo {
  onRemoveItem: (id: string) => void;
}

export interface TodosComponent {
  items: Todo[];
  onRemoveItem: (id: string) => void;
}

export interface NewTodoComponent {
  onAddTodo: (text: string) => void;
}
