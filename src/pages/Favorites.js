import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  favoritesCtx.totalFavorites
    ? (content = <MeetupList meetups={favoritesCtx.favorites} />)
    : (content = <p> You got no favorites yet. Start adding some?</p>);
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
