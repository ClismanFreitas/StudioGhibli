
export const formatSeconds = (seconds: number): string => {
    const minutos = Math.floor((seconds % 3600) / 60)
    const segundos = seconds % 60
    return `${minutos}min ${segundos}s`
}