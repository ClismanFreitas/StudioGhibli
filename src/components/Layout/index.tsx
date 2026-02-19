import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import backgroundPadrao from "/background.jpg"

export const Layout = () => {
    return (
        <>
            <div className="relative h-screen overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
                style={{ backgroundImage: `url(${backgroundPadrao})` }}
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 h-full w-[90%] m-auto overflow-y-auto">
                <Header />
                <Outlet />
            </div>

        </div>

        </>
    )
}