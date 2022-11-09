import React, {ChangeEvent, useState} from 'react'
import { RuiButton, RuiLoader } from 'ruskelui'
import { APIProps, DataProps } from '../types'
import { SuccessMessage } from './SuccessMessage'
import { ErrorMessage } from './ErrorMessage'
import { naniteId } from 'naniteid'
import { FeelingItem } from './FeelingItem'
import { CategoryItem } from './CategoryItem'
// @ts-ignore
import styles from './Saiso.module.css'

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

    const saveData = async () => {
        try {
            const date = new Date();
            const newDate = date.toISOString();

            // capture data 
            const _data: DataProps = {
                category,
                satisfactionRate: feeling,
                feedback,
                email: email === '' ? 'n/a' : email,
                date: newDate
            }

            // store to notion
            fetch(config.notionAPI, {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(_data)
            })
                .then((res) => {
                    setLoading(prev => !prev)
                    console.log(res)
                    setTimeout(() => {
                        setTimeout(() => {
                            setMessage(res.status === 200 ? 'success' : 'error')
                        }, 700);
                    }, 300);
                })
                .finally(() => {
                    setTimeout(() => {
                        handleReset()
                    }, 3000);
                })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="box-border fixed z-10 flex flex-col items-end w-[350px] bottom-8 gap-6 right-8">
            <div className={`duration-200 ease-out ${show ? styles.funda : styles.fundaOff}`}>
                <div className="flex flex-col items-center justify-center gap-2 px-3 py-4 pb-2 mb-4 bg-gray-700 h-fit text-sylver-100 text-m-copy sm:text-d-copy">
                    <a href="https://twitter.com/0xreeko" className='overflow-hidden border-2 rounded-full'>
                        <img src={config.logo} className="w-12 h-12 duration-300 hover:scale-110" alt="Creator Avatar" />
                    </a>
                    <div className='flex flex-col items-center text-center'>
                        <span className="font-medium text-d-base">What&apos;s on your mind?</span>
                        <span className='text-gray-400'>Tell me your thoughts about {config.name}, I&apos;d like to know!</span>
                    </div>
                </div>
                <div className={styles.categoryContainer}>
                    {
                        [
                            { icon: '🛠', value: 'Requests' },
                            { icon: '💭', value: 'Ideas' },
                            { icon: '❗️', value: 'Issues' },
                            { icon: '🤔', value: 'Other' },
                        ].map((item) => (

                            <CategoryItem key={naniteId()} icon={item.icon} title={item.value} selected={item.value === category} onClick={() => item.value !== category ? handleCategories(item.value) : null} />
                        ))
                    }
                </div>
                {/* User Satisfaction Ratings */}
                <div className={styles.feelingContainer}>
                    <label className='text-[13px]'>How satisfied are you with the site?</label>
                    <div className={`flex gap-3 mx-auto duration-200 ${category !== '' ? '' : 'pointer-events-none select-none opacity-60'}`}>
                        {[
                            { icon: '😖', value: "Bad" },
                            { icon: '😕', value: 'Meh' },
                            { icon: '🙂', value: 'Good' },
                            { icon: '😍', value: 'Great' }].map((item) => (
                                <FeelingItem key={naniteId()} selected={item.value === feeling} emoji={item.icon} onClick={() => item.value !== feeling ? handleFeelings(item.value) : null} />
                            ))}
                    </div>
                </div>
                {/* Feedback */}
                <div className={styles.feedbackContainer}>
                    <label htmlFor="feedback" className='text-[13px]'>Feedback</label>
                    <textarea id="feedback" value={feedback} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleFeedback(e)} className={`${styles.feedback} ${feeling !== '' ? '' : 'pointer-events-none select-none opacity-60'}`} placeholder="Type your honest opinion/s on what's going well or what could be better :)" rows={3} required />
                </div>
                {/* Email */}
                <div className={styles.emailContainer}>
                    <label htmlFor="email" className='text-[13px]'>Email <span className='ml-0.5 text-[11px] text-sylver-800'>(optional - just in case you want updates if your feedback is implemented)</span></label>
                    <input type={'email'} value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => handleEmail(e)} autoComplete={'off'} id="email" className="w-full outline-none ring-2 ring-transparent focus:ring-amethyst-500 mb-3 appearance-none block border bg-sylver-100 rounded-md py-1 px-2.5" />
                    <div className={`flex justify-center mb-3 h-9 w-full duration-500 ${category !== '' && feeling !== '' && feedback !== '' ? '' : 'pointer-events-none opacity-60'}`}>
                        {
                            loading === false && message === '' ?
                                (<RuiButton size='sm' variant="filled" color="amethyst" fullWidth onClick={() => handleSubmit()}>Submit</RuiButton>)
                                : loading === true && message === '' ?
                                    (<div className="text-teal-500"><RuiLoader /></div>)
                                    : loading === true && message === 'success' ?
                                        (<SuccessMessage />)
                                        : loading === false && message === 'error' ?
                                            (<ErrorMessage />) : null
                        }
                    </div>
                </div>
                <hr className='' />
                <div className={styles.powered}>
                    <a href="https://saiso.vercel.app">Powered by Saiso</a>
                </div>
            </div>
            <div
                onClick={() => setShow((prev) => prev = !prev)}
                className={`${styles.widgetButton}`}>
                <span>Submit Feedback</span>
                <span className={styles.icono}>🛎</span>
            </div>
        </div>
    )
}