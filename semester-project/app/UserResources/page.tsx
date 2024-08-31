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


