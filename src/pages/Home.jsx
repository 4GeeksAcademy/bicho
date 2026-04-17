import bichoLogo from "../assets/img/bichologo.png";
import CoverImage from "../components/Home/CoverImage.jsx";
import ScheduleCard from "../components/Home/ScheduleCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="bg-light h-screen">
			<CoverImage/>
			<ScheduleCard/>

		</div>
	);
}; 