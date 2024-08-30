import React from 'react'

const FilterTab = () => {
    return (
        <div className='mx-32 bg-white rounded-3xl p-2 flex justify-around'>
            <div>
                <h3>Filter</h3>
            </div>
            <div className='flex gap-5'>
                <h3>What Technology</h3>
                <select id='what_technology '>
                    <option value="abc" > Product Design</option>
                </select>
            </div>
            <div className='flex gap-5'>
                <h3>Where From</h3>
                <select id='what_technology'>
                    <option value="abc"> Europe</option>
                </select>
            </div>
            <div className='flex gap-5'>
                <h3>Sort By</h3>
                <select id='what_technology'>
                    <option value="abc"> Popular</option>
                </select>
            </div>
        </div>
    )
}

export default FilterTab