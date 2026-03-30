import Navber from './components/navber/Navber';
import AchivementSection from './sections/AchivementSection';
import HeroSection from './sections/HeroSection';

function App() {
    return (
        <>
            <Navber />
            <main className="">
                <HeroSection />
                <AchivementSection />
            </main>
        </>
    );
}

export default App;
