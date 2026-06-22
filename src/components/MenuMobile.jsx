import { Link } from "react-router-dom";
import menuSvg from "../assets/icons/menu.svg"
import pokeIcon from "../assets/icons/pokeIcon.png"
import Modal from "./Modal"
import { useState } from "react";


export default function MenuMobile(){
      const [open, setOpen] = useState(false);
    return(
        <div>
            <button onClick={()=>setOpen(true)}>
                <img className="w-8 h-8" src={menuSvg}/>
            </button>

        
        <Modal isOpen={open} onClose={() => setOpen(false)}>
            
            <div className="m-3">
            <div className="m-2 my-5 flex flex-row justify-between">
                <img className="w-6 h-6" src={pokeIcon}/>
                <div className="text-secondary px-3 font-bold">El bichokun</div>
                <img className="w-6 h-6" src={pokeIcon}/>
            </div>
            <Link to="/" onClick={()=>setOpen(false)} >
            <div className="bg-accent rounded-md m-2 p-2 text-white text-center">
                Inicio
            </div>
            </Link>
            <Link to="/food" onClick={()=>setOpen(false)} >
            <div className="bg-accent rounded-md m-2 p-2 text-white text-center">
                Alimentos
            </div>
            </Link>
            <Link to="/products" onClick={()=>setOpen(false)}>
            <div className="bg-accent rounded-md m-2 p-2 text-white text-center">
                Productos
            </div>
            </Link>


            <div className="bg-red-300 rounded-md m-2 p-1 text-white text-center" onClick={()=>setOpen(false)}>
                Cerrar
            </div>

            </div>

        </Modal>
        </div>
    )
}