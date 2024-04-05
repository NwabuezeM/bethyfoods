import { FaQuoteLeft, FaQuoteRight, FaStar } from 'react-icons/fa'

function Testimonials() {
    const testimonials = [
        {
            name: 'Sadiq A.',
            message: 'A must-visit for every good food lover out there.',
            image: 'https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=BC5pdsmTWzmFO3mIlA7TQAIECnJ7Kpd-daL6G4RJqT4=',
            rating: 5
        },
        {
            name: 'Adewale J.',
            message: 'Absolutely amazing taste, and the most delicious meals and juice!! The best ever!!',
            image: 'https://media.istockphoto.com/id/1357096278/photo/portrait-of-a-senior-man-at-home.jpg?s=612x612&w=0&k=20&c=MqyYrBwxfy0kqfBsUESJtCsf-OFJglWF3fVYznJjfu8=',
            rating: 4
        },
        {
            name: 'Anthony O.',
            message: 'I always visit here, and they never fail to surprise me.',
            image: 'https://media.istockphoto.com/id/576592466/photo/enjoying-a-day-in-the-gardens.jpg?s=612x612&w=0&k=20&c=A9BdKmFCE6GZxwY7b7KtqTHiRKrm_q32zphKQy8FSlU=',
            rating: 5
        },
        {
            name: 'Chika Blessing',
            message: 'The most amazing I ever had!! Their delivery service is very fast and smooth',
            image: 'https://images.unsplash.com/photo-1602342323893-b11f757957c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlnZXJpYW4lMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D',
            rating: 5
        }
    ]

    function generateStars(star) {
        let stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < star) {
                stars.push(<FaStar className='text-yellow-600 text-3xl' />);
            } else {
                stars.push(<FaStar className='text-gray-500 text-3xl' />);
            }
        }
        return stars;
    }


    return (
        <div className='py-12 px-16 text-center flex flex-col items-center justify-center gap-12'>
            <h2>What Our Customers Are Saying</h2>
            <img src="https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/divider-free-img-1.png" alt="img" className='z-50 my-5' />
            <p>
                These are what some of our delighted customers have to say about BethyFood's delightful dishes and refreshing drinks. Experience the convenience of our food delivery service and become part of our satisfied customer base across Nigeria.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    testimonials.map((testimonial, index) => <div key={index} className='flex flex-col items-center justify-center gap-3'>
                        <p className='mt-24 font-bold italic'>
                            "{testimonial.message}"
                        </p>
                        <div className="flex mb-12">
                            {
                                generateStars(testimonial.rating)
                            }
                        </div>

                        <div className='flex items-center gap-4'>
                            <img src={testimonial.image} alt={testimonial.name} className='w-[100px] h-[100px] rounded-full object-cover' />
                            <h4>{testimonial.name}</h4>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Testimonials