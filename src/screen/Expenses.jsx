import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { TbLogout2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const Expenses = () => {
    const navigate = useNavigate();
    const [addEntry, setAddEntry] = useState(true);
    return (
        <>
            <div className='bg-[#67adff] text-white h-screen flex flex-col'>
            <button onClick={()=>navigate('/')}><TbLogout2 size={30} className='ml-auto mr-5 mt-5 font-bold'/></button>
                <div className='h-16 bg-white mt-5 w-3/4 mx-auto rounded-xl flex'>
                    <p className='text-black text-3xl font-semibold my-auto mx-auto'>Branch 1</p>
                </div>
                <div className='h-12 bg-gray-200 mt-5 w-3/6 mx-auto rounded-xl flex'>
                    <p className='text-black text-2xl font-semibold my-auto mx-auto'>Expense</p>
                </div>
                {addEntry ? <div className='h-12 bg-gray-200 mt-5 w-2/6 mx-auto rounded-xl flex'>
                    <button onClick={() => setAddEntry(false)} className='text-black text-2xl font-semibold my-auto mx-auto w-full h-full'>Create</button>
                </div> : <div className='h-12 bg-gray-200 mt-5  w-3/4 mx-auto rounded-xl flex'>
                    <input type="text" className='rounded-l-xl px-3 w-3/4 border-r text-black' placeholder='What...?' />
                    <input type="number" className='px-3 w-1/3  text-black' placeholder='Rs.' />
                    <button onClick={() => setAddEntry(true)} className='rounded-r-xl px-3 ml-auto w-1/3 bg-[#39dc40]  text-lg font-semibold hover:bg-green-600' >Create</button>
                </div>}
                <table className="min-w-full table-auto mt-5">
                    <thead>
                        <tr className="bg-white text-gray-600 uppercase text-lg leading-normal">
                            <th className="py-3 px-6 text-center">What</th>
                            <th className="py-3 px-6 text-center">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="text-white text-lg font-semibold">
                        <tr className="border-b border-black hover:bg-gray-100 hover:text-black">
                            <td className="py-3 px-6 text-center whitespace-nowrap">Item 1</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">100</td>
                        </tr>
                        <tr className="border-b border-black hover:bg-gray-100 hover:text-black">
                            <td className="py-3 px-6 text-center whitespace-nowrap">Item 2</td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">200</td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <footer
                className="bg-[#1774e2] 
             text-3xl text-white text-center 
             
             fixed 
             inset-x-0 
             bottom-0 
             p-4">
                <NavBar />
            </footer>
        </>
    )
}

export default Expenses