import React from 'react'
import { ModeToggle } from './theme-toggle-button'
import Link from 'next/link'
import { buttonVariants } from './ui/button'

export const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-4'>
            <Link href={'/'}>
                <h1>NextActionsCRUD</h1>
            </Link>
            <div className='flex items-center gap-4'>
                <Link href={'/new'} className={buttonVariants({ variant: 'secondary' })}>Create Task</Link>
                <ModeToggle />
            </div>

        </nav>
    )
}
