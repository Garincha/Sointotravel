import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem';

function List() {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex justify-center mt-5">
        <div className="listWrapper max-w-5xl sm:grid sm:grid-cols-4 gap-5 px-4 mx-auto text-sans">
          <div className="listSearch bg-stone-200 /80 p-2.5 rounded-xl sm:sticky top-2.5 h-max">
            <h2 className="listSearchTitle text-xl text-gray-800 mb-2.5 font-semibold">Search</h2>
            <div className="lsItem flex flex-col gap-1 mb-2.5">
              <label className='text-xs'>Destination</label>
              <input className='border-none outline-none p-2 h-8 text-xs' type="text" placeholder='Where are you  going?' value={destination}
                onChange={e => setDestination(e.target.value)} name="destination" id="" />
            </div>
            <div className="lsItem flex flex-col gap-1 mb-2.5">
              <label className='text-xs'>Check-in Date</label>
              <span className='p-2 h-8 bg-white flex items-center cursor-pointer text-xs font-medium' onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem flex flex-col gap-1 mb-2.5">

              <label>Options</label>
              <div className="lsOptions p-2.5">
                <div className="lsOptionItem flex justify-between mb-2.5 text-[#555] text-xs">
                  <span className="lsOptionText font-sans">
                    Min price <small> per night</small>
                  </span>
                  <input type="number" className='lsOptionInput w-12' />
                </div>
                <div className="lsOptionItem flex justify-between mb-2.5 text-[#555]  text-xs">
                  <span className="lsOptionText font-sans">
                    Max price <small> per night</small>
                  </span>
                  <input type="number" className='lsOptionInput w-12' />
                </div>
                <div className="lsOptionItem flex justify-between mb-2.5 text-[#555]  text-xs">
                  <span className="lsOptionText font-sans">
                    Adult
                  </span>
                  <input min={1}
                    value={options.adult}
                    type="number"
                    className='lsOptionInput w-12'
                    onChange={e => setOptions(e.target.value)} />
                </div>
                <div className="lsOptionItem flex justify-between mb-2.5 text-[#555]  text-xs">
                  <span className="lsOptionText font-sans">
                    Children
                  </span>
                  <input min={0}
                    value={options.children}
                    type="number"
                    className='lsOptionInput w-12'
                    onChange={e => setOptions(e.target.value)} />
                </div>
                <div className="lsOptionItem flex justify-between mb-2.5 text-[#555]  text-xs">
                  <span className="lsOptionText font-sans">
                    Room
                  </span>
                  <input min={1}
                    value={options.room}
                    type="number"
                    className='lsOptionInput w-12'
                    onChange={e => setOptions(e.target.value)} />
                </div>
              </div>
            </div>
            <button className='p-2.5 bg-[#F2784B] text-white text-sans text-xl cursor-pointer border-none hover:bg-[#ba4920] w-full rounded-sm font-medium'>Search</button>
          </div>

          <div className="listResult col-span-3">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />

          </div>
        </div>

      </div>
    </div>
  )
}

export default List