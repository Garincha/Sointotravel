import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'

function Home() {
  return (
    <div>
      <section className="header relative">
        <Navbar />
        <Header />
      </section>

      <main className="HomeContainer mt-8 flex flex-col mx-auto max-w-7xl px-8 sm:px-6 lg:max-w-5xl ">
        <section>
          <h2 className="homeTitle my-8 text-xl font-bold">Browse by property type</h2>
          <PropertyList />
        </section>
        <section><Featured /></section>
        <section>
          <h2 className="homeTitle my-8 text-xl font-bold">Homes guests love</h2>
          <FeaturedProperties />
        </section>


      </main>
      <MailList />
      <Footer />

    </div>


  )
}

export default Home