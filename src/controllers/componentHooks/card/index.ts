
const useCard = () =>{

  const formatTime = (time: number) => {
    const d = new Date(time)
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
  }
  return {formatTime}
}

export default useCard