import { useFilms } from "../../hook/useFilms"
import { formatSeaconds } from "../../utils/formatSeaconds"

export const Home = () => {

    const { data, isLoading, error } = useFilms()

    if (isLoading) {
        return <p>Carregando...</p>
    }

    if (error) {
        return <p>Ocorreu um erro ao buscar os filmes: {error.message}</p>
    }

    const renderStars = (score: number) => {
        if (score >= 90) return <p>⭐⭐⭐⭐⭐</p>
        if (score >= 80) return <p>⭐⭐⭐⭐</p>
        if (score >= 70) return <p>⭐⭐⭐</p>
        if (score >= 60) return <p>⭐⭐</p>
        return <p>⭐</p>
    }

    return (
        <>
            <ul className="flex flex-col items-center mt-10 overflow-y-auto max-h-[73vh] pb-10 ">
                {
                    data?.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10).map(conteudo => (

                        <li key={conteudo.id} className="bg-green-950/50   list-none rounded-3xl text-white text-center  mb-3">
                            <img className="rounded-t-4xl h-[450px]" src={conteudo.image} alt="" />
                            <div className="py-5 ">
                                <h1 className="font-bold text-[20px] ">
                                    {conteudo.title}
                                    {renderStars(conteudo.rt_score)}
                                </h1>
                                <div className="flex justify-around ">
                                    <p>{conteudo.release_date}</p>

                                    <p>{formatSeaconds(conteudo.running_time)}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}