import React, { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLElement> {
    emoji: ReactNode
    selected: boolean
}

export const FeelingItem = ({ emoji, selected, onClick }: Props) => {
    return (
        <div className={`flex items-center justify-center w-8 h-8 border rounded-full select-none duration-200 ${selected ? 'border-amethyst-500' : 'cursor-pointer hover:bg-amethyst-200 hover:border-amethyst-500'}`} onClick={onClick}>
            <span className={`duration-300 text-2xl ${selected ? 'opacity-100' : 'opacity-40 hover hover:opacity-100'}`}>{emoji}</span>
        </div>
    )
}