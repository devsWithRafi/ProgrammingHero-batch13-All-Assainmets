import FriendCard from '@/components/friends/FriendCard';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PiBellSimpleZBold } from 'react-icons/pi';
import { PiArchiveBold } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdHistory } from 'react-icons/md';
import CheckInSection from './_components/CheckInSection';
import { formatedDate } from '@/lib/formateDate';

const fetchFriedsData = async (id) => {
    const res = await fetch('http://localhost:3000/data/friends.json');
    const data = await res.json();
    return data.find((f) => String(f.id) === id);
};

const FriedDetailsPage = async ({ params }) => {
    const { id } = await params;
    const friend = await fetchFriedsData(id);

    if (!friend) return notFound();

    const date = new Date(friend.next_due_date);

    return (
        <section className="mt-15 grid sm:grid-cols-3 gap-5 py-15">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-5">
                <div className="text-center bg-white shadow-sm rounded-sm px-5 py-10">
                    <FriendCard
                        friend={friend}
                        className="shadow-none bg-transparent p-0"
                    />
                    <p className="text-gray-400 text-sm w-[90%] mx-auto mt-5">
                        {friend.bio}
                    </p>
                    <p className="text-gray-400 text-sm w-[90%] mx-auto mt-3">
                        Preferred: {friend.email}
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <Button className="bg-white border-none shadow-sm rounded-sm py-6 text-black">
                        <PiBellSimpleZBold className="text-[22px]" /> Snooze 2
                        weeks
                    </Button>
                    <Button className="bg-white border-none shadow-sm rounded-sm py-6 text-black">
                        <PiArchiveBold className="text-[22px]" /> Archive
                    </Button>
                    <Button className="bg-white border-none shadow-sm rounded-sm py-6 text-[#EF4444]">
                        <RiDeleteBin6Line className="text-[22px]" /> Delete
                    </Button>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full sm:col-span-2 flex flex-col gap-5">
                <div className="w-full grid lg:grid-cols-3 grid-cols-2 gap-5">
                    <div className="w-full bg-white px-5 py-10 shadow-sm rounded-sm flex flex-col items-center justify-center gap-2 text-center">
                        <h2 className="sm:text-3xl text-2xl font-bold text-deepGreen">
                            {friend.days_since_contact}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Days Since Contact
                        </p>
                    </div>
                    <div className="w-full bg-white px-5 py-10 shadow-sm rounded-sm flex flex-col items-center justify-center gap-2 text-center">
                        <h2 className="sm:text-3xl text-2xl font-bold text-deepGreen">
                            {friend.goal}
                        </h2>
                        <p className="text-gray-500 text-sm">Goal (Days)</p>
                    </div>
                    <div className="w-full lg:col-span-1 col-span-2 bg-white px-5 py-10 shadow-sm rounded-sm flex flex-col items-center justify-center gap-2 text-center">
                        <h2 className="sm:text-3xl text-2xl font-bold text-deepGreen">
                            {formatedDate(date)}
                        </h2>
                        <p className="text-gray-500 text-sm">Next Due</p>
                    </div>
                </div>

                {/* Relationship Goal */}
                <div className="bg-white shadow-sm rounded-sm p-5">
                    <span className="flex items-center gap-5 justify-between">
                        <h2 className="sm:text-xl text-lg font-medium text-deepGreen">
                            Relationship Goal
                        </h2>
                        <Button className="bg-gray-100 px-4 py-1.5 text-black text-sm border border-gray-200 font-medium rounded">
                            Edit
                        </Button>
                    </span>
                    <p className="sm:text-lg text-sm text-gray-500 mt-3">
                        Connect every{' '}
                        <span className="text-black font-semibold">
                            {friend.goal} days
                        </span>
                    </p>
                </div>

                {/* Quick Check-In */}
                <CheckInSection friend={friend} />
            </div>
        </section>
    );
};

export default FriedDetailsPage;
