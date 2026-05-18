'use client';

import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LuLogOut } from 'react-icons/lu';
import { CgProfile } from 'react-icons/cg';
import { GrSettingsOption } from 'react-icons/gr';
import { authClient } from '@/lib/auth-client';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const NavAvatar = ({ user }) => {
  const router = useRouter();

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Signed out successfully!', {
            position: 'top-center',
          });
          router.push('/sign-in');
        },
        onError: (ctx) => {
          toast.error(ctx.error?.message || 'Signed out successfully!', {
            position: 'top-center',
          });
        },
      },
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="ml-3 flex items-center gap-2 rounded-full bg-muted p-1 cursor-pointer">
          <div className="rounded-full overflow-hidden p-0.5 bg-primary w-9 h-9">
            <Image
              src={user.image}
              alt=""
              width={100}
              height={100}
              className="w-full h-full aspect-square rounded-full object-cover"
            />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="font-poppins">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem>
            <CgProfile /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <GrSettingsOption />
            Setting
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive" onClick={handleLogOut}>
            <LuLogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavAvatar;
