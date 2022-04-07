export default interface Todo {
  id: string;
  text: string;
}
export interface ITodoComponent extends Todo {
  onRemoveItem: (id: string) => void;
}

export interface TodoContextInterface {
  items: Todo[];
  onRemoveItem: (id: string) => void;
  onAddTodo: (text: string) => void;
}
