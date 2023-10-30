import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BookType from "../types/BookType";
import CommentType from "../types/CommentType";

const BookResults: React.FC<{ bookresults: BookType[] }> = memo(({ bookresults }) => {
    const [commentData, setCommentData] = useState<CommentType[]>([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:3000").then((response) => {
            setCommentData(response.data);
        });
    }, [bookresults]);


    return (
        <div className="my-6 mr-8">
            {
                bookresults.map((book, index) => (
                    !book ? <h1>Loading</h1> :
                        <div key={index} className="xs:ml-36 sm:ml-40 md:ml-28 lg:ml-64 xl:ml-96 flex">
                            <div className="md:mr-40">
                                <a className="" href={book.Item.itemUrl} target="_blank" rel="noreferrer">
                                    <img src={book.Item.largeImageUrl} alt="" />
                                </a>
                                <div className="mb-8">
                                    <h1 className="text-start">{book.Item.title}</h1>
                                    <h2 className="w-40 inline">{book.Item.itemPrice}円</h2>
                                    <h2 className="ml-5 inline"><Link to={"/comment/" + book.Item.isbn} state={{ title: book.Item.title }} >コメントを書く</Link></h2>
                                </div>
                            </div>
                            <div>
                                {commentData.map((comment, index) => (
                                    book.Item.isbn === comment.isbn && <div key={index}>{comment.comments}</div>
                                ))}
                            </div>
                        </div>
                ))
            }
        </div >
    )
})

export default BookResults;
