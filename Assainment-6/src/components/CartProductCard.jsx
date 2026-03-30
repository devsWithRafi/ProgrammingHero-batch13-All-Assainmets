import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

const CartProductCard = ({ product, setCartProducts }) => {
    const handleRemoveProduct = () => {
        setCartProducts((prev) => {
            const updatedProducts = prev.filter((p) => p.id !== product.id);
            localStorage.setItem(
                'cartProducts',
                JSON.stringify(updatedProducts),
            );
            toast.warning('Product removed from cart!');
            return updatedProducts;
        });
    };

    return (
        <div className="flex items-center overflow-hidden justify-between bg-gray-50 p-5 rounded-2xl">
            <div className="flex sm:flex-row flex-col w-[95%] overflow-hidden sm:items-center items-start sm:gap-5 gap-3 ">
                <div className="p-2.5 aspect-square overflow-hidden bg-white rounded-full shadow-sm">
                    <img
                        src={product.icon}
                        alt=""
                        className="min-w-[32px] max-w-[32px] aspect-square m-1"
                    />
                </div>

                <div className="w-full flex flex-col gap-1">
                    <h2 className="font-semibold sm:text-xl text-lg text-ellipsis w-[97%] overflow-hidden text-nowrap">
                        {product.name}
                    </h2>
                    <p className="font-medium text-gray-400 sm:text-lg text-sm">
                        ${product.price}
                    </p>
                </div>
            </div>

            <button
                onClick={handleRemoveProduct}
                className="text-red-500 text-lg hover:text-red-700 duration-300 font-medium cursor-pointer"
            >
                <span className="sm:block hidden">Remove</span>
                <AiOutlineDelete className="sm:hidden block" />
            </button>
        </div>
    );
};

export default CartProductCard;
