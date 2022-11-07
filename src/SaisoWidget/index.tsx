import React, {useState} from 'react'

export const SaisoWidget = () => {
    // state variables
    const [show, setShow] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [feeling, setFeeling] = useState<string>('')
    const [feedback, setFeedback] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    return (
        <div className="">This is SaisoWidget</div>
    )
}