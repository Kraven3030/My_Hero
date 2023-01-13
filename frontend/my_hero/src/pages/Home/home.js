import { Link, useNavigate } from "react-router-dom";
import './home.css'

function Home() {
    return (
        <body>


            <div className="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-full w-96 h-96" src="/my-hero-high-resolution-color-logo.png" alt="My Hero Logo" />
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Welcome to the <strong
                    className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">My Hero </strong>
                    universe. Where you can escape the harsh climate of the real world</h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Here at My Hero users can search for their favorite super heroes to gain
                    more knowledge about them or to find what comics, movies, or tv shows they
                    may have appeared in.</p>
                <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a href="#" className="w-full sm:w-auto focus:ring-4 focus:outline-none text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
                        <div className="text-left">
                            <Link to="/login"><button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Login</button></Link>
                        </div>
                    </a>
                </div>
            </div>


        </body>
    )
}

export default Home