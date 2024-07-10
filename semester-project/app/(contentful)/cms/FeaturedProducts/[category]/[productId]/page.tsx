"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import contentfulService from "@/lib/contentfulClient";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
    const [product, setProduct] = useState<any>(null);
    const [imageIndex, setImageIndex] = useState(0);

    const prevImage = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 >= 0 ? prevIndex - 1 : product.images.length - 1));
    };

    const nextImage = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % product.images.length);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchedProduct = await contentfulService.getProductById(params.productId);
                setProduct(fetchedProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [params.productId]);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <main className="container flex flex-col items-center gap-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-3/4">
                <div className="relative w-full h-[400px] md:h-[500px] order-2 md:order-1 mx-4 md:mx-0">
                    <div
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer text-rose-500 font-bold text-3xl z-10"
                        onClick={prevImage}
                    >
                        &lt;
                    </div>
                    <div
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-rose-500 font-bold text-3xl z-10"
                        onClick={nextImage}
                    >
                        &gt;
                    </div>

                    <Image
                        src={product.images[imageIndex % product.images.length]}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-md"
                        width={500}
                        height={500}
                    />
                </div>

                <div className="md:col-span-1 flex flex-col justify-center gap-4 order-1 md:order-2 mx-4 md:mx-0">
                    <h1 className="text-4xl font-bold text-green-700">{product.name}</h1>
                    <h2 className="text-2xl font-bold">Price: {product.price} $</h2>
                    <div className="mb-2">{product.description}</div>
                    <Button variant="secondary" className="mt-4 md:mt-0">+ Add to cart</Button>
                </div>
            </div>
        </main>
    );
};

export default ProductPage;
