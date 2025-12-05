interface Props {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviusSearch = ({ searches, onLabelClicked }: Props) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-3">Búsquedas previas</h2>

      <ul className="flex flex-wrap gap-2">
        {searches.map((term) => (
          <li 
            key={term}
            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 cursor-pointer"
            onClick={() => onLabelClicked(term)}
          >
            {term}
          </li>
        ))}
      </ul>
    </section>
  );
};
