import Carousel from "../components/Carousel"
import ProductCard from "../components/Products/ProductCard"
import { screenSize } from "../hooks/screenSize"
import whatsIcon from "@/assets/icons/whatsIcon.png"

export default function Products(){
    const {isMobile, isTablet} = screenSize()
    const tcgImages =  [
        {
            id:1,
            src:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Pok%C3%A9mon_Trading_Card_Game_logo.svg/3840px-Pok%C3%A9mon_Trading_Card_Game_logo.svg.png",
            alt:"Pokemon"
        },
        {
            id:2,
            src:"https://www.pngall.com/wp-content/uploads/17/Lorcana-Card-Game-Fantasy-Adventure-PNG.png",
            alt:"Lorcana"
        },
        {
            id:3,
            src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0359f770-0e1b-4564-8d42-2f6de88fc7ae/diot04g-156ba36f-cc28-464a-a83a-d95f484f7e24.png/v1/fill/w_1280,h_364/digimon_card_game_logo_by_nepheskhaim_diot04g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzY0IiwicGF0aCI6Ii9mLzAzNTlmNzcwLTBlMWItNDU2NC04ZDQyLTJmNmRlODhmYzdhZS9kaW90MDRnLTE1NmJhMzZmLWNjMjgtNDY0YS1hODNhLWQ5NWY0ODRmN2UyNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UNzt-m-F8jW4HXdlgn5PikssRmCuZZi4Yx2U4xfMGBs",
            alt:"Digimon"
        },
        {
            id:4,
            src:"https://primary.jwwb.nl/public/v/q/v/temp-iepjklvymergdaaqbvsf/one-piece-high-6nldq8.png?enable-io=true&enable=upscale&crop=3.7736%3A1&width=800",
            alt:"OnePiece"
        }
    ]
    
    return(
        <div >
            <div className="flex flex-col items-center justify-center py-3 min-h-[30vh]">
                <div className="text-secondary font-bold text-xl p-2">Pregunta por los próximos lanzamientos</div> 
                <div className="flex items-center">
                    <div className="text-secondary font-bold text-md pr-3">Únete a nuestra comunidad de WhatsApp</div>
                    <a href="https://chat.whatsapp.com/H2T2PKO41JTE2IroxpvQJc" target="_blank">
                        <img className="w-10 h-10" src={whatsIcon}/>
                    </a>
                    
                </div>
                {isMobile || isTablet ? 
                <Carousel className="m-3">
          {tcgImages.map((images) => (
            <img
              key={images.id}
              src={images.src}
              alt={images.alt}
              className="w-50 h-25 mx-3"
            />
          ))}
                </Carousel>
                :
                <div className="flex  p-3">
                    {tcgImages.map((images) => (
                    <img
                    key={images.id}
                    src={images.src}
                    alt={images.alt}
                    className="w-50 h-25 mx-3 "
                    />
                    ))}
                </div>
                }
            </div>
            <div className={`bg-linear-to-r from-primary to-accent p-3 min-h-[60vh] `}>
                <div className="text-bold">Conoce nuestros productos imprecindibles </div>
                <div className={`${isMobile ? " flex flex-col items-center":"flex flex-wrap justify-around"}`}>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>

            </div>
        </div>
    )
}