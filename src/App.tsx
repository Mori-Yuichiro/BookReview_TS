import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import InputText from "./components/InputText"
import BookResults from "./components/BookResult";
import Comment from "./components/Comment";
import BookType from "./types/BookType";


const APP_ID: string = import.meta.env.VITE_APP_ID;

function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [text, setText] = useState('');

  const handleChangeText = (newText: string) => {
    setText(newText);
  }

  const handleSearch = () => {
    const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${text}&applicationId=${APP_ID}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.Items);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="container">
              <InputText handleChangeText={handleChangeText} text={text} handleSearch={handleSearch} />
              <BookResults bookresults={books} />
            </div>
          } />
          <Route path="/comment/:isbn" element={<Comment />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
