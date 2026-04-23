import calendar from "@/assets/icons/calendarYellow.svg"
import { screenSize } from "../../hooks/screenSize"

export default function TournamentCard({day, activity, time, location}){
    const {isMobile, isTablet, isDesktop, isLaptop} = screenSize()

    return(
        <div className={`border border-white rounded p-4 m-3 bg-white/10 ${isDesktop || isLaptop ? "w-md" : isTablet ? "w-xs" : ""}`}>
            <div className="flex flex-row">
                <img src={calendar} className="w-6 h-6"/>
                <div className="text-warning font-semibold ml-2">{day}</div>
            </div>
            <div className="text-white font-bold py-2">{activity}</div>
            <div className="flex flex-row justify-between">
                <div className="text-warning py-2">{time}</div>
                <div className="text-white py-2"> {location}</div>
            </div>
        </div>
    )
}