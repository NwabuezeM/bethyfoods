

function OurLocations() {
    const locations = [
        {
            city: 'Abakaliki',
            address: 'Number 28 Udensi Street Stadium Road, Abakaliki.',
        },
        {
            city: 'Anambra',
            address: 'Plot 42B, Ojoto road, Awka.',
        },
        {
            city: 'Abuja',
            address: 'Number 12 Baze Street off Garki Estate, Maitama, Abuja.',
        },
        {
            city: 'Enugu',
            address: 'Number 108 Nike Lake Road Trans Ekulu, Enugu.',
        },
        {
            city: 'Lagos',
            address: '85 Adebayo Opeyemi Way, Off Ikoyi Road Victoria Island, Lagos.',
        },
        {
            city: 'Kano',
            address: 'Plot 47, Bello Muhammed Road, Kano.',
        },
        {
            city: 'Port Harcourt',
            address: 'Number 19 Peterside Street GRA, Port Harcourt.',
        },
    ]
    return (
        <div className="px-8 lg:px-36 py-36">
            <h1 className="text-center">Our Locations</h1>
            <div className="locations">
                <table className="w-full lg:w-3/4 mx-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="p-6 text-left border border-[#ddd] font-bold text-4xl">City</th>
                            <th className="p-6 text-left border border-[#ddd] font-bold text-4xl">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map((location, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-[#cfcdcd]'}>
                                <td className="p-6 text-left border border-[#ddd] text-3xl">{location.city}</td>
                                <td className="p-6 text-left border border-[#ddd] text-3xl">{location.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default OurLocations