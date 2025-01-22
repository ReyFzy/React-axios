import { useState, useEffect } from "react";

const Form = () => {
    const [isi, setIsi] = useState("");

    useEffect(() => {
        console.log("Kela Bejir")
    }, []);

  return (
    <form className="flex flex-col gap-1">
        <div className="flex gap-1">
            <p className="font-medium">Nama Kamuh :</p>
            <input type="text" onChange={(e) => setIsi(e.target.value)}/>
        </div>
        <p className="font-medium">Nama kamuh adalah {isi}</p>
    </form>
  ) 
}

export default Form
