import express from "express";
import {getAllJournalist, getJournalistById,
createNewJournalist, updateJournalist, deleteJournalist}
from '../controllers/journalistController.js'


const journalistRouter = express.Router();

journalistRouter.get('/', getAllJournalist);
journalistRouter.get('/:id', getJournalistById);
journalistRouter.post('/', createNewJournalist);
journalistRouter.put('/:id', updateJournalist);
journalistRouter.delete('/:id', deleteJournalist);

export default journalistRouter