import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

const NewMeetupsPage = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-getting-started-3ff9e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() =>{
        navigate('/')
    })
  };
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupsPage;
