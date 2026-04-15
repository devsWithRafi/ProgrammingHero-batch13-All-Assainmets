import FriendList from '@/components/friends/FriendList';

const FriendsPage = () => {
    return (
        <section className="mt-15 py-15 flex flex-col gap-10">
            <h2 className="sm:text-5xl text-3xl font-bold text-center">
                Your Friends
            </h2>
            <FriendList />
        </section>
    );
};

export default FriendsPage;
