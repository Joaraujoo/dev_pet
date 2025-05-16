import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header(){
    return(
        <header className="w-full h-13 p-6 bg-[#02735E] flex justify-between items-center">
            <Link to="/" className="font-bold text-white text-2xl">DogCat</Link>

            <Link to="/cart" className="text-white mr-2 relative">
                <FiShoppingCart size={24}/>
                <span className="absolute left-3 bottom-2 bg-[#034159] rounded-full w-6 h-6 flex items-center justify-center">
                    2
                </span>
            </Link>
        </header>
    )
}