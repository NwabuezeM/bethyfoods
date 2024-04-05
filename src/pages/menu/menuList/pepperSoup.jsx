import { useEffect, useState } from 'react'
import productData from '../../../components/products/products.json'
// import Spinner from 'react-loading-io';
import ProductCard from '../../../components/products/productCard';

function PepperSoup() {
    const [pepperSoups, setPepperSoups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [visiblePepperSoups, setVisiblePepperSoups] = useState([]);
    const [showAll, setShowAll] = useState(false);

    async function fetchPepperSoup() {
        try {
            setLoading(true);
            const pepperSoups = productData.filter(pepperSoup => pepperSoup.category === 'pepper soup');
            setPepperSoups(pepperSoups);
            setLoading(false);
            console.log(pepperSoups);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchPepperSoup();
    }, []);

    useEffect(() => {
        if (pepperSoups.length > 0) {
            setVisiblePepperSoups(pepperSoups.slice(0, 6));
        }
    }, [pepperSoups]);

    const loadMore = () => {
        setVisiblePepperSoups(pepperSoups);
        setShowAll(true);
    };

    const showLess = () => {
        setVisiblePepperSoups(pepperSoups.slice(0, 6));
        setShowAll(false);
    };

    
  return (
    <div className='my-12'>
        <h2 className='text-center my-6'>PEPPER SOUP</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                pepperSoups && pepperSoups.map(pepperSoup => <div key={pepperSoup.id}>
                    <ProductCard product={pepperSoup} />
                </div>)
            }
        </div>
        <div className="flex justify-center items-center my-6">
        {pepperSoups.length > 6 && !showAll && (
                <button onClick={loadMore}>Load More</button>
            )}
            </div>
            <div className="flex justify-center items-center my-6">
            {showAll && (
                <button onClick={showLess}>Show Less</button>
            )}
            </div>
    </div>
  )
}

export default PepperSoup