

function OurNumbers() {
    return (
        <div className="lg:w-1/2 mx-auto text-center py-36 grid gap-36">
            <div className="grid gap-12">
                <h1>Are You Hungry?</h1>
                <p>Come, Dine With Us!</p>
                <p>
                    Book private dining at our restaurant, choose from VIP or regular areas. Plus, enjoy special delivery to your doorstep for a convenient dining experience.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 justify-center">
                <div className="grid gap-6">
                    <h3 className="text-5xl">For Restaurant</h3>
                    <p  className="text-4xl">07025765194</p>
                </div>
                <div className="h-[120px] w-[2px] bg-[#d89423] mx-auto"></div>
                <div className="grid gap-6">
                    <h3 className="text-5xl">Private Dinning</h3>
                    <p className="text-4xl">07014126583</p>
                </div>
            </div>
            <img src="https://websitedemos.net/bbq-restaurant-02/wp-content/uploads/sites/284/2018/10/divider-free-img-1.png" alt="symbol" className="w-[200px] object-cover mx-auto" />
        </div>
    )
}

export default OurNumbers