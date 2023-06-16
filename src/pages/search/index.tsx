function Search() {
  return (
    <div>
      <input
        type="text"
        placeholder="Nome do Artista"
        data-testid="search-artist-input"
      />
      <button data-testid="search-artist-button">Procurar</button>
    </div>
  );
}
export default Search;
