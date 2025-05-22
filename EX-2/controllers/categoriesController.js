import { categories } from "../models/data.js";

export const getAllCategories= (req, res)=>{
    res.json(categories);
}
export const getCategoriesById= (req, res)=>{
    const categoryId = parseInt(req.params.id);
    const category= categories.find(c=> c.id === categoryId);
    if(!category) return res.status(404).json({error: 'Categories not found'});
    res.json(category);
}
export const createNewCategories= (req, res)=>{
    const {name, email} = req.body;
    if(!name || !email){
        return res.status(400).json({error: 'Name and email are required!!'});
    }
    const newCategory = {
        id: categories.length+1,
        name,
        email
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
}
export const updateCategories= (req, res)=>{
    const categoryId = parseInt(req.params.id);
    const category= categories.find(c=> c.id === categoryId);
    const {name, email}= req.body;
    if(!category) return res.status(404).json({error: 'Categories not found'});
    if(name) category.name= name;
    if(email) category.email= email;

    res.json(category);
}
export const deleteCategories = (req, res) => {
    const categoryId = parseInt(req.params.id);
    const index = categories.findIndex(c => c.id === categoryId);
    if (index === -1) return res.status(404).json({ error: 'Category not found' });

    categories.splice(index, 1);
    res.status(204).send();
};
