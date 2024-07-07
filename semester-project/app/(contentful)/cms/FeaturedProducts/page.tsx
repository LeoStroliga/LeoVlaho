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

const CategoryCard: FC<{ category: Category }> = ({ category }) => {
    return (
        <Link href={`FeaturedProducts/${category.link}`} key={category.link}>
            <div
                style={{
                    position: 'relative',
                    width: '100%', // Adjusted for responsiveness
                    height: '300px', // Set a fixed height
                    marginBottom: '16px', // Add margin between items
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
                        fontSize: '32px', // Increased font size to 32px
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadow: '0 0 4px #000', // Increased shadow for visibility
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
                className="grid grid-cols-1 md:grid-cols-2" // 1 column for small screens, 2 columns for medium and larger
                style={{
                    gap: '16px',
                    justifyContent: 'space-around',
                    padding: '20px',
                    maxWidth: '1200px', // Added max-width for better responsiveness
                    width: '100%', // Ensures the grid takes full width
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
