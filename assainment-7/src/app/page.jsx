import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/card';
import { FiPlus } from 'react-icons/fi';

const bennerData = [
    { title: 'Total Friends', count: 10 },
    { title: 'On Track', count: 3 },
    { title: 'Need Attention', count: 6 },
    { title: 'Interactions This Month', count: 12 },
];

export default function HomePage() {
    return (
        <section className="md:mt-35 mt-25">
            {/* TOP BENNER */}
            <div className="text-center flex flex-col items-center gap-6">
                <h1 className="md:text-5xl text-4xl font-bold">
                    Friends to keep close in your life
                </h1>
                <p className="sm:w-[80%] w-[90%] text-gray-500 sm:text-lg text-sm">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>
                <Button className="bg-deepGreen text-white rounded p-5">
                    <FiPlus size={20} /> Add a Friend
                </Button>

                {/* benner cards */}
                <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 w-full">
                    {bennerData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white flex flex-col items-center justify-center text-center px-5 sm:py-10 py-5 rounded-sm shadow-sm"
                        >
                            <h2 className="sm:text-3xl text-2xl font-bold">{item.count}</h2>
                            <p className="capitalize sm:text-lg text-sm text-gray-400">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
