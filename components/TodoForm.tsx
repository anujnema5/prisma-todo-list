"use client"
import { useRef } from "react";
import { addTodoList } from "@/app/_actions";

const TodoForm = () => {
    const formRef = useRef<HTMLFormElement>(null);

    async function addTodo(data: FormData) {
        let title = data.get("todo");

        if (typeof title !== 'string' || !title) return
        await addTodoList(title);
        formRef.current?.reset();

    }
    return (
        <form className='flex gap-3 mt-1 mb-4' action={addTodo} ref={formRef}>
            <input type="text" name="todo" id="" placeholder='Enter Todo' className='rounded border border-slate-400 px-2 py-0.5 text-gray-700 focus:outline-0' />
            <button type="submit" className='border px-2 rounded-md hover:bg-gray-600 hover:border-gray-500'>Add Todo</button>
        </form>
    )
}

export default TodoForm