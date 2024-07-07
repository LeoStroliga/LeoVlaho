"use client";
import { BadgeProps, Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
//import CategoryFilter from "../_components/CategoryFilter";
import { FC } from "react";
import { TypeProductListItem } from "../../../types/TypeProduct";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import { products, categories } from "./productList";
import contentfulService from "@/lib/contentfulClient";
import CategoryPage from "../page";


type Params = {
    category: string;
};

const ProductCard: FC<TypeProductListItem> = ({
    name,
    description,
    bannerImage,
    id,
    categories,
    price

}) => ( <Link style={{ color: '#2F855A', marginTop: '4rem' }}href={`${categories[0]}/${id}`}>
        <Card className="w-fit hover:opacity-70">
       
        <CardContent className="mt-6">
           
                    <div className="relative w-64 h-40">
                        <Image
                            src={bannerImage}   
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-md "
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                            alt={name}
                        />
                    </div>
            
            </CardContent>
            <CardHeader>
                <CardTitle className="text-green-700">{name}</CardTitle>

            </CardHeader>
            <CardFooter>
                {price} $
            </CardFooter>

    </Card></Link>
);



const CmsPage = async ({ params }: { params: Params }) => {
    console.log("tet");    
    console.log(params.category);
console.log("tet");
    const products = await contentfulService.getProductByCategory(params.category);
  
    if (!products) {
        return <div>Products not found</div>;
    }

    console.log("Producrs")
    console.log(products);
    return (
        
        <main className="container flex flex-col items-center gap-10">
            <h1 className="font-roboto-condensed text-6xl font-extrabold text-green-700 my-4">
                {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
            </h1>

            
            <ul className="flex flex-wrap justify-center gap-8">
                {products.map((product) => {
                    return (
                        <li key={product.id}>


                            <ProductCard {...product} />

                        </li>
                    );
                })}
            </ul>
        </main>

    );
};


export default CmsPage;
