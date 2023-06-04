import { ReactNode } from "react";

interface TooltipProps {
    message: string;
    children: ReactNode
}

const Tooltip = ({ message, children }: TooltipProps) => {
    return (
        <div className="group relative flex">
            {children}
            <span className="absolute top-10 min-w-[100px] scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">{message}</span>
        </div>
    )
}


export default Tooltip