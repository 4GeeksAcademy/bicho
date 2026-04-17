import { screenSize } from "../../hooks/screenSize"

export default function CoverImage(){
	const {isMobile, isTablet} = screenSize()
    return (
        	<div className="h-full max-h-1/3 bg-cover bg-[url(@/assets/img/coverImage.jpg)]">
				<div className="flex items-center justify-center h-full ">
					<div>
						<div className={`text-white  font-semi-bold p-2 ${!isMobile || !isTablet ? "text-4xl":"text-5xl"}`}>La aventura</div>
						<div className={` text-light font-bold p-2 ${!isMobile || !isTablet ? "text-6xl": "text-4xl"}`}>Comienza en Bichokun</div>
					</div>
  				</div>
			</div>
    )
}

