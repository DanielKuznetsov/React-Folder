import { Routes, Route } from "react-router-dom";
import BookLayout from "./BookLayout";
import Books from "./Books";
import Book from "./Book";

export default function BookRoutes() {
    return (
        <>
            <BookLayout />
            <Routes>
                <Route index element={<Books />} />
                <Route path=':id' element={<Book/>} />
            </Routes>
        </>
    )
}