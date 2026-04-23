import percent from "@/assets/icons/discountIcon.svg"
import Carousel from "../components/Carousel";
import PromoCard from "../components/Food/PromoCard";
import MenuCard from "../components/Food/MenuCard";
import { screenSize } from "../hooks/screenSize";
import drinkIcon from "@/assets/icons/drink.svg"
import forkIcon from "@/assets/icons/fork.svg"
import snack from "@/assets/icons/snack.svg"
import MenuItem from "../components/Food/MenuItem";
import BlueLine from "../components/Food/BlueLine";


export default function Food(){
    const {isMobile} = screenSize()
    return (
    <div>
        <div>
            <div className="flex flex-row justify-center py-3">
                <img className="w-8 h-8" src={percent} />
                <div className="text-secondary font-bold text-3xl">Promociones</div>
            </div> 
            <div className="p-2 flex justify-center my-5">
                <Carousel  className="max-w-4xl">
                    <PromoCard/>
                    <PromoCard/>
                    <PromoCard/>
                    <PromoCard/>
                    <PromoCard/>
                    <PromoCard/>
                    <PromoCard/>
                    <PromoCard/>
                </Carousel>
            </div>
        </div>


        <div className="bg-linear-to-r from-primary to-accent p-3 min-h-[60vh]">
            <div className="text-warning text-center text-2xl font-semibold py-4">Menú</div>
            <div className={`${!isMobile ? "flex justify-around" :""}`}>

                <MenuCard 
                icon={drinkIcon}
                iconSize="w-10 h-10"
                title="Bebidas"
                >
                    <MenuItem name="kk" price="20"/>
                    <BlueLine/>
                </MenuCard>
               

                <MenuCard 
                icon={snack}
                iconSize="w-7 h-7"
                title="Alimentos"
                >
                    <MenuItem name="kk" price="20"/>
                    <BlueLine/>
                </MenuCard>

                <MenuCard 
                icon={forkIcon}
                iconSize="w-7 h-7"
                title="Combos"
                >
                    <MenuItem name="kk" price="20"/>
                    <BlueLine/>
                </MenuCard>
            </div>
            
        </div>
    </div>
    )
}