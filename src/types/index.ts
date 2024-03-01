export interface TodoItemType {
	_id?: number;
	todoTitle: string;
}

export interface TodoType {
	_id?: number;
	title: string;
	todos: TodoItemType[];
}
