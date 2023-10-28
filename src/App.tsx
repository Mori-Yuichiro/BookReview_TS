import { BrowserRouter } from 'react-router-dom';
import { useState, useCallback } from "react";
import BookType from "./types/BookType";
import Router from './router/Router';


const APP_ID: string = import.meta.env.VITE_APP_ID;

function App() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [text, setText] = useState('');

  const handleChangeText = (newText: string) => {
    setText(newText);
  }

  const handleSearch = useCallback(() => {
    const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${text}&applicationId=${APP_ID}`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.Items);
      })
      .catch((error) => {
        console.error(error);
      })
  }, [setBooks, text]);

  return (
    <>
      <BrowserRouter>
        <Router handleChangeText={handleChangeText} text={text} handleSearch={handleSearch} books={books} />
      </BrowserRouter>

    </>
  )
}

export default App;
