import React, { HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
    icon: ReactNode
    title: string
    selected: boolean
}

export const CategoryItem = ({ icon, title, selected, onClick }: Props) => {
    return (
        <div className={`flex flex-col items-center justify-center w-20 h-16 group bg-sylver-100 border rounded select-none duration-200 ${selected ? 'opacity-100 border border-amethyst-500' : 'cursor-pointer hover:bg-amethyst-200 hover:border-amethyst-500'}`} onClick={onClick}>
            <span className={`text-2xl duration-200 ${selected ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>{icon}</span>
            <span style={{ color: 'rgb(12, 15, 39)'}} className={`text-m-copy sm:text-d-copy ${selected ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}>{title}</span>
        </div>
    )
}