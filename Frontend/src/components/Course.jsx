import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
  
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
            <div className='mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white '>
                <h1 className='text-2xl  md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here  :)</span>  </h1>
                <p className='mt-12'>Explore our curated selection of book-related courses designed for avid readers, aspiring writers, and literature enthusiasts. From creative writing and literary analysis to publishing basics and book marketing, our courses empower you to grow your skills and passion. Learn at your own pace with expert-led modules and interactive content. Start your literary journey with us today!</p>

                <Link to="/"><button className='btn btn-secondary mt-6  hover:bg-pink-700'>Back</button></Link>
                
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-4'>
               {

                    list.map((item)=>(
                        <Cards item={item} key={item.id} />
                    ))
               }
            </div>
        </div>
    </>
  )
}

export default Course
