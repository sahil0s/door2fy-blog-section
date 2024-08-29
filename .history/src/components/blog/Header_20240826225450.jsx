import React from 'react'

const Categories = [{name: 'React'}]

const Header = () =>{
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-400 py-8'>
                <div className='md:float-left block'>
                   <link href=''>
                        <span className='cursor-point font-blod text-4xl text-white'>
                                Door2fy blogs
                        </span>
                   </link>
                </div>
                    <div className='hidden md:float-left md:contents'>

                    </div>
            </div>
        </div>
    )
}

export default Header;