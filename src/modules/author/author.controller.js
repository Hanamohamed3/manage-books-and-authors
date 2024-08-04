import authorModel from './../../../db/model/author.model.js';


const addAuthor= async(req,res)=>{
    let addedAuthor= await authorModel.insertMany(req.body)
    res.status(201).json({message:"Author added",addedAuthor})
}

const getAllAuthors=async (req,res)=>{
    let authors=await authorModel.find()
    res.status(200).json({message:"Done",authors})
}


const getSpecificAuthor=async (req,res)=>{
    let authors=await authorModel.findById(req.params.id)
    res.status(200).json({message:"Done",authors})
}


const updateAuthor= async(req,res)=>{
    let updatedAuthors=await authorModel.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true})
    res.status(200).json({message:"Updated",updatedAuthors})
}

const deleteAuthor=async(req,res)=>{
    let deletedAuthors=await authorModel.findByIdAndDelete(req.params.id)
    res.status(200).json({message:"Deleted",deletedAuthors})
}

export{
    addAuthor,
    getAllAuthors,
    getSpecificAuthor,
    updateAuthor,
    deleteAuthor
}