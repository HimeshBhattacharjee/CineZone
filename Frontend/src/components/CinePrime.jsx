import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import axios from "axios";

function CinePrime() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("http://localhost:4001/movie");
        const data = (res.data.filter(data => data.priceCategory === "Prime"));
        setMovie(data);
      } catch (error) {
        console.log(error)
      }
    }
    getMovie();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white dark:border border-black">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            Welcome to the {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">Movie Plaza</span>
          </h1>
          <p className="mt-12">
            Find Cinema's Finest, All in One Place. Our Prime Picks for Your Prime Time Viewing.
          </p>
          <Link to="/">
            <button className="mt-6 bg-gradient-to-r from-violet-600 to-red-600 text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-gradient-to-b duration-300">Back to Home</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {
            movie.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default CinePrime
