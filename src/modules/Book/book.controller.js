import bookModel from "../../../db/model/book.model.js"

const addBook= async(req,res)=>{
    let addedBook= await bookModel.insertMany(req.body)
    res.status(201).json({message:"Book added",addedBook})
}

const getAllBooks=async (req,res)=>{
    let books=await bookModel.find()
    res.status(200).json({message:"Done",books})
}


const getSpecificBook=async (req,res)=>{
    let books=await bookModel.findById(req.params.id)
    res.status(200).json({message:"Done",books})
}


const updateBook= async(req,res)=>{
    let updatedBooks=await bookModel.findByIdAndUpdate(req.params.id,{title:req.body.title},{new:true})
    res.status(200).json({message:"Updated",updatedBooks})
}

const deleteBook=async(req,res)=>{
    let deletedBooks=await bookModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"Deleted",deletedBooks})
}

export{
    addBook,
    getAllBooks,
    getSpecificBook,
    updateBook,
    deleteBook
}