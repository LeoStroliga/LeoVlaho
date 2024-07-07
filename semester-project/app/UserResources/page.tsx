import React from 'react';
import RecipeTitle from './Title';
import Image from 'next/image';
import './UR.css';

interface Recipe {
    title: string;
    ingredients: string[];
    instructions: string[];
    imageUrl: string;
}

const RecipeContainer: React.FC<Recipe> = ({ title, ingredients, instructions, imageUrl }) => (
    <div className="RecipeContainer">
        <div className="image-container">
            <div className="image-wrapper">
                <Image
                    src={imageUrl}
                    alt={`${title} Image`}
                    layout="fill"
                    objectFit="cover"
                    className="recipe-image"
                />
            </div>
        </div>
        <div className="text-content">
            <h1>{title}</h1>
            <h3>Ingredients:</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    </div>
);

const AppRecipes = () => {
    const recipes = [
        {
            title: 'Vegetarian Chickpea and Spinach Curry',
            ingredients: [
                '- 1 can (15 oz) chickpeas, drained and rinsed',
                '- 1 onion, finely chopped',
                '- 2 cloves garlic, minced',
                '- 1 can (14 oz) diced tomatoes',
                '- 1 cup spinach, chopped',
                '- 1 can (14 oz) coconut milk',
                '- 2 tablespoons curry powder',
                '- 1 teaspoon cumin',
                '- Salt and pepper to taste',
                '- 2 tablespoons olive oil',
            ],
            instructions: [
                'In a large pan, sauté the chopped onion and garlic in olive oil until softened.',
                'Add chickpeas, diced tomatoes, coconut milk, curry powder, cumin, salt, and pepper. Stir well.',
                'Simmer for 15-20 minutes, allowing the flavors to meld.',
                'Stir in chopped spinach and cook until wilted.',
                'Serve over rice or quinoa.',
            ],
            imageUrl: '/Pictures/Vegan-Chickpea-and-Spinach-Curry.jpeg',
        },
        {
            title: 'Stuffed Bell Peppers with Quinoa and Black Beans',
            ingredients: [
                '- 4 bell peppers, halved and seeds removed',
                '- 1 cup quinoa, cooked',
                '- 1 can (15 oz) black beans, drained and rinsed',
                '- 1 cup corn kernels',
                '- 1 cup diced tomatoes',
                '- 1 cup shredded cheese',
                '- 1 teaspoon cumin',
                '- 1 teaspoon chili powder',
                '- Salt and pepper to taste',
            ],
            instructions: [
                'Preheat the oven to 375°F (190°C).',
                'In a large bowl, mix together quinoa, black beans, corn, diced tomatoes,',
                'cheese, cumin, chili powder, salt, and pepper.',
                'Stuff each bell pepper half with the quinoa mixture.',
                'Place stuffed peppers in a baking dish and bake for 25-30 minutes or until peppers are tender.',
            ],
            imageUrl: '/Pictures/quinoa-and-black-bean-stuffed-bell-peppers-topped.jpg',
        },
        {
            title: 'Vegetarian Lentil Tacos',
            ingredients: [
                '- 4 bell peppers, halved and seeds removed',
                '- 1 cup quinoa, cooked',
                '- 1 can (15 oz) black beans, drained and rinsed',
                '- 1 cup corn kernels',
                '- 1 cup diced tomatoes',
                '- 1 cup shredded cheese',
                '- 1 teaspoon cumin',
                '- 1 teaspoon chili powder',
                '- Salt and pepper to taste',
            ],
            instructions: [
                'Preheat the oven to 375°F (190°C).',
                'In a large bowl, mix together quinoa, black beans, corn, diced tomatoes,',
                'cheese, cumin, chili powder, salt, and pepper.',
                'Stuff each bell pepper half with the quinoa mixture.',
                'Place stuffed peppers in a baking dish and bake for 25-30 minutes or until peppers are tender.',
            ],
            imageUrl: '/Pictures/Vegan-Lentil-Tacos_6square.jpg',
        },
        {
            title: 'Mushroom and Spinach Stuffed Pasta Shells',
            ingredients: [
                '- 16 jumbo pasta shells, cooked according to package instructions',
                '- 1 cup ricotta cheese',
                '- 1 cup shredded mozzarella cheese',
                '- 1 cup chopped mushrooms',
                '- 1 cup chopped spinach',
                '- 1 can (14 oz) marinara sauce',
                '- 1 teaspoon Italian seasoning',
                '- Salt and pepper to taste',
            ],
            instructions: [
                'Preheat the oven to 350°F (175°C).',
                'In a bowl, combine ricotta cheese, mozzarella cheese, mushrooms,',
                'spinach Italian seasoning, salt, and pepper.',
                'Stuff each cooked pasta shell with the cheese and vegetable mixture.',
                'Place the stuffed shells in a baking dish, cover with marinara sauce, and bake it for 30 minutes',
                'until bubbly and golden.',
            ],
            imageUrl: '/Pictures/wild-mushroom-spinach-stuffed-shells.jpg',
        }
    ];

    return (
        <div className="App">
            <RecipeTitle />
            {recipes.map((recipe, index) => (
                <RecipeContainer
                    key={index}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    imageUrl={recipe.imageUrl}
                />
            ))}
        </div>
    );
};

export default AppRecipes;
