"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function createTask(formData: FormData) {

    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const priority = formData.get("priority")?.toString()

    if (!name || !description || !priority) {
        return
    }

    await prisma.task.create({
        data: {
            name: name,
            description: description,
            priority: priority
        }
    })

    redirect("/")
}

export  async function removeTask(formData: FormData) {
    "use server"
    const id = formData.get("taskId")

    if (!id) return

    await prisma.task.delete({ where: { id: Number(id) } })

    revalidatePath("/")
}

export async function updateTask(formData: FormData) {
    "use server"
    const id = formData.get("id")
    const name = formData.get("name")?.toString()
    const description = formData.get("description")?.toString()
    const priority = formData.get("priority")?.toString()

    if (!id || !name || !description || !priority) {
        return
    }

    await prisma.task.update({
        where: { id: Number(id) },
        data: {
            name: name,
            description: description,
            priority: priority
        }
    })

    redirect("/")
}