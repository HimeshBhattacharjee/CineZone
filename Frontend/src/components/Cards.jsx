import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card bg-base-92 w-100 shadow-xl min-h-[38rem] hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img className="rounded-md w-[300px] h-[400px]"
                            src={item.img}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.genre}
                            <div className="badge badge-secondary">{item.priceCategory}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">Rs. {item.price}</div>
                            <div className="cursor-pointer px-2 py-1 rounded-full border-[1px] hover:bg-violet-500 hover:text-white duration-200">Watch Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards