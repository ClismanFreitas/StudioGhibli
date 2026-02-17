import { useQuery } from "@tanstack/react-query"
import { type Films } from "../types/typeFilm"
import { getFilm } from "../services/getFilm"

export const useFilms = () => {
    return useQuery<Films[]>({
        queryKey: ["filmes", ],
        queryFn:() => getFilm(),
    })
}