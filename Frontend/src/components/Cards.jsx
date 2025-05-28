import React from 'react'
function Cards({ item }) {
  return (
    <>
      <div className='mt-3 my-3 p-10'> 
        <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
          <figure>
            <img
              src={item.image}
              alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline cursor-pointer hover:bg-pink-500  hover:text-white duration-200">${item.price}</div>
              <div className="badge badge-outline cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500  hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards
