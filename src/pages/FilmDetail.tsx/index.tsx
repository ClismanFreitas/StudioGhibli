import { useParams, Link } from "react-router-dom"
import { useFilms } from "../../hook/useFilms"
import { formatSeconds } from "../../utils/formatSeconds"
import { Footer } from "../../components/Footer"

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

    const renderStars = (score: number) => {
        if (score >= 90) return <p>⭐⭐⭐⭐⭐</p>
        if (score >= 80) return <p>⭐⭐⭐⭐</p>
        if (score >= 70) return <p>⭐⭐⭐</p>
        if (score >= 60) return <p>⭐⭐</p>
        return <p>⭐</p>
    }

    const dados = data?.find(film => film.id === (id))
    console.log(dados);
    return (
        <>
            <div className=" flex justify-center mt-5 text-white">
                <Link to="/" className="bg-green-950/50 px-6 py-3 rounded-2xl hover:ring-2 hover:ring-green-500 hover:duration-100 hover:ease-in">
                    Voltar
                </Link>
            </div>
            <div className="bg-green-950/50 text-center items-center mt-5 p-5 overflow-y-auto mb-5 text-white rounded-3xl sm:w-125 sm:m-auto sm:my-5 ">
                <div className=" flex justify-center">
                    <img className="w-[60%] justify-center" src={dados?.image} alt="" />
                </div>    
                <h1>{dados?.title}
                </h1>
                    {dados && renderStars(dados?.rt_score)}
                <div className="flex justify-around ">
                    <p>{dados?.release_date}</p>
                    <p>{dados && formatSeconds(dados?.running_time)}</p>
                </div>
                <div className="max-h-50 overflow-y-auto my-3">
                    <p>{dados?.description}</p>
                </div>
                <p>Director: <b>{dados?.director}</b></p>
                <p>Producer: <b>{dados?.producer}</b></p>
            </div>
            <Footer />
        </>
        
    )
}