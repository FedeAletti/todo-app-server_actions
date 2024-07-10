import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Task } from '@prisma/client'
import clsx from 'clsx'
import { TaskButtonDelete } from './task-button-delete'
import Link from 'next/link'


export const TaskCard = ({ task }: { task: Task }) => {

    return (
        <Card>
            <CardHeader className="flex flex-row justify-between">
                <CardTitle>{task.name}</CardTitle>
                <Badge className={clsx("text-white", {
                    'bg-red-500': task.priority === 'high',
                    'bg-yellow-500 ': task.priority === 'medium',
                    'bg-green-500': task.priority === 'low',
                    'bg-blue-500': task.priority === 'urgent'
                })}>{task.priority}</Badge>
            </CardHeader>
            <CardContent>
                <CardDescription>{task.description}</CardDescription>
                <CardDescription className='text-slate-600'>{new Date(task.createdAt).toLocaleDateString('es-AR')}</CardDescription>
            </CardContent>
            <CardFooter className="flex gap-x-2 justify-end">
                <TaskButtonDelete taskId={task.id} />
                <Link href={`/tasks/${task.id}/edit`} className={buttonVariants({ variant: 'secondary' })}>Edit</Link>
            </CardFooter>
        </Card>
    )
}
