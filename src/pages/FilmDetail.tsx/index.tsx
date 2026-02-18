import { useParams, Link } from "react-router-dom"
import { useFilms } from "../../hook/useFilms"
import { formatSeaconds } from "../../utils/formatSeaconds"

export const FilmDetail = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useFilms()

    if (isLoading) {
        return (
            <div className="h-50 w-full flex justify-center items-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 rounded-full border-4 border-white/30 border-t-white animate-spin" />
                    <span className="text-white text-sm tracking-wide">Carregando...</span>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="h-50 w-full flex justify-center items-center">
                <div className="flex flex-col items-center gap-2 bg-red-500/10 border border-red-500/30 px-6 py-4 rounded-lg">
                    <span className="text-red-400 font-semibold">Erro ao carregar dados</span>
                    <span className="text-red-300 text-sm text-center">
                        {error.message}
                    </span>
                </div>
            </div>
        )
    }

    const renderStars = (score: any) => {
        if (score >= 90) return <p>⭐⭐⭐⭐⭐</p>
        if (score >= 80) return <p>⭐⭐⭐⭐</p>
        if (score >= 70) return <p>⭐⭐⭐</p>
        if (score >= 60) return <p>⭐⭐</p>
        return <p>⭐</p>
    }

    const dados = data?.find(film => film.id === (id))
    return (
        <>
            <div className=" flex justify-center mt-5">
                <Link to="/" className="bg-green-950/50 p-3">
                    Voltar
                </Link>
            </div>
            <div className="bg-green-950/50 text-center items-center mt-5 p-5 overflow-y-auto mb-5 text-white rounded-3xl">
                <div className=" flex justify-center">
                    <img className="w-[60%] justify-center" src={dados?.image} alt="" />
                </div>    
                <h1>{dados?.title}
                    {renderStars(dados?.rt_score)}
                </h1>
                <div className="flex justify-around ">
                    <p>{dados?.release_date}</p>
                    <p>{formatSeaconds(dados?.running_time)}</p>
                </div>
                <div className="max-h-50 overflow-y-auto">
                    <p>{dados?.description}</p>
                </div>
            </div>
        </>
    )
}