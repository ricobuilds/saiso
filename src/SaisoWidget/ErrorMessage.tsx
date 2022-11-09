import React from 'react'

export const ErrorMessage = () => (
    <div className="flex items-center text-[#e63a56] text-d-copy gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-error-404" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7v4a1 1 0 0 0 1 1h3"></path>
            <path d="M7 7v10"></path>
            <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z"></path>
            <path d="M17 7v4a1 1 0 0 0 1 1h3"></path>
            <path d="M21 7v10"></path>
        </svg>
        <p>There's an error! Check your Console logs.</p>
    </div>
)