"use client";

import { useState } from "react";

export default function Modal({ children, button, id, size }:
    { children: React.ReactNode, button: any, id?: string, size?: string }) {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="">
            {/* Background */}
            {openModal && <div onClick={() => setOpenModal(false)} className="fixed inset-0 z-0 w-screen h-screen bg-black bg-opacity-50" />}
            {/* Trigger */}
            <button
                className="w-full flex-1"
                onClick={() => setOpenModal(!openModal)}
            >{button}</button>
            {/* Modal */}
            <dialog open={openModal}
                className='w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-max mx-auto'
                style={{
                    zIndex: 10,
                    margin: 'auto',
                    backgroundColor: 'transparent'
                }}>
                <div className="flex flex-col rounded-lg bg-white shadow-xl pb-6">
                    <div className="flex flex-row justify-end items-center m-2 mb-0">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="ml-auto p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700"
                        >
                            <span className="sr-only">Close</span>
                            <CloseIcon size={24} />
                        </button>
                    </div>
                    <div className="flex-grow flex flex-col justify-center items-center gap-4 px-6 pt-0 overflow-y-auto">
                        {children}
                    </div>
                </div>
            </dialog>
        </div>
    )
}

function CloseIcon({ size = 24 }: { size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={size}
            height={size}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    )
}