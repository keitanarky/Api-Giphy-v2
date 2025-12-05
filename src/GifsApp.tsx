/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar} from './shared/components/SearchBar'
import { PreviusSearch } from './shared/components/PreviusSearch'
import { GifsList } from './shared/components/GifsList'
import { getGifsByQuery } from './gifs/actions/get-gifs'
import type { Gif } from './gifs/interfaces/gif.interface'


export const GifsApp = () => {
  const [gifs, setgifs] = useState<Gif[]>([])
  const [previousTerms , setPreviousTerms] = useState<string[]>([]);

  const handleTermClicker = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async(query: string) => {
    
//Convertir el query a minúsculas y eliminar espacios en blanco
    query = query.trim().toLowerCase();

   // Validar que el query no esté vacío
    if(query.length== 0 ) return;

   
  //Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
    if (previousTerms.includes(query)) return;
  //Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, es decir no puede ser un arreglo de más de 8.
    setPreviousTerms([query,...previousTerms].splice(0,7))

    //consuta http
   const gifs = await getGifsByQuery(query);

   setgifs(gifs)
};



  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <CustomHeader titulo="" descripcion="" />
        <SearchBar
        placeholder=''
        onQuery={handleSearch}
        />
        
        <PreviusSearch 
          searches={previousTerms} 
          onLabelClicked={handleTermClicker}
        />

        <GifsList gifs={gifs} />
      </div>
    </>
  )
}
