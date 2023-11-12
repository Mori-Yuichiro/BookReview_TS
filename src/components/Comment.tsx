import React, { memo, useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import useComment from "../hooks/useComment";
import { BookImageContext } from "../providers/BookImageProvider";

const Comment: React.FC = memo(() => {
    const [comment, setComment] = useState<string>('');
    const { postBook, postComment } = useComment();
    const { imageUrl } = useContext(BookImageContext);

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
            <img className="block m-auto" src={imageUrl} alt="" />
            <div className="space-y-4">
                <div>
                    <textarea className="outline w-1/3 pb-10" value={comment} placeholder="コメントを書いて下さい" onChange={handleChangeComment} />
                </div>
                <div>
                    <button className="outline w-1/3" onClick={handlePost}>投稿</button>
                </div>
            </div>
            <Link to="/">戻る</Link>
        </div>
    )
})

export default Comment;