import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';

function Header({ type }) {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1,
        }
    );
    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } })
    }

    return (
        <div className="header flex relative text-white justify-center bg-[#f2784b] ">


            <div className={type === "list" ? "headerContainer w-full max-w-5xl mt-5 mx-auto px-8" : "headerContainer w-full max-w-5xl mb-24 mt-5 mx-auto px-8"}>
                <div className='headerList hidden sm:flex gap-10 mb-12'>
                    <div className="headerListItem flex items-center gap-2.5 active:border-solid border-white border p-2 rounded-3xl">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5 active:border-solid active:border-white active:border active:p-2 active:rounded-3xl">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5 active:border-solid active:border-white active:border active:p-2 active:rounded-3xl">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5 active:border-solid active:border-white active:border active:p-2 active:rounded-3xl">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem flex items-center gap-2.5 active:border-solid active:border-white active:border active:p-2 active:rounded-3xl">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1 className='text-3xl font-bold'>A lifetime of discounts? It's Genius</h1>
                        <p className='my-5 mx-0'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Sointotravel account</p>
                        <button type='button' className='bg-[#ffa978] text-white font-bold font-sans p-2.5 cursor-pointer hover:bg-[#ba4920] rounded-sm shadow-md'>Sign in / Register</button>
                        <div className="mobileSearch w-full bg-[#febb02] p-1.5 rounded-md max-w-5xl mt-5 sm:hidden">
                            <div className="mobileSearchItem w-full flex items-center gap-2.5 bg-white h-12 mb-1.5">
                                <FontAwesomeIcon icon={faBed} className='text-gray-400/80 ml-2' />
                                <input type="text" name=""
                                    value={destination}
                                    onChange={e => setDestination(e.target.value)}
                                    placeholder='Where are you  going?'
                                    className='headerSearchInput text-gray-500 font-medium font-sans active:text-gray-300 border-none outline-none w-full'
                                />
                            </div>
                            <div className="mobilerSearchItem w-full flex items-center gap-2.5 bg-white h-12 mb-1.5">
                                <FontAwesomeIcon icon={faCalendarDays} className='text-gray-400/80 ml-2' />
                                <span onClick={() => setOpenDate(!openDate)} placeholder='Check-in - Check-out' className='headerSearchDate text-gray-500 font-medium font-sans active:text-gray-300 cursor-pointer'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    value={openDate}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date absolute top-9'
                                />}
                            </div>
                            <div className="mobileSearchItem w-full flex items-center gap-2.5 bg-white h-12 mb-1.5 relative">
                                <FontAwesomeIcon icon={faPerson} className='text-gray-400/80 ml-2' />
                                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText text-gray-500 font-medium font-sans active:text-gray-300 cursor-pointer'> {` ${options.adult} adult - ${options.children} children - ${options.room} room `}</span>
                                {openOptions && <div className="options absolute top-9 bg-white text-gray-500 rounded shadow w-full">
                                    <div className="optionItem w-52 flex justify-between m-2.5">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCount flex items-center gap-2.5 text-xs">
                                            <button disabled={options.adult <= 1} class="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.adult}</span>
                                            <button className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem w-52 flex justify-between m-2.5">
                                        <span className="optionText">Children</span>
                                        <div className="optionCount flex items-center gap-2.5 text-xs">
                                            <button disabled={options.children <= 0} className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("children", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.children}</span>
                                            <button className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem w-52 flex justify-between m-2.5">
                                        <span className="optionText">Room</span>
                                        <div className="buttonCount flex items-center gap-2.5 text-xs">
                                            <button disabled={options.room <= 1} className="inline-flex items-center justify-center w-5 h-5  text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("room", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.room}</span>
                                            <button className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="mobileSearchItem w-full flex items-center gap-2.5">
                                <button type='button' onClick={handleSearch} className='bg-[#ba4920] text-white font-sans text-xl w-full font-medium py-1.5 px-8 cursor-pointer hover:bg-[#ffa978] rounded-sm'>Search</button>
                            </div>

                        </div>
                        <div className="headerSearch hidden z-10 sm:flex items-center h-12 text-sm bg-white border-2 border-solid border-[#febb02] justify-around py-2.5 rounded-md absolute -bottom-5 w-full max-w-5xl -ml-8">
                            <div className="headerSearchItem flex items-center gap-2.5">
                                <FontAwesomeIcon icon={faBed} className='text-gray-300' />
                                <input type="text" name=""
                                    value={destination}
                                    onChange={e => setDestination(e.target.value)}
                                    placeholder='Where are you  going?'
                                    className='headerSearchInput text-gray-500 font-medium font-sans active:text-gray-300 border-none outline-none'
                                />
                            </div>
                            <div className="headerSearchItem flex items-center gap-2.5">
                                <FontAwesomeIcon icon={faCalendarDays} className='text-gray-300 ' />
                                <span onClick={() => setOpenDate(!openDate)} placeholder='Check-in - Check-out' className='headerSearchDate text-gray-500 font-medium font-sans active:text-gray-300 cursor-pointer'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    value={openDate}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date absolute top-9'
                                />}
                            </div>
                            <div className="headerSearchItem flex items-center gap-2.5">
                                <FontAwesomeIcon icon={faPerson} className='text-gray-300' />
                                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText text-gray-500 font-medium font-sans active:text-gray-300 cursor-pointer'> {` ${options.adult} adult - ${options.children} children - ${options.room} room `}</span>
                                {openOptions && <div className="options absolute top-9 bg-white text-gray-500 rounded shadow">
                                    <div className="optionItem w-52 flex justify-between m-2.5">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCount flex items-center gap-2.5 text-xs">
                                            <button disabled={options.adult <= 1} class="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("adult", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.adult}</span>
                                            <button className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("adult", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem w-52 flex justify-between m-2.5">
                                        <span className="optionText">Children</span>
                                        <div className="optionCount flex items-center gap-2.5 text-xs">
                                            <button disabled={options.children <= 0} className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("children", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.children}</span>
                                            <button className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("children", "i")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem w-52 flex justify-between m-2.5">
                                        <span className="optionText">Room</span>
                                        <div className="buttonCount flex items-center gap-2.5 text-xs">
                                            <button disabled={options.room <= 1} className="inline-flex items-center justify-center w-5 h-5  text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("room", "d")}>-</button>
                                            <span className='optionCounterNumber'>{options.room}</span>
                                            <button className="inline-flex items-center justify-center w-5 h-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800" onClick={() => handleOption("room", "i")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem flex items-center gap-2.5">
                                <button type='button' onClick={handleSearch} className='bg-[#ba4920] text-white font-sans text-xl font-medium py-1.5 px-8 cursor-pointer hover:bg-[#ffa978] rounded-sm'>Search</button>
                            </div>
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default Header