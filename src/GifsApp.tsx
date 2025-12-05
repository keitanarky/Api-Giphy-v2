import { useState } from 'react';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { PreviusSearch } from './shared/components/PreviusSearch';
import { GifsList } from './shared/components/GifsList';
import { getGifsByQuery } from './gifs/actions/get-gifs';
import type { Gif } from './gifs/interfaces/gif.interface';

export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  // Buscar un término al hacer click en los términos anteriores
  const handleTermClicker = (term: string) => {
    handleSearch(term);
  };

  const handleSearch = async (query: string) => {
    // Convertir el query a minúsculas y eliminar espacios en blanco
    query = query.trim().toLowerCase();

    // Validar que el query no esté vacío
    if (query.length === 0) return;

    // Evitar búsquedas duplicadas
    if (previousTerms.includes(query)) return;
    // Actualizar previousTerms agregando el nuevo término al inicio
    // y limitando a máximo 8 elementos
    setPreviousTerms([query, ...previousTerms].slice(0, 8));

    // Consultar GIFs por el query
    const gifsResult = await getGifsByQuery(query);
    setGifs(gifsResult);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <CustomHeader titulo="Buscador de GIFs" descripcion="Encuentra tus GIFs favoritos" />
      <SearchBar placeholder="Buscar GIFs..." onQuery={handleSearch} />
      <PreviusSearch searches={previousTerms} onLabelClicked={handleTermClicker} />
      <GifsList gifs={gifs} />
    </div>
  );
};
