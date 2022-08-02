// Components
import useComponents from "@/views/components";

// Interface
import { CardInterface } from "./Card.interface";

// Controlles
import useControllers from "@/controllers";


const Card = (props: CardInterface) => {
  const {title, message, time, hostname, success} = props

  // Hooks
  const {useComponentHooks} = useControllers()
  const {useCard} = useComponentHooks()
  const {formatTime} = useCard()

  // Components
  const { Typography } = useComponents();

  return <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white min-h-[180px] max-w-[265px]">
    <div className="px-6 py-4 space-y-1.5">
      <Typography
        variant={"h2"}
        className={"text-black uppercase"}
      >
        {title}
      </Typography>
      <Typography
        variant={"p"}
        className={`text-white ${success ? 'bg-green-600' : 'bg-red-500'} rounded-full py-1`}
      >
        {message}
      </Typography>
      <Typography
        variant={success ? "input_help" : "title"}
        className={success ? "text-black" : "text-red-500"}
      >
        {hostname.replace("default", title.toLowerCase())}
      </Typography>
      <Typography
        variant={"input_help"}
        className={success ? "text-black" : "text-red-500"}
      >
        {typeof time === "number" ? formatTime(time) : time}
      </Typography>
    </div>
  </div>
}

export default Card