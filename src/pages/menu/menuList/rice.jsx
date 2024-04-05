import { useEffect, useState } from 'react'
import productData from '../../../components/products/products.json'
// import Spinner from 'react-loading-io';
import ProductCard from '../../../components/products/productCard';

function Rice() {
    const [rice, setRice] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [visibleRice, setVisibleRice] = useState([]);
    const [showAll, setShowAll] = useState(false);

    async function fetchRice() {
        try {
            setLoading(true);
            const rice = productData.filter(rice => rice.category === 'rice');
            setRice(rice);
            setLoading(false);
            console.log(rice);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchRice();
    }, []);

    useEffect(() => {
        if (rice.length > 0) {
            setVisibleRice(rice.slice(0, 6));
        }
    }, [rice]);

    const loadMore = () => {
        setVisibleRice(rice);
        setShowAll(true);
    };

    const showLess = () => {
        setVisibleRice(rice.slice(0, 6));
        setShowAll(false);
    };


    return (
        <div className='my-16'>
            <h2 className='my-12 text-center'>RICE</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    rice && rice.map(rice => <div key={rice.id}>
                        <ProductCard product={rice} />
                    </div>)
                }
            </div>
            <div className="flex justify-center items-center my-6">
                {rice.length > 6 && !showAll && (
                    <button onClick={loadMore} className='mx-auto my-12'>Load More</button>
                )}
            </div>
            <div className="flex justify-center items-center my-6">
                {showAll && (
                    <button onClick={showLess} className='mx-auto my-12'>Show Less</button>
                )}
            </div>
        </div>
    )
}

export default Rice;