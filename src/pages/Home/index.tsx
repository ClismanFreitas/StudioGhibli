import { useFilms } from "../../hook/useFilms"
import { formatSeaconds } from "../../utils/formatSeaconds"

export const Home = () => {

    const {data, isLoading, error} = useFilms()

    if(isLoading){
        return <p>Carregando...</p>
    }

    if(error){
        return <p>Ocorreu um erro ao buscar os filmes: {error.message}</p>
    }

    const renderStars = (score : number) => {
        if(score >= 90) return <p>⭐⭐⭐⭐⭐</p>
        if(score >= 80) return <p>⭐⭐⭐⭐</p>
        if(score >= 70) return <p>⭐⭐⭐</p>
        if(score >= 60) return <p>⭐⭐</p>
        return <p>⭐</p>
    }
    
    return (
        <>
            {
                data?.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10).map(conteudo => (
                    <ul>
                        <li key={conteudo.id} className="bg-amber-950">
                            <img src={conteudo.image} alt="" />
                            <h1>{conteudo.title}</h1>
                            {renderStars(conteudo.rt_score)}
                            <div>
                                <p>{conteudo.release_date}</p>
                                <p>{formatSeaconds(conteudo.running_time)}</p>
                            </div>
                        </li>
                    </ul>
                ))
            }
        </>
        
    )
}