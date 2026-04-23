import trophy from "@/assets/icons/trophySvg.svg"
import CoverImage from "../components/Home/CoverImage.jsx";
import ScheduleCard from "../components/Home/ScheduleCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { screenSize } from "../hooks/screenSize.jsx";
import TournamentCard from "../components/Home/TournamentCard.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const {isMobile, isTablet} = screenSize()

	return (
		<div className="bg-muted">
			<CoverImage/>
			<div className="font-bold text-3xl text-center text-secondary pt-4">
				Nuestras sucursales
			</div>
			<div className={`my-5 ${isMobile ? "justify-center" : "flex flex-row justify-evenly"}`}>
				<ScheduleCard 
				title="Friki Plaza"
				location="Av. Costa Maya Smz 228 Mz 22 Lote 1, 77516 Cancún, Q.R."
				urlLocation="https://maps.app.goo.gl/wTj5gkfzNjQsh3BM7"
				weekdaysTime="12:00 pm a 8:00 pm"
				satTime="12:00 pm a 8:00 pm"
				sunTime="12:00 pm a 8:00 pm"
				/>
				<ScheduleCard
				title="Palenque"
				location="Playa Carey 1 local 3 esq. Palenque, 77528 Cancún, Q.R."
				urlLocation="https://maps.app.goo.gl/iWjijk9YfN8moKtH8"
				weekdaysTime="4:00 pm a 11:00 pm"
				satTime="4:00 pm a 11:00 pm"
				sunTime="Cerrado "
				/>
			</div>
			<div className="bg-linear-to-r from-primary to-accent">
				<div className="flex justify-center pt-6">
				<img className="w-10 h-10 " src={ trophy }/>
				<div className="text-white text-3xl font-bold">Torneos y actividades</div>
				</div>	
				<div className="text-center text-white py-2 ">Participa y demuestra tu habilidad!</div>	
				<div className={` justify-center py-4 ${!isMobile ? "flex flex-wrap":""}`}>
					<TournamentCard
					day="Lunes"
					activity="Pokemon"
					time="7:30 pm"
					location="Palenque"
					/>
					<TournamentCard
					day="Martes"
					activity="Lorcana"
					time="6:00 pm"
					location="Palenque"
					/>
					<TournamentCard
					day="Miercoles"
					activity="Pokemon"
					time="7:30 pm"
					location="Palenque"
					/>
					<TournamentCard
					day="Jueves"
					activity="Digimon | Pinta figuras"
					time="6:30 pm | 4:00 pm"
					location="Palenque"
					/>
					<TournamentCard
					day="Viernes"
					activity="Pokemon"
					time="7:30 pm"
					location="Palenque"
					/>
					<TournamentCard
					day="Sabado"
					activity="Juegos de mesa"
					time="16:00 pm"
					location="Palenque"
					/>
					<TournamentCard
					day="Domingo"
					activity="Pokemon"
					time="4:30 pm"
					location="Friki Plaza"
					/>
				</div>	
				
			</div>
			

		</div>
	);
}; 