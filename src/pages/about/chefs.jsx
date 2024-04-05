
import { Link } from "react-router-dom"

function Chefs() {
    const chefs = [
        {
            name: 'Maryjane Chinemerem',
            position: 'Co-Founder / Head Chef',
            image: 'https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=2IlSPfIQtxrffNhikvF06C4KgqGnuyvV5tD0GgfR9RE='
        },
        {
            name: 'Adebayo Christian',
            position: 'Lead Chef - Lagos',
            image: 'https://media.istockphoto.com/id/1500656660/photo/african-american-chef-finishing-dish.webp?b=1&s=170667a&w=0&k=20&c=p0zf1Sq0ZCtBgFYrb9EiAP5YbQIMVWHhyNRpMefvlAM='
        },
        {
            name: 'Chidimma Idam',
            position: 'Lead Chef - Enugu',
            image: 'https://media.istockphoto.com/id/2030128047/photo/happy-black-cook-standing-with-her-arms-crossed-while-working-in-a-restaurant-and-looking-at.jpg?s=612x612&w=0&k=20&c=tcfUEacRZn5jtNAzE0DTTprp_7iV5_13tPws3P29yho='
        },
        {
            name: 'Okon Peace',
            position: 'Lead Chef - Port Harcourt',
            image: 'https://media.istockphoto.com/id/2030126960/photo/happy-black-cook-texting-on-her-mobile-phone-while-working-in-a-restaurant-kitchen.jpg?s=612x612&w=0&k=20&c=eLOnKaP9r1lkEkcnCCJEJjWsUPxK2CdwkfnqD13NtN4='
        },
        {
            name: 'Reshammah Loveth',
            position: 'Lead Chef - Abuja',
            image: 'https://media.istockphoto.com/id/1310767765/photo/female-chef-cooking-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=58W8gmU0QH_j_HX8TeYsgtDXTbsQRJMXR2N-kjfWUzI='
        },
        {
            name: 'Ibrahim Yusuf',
            position: 'Lead Chef - Kano',
            image: 'https://media.istockphoto.com/id/866699782/photo/skilled-chef-sharpening-his-knife.jpg?s=612x612&w=0&k=20&c=dCu8obnJOOlUAKHsioS9-sbQRqXWNBLlA3ih7jB1oJI='
        },
        {
            name: 'Igboke David',
            position: 'Lead Chef - Abakaliki',
            image: 'https://media.istockphoto.com/id/1367235271/photo/american-chef-preparing-ingredients-for-baking-at-the-kitchen.jpg?s=612x612&w=0&k=20&c=fbklidmTmXshwR_S1Pt0RITHeuBHlW7ylDppbHy78ZY='
        },
        {
            name: 'Chidi Okoye',
            position: 'Lead Chef - Anambra',
            image: 'https://media.istockphoto.com/id/506829462/photo/happy-chef-presenting-his-plate.jpg?s=612x612&w=0&k=20&c=-xzwcFOTbAYvAhscSGdxtCGaLQ18j4vXHqaD9HOQAnY='
        }
    ]
    return (
        <div className="grid gap-12 lg:grid-cols-2 mx-auto px-8 lg:px-36 py-24">
            <div className="information">
                <h1 className="text-center lg:text-left">Renowned Chefs</h1>
                <p className="text-center lg:text-left">Meet The Experts Behind Our Delicacy</p>
                <p className="text-center lg:text-left">Let us introduce you to the renowned chefs that oversee our kitchens at each of our many branches, making sure that every meal we serve is the height of culinary perfection.</p>
                <div className="divider border-b-2 border-[#d89423] mx-auto my-12 lg:mx-0 w-[50px]"></div>
                <h3 className="text-center lg:text-left">Careers</h3>
                <p>Are you a professional and certified chef? Apply now to join our team of kitchen experts.</p>
                <Link to={'/chef-applicant'} className="bg-[#d89423] hover:bg-[#ff6347] text-white text-center py-5 px-7 rounded-full uppercase hover:text-white block w-fit mx-auto lg:mx-0 mt-5">Apply Now</Link>
                <div className="my-24 text-center">
                    <img src="https://media.istockphoto.com/id/1389857295/photo/african-american-woman-bakers-looking-at-camera-chef-baker-in-a-chef-dress-and-hat-cooking.jpg?s=612x612&w=0&k=20&c=a6DaEjGakfhEykibC5LA1eknE7752wpQQdUUt9VjhRc=" alt="Bethel Chigozie" className="rounded-full object-cover h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] mb-12 mx-auto lg:mx-0" />
                    <h3>Bethel Chigozie</h3>
                    <p>Founder / Chief Chef</p>
                </div>
            </div>
            <div className="chefs grid lg:grid-cols-2 gap-12 justify-center">
                {
                    chefs.map((chef, index)=> <div key={index} className="text-center">
                        <img src={chef.image} alt={chef.name} className="h-[150px] w-[150px] rounded-full object-cover mx-auto" />
                        <h3>{chef.name}</h3>
                        <p>{chef.position}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Chefs