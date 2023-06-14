import prisma from "./prisma";

export async function fetchTodos() {
    try {
        const todos = await prisma.todo.findMany();
        return { todos }
    } catch (error) {
        return { error }
    }
}

export async function addTodo(title: string) {
    try {
        const todo = await prisma.todo.create({ data: { title } })
        return { todo }
    } catch (error) {
        console.log(error);

    }
}

export async function updateTodoAction(id: string, checked: boolean) {
    try {
        const todo = await prisma.todo.update({
            where: { id },
            data: { isCompleted: checked }
        })
        return { todo }
    } catch (error) {
        console.log(error);

    }
}