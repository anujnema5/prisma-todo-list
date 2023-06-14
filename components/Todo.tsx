"use client";
import { Todo } from '@prisma/client'
import { startTransition, useTransition } from 'react';
import { updateTodo } from '@/app/_actions';

type Props = {
    todo: Todo,
    key : string
}

const Todo = ({ key, todo }: Props) => {
    const [isPending, startTransition] = useTransition();


    return (
        <div className='flex gap-2' key={key}>
            <input id={todo.id} defaultChecked={todo.isCompleted} type="checkbox" onChange={
                (e) => startTransition(() => updateTodo(todo.id, e.target.checked))} />
            <label htmlFor={todo.id} className={`${todo.isCompleted ? "line-through" : "line-clamp-1"}  `}>{todo.title}</label>
        </div>
    )
}

export default Todo