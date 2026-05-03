import { assets } from '@/assets/assets';;
import { auth } from '@/lib/auth';
import { formateDate } from '@/lib/formateDate';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineSettings } from 'react-icons/md';
import ProfileContent from './ProfileContent';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Atheneum | My Profile' };

const ProfilePage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });
  const userJoinedDate = formateDate(user?.createdAt);

  return (
    <section className="w-full p-3 min-h-screen">
      {/* profile header */}
      <div className="p-7 mt-20 bg-white rounded-2xl shadow-sm  w-full max-w-[1300px] mx-auto">
        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-5">
          <div className="bg-gray-300 border-4 overflow-hidden aspect-square sm:w-50 w-30 rounded-4xl">
            <Image
              src={user?.image ?? assets.defaultAvatar}
              alt="profile"
              width={500}
              height={500}
              quality={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2 flex flex-col sm:items-start items-center gap-2">
            <p className="font-poppins sm:text-xs text-[10px] text-zinc-600 bg-zinc-100 px-3 py-1 rounded-full">
              Joined: {userJoinedDate}
            </p>
            <h2 className="font-bold font-poppins sm:text-left text-center sm:text-4xl text-2xl capitalize">
              {user?.name}
            </h2>
            <p className="font-poppins text-zinc-500 sm:text-left text-center font-medium sm:text-md text-sm">
              {user?.email}
            </p>

            <Link
              href="/profile/setting"
              className="!px-10 mt-2 !rounded-xl btn-black flex items-center gap-2"
            >
              <MdOutlineSettings />
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* profile content */}
      <ProfileContent />
    </section>
  );
};

export default ProfilePage;
