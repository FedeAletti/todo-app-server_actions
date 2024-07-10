import { createTask, updateTask } from "@/actions/task-actions"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Task } from "@prisma/client"


export function TaskForm({
    task
}: {
    task?: Task
}) {
    console.log(task);
    const functionsAction = task?.id ? updateTask : createTask

    return (
        <form action={functionsAction}>
            <input type="hidden" name="id" value={task?.id} />
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{task?.id ? 'Edit' : 'New'} Task</CardTitle>
                    <CardDescription>Fill out the form bellow to {task?.id ? 'edit the task' : 'a new task.'}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" name="name" placeholder="Name of your task" defaultValue={task?.name} />
                        </div>
                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" placeholder="Describe your task" defaultValue={task?.description} />

                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="priority">Priority</Label>
                            <Select name="priority" defaultValue={task?.priority}>
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Select" defaultValue={task?.priority} />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="urgent">Urgent</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button type="submit">{task?.id ? 'Edit' : 'Create'} Task</Button>
                </CardFooter>
            </Card>
        </form>
    )
}
