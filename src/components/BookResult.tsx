import React, { memo, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import BookType from "../types/BookType";
import CommentType from "../types/CommentType";
import { BookImageContext } from "../providers/BookImageProvider";

const BookResults: React.FC<{ bookresults: BookType[] }> = memo(({ bookresults }) => {
    const [commentData, setCommentData] = useState<CommentType[]>([]);
    const { setImageUrl } = useContext(BookImageContext);

    useEffect(() => {
        axios.get("http://127.0.0.1:3000").then((response) => {
            setCommentData(response.data);
        });
    }, [bookresults]);

    const onClickImageSet = (imageUrl: string) => {
        setImageUrl(imageUrl);
    }

    return (
        <div className="my-6 mr-8">
            {
                bookresults.map((book, index) => (
                    !book ? <h1>Loading</h1> :
                        <div key={index} className="my-6 p-6 xs:ml-36 sm:ml-40 md:ml-28 lg:ml-64 xl:ml-96 flex border rounded bg-gray-200 xl:w-2/5 lg:w-2/4 md:w-9/12 sm:w-80">
                            <div className="md:mr-20">
                                <a className="" href={book.Item.itemUrl} target="_blank" rel="noreferrer">
                                    <img src={book.Item.largeImageUrl} alt="" />
                                </a>
                                <div className="mb-8 sm:w-48">
                                    {book.Item.title.length > 11 ?
                                        <h1 className="text-start">{book.Item.title.substring(0, 10)}...</h1>
                                        : <h1 className="text-start">{book.Item.title}</h1>
                                    }
                                    <h2 className="w-40 inline">{book.Item.itemPrice}円</h2>
                                    <h2 className="ml-5 inline hover:text-white" onClick={() => onClickImageSet(book.Item.largeImageUrl)}><Link to={"/comment/" + book.Item.isbn} state={{ title: book.Item.title }} >コメントを書く</Link></h2>
                                </div>
                            </div>
                            <div className=" w-1/2 rounded bg-white md:ml-0 xs:ml-3 text-center pt-3 h-auto">
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
