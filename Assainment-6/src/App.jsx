import Navber from './components/navber/Navber';
import HeroSection from './sections/HeroSection';

function App() {
    return (
        <>
            <Navber />
            <main className='p-5'>
                <HeroSection />
            </main>
        </>
    );
}

export default App;
