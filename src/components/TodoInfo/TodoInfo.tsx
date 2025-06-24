import React from 'react';

interface User {
  name: string;
  email: string;
}

interface Todo {
  id: number | string;
  title: string;
  completed: boolean;
  user?: User;
}

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <article
    data-id={todo.id}
    className={`TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    <a className="UserInfo" href={`mailto:${todo.user?.email}`}>
      {todo.user?.name}
    </a>
  </article>
);
