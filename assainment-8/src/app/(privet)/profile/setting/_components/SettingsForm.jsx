'use client';

import ButtonBlack from '@/components/Button';
import Loading from '@/components/Loading';
import { authClient } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { validateUrl } from '@/lib/validateUrl';
import {
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from '@heroui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

const SettingsForm = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const router = useRouter()
  const [userData, setUserData] = useState({
    name: '',
    image: '',
  });

  const [userUpdatePending, startUserUpdatePending] = useTransition();

  useEffect(() => {
    const loadUser = () => {
      if (!user) return;
      setUserData({ name: user.name, image: user.image });
    };
    loadUser();
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    startUserUpdatePending(async () => {
      await authClient.updateUser({
        ...data,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Profile updated successfully');
          },
          onError: (ctx) => {
            toast.danger(ctx.error.message ?? 'Update Profile Failed!');
          },
        },
      });
    });
  };

  return (
    <Form
      className={cn(
        'flex w-full flex-col justify-between h-full gap-4 mt-10',
        userUpdatePending && 'opacity-50 pointer-events-none',
      )}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-5">
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (value.replaceAll(' ', '').length < 1) {
              return 'Name must not be empty!';
            }
            return null;
          }}
        >
          <Label className="text-black font-medium font-poppins">
            Your Name
          </Label>
          <Input
            placeholder="John Doe"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={userData.name}
            className="font-poppins rounded-md shadow-none border-gray-200 border sm:text-md text-sm"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="image"
          type="text"
          value={userData.image}
          validate={(value) => {
            if (!validateUrl(value)) {
              return 'Invalid URL!';
            }
            return null;
          }}
        >
          <Label className="text-black font-medium font-poppins">
            Profile Image URL
          </Label>
          <Input
            placeholder="https://example.com/image.jpg"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, image: e.target.value }))
            }
            className="font-poppins rounded-md shadow-none border-gray-200 border sm:text-md text-sm"
          />
          <FieldError />
        </TextField>
      </div>
      <div className="flex sm:gap-4 gap-2 mt-5">
        <ButtonBlack type="submit">
          {userUpdatePending ? <Loading text="Updating..." /> : 'Save Changes'}
        </ButtonBlack>
        <ButtonBlack onClick={() => router.back()} type="button" buttonType="outline">
          Cancel
        </ButtonBlack>
      </div>
    </Form>
  );
};

export default SettingsForm;
