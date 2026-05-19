'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';

const BookSessionForm = ({ tutor }) => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [bookSessionForm, setBookSessionForm] = useState({
    name: '',
    phoneNumber: '',
    tutorName: '',
    tutorId: '',
    email: '',
  });

  useEffect(() => {
    const loadData = () => {
      setBookSessionForm((prev) => ({
        ...prev,
        tutorName: tutor?.name || '',
        tutorId: tutor?._id || '',
        email: user?.email || '',
      }));
    };
    loadData();
  }, [tutor, user]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setBookSessionForm({ ...bookSessionForm, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(bookSessionForm);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className={'w-full rounded-full h-auto p-3'}
        >
          Book This Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-130 font-poppins p-7">
        <form onSubmit={onSubmit}>
          <DialogHeader className={'flex flex-col items-center gap-2'}>
            <DialogTitle className={'text-center font-bold font-ring text-3xl'}>
              Book Session
            </DialogTitle>
            <DialogDescription className={'text-center font-medium text-sm'}>
              Fill in your details to book a session with your tutor. Click
              confirm when you&apos;re ready.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label>Full Name</Label>
              <Input
                name="name"
                required
                placeholder="Full Name"
                value={bookSessionForm.name}
                onChange={onChange}
                className={'rounded-sm h-10 px-4'}
              />
            </Field>
            <Field>
              <Label>Phone Number</Label>
              <Input
                name="phoneNumber"
                required
                placeholder="017XX-XXXXXX"
                value={bookSessionForm.phoneNumber}
                onChange={onChange}
                className={'rounded-sm h-10 px-4'}
              />
            </Field>
            <Field className={'opacity-50 pointer-events-none'}>
              <Label>Tutor Name</Label>
              <Input
                name="tutorName"
                placeholder="Tutor Name"
                readOnly
                value={bookSessionForm.tutorName}
                className={'rounded-sm h-10 px-4'}
              />
            </Field>
            <Field className={'opacity-50 pointer-events-none'}>
              <Label>Tutor ID</Label>
              <Input
                name="tutorId"
                placeholder="Tutor ID"
                readOnly
                value={bookSessionForm.tutorId}
                className={'rounded-sm h-10 px-4'}
              />
            </Field>
            <Field className={'opacity-50 pointer-events-none'}>
              <Label>Email</Label>
              <Input
                name="email"
                placeholder="example@.com"
                readOnly
                value={bookSessionForm.email}
                className={'rounded-sm h-10 px-4'}
              />
            </Field>
          </FieldGroup>

          <div className="flex gap-2 mt-5 justify-end">
            <DialogClose asChild>
              <Button variant="outline" className={'h-10 rounded-sm px-5'}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className={'h-10 rounded-sm px-5'}>
              Confirm Booking
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookSessionForm;
