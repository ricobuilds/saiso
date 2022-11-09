import React from 'react'

export const SuccessMessage = () => (
    <div className="text-[#00ce8a] flex items-center text-d-copy gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l5 5l10 -10"></path>
        </svg>
        <p>Thanks. We've received your feedback 🥳</p>
    </div>
)