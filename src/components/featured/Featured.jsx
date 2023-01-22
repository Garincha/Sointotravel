import React from 'react'

function Featured() {
    return (
        <div className='pList max-w-4xl lg:max-w-5xl z-0 justify-between'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 z-0 gap-5 justify-between mb-10 mt-16'>
                <div className="featuredItem relative text-white rounded-xl overflow-hidden h-64">
                    <img src="https://cf.bstatic.com/xdata/images/city/540x270/976538.webp?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o=" alt="" className="featuredImg object-cover w-76 h-64" />
                    <div className="featuredTitles absolute top-5 left-5">
                        <h2 className='text-3xl font-bold drop-shadow-book shadow-black'>Amsterdam</h2>
                        <h3 className='drop-shadow-book'>1,907 properties</h3>
                    </div>
                </div>
                <div className="featuredItem relative text-white rounded-xl overflow-hidden h-64">
                    <img src="https://cf.bstatic.com/xdata/images/city/540x270/613094.webp?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o=" alt="" className="featuredImg object-cover w-76 h-64" />
                    <div className="featuredTitles absolute top-5 left-5">
                        <h2 className='text-3xl font-bold drop-shadow-book'>London</h2>
                        <h3 className='drop-shadow-book'>14,515 properties</h3>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 z-0 gap-5 justify-between'>
                <div className="featuredItem relative text-white rounded-xl overflow-hidden h-64">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/976524.webp?k=217eb71cc45cd4fa13143e6d7d99990be3025dfeb0abb0248846813ad96cf4c3&o=" alt="" className="featuredImg object-cover w-76 h-64" />
                    <div className="featuredTitles absolute top-5 left-5">
                        <h2 className='text-3xl font-bold drop-shadow-book shadow-black'>Rotterdam</h2>
                        <h3 className='drop-shadow-book'>268 properties</h3>
                    </div>
                </div>
                <div className="featuredItem relative text-white rounded-xl overflow-hidden h-64">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o=" alt="" className="featuredImg object-cover w-76 h-64" />
                    <div className="featuredTitles absolute top-5 left-5">
                        <h2 className='text-3xl font-bold drop-shadow-book'>Paris</h2>
                        <h3 className='drop-shadow-book'>7,626 properties</h3>
                    </div>
                </div>
                <div className="featuredItem relative text-white rounded-xl overflow-hidden h-64">
                    <img src="https://t-cf.bstatic.com/xdata/images/city/540x270/856674.webp?k=70a9589c2f7d2fc175c3ac02c55702c2e433f588866756a394cddfe215170f38&o=" alt="" className="featuredImg object-cover w-76 h-64" />
                    <div className="featuredTitles absolute top-5 left-5">
                        <h2 className='text-3xl font-bold drop-shadow-book shadow-black'>New York</h2>
                        <h3 className='drop-shadow-book'>1,907 properties</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured