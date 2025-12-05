import type { FC } from 'react';
import type { Gif } from '../../gifs/interfaces/gif.interface';
interface Props {
  gifs: Gif[];
}

export const GifsList: FC<Props> = ({ gifs }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
        >
          <img src={gif.url} alt={gif.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{gif.title}</h3>
            <p className="text-gray-500 text-sm">
              {gif.width}x{gif.height} (1.5MB)
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};
