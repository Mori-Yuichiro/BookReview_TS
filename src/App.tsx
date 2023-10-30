import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

import useSearchBook from './hooks/useSearchBook';


function App() {
  const [text, setText] = useState('');
  const { searchBook, books } = useSearchBook(text);

  const handleChangeText = (newText: string) => {
    setText(newText);
  }

  return (
    <>
      <BrowserRouter>
        <Router handleChangeText={handleChangeText} text={text} handleSearch={searchBook} books={books} />
      </BrowserRouter>

    </>
  )
}

export default App;
