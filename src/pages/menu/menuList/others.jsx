import React, { useEffect, useState } from 'react';
import productData from '../../../components/products/products.json';
import ProductCard from '../../../components/products/productCard';

function Others() {
    const [others, setOthers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [visibleOthers, setVisibleOthers] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const fetchOthers = async () => {
        try {
            setLoading(true);
            const othersData = await productData.filter(item => item.category === 'others');
            setOthers(othersData);
            setLoading(false);
            console.log(othersData);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fetchOthers();
    }, []);

    useEffect(() => {
        if (others.length > 0) {
            setVisibleOthers(others.slice(0, 6));
        }
    }, [others]);

    const loadMore = () => {
        setVisibleOthers(others);
        setShowAll(true);
    };

    const showLess = () => {
        setVisibleOthers(others.slice(0, 6));
        setShowAll(false);
    };

    return (
        <div className='my-12'>
            <h2 className='text-center my-6'>OTHERS</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {visibleOthers.map(item => (
                    <div key={item.id}>
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center my-6">
            {others.length > 6 && !showAll && (
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

export default Others;
