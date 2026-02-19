import { useFilms } from "../../hook/useFilms"
import { formatSeconds } from "../../utils/formatSeconds"
import { Link } from "react-router-dom"
import { Footer } from "../../components/Footer"

export const Home = () => {
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

    return (
        <>
    <ul className="
    mt-10
    h-[76vh]

    flex
    flex-col
    items-center

    sm:grid
    sm:grid-cols-2
    sm:gap-5

    lg:gap-2
    lg:grid
    lg:grid-cols-3
    lg:w-full

    2xl:grid-cols-5
    2xl:h-[80vh]
    2xl:px-3
  ">
                {
                    data?.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10).map(conteudo => (
                      <Link to={`/${conteudo.title}/${conteudo.id}`}>
                        <li key={conteudo.id} className="bg-green-950/50   list-none rounded-3xl text-white text-center mb-3 h-auto rounded-t-4xl hover:ring-3 hover:ring-green-500 hover:duration-100 hover:ease-in">
                            <img className="rounded-t-4xl h-112.5 sm:w-full lg:w-full " src={conteudo.image} alt="" />
                            <div className="py-5 ">
                                <h1 className="font-bold text-[20px] ">
                                    {conteudo.title}
                                    {renderStars(conteudo.rt_score)}
                                </h1>
                                <div className="flex justify-around ">
                                    <p>{conteudo.release_date}</p>

                                    <p>{formatSeconds(conteudo.running_time)}</p>
                                </div>
                            </div>
                        </li>
                      </Link>
                    ))
                }
                <Footer />
            </ul>
        </>

    )
}