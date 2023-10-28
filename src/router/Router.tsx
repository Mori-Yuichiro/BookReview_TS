import React, { memo } from "react"
import { Route, Routes } from "react-router-dom"

import InputText from "../components/InputText";
import BookResults from "../components/BookResult";
import Comment from "../components/Comment";
import BookType from "../types/BookType";


type Router = {
    handleChangeText: (newText: string) => void;
    text: string;
    handleSearch: () => void;
    books: BookType[];
}

const Router: React.FC<Router> = memo(({ handleChangeText, text, handleSearch, books }) => {
    return (
        <Routes>
            <Route path="/" element={
                <div className="container">
                    <InputText handleChangeText={handleChangeText} text={text} handleSearch={handleSearch} />
                    <BookResults bookresults={books} />
                </div>
            } />
            <Route path="/comment/:isbn" element={<Comment />} />
        </Routes>
    )
})

export default Router;