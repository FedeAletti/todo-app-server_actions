import { TaskForm } from '@/app/new/task-form'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'

import React from 'react'

const TaskPageEdit = async ({ params }: {
    params: { id: string }
}) => {

    const task = await prisma.task.findFirst({
        where: {
            id: Number(params.id)
        }
    })

    if (!task) redirect("/")

    return (
        <div className='grid place-content-center h-[80vh]'>
            <TaskForm task={task} />
        </div>
    )
}

export default TaskPageEdit