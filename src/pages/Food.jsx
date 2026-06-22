import percent from "@/assets/icons/discountIcon.svg"
import Carousel from "../components/Carousel";
import PromoCard from "../components/Food/PromoCard";
import MenuCard from "../components/Food/MenuCard";
import { screenSize } from "../hooks/screenSize";
import drinkIcon from "@/assets/icons/drink.svg"
import forkIcon from "@/assets/icons/fork.svg"
import snack from "@/assets/icons/snack.svg"
import MenuItem from "../components/Food/MenuItem";
import food from "@/lists/food.js"
import drinks from "@/lists/drinks.js"
import combos from "@/lists/combos.js"
import promos from "@/lists/promos.js"


export default function Food(){
    const {isMobile} = screenSize()
    return (
    <div>
        <div>
            <div className={`${isMobile ? " font-semi-bold text-xl py-3" : "  font-semi-bold text-3xl py-3" } text-secondary text-center`}>
              Deleitate con un snack mientras te diviertes!
            </div>
            <div className="text-secondary text-center py-3">
              (Alimentos disponibles solo en sucursal Palenque)
            </div>
            <div className="flex flex-row justify-center py-3">
                <img className="w-8 h-8" src={percent} />
                <div className="text-secondary font-bold text-3xl">Promociones</div>
            </div> 
            <div className="p-2 flex justify-center my-5">
                <Carousel  className="max-w-4xl">
                    {promos.map((promo)=>(
                        <PromoCard key={promo.id} promo={promo}/>
                    ))}

                </Carousel>
            </div>
        </div>


        <div className="bg-linear-to-r from-primary to-accent p-3 min-h-[60vh]">
            <div className="text-warning text-center text-2xl font-semibold py-4">Menú</div>
            <div className={`${!isMobile ? "flex justify-around" :""}`}>

                <MenuCard 
                icon={snack}
                iconSize="w-7 h-7"
                title="Alimentos"
                >
                    {food.map((food)=>(
                        <MenuItem key={food.id} item={food}/>
                    ))}
                </MenuCard>

                <MenuCard 
                icon={drinkIcon}
                iconSize="w-10 h-10"
                title="Bebidas"
                >
                    {drinks.map((drink)=>(
                        <MenuItem key={drink.id} item={drink}/>
                    ))}
                    
                </MenuCard>



                <MenuCard 
                icon={forkIcon}
                iconSize="w-7 h-7"
                title="Combos (incluyen bebida)"
                >
                    {combos.map((combo)=>(
                        <MenuItem key={combo.id} item={combo}/>
                    ))}
                
                </MenuCard>
            </div>
            
        </div>
    </div>
    )
}