import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
    const favContext = useContext(FavoritesContext);

    let content;

    if (favContext.totalFavorites === 0) {
        content = <p>You do not have any favorites yet!</p>
    } else {
        content= <MeetupList meetups={favContext.favorites}/>
    }


    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )

}

export default FavoritesPage;