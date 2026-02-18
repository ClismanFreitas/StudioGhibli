import { Routes, Route } from "react-router-dom"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { FilmDetail } from "../pages/FilmDetail.tsx"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}> 
                <Route index element={<Home/>} />
                <Route path="/:film/:id" element={<FilmDetail />} />
            </Route >
        </Routes>
    )
}