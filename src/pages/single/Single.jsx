import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

function Single() {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="singleContainer flex  flex-col items-center mt-5">
        {open && <div className="slider sticky top-0 left-0 -mt-5 h-screen w-screen flex items-center bg-gray-900/40 z-50">
          <FontAwesomeIcon icon={faCircleXmark} className='close absolute top-5 right-5 text-3xl text-white bg-[#ffa978] rounded-full cursor-pointer' onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow m-5 text-3xl text-[#ffa978] bg-white rounded-full cursor-pointer' onClick={() => handleMove("l")} />
          <div className="sliderWrapper w-full h-full flex justify-center items-center">
            <img className='sliderImg max-h-full w-[90vw]' src={photos[slideNumber].src} alt="" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow m-5 text-3xl text-[#ffa978] bg-white rounded-full cursor-pointer' onClick={() => handleMove("r")} />
        </div>}
        <div className="singleWrapper w-full relative max-w-5xl flex flex-col mx-auto gap-2.5 px-8">
          <button className="bookNow font-sans absolute top-2.5 right-0 bg-[#ba4920] text-white text-xs py-2.5 px-5 font-bold cursor-pointer hover:bg-[#ffa978] rounded-md">Reserve or Book Now!</button>
          <h1 className="singleTitle text-2xl font-bold">Grand Hotel</h1>
          <div className="singleAdress text-xs flex items-center gap-2.5">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className='singleDistance text-[#0071c2] cursor-pointer font-sans font-medium'>Exellent location - 500m from center</span>
          <span className='singlePriceHighlight text-[#008009] font-sans font-medium'>Book a stay over €114 at this property and get a free airport taxi</span>

          <section className="singleImageGallery grid grid-cols-2 md:grid-cols-3 gap-1 justify-between">
            {photos.map((photo, i) => (
              <div className="singleImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className='singleImg object-cover hover:opacity-75 hover:transition cursor-pointer' />
              </div>
            ))}

          </section>
          <section className="singleDetails justify-between gap-5 mt-5 grid grid-cols-1 md:grid-cols-3">
            <div className="singleDetailsTexts col-span-2">
              <h2 className="singleDetailsTitle text-2xl font-medium font-sans">
                Stay in the heart of Krakov
              </h2>
              <p className="singleDesc text-sm mt-5">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="singleDetailsPrice w-full bg-[#ebf3ff] p-5 flex flex-col gap-5">
              <h2 className='text-lg font-medium text-gray-600 font-sans'>Perfect for a 9-night stay!</h2>
              <span className='text-sm font-sans'>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h3 className='font-light'>
                <b>€945</b> (9 nights)
              </h3>
              <button className='font-sans bg-[#ba4920] text-white text-sm py-2.5 px-5 font-bold cursor-pointer hover:bg-[#ffa978] rounded-md' type='button'>Reserve or Book Now!</button>
            </div>
          </section>
        </div>
        <MailList />
      </div>
      <Footer />
    </div>
  )
}

export default Single