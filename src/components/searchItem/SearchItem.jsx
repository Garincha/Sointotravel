import React from 'react'

function SearchItem() {
    return (
        <div className='searchItem border border-gray-300 p-2.5 rounded flex justify-between gap-5 mb-5'>
            <img
                src="https://t-cf.bstatic.com/xdata/images/hotel/square600/199740292.webp?k=640eb2d46d56081cb550e47db6eb5cb08540eec79d24a799c9bd02f6b090ce3b&o=&s=1"
                alt=""
                className='shiImg w-32 h-32 sm:w-52 sm:h-52 object-cover'
            />
            <div className="shiDesc text-xs font-sans flex flex-col gap-2.5 w-2/4">
                <h2 className="shiTitle text-xl text-[#0071c2] font-bold">Tower Street Apartments</h2>
                <span className="shiDistance">500m from center</span>
                <span className="shiTaxiOp bg-[#008009] text-white w-max p-1 rounded">Free airport taxi</span>
                <span className="shiSubtitle font-bold">
                    Studio Apartment with Air conditioning
                </span>
                <span className="shiFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="shiCancelOp font-bold text-[#008009]">Free cancellation </span>
                <span className="shiCancelOpSubtitle text-[#008009]">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="shiDetails font-sans w-1/4 flex flex-col justify-between">
                <div className="shiRating flex justify-between">
                    <span className='font-medium'>Excellent</span>
                    <button className='font-bold bg-[#003580] text-white p-1 border-none'>8.9</button>
                </div>
                <div className="shiDetailTexts text-right flex flex-col gap-1">
                    <span className="shiPrice text-2xl">$112</span>
                    <span className="shiTaxOp text-xs text-gray-500">Includes taxes and fees</span>
                    <button className="shiCheckButton bg-[#F59571] text-white font-semibold text-sm font-sans py-2.5 px-1 cursor-pointer hover:bg-[#ba4920] rounded-sm border-none"> <span className='drop-shadow-lg
                    '>See availability</span></button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem