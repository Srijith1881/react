import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../src/components/Navbar'

const WebLayout = () => {
    const isloggedin = true

    return (
        <>
            <Navbar />
            {isloggedin ? (
                <Suspense fallback={"loading"}>
                    <Outlet />
                </Suspense>

            ) :
                (
                    <>
                        Login to access data
                    </>
                )

            }
        </>
    )
}

export default WebLayout