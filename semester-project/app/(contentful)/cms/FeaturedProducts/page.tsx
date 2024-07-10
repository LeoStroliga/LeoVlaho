"use client";import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

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
        imageUrl: '/hero/vegan-beauty.jpeg',
        link: 'vegan-beauty',
    },
    {
        title: 'Cruelty-Free Fashion',
        imageUrl: '/hero/cruelty-free-fashon.jpg',
        link: 'cruelty-free-fashion',
    },
    {
        title: 'Zero Waste Living',
        imageUrl: '/hero/zero-waste-living.jpeg',
        link: 'zero-waste-living',
    },
];

const CategoryCard: FC<{ category: Category }> = ({ category }) => {
    return (
        <Link href={`FeaturedProducts/${category.link}`} key={category.link}>
            <div
                style={{
                    position: 'relative',
                    width: '100%', 
                    height: '300px', 
                    marginBottom: '16px', 
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
                        color: '#FFFFFF', 
                        fontSize: '32px', 
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadow: '0 0 4px #000', 
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
            <h1 className="font-roboto-condensed text-6xl font-extrabold" style={{ color: '#2F855A', marginTop: '4rem' }}>
                Categories
            </h1>
            <div
                className="grid grid-cols-1 md:grid-cols-2" 
                style={{
                    gap: '16px',
                    justifyContent: 'space-around',
                    padding: '20px',
                    maxWidth: '1200px', 
                    width: '100%', 
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
