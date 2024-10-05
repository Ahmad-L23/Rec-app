import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://recipe-backend-d4g0.onrender.com/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  }, [userID]);

  return (
    <div className="saved-recipes-container">
      <h1 className="saved-recipes-title">Saved Recipes</h1>
      <ul className="saved-recipes-list">
        {savedRecipes.map((recipe) => (
          <li key={recipe._id} className="saved-recipe-item">
            <div className="saved-recipe-content">
              <h2 className="recipe-name">{recipe.name}</h2>
              <p className="recipe-description">{recipe.description}</p>
              <img
                src={recipe.imageUrl}
                alt={recipe.name}
                className="recipe-image"
              />
              <p className="recipe-cooking-time">
                Cooking Time: {recipe.cookingTime} minutes
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
