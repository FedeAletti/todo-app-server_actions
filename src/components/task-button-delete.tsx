import prisma from "@/lib/prisma"
import { Button } from "./ui/button"
import { revalidatePath } from "next/cache"
import { removeTask } from "@/actions/task-actions"

export const TaskButtonDelete = ({ taskId }: { taskId: number }) => {
    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <Button type="submit" variant="destructive">Delete</Button>
        </form>
    )
}
