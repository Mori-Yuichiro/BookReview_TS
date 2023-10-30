import React, { memo } from "react";

type Props = {
    text: string;
    handleChangeText: (newText: string) => void;
    handleSearch: () => void;
}

const InputText: React.FC<Props> = memo(({ text, handleChangeText, handleSearch }) => {

    const handleClickSearch = () => {
        handleSearch();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeText(e.target.value);
    }

    return (
        <div className="text-center xs:ml-40 sm:mr-40">
            <input className="outline mr-3 my-4 xs:w-full md:w-auto" type="text" size={50} value={text} onChange={(e) => handleChange(e)} />
            <button className="outline px-3 bg-slate-300 xs:w-full md:w-auto" type="submit" onClick={handleClickSearch}>検索</button>
        </div>
    )
})

export default InputText;