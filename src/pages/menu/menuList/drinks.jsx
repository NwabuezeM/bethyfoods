import { useEffect, useState } from 'react'
import productData from '../../../components/products/products.json'
// import Spinner from 'react-loading-io';
import ProductCard from '../../../components/products/productCard';

function Drinks() {
    const [drinks, setDrinks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const [visibleDrinks, setVisibleDrinks] = useState([]);
    const [showAll, setShowAll] = useState(false);


    async function fetchDrinks() {
        try {
            setLoading(true);
            const drinks = productData.filter(drink => drink.category === 'drinks');
            setDrinks(drinks);
            setLoading(false);
            console.log(drinks);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchDrinks();
    }, []);

    useEffect(() => {
        if (drinks.length > 0) {
            setVisibleDrinks(drinks.slice(0, 6));
        }
    }, [drinks]);

    const loadMore = () => {
        setVisibleDrinks(drinks);
        setShowAll(true);
    };

    const showLess = () => {
        setVisibleDrinks(drinks.slice(0, 6));
        setShowAll(false);
    };


    
  return (
    <div className='my-12'>
        <h2 className='text-center my-6'>DRINKS</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
            {
                drinks && drinks.map(drink => <div key={drink.id}>
                    <ProductCard product={drink} />
                </div>)
            }
        </div>
        <div className="flex justify-center items-center my-6">
        {drinks.length > 6 && !showAll && (
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

export default Drinks