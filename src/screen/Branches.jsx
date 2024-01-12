import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Branches = () => {
  const [inputbox, setInputbox] = useState(true);
  const [addbranch, setAddbranch] = useState(false);
  const navigate =useNavigate()


  return (
    <div className='bg-[#67adff] text-white h-screen flex flex-col'>
      <p className='text-5xl font-semibold text-center my-40'>MiB Saloon</p>
      <div className='flex flex-col mt-auto mb-40'>
         {/* Branch 1 */}
      <div className='bg-white text-black flex rounded-xl w-3/4 h-16 mt-10 mx-auto'>
        {inputbox ? <button onClick={() => setInputbox(false)} className='my-auto mx-auto font-bold text-3xl w-full h-full'>Branch 1</button> : <div className='flex w-full'>
          <input type='password' className='my-auto font-bold text-xl lg:text-3xl w-3/4  h-full rounded-l-xl px-3' placeholder={`Branch 1 Passcode`} />
          <button onClick={()=>navigate('/entries')} className='my-auto w-1/4 font-bold text-white text-xl lg:text-2xl bg-[#39dc40] hover:bg-green-600 pr-2 h-full rounded-r-xl'>Login</button>
        </div>}
      </div>
      {/* Branch 2 */}
      <div className='bg-white text-black flex rounded-xl w-3/4 h-16 mt-10 mx-auto'>
        {inputbox ? <button onClick={() => setInputbox(false)} className='my-auto mx-auto font-bold text-3xl w-full h-full'>Branch 2</button> : <div className='flex w-full'>
          <input type='password' className='my-auto font-bold text-xl lg:text-3xl w-3/4   h-full rounded-l-xl px-3' placeholder={`Branch 2 Passcode`} />
          <button onClick={()=>navigate('/entries')} className='my-auto w-1/4 lg:3/4 font-bold text-white text-xl lg:text-2xl bg-[#39dc40] hover:bg-green-600 pr-2 h-full rounded-r-xl'>Login</button>
        </div>}
      </div>
      {/* Branch 3 */}
      <div className='bg-white text-black flex rounded-xl w-3/4 h-16 mt-10 mx-auto'>
        {inputbox ? <button onClick={() => setInputbox(false)} className='my-auto mx-auto font-bold text-3xl w-full h-full'>Branch 3</button> : <div className='flex w-full'>
          <input type='password' className='my-auto font-bold text-xl lg:text-3xl w-3/4  h-full rounded-l-xl px-3' placeholder={`Branch 3 Passcode`} />
          <button onClick={()=>navigate('/entries')} className='my-auto w-1/4 lg:3/4 font-bold text-white text-xl lg:text-2xl bg-[#39dc40] hover:bg-green-600 pr-2 h-full rounded-r-xl'>Login</button>
        </div>}
      </div>

      {/* {addbranch && <div className='bg-white text-black flex rounded-xl w-3/4 h-16 mt-10 mx-auto'>
        {inputbox ? <button onClick={() => setInputbox(false)} className='my-auto mx-auto font-bold text-3xl w-full h-full'>Branch 4</button> : <div className='flex w-full'>
          <input type='password' className='my-auto font-bold text-xl lg:text-3xl w-3/4  h-full rounded-l-xl px-3' placeholder={`Branch 4 Passcode`} />
          <button onClick={()=>navigate('/entries')} className='my-auto w-1/4 lg:3/4 font-bold text-white text-xl lg:text-2xl bg-[#39dc40] hover:bg-green-600 pr-2 h-full rounded-r-xl'>Login</button>
        </div>}
      </div>}
      <div className='bg-white text-black flex rounded-xl w-1/4 h-16 mt-10 mx-auto'>
        <button onClick={() => setAddbranch(true)} className='my-auto mx-auto w-full h-full font-bold text-3xl'>+</button>
      </div> */}
     </div>
    </div>
  )
}

export default Branches