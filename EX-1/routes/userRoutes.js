import express from 'express';
import { getAllUser, getUserByID, creatNewUser, updateUser,deleteUser } from '../controllers/userController.js';

const router= express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserByID);
router.post('/', creatNewUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;