import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const FilterTab = () => {
    return (
        <div className='mx-14 border-2 bg-white rounded-3xl p-2 flex justify-around'>
            <div>
                <h3>Filter</h3>
            </div>
            <div className='border-2 rounded-full border-amber-950 flex justify-center  items-center justify-items-center'>
        <i className='flex mt-1 text-[20px]'>< IoSearchOutline className='scale-125 p-1 mx-3 ' id='search_logo'/></i>
        
        <input placeholder='Search...' className='outline-none bg-transparent' />     
        
      </div>
            <div className='flex gap-5'>
                <h3> For What </h3>
                <select id='what_technology ' className='outline-none items-center '>
                    <option value="abc" > ChildCare</option>
                    <option value="abc" >Animal Welfare </option>
                    <option value="abc" > Enviroment</option>
                    <option value="abc" > Natural Disaster</option>
                    <option value="abc" > Education</option>
                </select>
            </div>
            
            <div className='flex gap-5'>
                <h3>Sort By</h3>
                <select id='what_technology' className='outline-none'>
                    <option value="abc">emergency</option>
                    <option value="abc">latest</option>
                    <option value="abc">Most needy</option>
                </select>
            </div>
        </div>
    )
}

export default FilterTab