import { Suspense, useEffect, useState } from 'react';
import Navber from './components/navber/Navber';
import AchivementSection from './sections/AchivementSection';
import HeroSection from './sections/HeroSection';
import PremiumDigitalToolSection from './sections/PremiumDigitalToolSection';
import { ToastContainer } from 'react-toastify';
import StepSection from './sections/StepSection';
import PricingSection from './sections/PricingSection';
import Footer from './components/footer/Footer';
import Loader from './components/Loader';
import ReadyToTransformSection from './sections/ReadyToTransformSection';

const fetchProducts = async () => {
    const res = await fetch('./data/ProductCardsData.json');
    return res.json();
};

const fetchPricingData = async () => {
    const res = await fetch('./data/PricingData.json');
    return res.json();
};

function App() {
    const productsPromise = fetchProducts();
    const pricingDataPromise = fetchPricingData();
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const getCartProductsFromLocalStorage = () => {
            const cartProducts =
                JSON.parse(localStorage.getItem('cartProducts')) || [];
            setCartProducts(cartProducts);
        };
        getCartProductsFromLocalStorage();
    }, []);

    return (
        <>
            <Navber cartProducts={cartProducts} />
            <main>
                <HeroSection />
                <AchivementSection />

                <Suspense fallback={<Loader className="h-100 mt-10" />}>
                    <PremiumDigitalToolSection
                        productsPromise={productsPromise}
                        setCartProducts={setCartProducts}
                        cartProducts={cartProducts}
                    />
                </Suspense>

                <StepSection />
                <Suspense fallback={<Loader className="h-100" />}>
                    <PricingSection pricingDataPromise={pricingDataPromise} />
                </Suspense>
                <ReadyToTransformSection />
                <Footer />
            </main>

            <ToastContainer />
        </>
    );
}

export default App;
