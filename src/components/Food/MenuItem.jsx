export default function MenuItem({name, price}){
    return(
        <div className="flex flex-row py-2">
            <div className="text-secondary w-1/2">{name}</div>
            <div className="text-primary w-1/2 flex justify-end font-semibold">${price} </div>
        </div>
    )
}