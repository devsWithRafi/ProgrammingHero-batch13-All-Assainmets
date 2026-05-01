'use client';

import ButtonBlack from '@/components/Button';
import { validateUrl } from '@/lib/validateUrl';
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from '@heroui/react';

const SettingsForm = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <Form
      className="flex w-full flex-col justify-between h-full gap-4 mt-10"
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
            className="font-poppins rounded-md shadow-none border-gray-200 border"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="imageUrl"
          type="text"
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
            className="font-poppins rounded-md shadow-none border-gray-200 border"
          />
          <FieldError />
        </TextField>
      </div>
      <div className="flex gap-4 mt-5">
        <ButtonBlack type="submit">Save Changes</ButtonBlack>
        <ButtonBlack type="button" buttonType="outline">
          Cancel
        </ButtonBlack>
      </div>
    </Form>
  );
};

export default SettingsForm;
