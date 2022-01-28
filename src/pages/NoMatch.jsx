import sadFaceImg from '../images/sadface.gif';
import {Link} from "react-router-dom";

export const NoMatch = () => (
  <div className="flex flex-col items-center justify-center">
    <div>
      <img className="h-80 ml-auto mr-auto" src={sadFaceImg} alt="sad computer"/>
      <code className="font-semibold text-gray-700 text-2xl">
        &#123;
          status: 500,<br/>
          message: "Server Error"
        &#125;
      </code>
    </div>
    <p className="text-gray-500 mt-6">This is a bad request. Please try again later.</p>
  </div>
)


