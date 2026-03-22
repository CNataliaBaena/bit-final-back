const recipesController = {
  create: (req, res) => {
    res.send('Create a new recipe');
  },
  readAll: (req, res) => {
    res.send('Read all recipes');
  },
  read: (req, res) => {
    res.send('Read a specific recipe');
  },
  update: (req, res) => {
    res.send('Update a specific recipe');
  },
  delete: (req, res) => {
    res.send('Delete a specific recipe');
  }
};

export default recipesController;