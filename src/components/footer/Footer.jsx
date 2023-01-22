import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-100 pl-5">
            <div className="footerwrapper max-w-4xl grid grid-cols-2 mb-5 md:grid-cols-5 gap-y-10 mx-auto py-14 text-gray-600 text-xs">
                <div className="space-y-4 text-gray-800">
                    <h5 className="font-bold uppercase">About</h5>
                    <ul className='space-y-4 cursor-pointer'>
                        <li>How Booking works</li>
                        <li>News room</li>
                        <li>Investors</li>
                        <li>Wepje Booking Plus</li>
                        <li>Wepje Booking Luxe</li>
                    </ul>
                </div>
                <div className="space-y-4 text-gray-800">
                    <h5 className="font-bold uppercase">Community</h5>
                    <ul className='space-y-4 cursor-pointer'>
                        <li>Accessibility</li>
                        <li>Pagelink example</li>
                        <li>Pagelink example</li>
                        <li>Pagelink example</li>
                        <li>Pagelink example</li>
                    </ul>
                </div>
                <div className="space-y-4 text-gray-800">
                    <h5 className="font-bold uppercase">Hosting</h5>
                    <ul className='space-y-4 cursor-pointer'>
                        <li>Try hosting</li>
                        <li>Aircover</li>
                        <li>Explore hosting resources</li>
                        <li>Visit our community forum</li>
                        <li>How to host responsibly</li>
                    </ul>
                </div>
                <div className="space-y-4 text-gray-800">
                    <h5 className="font-bold uppercase">Support</h5>
                    <p>Help Center</p>
                    <p>Safety information</p>
                    <p>Cancellation options</p>
                    <p>Fairbnb Plus</p>
                    <p>Report</p>
                </div>
                <div className="space-y-4 text-gray-800">
                    <h5 className="font-bold uppercase">Support</h5>
                    <p>Help Center</p>
                    <p>Safety information</p>
                    <p>Cancellation options</p>
                    <p>Fairbnb Plus</p>
                    <p>Report</p>
                </div>
            </div>
            <div className="copyright text-center">Copyright © Wepje</div>
        </footer>
    )
}

export default Footer