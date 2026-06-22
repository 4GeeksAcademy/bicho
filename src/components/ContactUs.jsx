import whatsIcon from "@/assets/icons/whatsIcon.png"
import { screenSize } from "../hooks/screenSize"

export default function ContactUs(){
    const { isMobile, isTablet} = screenSize()
    return (
        <a 
        className="fixed bottom-6 right-6 z-50"
        href="https://wa.me/525547867015" 
        target="_blank"
        rel="noopener noreferrer"
        >
            <img className={`${isMobile || isTablet ? "w-12 h-12" : "w-15 h-15"}`} src={whatsIcon}/>
        </a>
    )
}


