import { Link } from "react-router-dom";
import { screenSize } from "../hooks/screenSize";
import bichoLogo from "../assets/img/bichologo.png"
import cartSvg from "../assets/icons/cart.svg"
import menuSvg from "../assets/icons/menu.svg"
import MenuMobile from "./MenuMobile";

export const Navbar = () => {

	const {isMobile,isTablet, isLaptop, isDesktop} = screenSize()

	return (
		<nav className="bg-primary w-full  ">
			<div className="flex items-center justify-between p-4">
				{isMobile || isTablet ? <MenuMobile/>: 
				<>
				<Link to="/">
					<div className="flex-row px-3">
						<img className="h-15 w-15" src={bichoLogo} />
					</div>
				</Link>
				<div className="flex flex-row">
				<Link to="/">
					<div className="text-lg text-white font-medium px-3">Inicio</div>
				</Link>
				<Link to="/products">
					<div className="text-lg text-white font-medium px-3">Productos</div>
				</Link>
				</div>
				</>
				}				
				<div>
					<Link to="/cart">
						<button className="btn btn-primary">
							<img className="w-7" src={cartSvg}/>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
