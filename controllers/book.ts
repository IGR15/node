import { Request, Response } from "express";
import { Book } from "../db/entity/Book.js";
import { AppError } from "../Errors/AppError.js";

const books = [
    {
        id: 1,
        author: "Diaa abu zenh",
        bookName: "Data Structure"
    },
    {
        id: 2,
        author: "Nabeel 3rman",
        bookName: "Database"
    },
]

const filterArrayController = (req: Request ,res:Response ) => {
    const arr = [1,2,3,4,5,6,7,8,9]

    const filteredArray = arr.filter((item) => item % 2 === 0)

    res.status(200).json({
        message: "success",
        success: true,
        data: filteredArray
    })
}

const getAllBooks = async(req: Request, res: Response) => {
    const books =await Book.find()
    res.json({
        message: "success",
        success: true,
        books: books
    })
}
const createBook = async(newBookpost:Book) => {
    const book = await Book.findOne({where: [{bookName:newBookpost.bookName},{author:newBookpost.author}]})
    if(book){
        throw new AppError("Book already exists", 409, true)
    }
    const newBook = Book.create(newBookpost)
    return newBook.save()
   
}

const deleteBook = (req: Request ,res:Response) => {
    const bookId = Number(req.params.id);

    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        res.status(404).json({
            message: "book not found"
        })
    }
    
    books.splice(bookIndex, 1)

    res.status(200).json({
        message: "deleted successfully",
        books: books
    })
}

const getSingleBook = async(bookId:any) => {
    const book = await Book.findOne({ where: { id: bookId } })

    if (!book) {
        throw new AppError("book not found", 404, true)
    }

    return book
   
}

export { filterArrayController, getAllBooks, createBook, deleteBook, getSingleBook }