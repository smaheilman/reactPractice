import classes from "./MeetupItem.module.css";
import Card from "../ui/card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
    const favContext = useContext(FavoritesContext)
    
    const isFavorite = favContext.isFavorite(props.id);

    function toggleFavoriteHandler() {
        if (isFavorite) {
          favContext.removeFavorite(props.id);
        } else {
          favContext.addFavorite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address,
          });
        }
    }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
