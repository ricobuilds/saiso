import React, { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
    icon: ReactNode
    title: string
    selected: boolean
}

export const CategoryItem = ({ icon, title, selected }: Props) => {
    return (
        <div className="">
            <span>{icon}</span>
            <span>{title}</span>
        </div>
    )
}