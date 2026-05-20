import AddTutorForm from './AddTutorForm';

export const metadata = {
  title: 'MediQueue | Add New Tutor',
};

const AddTutorPage = () => {
  return (
    <div className="w-full min-h-screen sm:p-5 p-3 flex flex-col items-center justify-center">
      <span className="text-center py-5">
        <h2 className="font-semibold font-ring text-5xl">Add New Tutor</h2>
        <p className="text-muted-foreground font-medium text-lg">
          Fill in your details to create a tutor profile.
        </p>
      </span>
      <AddTutorForm />
    </div>
  );
};

export default AddTutorPage;
