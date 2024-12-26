const Search = () => {
  return (
    <div className="search-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="gray"
      >
        <circle cx="10.5" cy="10.5" r="7.5" />
        <line x1="16.5" y1="16.5" x2="22" y2="22" />
      </svg>
      <input
        id="search"
        type="text"
        placeholder="buscar..."
        className="search-input"
        onKeyDown={() => {}}
      />
    </div>
  );
};

export default Search;