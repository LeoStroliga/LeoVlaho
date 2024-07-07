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
// import CategoryFilter from "../_components/CategoryFilter";
import { FC } from "react";
import { TypeProductListItem } from "../../types/TypeProduct";
import Image from "next/image";
import { cn } from "@/lib/utils";
// import { products, categories } from "./productList";
import contentfulService from "@/lib/contentfulClient";

interface Category {
    title: string;
    imageUrl: string;
    link: string;
}

const categories: Category[] = [
    {
        title: 'Food',
        imageUrl: '/hero/vege1.jpg',
        link: 'food',
    },
    {
        title: 'Vegan Beauty',
        imageUrl: '/hero/vege2.jpg',
        link: 'vegan-beauty',
    },
    {
        title: 'Cruelty-Free Fashion',
        imageUrl: '/hero/vege3.jpg',
        link: 'cruelty-free-fashion',
    },
    {
        title: 'Zero Waste Living',
        imageUrl: '/hero/vege4.jpg',
        link: 'zero-waste-living',
    },
];

const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <Link href={`FeaturedProducts/${category.link}`} key={category.link}>
            <div
                style={{
                    position: 'relative',
                    width: '450px', // Set a fixed width
                    height: '300px', // Set a fixed height
                }}
            >
                <Image
                    src={category.imageUrl}
                    alt={category.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md transition-opacity duration-300 ease-in-out"
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '0.8')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#FFFFFF', // Yellow text color
                        fontSize: '32px', // Increased font size to 24px
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadow: '0 0 4px #000', // Increased shadow to 4px for more visibility
                    }}
                >
                    {category.title}
                </div>
            </div>
        </Link>
    );
};

const CategoryPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
           <h1 className="font-roboto-condensed text-6xl font-extrabold text-green-900 my-4">
                Categories
            </h1>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '16px',
                    justifyContent: 'space-around',
                    padding: '20px',
                }}
            >
                {categories.map((category) => (
                    <CategoryCard key={category.link} category={category} />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;