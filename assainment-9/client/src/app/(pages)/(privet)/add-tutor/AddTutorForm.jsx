'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { tutorSchema } from './tutorSchema';
import { Separator } from '@/components/ui/separator';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';
import Loading from '@/components/Loading';
import { Toggle } from '@/components/ui/toggle';
import { fixedData } from './fixedData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { createNewTutor } from '@/services/createNewTutor';
import { toast } from 'sonner';
import { useTransition } from 'react';
import { jwtClientToken } from '@/lib/auth-client';

const AddTutorForm = () => {
  const form = useForm({
    resolver: zodResolver(tutorSchema),
    defaultValues: {
      name: '',
      photo: '',
      subject: '',
      availableDays: [],
      availableTimeSlot: fixedData.timeSlots[0],
      hourlyFee: 200,
      totalSlot: 0,
      sessionStartDate: undefined,
      institution: '',
      experience: 0,
      location: '',
      teachingMode: '',
    },
  });

  const [formPending, startFormPending] = useTransition();

  const onSubmit = async (data) => {
    const getToken = await jwtClientToken();
    if (getToken.success === false) return;

    startFormPending(async () => {
      const result = await createNewTutor(data, getToken.token);
      if (result.success) {
        toast.success(result.message, { position: 'top-center' });
        form.reset();
        return;
      }
      toast.error(result.message, { position: 'top-center' });
    });
  };

  return (
    <Card className="w-full max-w-[700px] sm:p-4 sm:py-10 mt-10">
      <CardContent
        className={cn(formPending && 'opacity-50 pointer-events-none')}
      >
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* ----------- Personal ----------- */}
            <span className="flex flex-col gap-1 py-2 uppercase text-sm">
              <p className="text-muted-foreground font-medium">Personal</p>
              <Separator />
            </span>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Full Name */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Full Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. Rafiqul Islam"
                      autoComplete="off"
                      className="rounded-sm h-10 text-sm"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* Photo URL */}
              <Controller
                name="photo"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Photo URL
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="https://example.com/photo.jpg"
                      autoComplete="off"
                      className="rounded-sm h-10 text-sm"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* Institution */}
              <Controller
                name="institution"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Institution
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="University / College"
                      autoComplete="off"
                      className="rounded-sm h-10 text-sm"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* Location */}
              <Controller
                name="location"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Location
                    </FieldLabel>
                    <Input
                      {...field}
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="City, area"
                      autoComplete="off"
                      className="rounded-sm h-10 text-sm"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* ----------- Teaching details ----------- */}
            <span className="flex flex-col gap-1 py-2 uppercase text-sm">
              <p className="text-muted-foreground font-medium">
                Teaching details
              </p>
              <Separator />
            </span>

            <div className="w-full grid grid-cols-2 gap-3">
              {/* Subject */}
              <Controller
                name="subject"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Subject
                    </FieldLabel>

                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={'rounded-sm min-h-10 font-poppins'}
                      >
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent className={'font-poppins'}>
                        {fixedData.subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* Experience (years) */}
              <Controller
                name="experience"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Experience (years)
                    </FieldLabel>
                    <Input
                      {...field}
                      type="number"
                      min="0"
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      placeholder="0"
                      autoComplete="off"
                      className="rounded-sm h-10 text-sm"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* Hourly fee (BDT) */}
              <Controller
                name="hourlyFee"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Hourly fee (BDT)
                    </FieldLabel>
                    <Input
                      {...field}
                      type="number"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      min="200"
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="Min 200"
                      autoComplete="off"
                      className="rounded-sm h-10 text-sm"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* Total slots */}
              <Controller
                name="totalSlot"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Total slots
                    </FieldLabel>
                    <Input
                      {...field}
                      type="number"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      min="0"
                      id="form-rhf-demo-title"
                      aria-invalid={fieldState.invalid}
                      placeholder="0"
                      autoComplete="off"
                      className="rounded-sm h-10 text-sm"
                    />
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Teaching mode */}
            <Controller
              name="teachingMode"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Teaching mode
                  </FieldLabel>
                  <div
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    className="flex flex-wrap gap-2"
                  >
                    {fixedData.teachingModes.map((mode) => (
                      <Toggle
                        key={mode}
                        pressed={field.value === mode}
                        onPressedChange={(pressed) =>
                          field.onChange(pressed ? mode : '')
                        }
                        variant="outline"
                        className="flex-1 rounded-sm data-[state=on]:bg-blue-50 data-[state=on]:border-blue-400 data-[state=on]:text-blue-700 dark:data-[state=on]:bg-blue-950 dark:data-[state=on]:border-blue-600 dark:data-[state=on]:text-blue-200"
                      >
                        {mode}
                      </Toggle>
                    ))}
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />

            {/* ----------- Schedule -----------  */}
            <span className="flex flex-col gap-1 py-2 uppercase text-sm">
              <p className="text-muted-foreground font-medium">Schedule</p>
              <Separator />
            </span>

            {/* Available days */}
            <Controller
              name="availableDays"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Available days
                  </FieldLabel>
                  <div
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    className="flex flex-wrap gap-2"
                  >
                    {fixedData.availableDays.map((day) => {
                      const active = field.value?.includes(day);
                      return (
                        <Toggle
                          key={day}
                          pressed={active}
                          onPressedChange={(pressed) => {
                            const next = pressed
                              ? [...(field.value || []), day]
                              : field.value.filter((d) => d !== day);
                            field.onChange(next);
                          }}
                          variant="outline"
                          className="w-12 rounded-sm data-[state=on]:bg-green-50 data-[state=on]:border-green-500 data-[state=on]:text-green-700 dark:data-[state=on]:bg-green-950 dark:data-[state=on]:border-green-600 dark:data-[state=on]:text-green-200"
                        >
                          {day}
                        </Toggle>
                      );
                    })}
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      className={'text-xs'}
                      errors={[fieldState.error]}
                    />
                  )}
                </Field>
              )}
            />

            <div className="grid grid-cols-2 gap-3">
              {/* Available time slot */}
              <Controller
                name="availableTimeSlot"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Time slot
                    </FieldLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger
                        className={'rounded-sm min-h-10 font-poppins'}
                      >
                        <SelectValue placeholder="Select a Slots" />
                      </SelectTrigger>
                      <SelectContent className={'font-poppins'}>
                        {fixedData.timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
              {/* date */}
              <Controller
                name="sessionStartDate"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-demo-title">
                      Time slot
                    </FieldLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-between text-left font-normal rounded-sm h-10',
                            !field.value && 'text-muted-foreground',
                          )}
                        >
                          {field.value
                            ? format(field.value, 'MM/dd/yyyy')
                            : 'mm/dd/yyyy'}

                          <CalendarIcon className="h-4 w-4 opacity-70" />
                        </Button>
                      </PopoverTrigger>

                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {fieldState.invalid && (
                      <FieldError
                        className={'text-xs'}
                        errors={[fieldState.error]}
                      />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>
          <Field orientation="horizontal" className="mt-5 flex flex-col">
            <Button type="submit" className="w-full h-10">
              {formPending ? (
                <Loading text={'Creating...'} />
              ) : (
                'Create a Tutor'
              )}
            </Button>
            <Button type="button" variant="outline" className="w-full h-10">
              Cancel
            </Button>
          </Field>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddTutorForm;
