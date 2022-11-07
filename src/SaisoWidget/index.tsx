import React, {ChangeEvent, useState} from 'react'
import { APIProps } from '../types'

export const SaisoWidget = (config: APIProps) => {
    console.log
    // state variables
    const [show, setShow] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [feeling, setFeeling] = useState<string>('')
    const [feedback, setFeedback] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    // functions
    const handleCategories = (args: string) => {
        setCategory(prev => prev = args)
    }

    const handleFeelings = (args: string) => {
        setFeeling(prev => prev = args)
    }

    const handleFeedback = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(e.target.value)
    }

    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(prev => prev = e.target.value)
    }

    const handleSubmit = () => {
        if (category === '') return;
        if (feeling === '') return;
        if (feedback === '') return;
        saveData()
    }

    const handleReset = () => {
        setCategory(prev => prev = '')
        setFeeling(prev => prev = '')
        setFeedback(prev => prev = '')
        setEmail(prev => prev = '')
        setMessage('')
        setLoading(prev => !prev)
    }

    const saveData = () => {
        //  
    }

    return (
        <div className="">This is SaisoWidget</div>
    )
}