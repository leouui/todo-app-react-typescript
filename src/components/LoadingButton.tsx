import {Spinner} from "."

interface props {
    className?:string,
    loading:boolean,
    children:any,
    [key:string]:any
}

const LoadingButton = ({
    className = "btn btn-primary flex flex-x-center",
    loading,
    children,
    ...rest
}:props) => {
    return <button disabled={loading} className={className} {...rest}>
        {
            loading
                ? <Spinner/>
                : children
        }
    </button>
}

export default LoadingButton