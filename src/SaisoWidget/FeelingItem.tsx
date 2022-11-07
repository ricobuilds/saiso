import React, { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLElement>{
    emoji: ReactNode
    selected: boolean
}

export const FeelingItem = ({emoji, selected, onClick}: Props) => {
    return (
        <div className="">
            <span>{emoji}</span>
       </div> 
    )
}