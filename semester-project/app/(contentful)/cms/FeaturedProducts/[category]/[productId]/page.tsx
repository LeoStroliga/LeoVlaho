"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
//import {
//    CommonNode,
//    documentToReactComponents,
//} from "@contentful/rich-text-react-renderer";
//import { BLOCKS } from "@contentful/rich-text-types";
//
//import hljs from "highlight.js/lib/core";
//import javascript from "highlight.js/lib/languages/javascript";
//import python from "highlight.js/lib/languages/python";
//import "highlight.js/styles/github-dark.css";
//import { RichTextLinksFragment } from "@/marketing-web/app/gql/graphql";
import contentfulService from "@/lib/contentfulClient";
import CmsPage from "../page";


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
            <div className="grid grid-cols-2 gap-4 w-3/4 relative">
                <div className="relative w-full h-[400px]">
                    <div
                        className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer text-rose-500 font-bold text-3xl"
                        onClick={prevImage}
                    >
                        &lt;
                    </div>
                    <div
                        className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer text-rose-500 font-bold text-3xl"
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

                <div className="flex flex-col gap-4 justify-between">
                   
                        <div className="col-span-1 text-left">
                            <h1 className="text-4xl font-bold text-green-900">{product.name}</h1>
                            <h2 className="text-2xl font-bold">Price: {product.price} $</h2>
                        </div>
                        
                   
                    <div className="flex flex-col">
                        <div className="mb-2">{product.description}</div>
                        <Button variant="secondary">+ Add to cart</Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductPage;
