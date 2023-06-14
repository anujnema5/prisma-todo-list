import TodoForm from '@/components/TodoForm'
import Image from 'next/image'
import TodoList from '@/components/TodoList'
import { fetchTodos } from '@/lib/todosActions';
import Todo from '@/components/Todo';

const Page = async () => {
  let { todos } = await fetchTodos();

  return (
    <div className='h-screen px-48 py-32'>
      <h1 className='text-2xl text-gray-400 bg-slate-900 inline-block px-3 py-1 rounded-xl'>Todos</h1>

      <h3 className='mt-14 text-lg'>Create a New Todo</h3>

      <TodoForm />

      {todos?.map((todo) => (
      //  <li>{}</li>
      <Todo todo={todo}/>
      ))}
    </div>
  )
}

export default Page;
