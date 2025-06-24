import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
  user: User;
}

interface TodolistProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodolistProps> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article
          key={todo.id}
          data-id={todo.id}
          className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
        >
          <h2 className="TodoInfo__title">{todo.title}</h2>
          <a className="UserInfo" href={`mailto: ${todo.user.email}`}>
            {todo.user.email}
          </a>
        </article>
      ))}
    </section>
  );
};
