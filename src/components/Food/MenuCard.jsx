import {screenSize} from "../../hooks/screenSize"

export default function MenuCard( {icon, title, iconSize, children}){
    const { isTablet, isLaptop, isDesktop} = screenSize()
    return (
        <div className={`bg-white rounded-lg p-3 m-2 min-h-1/3 ${isTablet ? "w-xs" : isLaptop || isDesktop ? "w-sm":""}` }>
            <div className="flex p-2 justify-center">
                <img className={iconSize} src={icon}/>
                <div className="text-primary text-xl pl-2 content-end ">{title}</div>
            </div>
            <div className="content">
                {children} 
            </div>       
        </div>
    )
}