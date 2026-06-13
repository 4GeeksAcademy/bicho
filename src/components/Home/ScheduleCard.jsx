import { screenSize } from "../../hooks/screenSize"
import locationIcon from "@/assets/icons/locationIcon.svg"

export default function ScheduleCard({title, location, urlLocation, weekdaysTime, satTime, sunTime}){
    const {isMobile, isTablet} = screenSize()

    return (
        <div className={`p-4 m-4 bg-white border border-primary rounded-md ${isMobile ? "max-w-s" : isTablet ? "max-w-xs " : "w-s"}`}>
            <div className="text-secondary font-bold text-xl text-center">
                {title}
            </div>
            <div className="flex flex-row py-1 ">
                <div className=" flex flex-row w-80 p-2 justify-center ">
                <img className="w-6 h-6 mr-1" src={locationIcon}/>
                <div className="text-secondary font-xs">{location}</div>
                </div>
                <div className="flex justify-center items-center ">
                    <div>  
                    <a className="rounded bg-accent p-2 text-white font-semibold text-center items-center hover:bg-sky-700" href={urlLocation} target="_blank" > 
                    Mapa
                    </a>
                    </div>
                  
                </div>

            </div>

            <div className={"flex flex-row my-3 rounded bg-light"}>
                <div  className={`w-50 p-2 text-secondary ${isMobile ? "text-m" : "text-lg"}`} >Lunes a viernes</div>
                <div className={`w-50 flex justify-end p-2 font-semibold text-primary ${isMobile ? "text-m" : "text-base"}`}>{weekdaysTime}</div>
            </div>
            <div className={"flex flex-row my-3 rounded bg-light"}>
                <div  className={`w-50 p-2 text-secondary ${isMobile ? "text-m" : "text-lg"}`} >Sábado</div>
                <div className={`w-50 flex justify-end p-2 font-semibold text-primary ${isMobile ? "text-m" : "text-base"}`}>{satTime}</div>
            </div>
            <div className={"flex flex-row my-3 rounded bg-light"}>
                <div  className={`w-50 p-2 text-secondary ${isMobile ? "text-m" : "text-lg"}`} >Domingo</div>
                <div className={`w-50 flex justify-end p-2 font-semibold text-primary ${isMobile ? "text-m" : "text-base"}`}>{sunTime}</div>
            </div>
        </div>
    )
}