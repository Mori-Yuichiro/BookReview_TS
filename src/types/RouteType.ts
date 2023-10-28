import BookType from "./BookType";

type Router = {
    handleChangeText: (newText: string) => void;
    text: string;
    handleSearch: () => void;
    books: BookType[];
}

export default Router;