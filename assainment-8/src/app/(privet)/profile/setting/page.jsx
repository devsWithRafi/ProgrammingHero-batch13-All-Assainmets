import { Separator } from '@heroui/react';
import React from 'react';
import SettingsForm from './_components/SettingsForm';

const SettingPage = () => {
  return (
    <section className="w-full p-3">
      <div className="w-full max-w-[1300px] mx-auto mt-20 grid grid-cols-3 gap-5">
        {/* left side */}
        <div className="min-h-120 bg-white shadow-sm p-7 rounded-2xl flex flex-col gap-1 items-center">
          <div className="w-30 rounded-4xl bg-gray-100 border-4 border-gray-200 aspect-square overflow-hidden"></div>
          <h2 className="text-center font-bold font-poppins text-xl mt-5">
            Julian Thorne
          </h2>
          <p className="text-sm font-poppins text-zinc-500">
            julian.thorne@atheneum.edu
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
              <p className="font-poppins font-medium text-md">Sept 2023</p>
            </span>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-2 min-h-120 bg-white shadow-sm p-7 rounded-2xl flex flex-col gap-1">
          <h2 className="font-viga text-2xl">Account Settings</h2>
          <p className="font-poppins text-zinc-500 text-sm">
            Manage your digital library identity and preferences.
          </p>
          <SettingsForm />
        </div>
      </div>
    </section>
  );
};

export default SettingPage;
