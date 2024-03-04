export interface TodoItemType {
	_id?: number;
	todoTitle: string;
}

export interface TodoType {
	_id?: number;
	title: string;
	todos: TodoItemType[];
}

export interface ModalTodoType {
	_id?: number;
	todoTitle: string;
}

export interface TodoTypeArray {
	review: {
		[Symbol.iterator](): {
			next(): { value: string; done: boolean };
			coment: string;
			_id: number;
		};
	};
	_id: number;
	todoTitle: string;
}