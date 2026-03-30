import { Check } from 'lucide-react';

const productBadgeStyle = {
    best_seller: 'bg-[#FEF3C6] text-[#BB4D00]',
    popular: 'bg-[#E1E7FF] text-purple-600',
    new: 'bg-[#DBFCE7] text-[#0A883E]',
};

const ProductCard = ({ product }) => {

    return (
        <div className="w-full card bg-base-100 p-6 shadow-sm flex flex-col items-start">
            {/* badge */}
            <div
                className={`${productBadgeStyle[product.tagType]} px-4 font-medium absolute top-5 right-5 rounded-full py-1 capitalize`}
            >
                {product.tagType.toLowerCase().replaceAll('_', ' ')}
            </div>

            {/* top icon */}
            <div className="border border-gray-200 rounded-full p-3">
                <img src={product.icon} alt="" className="w-8" />
            </div>

            {/* product info */}
            <div className="flex flex-col gap-3 py-4">
                <h3 className="font-bold text-2xl">{product.name}</h3>
                <p className="text-gray-500 font-medium text-[16px] w-[90%]">
                    {product.description}
                </p>
                <h4 className="text-2xl font-bold">
                    ${product.price}
                    <span className="text-sm text-gray-500 font-medium">
                        /{product.period}
                    </span>
                </h4>
            </div>

            {/* features list */}
            <ul className="mt-2">
                {product.features.map((feature, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2 text-gray-500 font-medium text-[16px]"
                    >
                        <Check className="text-green-500" size={18} />
                        {feature}
                    </li>
                ))}
            </ul>

            {/* buy now button */}
            <button
                className="bg-gradient w-full btn h-auto rounded-full text-white py-3 mt-5 text-[16px]"
            >
                Buy Now
            </button>
        </div>
    );
};

export default ProductCard;
