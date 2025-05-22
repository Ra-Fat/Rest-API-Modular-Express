import express from 'express';
import {getAllCategories, getCategoriesById,
createNewCategories, updateCategories
, deleteCategories} from '../controllers/categoriesController.js'

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoriesById);
categoryRouter.post('/', createNewCategories);
categoryRouter.put('/:id', updateCategories);
categoryRouter.delete('/:id', deleteCategories);

export default categoryRouter
