import { Router } from "express";
import recipesController from '../controllers/recetas.js';

const recipesRouter = Router();
recipesRouter.post('/', recipesController.create);
recipesRouter.get('/', recipesController.readAll);
recipesRouter.get('/:id', recipesController.read);
recipesRouter.put('/:id', recipesController.update);
recipesRouter.delete('/:id', recipesController.delete);

export default recipesRouter;
