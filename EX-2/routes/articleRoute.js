import express from "express";
import {getAllAriticle, getArticleByID,
createNewArticle, updateArticle, deleteArticle} from '../controllers/articleController.js';

const articleRouter = express.Router();

articleRouter.get('/', getAllAriticle);
articleRouter.get('/:id', getArticleByID);
articleRouter.post('/', createNewArticle);
articleRouter.put('/:id', updateArticle);
articleRouter.delete('/:id', deleteArticle);

export default articleRouter