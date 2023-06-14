"use server"
import { addTodo, updateTodoAction } from "@/lib/todosActions";
import { revalidatePath } from "next/cache";

export async function addTodoList(title: string) {
    await addTodo(title)
    revalidatePath("/")
}

export async function updateTodo(id: string, checked: boolean) {
    await updateTodoAction(id, checked)
    revalidatePath("/")
}