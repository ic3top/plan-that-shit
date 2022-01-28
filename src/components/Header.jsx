import {Link} from "react-router-dom";
import { AiOutlineQuestionCircle } from "react-icons/all";
import {Timer} from "./Timer";

export const Header = () => (
  <div className="shadow-lg px-12 py-2 flex justify-between items-center bg-white">
    <Link to="/" className="text-4xl text-blue-400 font-bold">Plan That Shit</Link>
    <div className="flex items-center gap-4">
      <Timer className="text-gray-400 font-semibold" />
      <button>
        <AiOutlineQuestionCircle color="gray"  size={30} />
      </button>
    </div>
  </div>
)
