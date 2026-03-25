import Recipe from '../models/recipes.js';

const recipesController = {
  create: async (req, res) => {
    try {
        const { name, description, price, ingredients, instructions } = req.body;
        const newRecipe = new Recipe({ 
          name, 
          description, 
          price, 
          ingredients, 
          instructions 
        });
        await newRecipe.save();
        res.status(201).json({ message: 'Recipe created successfully'});
    } catch (error) {
        res.status(500).json({ message: 'Error creating recipe'});
    }
  },
  readAll: async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json({ message: 'Recipes retrieved successfully' , data: recipes });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving recipes'});
    }
  },
  read: async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      res.status(200).json({ message: 'Recipe retrieved successfully', data: recipe });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving recipe' });
    }
  },
  update: async (req, res) => {
    try {
      const { name, description, price, ingredients, instructions } = req.body;
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        req.params.id,
        { name, 
          description, 
          price, 
          ingredients, 
          instructions })
          if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
          }else {
            res.status(200).json({ message: 'Recipe updated successfully' });
          }
    } catch (error) {
      res.status(500).json({ message: 'Error updating recipe' });
    }
  },
  delete: async (req, res) => {
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!deletedRecipe) {
        return res.status(404).json({ message: 'Recipe not found' });
      }
      res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting recipe' });
    }
    }
};

export default recipesController;