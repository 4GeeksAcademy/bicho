export default function PromoCard(){
    return (
        <div className="min-w-[250px] h-[140px] bg-linear-to-r from-warning to-light rounded-xl shadow-md hover:scale-105 p-3 flex flex-col justify-between">
            <div className=" flex justify-end">
                <div className="bg-primary text-xs rounded-full text-white px-2">martes y jueves</div>
            </div>
            <div className="text-secondary font-semibold text-lg" >titulo</div>
            <div className="text-gray-400" >incluye</div>
            <div className="flex justify-around ">
                <div className="text-secondary font-semibold text-lg" >$150</div>
                <div className="text-gray-500 line-through" >$130</div>
            </div>
        </div>
    )
}