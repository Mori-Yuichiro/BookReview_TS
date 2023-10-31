import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useComment from "../hooks/useComment";

const Comment: React.FC = () => {
    const [comment, setComment] = useState<string>('');
    const { postBook, postComment } = useComment();

    useEffect(() => {
        postBook();
    }, [])

    const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };

    const handlePost = () => {
        postComment(comment);
        setComment('');
    };

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