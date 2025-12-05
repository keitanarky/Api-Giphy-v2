
import React from 'react'

interface props{
    titulo : string;
    descripcion?: string
}



export const CustomHeader = ({titulo,descripcion} : props) => {

    
  return (

    
      <><header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-purple-600 mb-2">Buscar Gifs</h1>
          <h3 className="text-xl text-gray-700 mb-1">Pasando el rato...</h3>
          <p className="text-gray-500">Descubre y comparte el gif perfecto</p>
      </header><div>
              <h1>{titulo}</h1>
                <p>{descripcion}</p>
          </div>
          
          
          
          </>
    
    
    
    
  );
};
