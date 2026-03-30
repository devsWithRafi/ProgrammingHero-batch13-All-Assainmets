import { assets } from '../assets/assets';

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center py-5">
            <img
                src={assets.emptyCart}
                alt="emptyCart image"
                className="w-80 select-none pointer-events-none"
            />
            <h2 className="text-center text-3xl font-bold -mt-5">
                Oops! Your Cart is <span className="text-red-500">Empty</span>
            </h2>
            <p className="text-center text-gray-500 text-lg w-[90%] mt-3">
                Looks like you haven’t added anything yet. Start exploring and
                add your favorite products
            </p>
        </div>
    );
};

export default EmptyCart;
