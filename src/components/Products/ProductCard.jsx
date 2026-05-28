import { screenSize } from "../../hooks/screenSize"

export default function ProductCard(){
    const {isDesktop, isMobile, isLaptop,isTablet} = screenSize()
    return(
        <div className={`m-2 h-80 border rounded-lg flex flex-col ${isMobile || isDesktop ? "w-xs":  "w-2xs"}`}>
            <div className="flex-[3] overflow-hidden">
                <img 
                src="https://antiquestore.com.mx/wp-content/uploads/2024/07/dragon-shield-matte-card-sleeves-various-colors_1__08186.webp" 
                alt="DragonShield"
                className="w-full h-full  rounded-t-lg "
                />
            </div>
            <div className="flex-1 rounded-b-lg p-3 bg-linear-to-r from-light to-muted">
                <div className="flex justify-between py-2">
                    <div className="text-primary font-semibold text-lg">Micas Dragon Shield</div>
                    <div className="text-lg text-secondary font-bold">$250</div>
                </div>
                <div className="text-sm">Micas tamaño estandar ideales para Magic, Pokemon, One Piece entre otros. Pregunta por disponibilidad de colores</div>
            </div>
        </div>
    )
}