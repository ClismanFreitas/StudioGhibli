import axios from "axios"
import type { Films } from "../../types/typeFilm"

export const getFilm = async () => {
    const response = await axios.get(`https://ghibliapi.vercel.app/films`)
    const dadosConvertidos = response.data.map((film: Films) => ({
        ...film,
        release_date: Number(film.release_date),
        rt_score: Number(film.rt_score),
        running_time: Number(film.running_time)
    }))
    return dadosConvertidos
}