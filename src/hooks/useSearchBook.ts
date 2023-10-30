import { useCallback, useState } from "react";

import BookType from "../types/BookType";

const APP_ID: string = import.meta.env.VITE_APP_ID;

const useSearchBook = (text: string) => {
    const [books, setBooks] = useState<BookType[]>([]);
    const URL = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=${text}&applicationId=${APP_ID}`;

    const searchBook = useCallback(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.Items);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [setBooks, text]);
    return { searchBook, books }
}

export default useSearchBook;