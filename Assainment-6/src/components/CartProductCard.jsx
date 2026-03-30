import React from 'react';

const CartProductCard = ({ product, setCartProducts }) => {
    const handleRemoveProduct = () => {
        setCartProducts((prev) => {
            const updatedProducts = prev.filter((p) => p.id !== product.id);
            localStorage.setItem(
                'cartProducts',
                JSON.stringify(updatedProducts),
            );
            return updatedProducts;
        });
    };

    
    return (
        <div className="flex items-center gap-5 justify-between bg-gray-50 p-5 rounded-2xl">
            <div className="flex items-center gap-5">
                <div className="p-2.5 aspect-square overflow-hidden bg-white rounded-full shadow-sm">
                    <img src={product.icon} alt="" className="w-8 m-1" />
                </div>
                <div>
                    <h2 className="font-semibold text-xl">{product.name}</h2>
                    <p className="font-medium text-gray-400 text-lg">
                        ${product.price}
                    </p>
                </div>
            </div>

            <button
                onClick={handleRemoveProduct}
                className="text-red-500 text-lg hover:text-red-700 duration-300 font-medium cursor-pointer"
            >
                Remove
            </button>
        </div>
    );
};

export default CartProductCard;
