import { CharactersComponent } from "./styled.Character";
import { useRequestData } from "../../hooks/useRequestData";
import CardItem2 from "../../components/CardItem2/CardItem2";
export function CharacterPage() {
  const [characters, isLoadingCharacter, isErrorCharacter] = useRequestData(
    "https://rickandmortyapi.com/api/character"
  );

  return (
    <CharactersComponent>
        <header>
            <h1>CHARACTERS</h1>
        </header>

      {isLoadingCharacter && (
        <div>
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {isErrorCharacter && <h2 className="jumbotron">ERROR CHARACTER NOT FOUND, maybe they are in SPACE!</h2>}
      <ul>
      {characters.map((character) => (
      <CardItem2  key={character.id} character={character}/>
))}
</ul>

    </CharactersComponent>
  );
}
