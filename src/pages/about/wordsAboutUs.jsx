import React from 'react'
import { Link } from 'react-router-dom'

function WordsAboutUs() {
    return (
        <div className='grid gap-12 lg:grid-cols-2 mx-auto px-8 lg:px-36 py-24'>

            <div className='flex flex-col gap-12 text-center lg:text-left'>
                <h1>A Few Words About Us</h1>
                <p>Serving the best meals and soft drinks since 2021</p>
                <div className="divider border-b-2 border-[#d89423] mx-auto my-12 lg:mx-0 w-[50px]"></div>
                <p>
                    At our esteemed restaurant, we go beyond just food, we offer a complete dining experience. Alongside our delectable dishes, we provide a range of soft drinks to ensure optimum refreshment with every meal. Additionally, every Friday, we host Happy Hours across all our branches, where you can indulge in special deals and discounts. To secure your spot for Happy Hour, simply <Link to={'/happy-hour-seat-reservation'} className='text-blue-600 hover:underline'>reserve a seat online</Link> and join us for an unforgettable time of great food and good vibes.
                </p>
                <Link to={'/menu'} className="bg-[#d89423] hover:bg-[#ff6347] text-white py-5 px-7 rounded-full uppercase hover:text-white block w-1/3 mx-auto lg:mx-0">View Our Menu</Link>
            </div>

            <div className="image">
                <img src="https://media.istockphoto.com/id/1390569992/photo/3d-rendering-interior-house-modern-open-living-room-loft-style-apartment-residence-in-cozy.jpg?s=612x612&w=0&k=20&c=wRHr2sv5lVkKH_HBpBaQLoh1DQbbkLHM2Ak1VtaldrA=" alt="restaurant interior" className='object-cover rounded-2xl' />
            </div>
        </div>
    )
}

export default WordsAboutUs