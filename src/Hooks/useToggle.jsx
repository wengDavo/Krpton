import { useState } from "react";

function useToggle(value){
    let [toggle, setToggle] = useState(value);
    const handleToggle = () => setToggle(!toggle);

    return [toggle, handleToggle];
};

export default useToggle;