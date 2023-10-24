import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Comment: React.FC = () => {
    const isbn: string = useLocation().pathname.substring(9, 22);
    const [comment, setComment] = useState<string>('');
    const title: string = useLocation().state.title;
    const navigate = useNavigate();

    useEffect(() => {
        axios.post(
            'http://127.0.0.1:3000/book/post',
            { title: title, isbn: isbn }
        ).then(() => {
            console.log('Book insert');
        })


    }, [])

    const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    }

    const handlePost = () => {
        axios.post(
            'http://127.0.0.1:3000/comment/post',
            { isbn: isbn, comment: comment }
        ).then(() => {
            console.log('Comment insert');
        })
        setComment('');
        navigate('/')
    }

    return (
        <div className="text-center space-y-4">
            <h1>コメント</h1>
            <div className="space-y-4">
                <div>
                    <textarea className="outline w-46 pb-10" value={comment} placeholder="コメントを書いて下さい" onChange={handleChangeComment} />
                </div>
                <div>
                    <button className="outline px-16" onClick={handlePost}>投稿</button>
                </div>
            </div>
            <Link to="/">戻る</Link>
        </div>
    )
}

export default Comment;