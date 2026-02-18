
export const formatSeaconds = (seconds: any) => {
    const minutos = Math.floor((seconds % 3600) / 60)
    const segundos = seconds % 60
    return `${minutos}min ${segundos}s`
}