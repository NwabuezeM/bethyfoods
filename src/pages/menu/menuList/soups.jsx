import React, { useEffect, useState } from 'react';
import productData from '../../../components/products/products.json';
import ProductCard from '../../../components/products/productCard';

function Soups() {
    const [soups, setSoups] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [visibleSoups, setVisibleSoups] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetchSoups();
    }, []);

    async function fetchSoups() {
        try {
            setLoading(true);
            const soups = productData.filter(soup => soup.category === 'soup');
            setSoups(soups);
            setLoading(false);
            console.log(soups);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        if (soups.length > 0) {
            setVisibleSoups(soups.slice(0, 6));
        }
    }, [soups]);

    const loadMore = () => {
        setVisibleSoups(soups);
        setShowAll(true);
    };

    const showLess = () => {
        setVisibleSoups(soups.slice(0, 6));
        setShowAll(false);
    };

    return (
        <div className='mb-16'>
            <h2 className='text-center mb-12'>SOUPS</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {visibleSoups.map(soup => (
                    <div key={soup.id}>
                        <ProductCard product={soup} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center my-6">
                {soups.length > 6 && !showAll && (
                    <button onClick={loadMore} className=''>Load More</button>
                )}
            </div>
            <div className="flex justify-center items-center my-6">
                {showAll && (
                    <button onClick={showLess} className='mx-auto my-12'>Show Less</button>
                )}
            </div>
        </div>
    );
}

export default Soups;
