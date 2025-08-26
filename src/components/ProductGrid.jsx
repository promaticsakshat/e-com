import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
    const products = [
        {
            id: 1,
            name: "Beetroot",
            subtitle: "Local shop",
            weight: "500 gm.",
            price: "17.29",
            img: "https://pngfre.com/wp-content/uploads/2022/06/Beetroot-PNG-Image.png"
        },
        {
            id: 2,
            name: "Italian Avocado",
            subtitle: "Local shop",
            weight: "500 gm.",
            price: "12.29",
            img: "https://www.pngall.com/wp-content/uploads/2016/06/Avocado-PNG.png"
        },
        {
            id: 3,
            name: "Szam amm",
            subtitle: "Process food",
            weight: "500 gm.",
            price: "14.29",
            img: "https://www.pngall.com/wp-content/uploads/2016/03/Frozen-Food-PNG-File.png"
        },
        {
            id: 4,
            name: "Beef Mixed",
            subtitle: "Cut Bone",
            weight: "500 gm.",
            price: "16.29",
            img: "https://www.pngall.com/wp-content/uploads/2016/07/Beef-Free-Download-PNG.png"
        },
        {
            id: 5,
            name: "Cold Drinks",
            subtitle: "Sprite",
            weight: "500 gm.",
            price: "18.29",
            img: "https://www.pngall.com/wp-content/uploads/2016/05/Sprite-PNG-HD.png"
        },
        {
            id: 6,
            name: "Plant Hunter",
            subtitle: "Frozen pack",
            weight: "500 gm.",
            price: "10.49",
            img: "https://www.pngall.com/wp-content/uploads/2016/03/Frozen-Food-PNG-File.png"
        },
        {
            id: 7,
            name: "Deshi Gajor",
            subtitle: "Local Carrot",
            weight: "500 gm.",
            price: "9.99",
            img: "https://www.pngall.com/wp-content/uploads/5/Carrot-PNG-Image.png"
        },
        {
            id: 8,
            name: "Deshi Shosha",
            subtitle: "Local Cucumber",
            weight: "500 gm.",
            price: "8.75",
            img: "https://www.pngall.com/wp-content/uploads/6/Cucumber-PNG-Photo.png"
        },
        {
            id: 9,
            name: "Lays Chips",
            subtitle: "Bacon Flavor",
            weight: "500 gm.",
            price: "6.99",
            img: "https://www.pngmart.com/files/3/Lays-PNG-File.png"
        },
        {
            id: 10,
            name: "Badhakopi",
            subtitle: "Local Cabbage",
            weight: "500 gm.",
            price: "7.49",
            img: "https://pngfre.com/wp-content/uploads/2022/06/Cabbage-PNG-Image.png"
        }
    ];

    let [quantity, setQuantity] = useState(new Map());
    let [loading, setLoading] = useState(new Set());

    // add to cart function
    const addToCart = (id) => {
        // setLoading(prev => new Set(prev).add(id));
        // setTimeout(() => {
        //     setLoading(prev => {
        //         const newSet = new Set(prev);
        //         newSet.delete(id);
        //         return newSet;
        //     });
        //     setQuantity(prev => {
        //         const newMap = new Map(prev);
        //         newMap.set(id, (newMap.get(id) || 0) + 1);
        //         return newMap;
        //     });
        // }, 1000);

        setQuantity(prev => {
            const newMap = new Map(prev);
            newMap.set(id, (newMap.get(id) || 0) + 1);
            return newMap;
        });
    }

    // remove from cart function
    const removeFromCart = (id) => {
        // setLoading(prev => new Set(prev).add(id));
        // setTimeout(() => {
        //     setLoading(prev => {
        //         const newSet = new Set(prev);
        //         newSet.delete(id);
        //         return newSet;
        //     });
        //     setQuantity(prev => {
        //         const newMap = new Map(prev);
        //         if (newMap.has(id)) {
        //             const currentQty = newMap.get(id);
        //             if (currentQty > 1) {
        //                 newMap.set(id, currentQty - 1);
        //             } else {
        //                 newMap.delete(id);
        //             }
        //         }
        //         return newMap;
        //     });
        // }, 1000);
        setQuantity(prev => {
            const newMap = new Map(prev);
            if (newMap.has(id)) {
                const currentQty = newMap.get(id);
                if (currentQty > 1) {
                    newMap.set(id, currentQty - 1);
                } else {
                    newMap.delete(id);
                }
            }
            return newMap;
        });
    }


    return (
        <div className="w-full mt-6">
            <h2 className="text-lg font-semibold mb-4">Fresh Recommendations</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-5  auto-rows-[150px] p-10">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        quantity={quantity}
                        loading={loading}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        name={product.name}
                        subtitle={product.subtitle}
                        weight={product.weight}
                        price={product.price}
                        img={product.img}
                    />
                ))}
            </div>
        </div>
    );

}

export default ProductGrid;