import { toast } from "react-toastify"
const useToast = () => {
    const success = (msg: JSX.Element, options = {}) => {
        return toast.success(msg, {
            // Merge additionals options
            ...options,
            className: "rounded bg-success-500",
        })
    }

    const error = (msg: JSX.Element, options = {}) => {
        return toast.error(msg, {
            ...options,
            className: "rounded bg-white",
        })
    }
    const info = (msg: JSX.Element, options = {}) =>{
        return toast.info(msg, {
            ...options,
            className: "rounded bg-black",
        })
    }

    const warn = (msg: JSX.Element, options = {}) => {
        return toast.warn(msg, {
            ...options,
            className: "rounded bg-warning-500",
        })
    }

    return {
        success,
        error,
        info,
        warn,
    }
};
export default useToast;
