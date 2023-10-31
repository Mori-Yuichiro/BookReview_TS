import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const useComment = () => {
    const isbn: string = useLocation().pathname.substring(9, 22);
    const title: string = useLocation().state.title;
    const navigate = useNavigate();

    const postBook = useCallback(() => {
        axios.post(
            'http://127.0.0.1:3000/book/post',
            { title: title, isbn: isbn }
        ).then(() => {
            console.log('Book insert');
        })
    }, [title, isbn]);

    const postComment = useCallback((comment: string) => {
        axios.post(
            'http://127.0.0.1:3000/comment/post',
            { isbn: isbn, comment: comment }
        ).then(() => {
            console.log('Comment insert');
        })
        navigate('/');
    }, [isbn])

    return { postBook, postComment };
}

export default useComment;