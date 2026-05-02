import { Separator } from '@heroui/react';
import React from 'react';
import SettingsForm from './_components/SettingsForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { formateDate } from '@/lib/formateDate';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Atheneum | Settings' };

const SettingPage = async () => {
  const { user } = await auth.api.getSession({
    headers: await headers(),
  });

  const userJoinedDate = formateDate(user?.createdAt);

  return (
    <section className="w-full p-3">
      <div className="w-full max-w-[1300px] mx-auto mt-20 grid md:grid-cols-3 grid-cols-1 gap-5">
        {/* left side */}
        <div className="sm:min-h-120 bg-white shadow-sm p-7 rounded-2xl flex flex-col gap-1 items-center">
          <div className="md:w-30 sm:w-50 w-30 rounded-4xl bg-gray-100 border-4 border-gray-200 aspect-square overflow-hidden">
            <Image
              src={user?.image ?? assets.defaultAvatar}
              alt="profile"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-center font-bold font-poppins md:text-xl sm:text-3xl text-xl mt-5">
            {user?.name}
          </h2>
          <p className="md:text-sm sm:text-lg text-sm font-poppins text-zinc-500">
            {user?.email}
          </p>

          <Separator className="my-4" />

          <div className="w-full flex items-center gap-5 justify-between">
            <span>
              <p className="text-xs text-zinc-500 uppercase font-medium font-poppins">
                MEMBERSHIP
              </p>
              <p className="font-poppins font-medium text-md">Scholar Plus</p>
            </span>
            <span>
              <p className="text-xs text-zinc-500 uppercase font-medium font-poppins">
                JOIN DATE
              </p>
              <p className="font-poppins font-medium text-md">
                {userJoinedDate}
              </p>
            </span>
          </div>
        </div>

        {/* right side */}
        <div className="sm:col-span-2 sm:min-h-120 bg-white shadow-sm p-7 rounded-2xl flex flex-col gap-1">
          <h2 className="font-viga sm:text-2xl text-xl">Account Settings</h2>
          <p className="font-poppins text-zinc-500 text-sm">
            Manage your digital library identity and preferences.
          </p>

          <SettingsForm/>
        </div>
      </div>
    </section>
  );
};

export default SettingPage;
