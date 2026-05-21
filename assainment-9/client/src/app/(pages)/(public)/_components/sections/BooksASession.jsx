import { FiSearch } from 'react-icons/fi';
import { LuCalendarClock } from 'react-icons/lu';
import { RiFlashlightLine } from 'react-icons/ri';

const dummyData = [
  {
    icon: FiSearch,
    title: 'Browse Tutors',
    description: 'Find tutors by name across our extensive network.',
  },
  {
    icon: LuCalendarClock,
    title: 'Pick a slot',
    description: 'Choose available time and date that works for your shedule.',
  },
  {
    icon: RiFlashlightLine,
    title: 'Get your token',
    description: 'Receive digital session token instantly upon booking',
  },
];

const BooksASession = () => {
  return (
    <section className="px-3 sm:py-30 py-20 w-full bg-muted">
      <div className="w-full max-w-[1500px] mx-auto">
        <h2 className="font-semibold font-ring sm:text-4xl text-2xl text-center">
          Book a session in 3 easy steps
        </h2>
        <p className="text-muted-foreground text-sm text-center mt-2">
          Three simple steps to connect with a mentor who understands your
          goals.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-15">
          {dummyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-center bg-card border rounded-xl p-10"
            >
              <span className="text-muted-foreground rounded-full aspect-square w-15 flex items-center justify-center bg-muted relative">
                <item.icon size={35} />
                <span className="bg-primary text-primary-foreground aspect-square w-7 h-7 font-medium flex items-center justify-center rounded-full absolute -top-2 -right-2">
                  {index + 1}
                </span>
              </span>
              <h2 className="font-semibold text-xl text-center">
                {item.title}
              </h2>
              <p className="text-muted-foreground text-sm text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksASession;
