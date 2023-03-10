const Book=require("../models/Book")
const Category=require("../models/Category")
// Book operations
const getAllBooks=async()=>{
    return await Book.find().populate("category")
}
const createBook=async(b)=>{
    return await Book.create(b)
}
const getBookById=async(id)=>{
    return await Book.findById(id).populate("category")
}
const deleteBookById=async(id)=>{
    return await Book.findByIdAndDelete(id)
}
const updateBook=async(b)=>{
    return await Book.findByIdAndUpdate(b)
}
// Category operations
const getAllCategories=async()=>{
    return await Category.find()
}
const getCategoryById=async(id)=>{
    return await Category.findById(id)
}
const createCategory=async(c)=>{
    return await Category.create(c)
}
const deleteCategoryById=async(id)=>{
    return await Category.findByIdAndDelete(id)
}
const updateCategory=async(c)=>{
    return await Category.findByIdAndUpdate(c)
}
// Exportation des fonctions
module.exports={
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBookById,
    getAllCategories,
    createCategory,
    deleteCategoryById,
    updateCategory,
    getCategoryById
}