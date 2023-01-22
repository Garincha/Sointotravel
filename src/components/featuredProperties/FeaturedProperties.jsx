import React from 'react'

function FeaturedProperties() {
    return (

        <div className='pList max-w-xl sm:max-w-4xl lg:max-w-5xl justify-between'>
            <div className="flex flex-col bg-white m-auto p-auto">
                <div className="flex overflow-x-scroll pb-5 scrollbar-hide">
                    <div className="flex flex-nowrap -ml-2">
                        <div className="inline-block px-3">
                            <div className="w-54 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="fpItem flex flex-col text-sm">
                                    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/74529578.jpg?k=a7fcefd47d7271daf44f6ce78a215b9505f9f8e5cac3af093b78b9c489fd8461&o=" alt="" className="fpImg object-cover w-full h-52" />
                                    <span className='fpName truncate'>Sugar loft Apartments</span>
                                    <span className='fpCity'>Rio de Janeiro</span>
                                    <span className='fpPrice font-bold'>Starting from € 48</span>
                                    <div className="fpRating text-sm">
                                        <button className='bg-[#003580] text-white font-sans border-none p-1 mr-2 font-medium rounded'>9.1</button>
                                        <span className='font-semibold'>Wonderful</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3">
                            <div className="w-54 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="fpItem flex flex-col text-sm">
                                    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" className="fpImg object-cover w-full h-52" />
                                    <span className='fpName truncate'>The Apartments by The Sloane Club</span>
                                    <span className='fpCity'>London</span>
                                    <span className='fpPrice font-bold'>Starting from € 373</span>
                                    <div className="fpRating text-sm">
                                        <button className='bg-[#003580] text-white font-sans border-none p-1 mr-2 font-medium rounded'>9.3</button>
                                        <span className='font-semibold'>Wonderful</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3">
                            <div className="w-54 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="fpIten flex flex-col text-sm">
                                    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=cd55de5463af8988f78fd675904a43d02f77570debe9977c4c1fe658030b6d29&o=" alt="" className="fpImg object-cover w-full h-52" />
                                    <span className='fpName truncate'>Appartamento Benincampi</span>
                                    <span className='fpCity'>Rome</span>
                                    <span className='fpPrice font-bold'>Starting from € 304</span>
                                    <div className="fpRating text-sm">
                                        <button className='bg-[#003580] text-white font-sans border-none p-1 mr-2 font-medium rounded'>9.7</button>
                                        <span className='font-semibold'>Exceptional</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inline-block px-3">
                            <div className="w-54 h-80 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="fpIten flex flex-col text-sm">
                                    <img src="https://t-cf.bstatic.com/xdata/images/hotel/max500/100210804.jpg?k=b4266521a7d7dd6165b0c37f1d18382eeab462ae18efbe779bcfb48b460c06b6&o=" alt="" className="fpImg object-cover w-full h-52" />
                                    <span className='fpName truncate'>Flora Chiado Apartments</span>
                                    <span className='fpCity'>Lisbon</span>
                                    <span className='fpPrice font-bold'>Starting from € 367</span>
                                    <div className="fpRating text-sm">
                                        <button className='bg-[#003580] text-white font-sans border-none p-1 mr-2 font-medium rounded'>9.7</button>
                                        <span className='font-semibold'>Exceptional</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties