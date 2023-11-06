import { ReactNode, createContext, useState } from "react";

type BookImageType = {
    imageUrl: string;
    setImageUrl: React.Dispatch<React.SetStateAction<string>>;
}

const BookImageContext = createContext<BookImageType>({} as BookImageType);


const BookImageProvider = (props: { children: ReactNode }) => {
    const { children } = props;
    const [imageUrl, setImageUrl] = useState<string>('');

    return (
        <BookImageContext.Provider value={{ imageUrl, setImageUrl }}>
            {children}
        </BookImageContext.Provider>
    );
}

export { BookImageContext, BookImageProvider };
