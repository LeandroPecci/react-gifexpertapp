import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = ( ) => { 

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
        <h2>GifExpertApp</h2>

        {/* Para comunicar con el hijo, se envia la referencia a setCategories */}
        <AddCategory setCategories = { setCategories} />
        <hr/>

        {/* <button onClick={handlerAdd}>Agregar</button> */}
        
        <ol>
         {
             categories.map( (category) =>  
                <GifGrid
                    category = {category}
                    key = {category}
                 />
             )
         }
        </ol>
        </>
    );
}