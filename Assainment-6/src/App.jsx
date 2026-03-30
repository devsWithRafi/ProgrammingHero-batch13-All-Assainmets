import { Suspense, useEffect, useState } from 'react';
import Navber from './components/navber/Navber';
import AchivementSection from './sections/AchivementSection';
import HeroSection from './sections/HeroSection';
import PremiumDigitalToolSection from './sections/PremiumDigitalToolSection';
import { ToastContainer } from 'react-toastify';

const fetchProducts = async () => {
    const res = await fetch('./data/ProductCardsData.json');
    return res.json();
};

function App() {
    const productsPromise = fetchProducts();
    const [cartProducts, setCartProducts] = useState([]);

    const getCartProductsFromLocalStorage = () => {
        const cartProducts =
            JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(cartProducts);
    };

    useEffect(() => {
        getCartProductsFromLocalStorage();
    }, []);

    return (
        <>
            <Navber cartProducts={cartProducts} />
            <main>
                <HeroSection />
                <AchivementSection />
                <Suspense fallback={<div>Loading...</div>}>
                    <PremiumDigitalToolSection
                        productsPromise={productsPromise}
                        setCartProducts={setCartProducts}
                        cartProducts={cartProducts}
                    />
                </Suspense>
            </main>

            <ToastContainer />
        </>
    );
}

export default App;
