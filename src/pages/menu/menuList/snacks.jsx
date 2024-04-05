import React, { useEffect, useState } from 'react';
import productData from '../../../components/products/products.json';
import ProductCard from '../../../components/products/productCard';

function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [visibleSnacks, setVisibleSnacks] = useState([]);
    const [showAll, setShowAll] = useState(false);

    async function fetchSnacks() {
        try {
            setLoading(true);
            const snacks = productData.filter(snack => snack.category === 'snacks');
            setSnacks(snacks);
            setLoading(false);
            console.log(snacks);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchSnacks();
    }, []);

    useEffect(() => {
        if (snacks.length > 0) {
            setVisibleSnacks(snacks.slice(0, 6));
        }
    }, [snacks]);

    const loadMore = () => {
        setVisibleSnacks(snacks);
        setShowAll(true);
    };

    const showLess = () => {
        setVisibleSnacks(snacks.slice(0, 6));
        setShowAll(false);
    };

    return (
        <div className='my-12'>
            <h2 className='text-center my-6'>SNACKS</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {visibleSnacks.map(snack => (
                    <div key={snack.id}>
                        <ProductCard product={snack} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center my-6">
            {snacks.length > 6 && !showAll && (
                <button onClick={loadMore}>Load More</button>
            )}
            </div>
            <div className="flex justify-center items-center my-6">
            {showAll && (
                <button onClick={showLess}>Show Less</button>
            )}
            </div>
        </div>
    );
}

export default Snacks;
