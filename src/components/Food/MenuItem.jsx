export default function MenuItem({item}){
    return(
        <div className="py-2">
            <div className="flex flex-row ">
            <div className="text-secondary w-1/2">{item.name}</div>
            <div className="text-primary w-1/2 flex justify-end font-semibold">${item.price} </div>
            </div>
             <div className="border border-accent"/>

        </div>
    )
}