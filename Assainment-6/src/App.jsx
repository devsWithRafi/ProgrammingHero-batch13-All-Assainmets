import { Suspense, useEffect, useState } from 'react';
import Navber from './components/navber/Navber';
import AchivementSection from './sections/AchivementSection';
import HeroSection from './sections/HeroSection';
import PremiumDigitalToolSection from './sections/PremiumDigitalToolSection';

const fetchProducts = async () => {
    const res = await fetch('./data/ProductCardsData.json');
    return res.json();
};

function App() {
    const productsPromise = fetchProducts();

    return (
        <>
            <Navber />
            <main>
                <HeroSection />
                <AchivementSection />
                <Suspense fallback={<div>Loading...</div>}>
                    <PremiumDigitalToolSection
                        productsPromise={productsPromise}
                    />
                </Suspense>
            </main>
        </>
    );
}

export default App;
