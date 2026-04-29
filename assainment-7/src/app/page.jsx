import { Button } from '@/components/ui/Button';
import { FiPlus } from 'react-icons/fi';
import FriendList from '@/components/friends/FriendList';
import BennerStats from '@/components/home/BennerStats';

export default async function HomePage() {
  return (
    <section className="md:mt-35 mt-25 flex flex-col gap-10 pb-15">
      {/* TOP BENNER */}
      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="md:text-5xl text-4xl font-bold">
          Friends to keep close in your life
        </h1>
        <p className="sm:w-[80%] w-[90%] text-gray-500 sm:text-lg text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <Button className="bg-deepGreen text-white rounded p-5">
          <FiPlus size={20} /> Add a Friend
        </Button>

        {/* benner cards */}
        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 w-full">
          <BennerStats />
        </div>
      </div>

      <hr className="my-5" />

      {/* BOTTOM FRIENDS DATA */}
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Your Friends</h2>
        <FriendList />
      </div>
    </section>
  );
}
