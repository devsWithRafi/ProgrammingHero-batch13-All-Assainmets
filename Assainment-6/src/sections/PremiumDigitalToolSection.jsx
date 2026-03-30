import { use, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/product/ProductCard';

const PremiumDigitalToolSection = ({
    productsPromise,
}) => {
    const [selectedTab, setSelectedTab] = useState('products');
    const products = use(productsPromise);

    return (
        <section className="min-h-screen w-full max-w-[1500px] mx-auto mt-10 p-5">
            {/* SECTION TOP */}
            <div className="flex flex-col items-center gap-5">
                <SectionTitle>Premium Digital Tools</SectionTitle>
                <p className="sm:text-[16px] text-sm text-gray-500 text-center">
                    Choose from our curated collection of premium digital
                    products designed to boost your productivity and creativity.
                </p>

                {/* tab buttons */}
                <div className="p-1 rounded-full border border-gray-200 sm bg-white">
                    <button
                        onClick={() => setSelectedTab('products')}
                        className={`btn border-0 rounded-full px-8 py-3 sm:text-[16px] text-sm h-auto transition-all duration-300  
                              ${selectedTab === 'products' ? 'bg-gradient text-white' : 'text-black bg-transparent'}`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setSelectedTab('cart')}
                        className={`btn border-0 rounded-full px-8 py-3 sm:text-[16px] text-sm h-auto transition-all duration-300  
                              ${selectedTab === 'cart' ? 'bg-gradient text-white' : 'text-black bg-transparent'}`}
                    >
                        Cart <span>(0)</span>
                    </button>
                </div>
            </div>

            {/* SECTION BOTTOM */}
            <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 w-full gap-5">
                {products.map((item) => (
                    <ProductCard product={item} />
                ))}
            </div>
        </section>
    );
};

export default PremiumDigitalToolSection;
