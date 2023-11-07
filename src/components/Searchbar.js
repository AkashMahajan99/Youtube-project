import React, { useEffect, useState } from 'react'
import { AUTOSUGGESTION_SEARCH_URL } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { cacheSearchResult } from '../redux/cacheSearchSlice';
import Magnifier from "../components/assets/magnifier.svg";
import { Link } from 'react-router-dom';
const Searchbar = () => {
  const [searchvalue, setSearchvalue] = useState('');
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  const [showSuggestions,setShowsuggestions] = useState(false);
  const cacheResult = useSelector((store) => store.cacheSearch);
  const dispatch = useDispatch();
  useEffect(() => {
    const CORS_PROXY = `https://corsproxy.io/?`

    const getSearchSuggestions =async() =>{
      const data = await fetch(`${CORS_PROXY}${AUTOSUGGESTION_SEARCH_URL}${searchvalue}`);
      const json = await data.json();
      setSearchSuggestion(json[1]);
      dispatch(
        cacheSearchResult({
          [searchvalue]: json[1],
        })
      );
    }
   
    const timer = setTimeout(() => {
      if (cacheResult[searchvalue]) {
          setSearchSuggestion(cacheResult[searchvalue])
      } else {
        getSearchSuggestions();
      }
    }, 400);
    
    return () => {
      clearTimeout(timer);
  }
  },[searchvalue])
  return (
    <>
    <div className='flex flex-col'>
    <form className='flex flex-row relative' >
      <input 
       className="placeholder:pl-3 placeholder-gray-500 border-2 rounded-l-3xl border-r-0 h-9 w-96 pl-3 "
                       
                        placeholder='Search' 
                        type="text" 
                        value={searchvalue}
                        onChange={(e) =>setSearchvalue(e.target.value)}
                        onFocus={() => setShowsuggestions(true)}/>
    <button className='border-2 rounded-r-3xl bg-gray-100 border-l-0 w-16 h-9'><img className='w-5 h-5 mx-auto' src={Magnifier} alt="" /></button>
    </form>
    {showSuggestions && searchSuggestion.length > 0 && <ul className='absolute top-10 rounded-lg border-gray-900 bg-white hover:bg-gray-400-200 w-96 shadow-lg py-2'>
                    {searchSuggestion.map((item) => {
                        console.log(item)
                        return <form>
                            <Link
                                key={item.id}
                                to='/searchResults'
                                state={{ searchedQuery: item }}
                                onClick={() => { setSearchvalue("") }}
                                className='flex items-center pt-3 px-5 hover:bg-gray-50 font-semibold text-slate-700'>
                               <img src={Magnifier} alt="maginfierIcon" className='h-5 w-5 mr-4' />  
                                {item}
                            </Link>
                        </form>
                    })}
                </ul>}
    </div>
    </>
  )
}

export default Searchbar