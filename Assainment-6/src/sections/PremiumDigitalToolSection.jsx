import { use, useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/product/ProductCard';
import CartProductCard from '../components/CartProductCard';
import { toast } from 'react-toastify';
import EmptyCart from '../components/EmptyCart';

const PremiumDigitalToolSection = ({
    productsPromise,
    cartProducts,
    setCartProducts,
}) => {
    const [selectedTab, setSelectedTab] = useState('products');
    const products = use(productsPromise);
    const totalCartProductsPrice = cartProducts.reduce(
        (total, product) => total + product.price,
        0,
    );

    const handleCheckout = () => {
        setCartProducts(() => {
            const updatedProducts = [];
            localStorage.setItem(
                'cartProducts',
                JSON.stringify(updatedProducts),
            );
            toast.success('Checkout successful!');
            return updatedProducts;
        });
    };

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
                        Cart <span>({cartProducts.length})</span>
                    </button>
                </div>
            </div>

            {/* SECTION BOTTOM */}
            {selectedTab === 'products' ? (
                // all products cards
                <div className="mt-10 grid md:grid-cols-3 sm:grid-cols-2 w-full gap-5">
                    {products.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            cartProducts={cartProducts}
                            setCartProducts={setCartProducts}
                        />
                    ))}
                </div>
            ) : (
                // all cart products
                <div className="mt-10 p-5 shadow-sm rounded-2xl flex flex-col gap-7">
                    {cartProducts.length > 0 ? (
                        <>
                            <h2 className="font-semibold text-2xl">
                                Your Cart
                            </h2>

                            <div className="flex flex-col gap-5">
                                {cartProducts.map((item) => (
                                    <CartProductCard
                                        key={item.id}
                                        product={item}
                                        setCartProducts={setCartProducts}
                                    />
                                ))}
                            </div>

                            <p className="flex items-center text-xl text-gray-400 font-medium justify-between gap-5">
                                Total:
                                <span className="font-bold text-2xl text-black">
                                    ${totalCartProductsPrice}
                                </span>
                            </p>

                            <button
                                onClick={handleCheckout}
                                className="w-full btn h-auto rounded-full bg-gradient text-white py-3 text-lg"
                            >
                                Proceed to Checkout
                            </button>
                        </>
                    ) : (<EmptyCart />)}
                </div>
            )}
        </section>
    );
};

export default PremiumDigitalToolSection;
