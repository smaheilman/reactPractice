import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [loading, setLoading] = useState(true);
  const [loadMeetups, setLoadMeetups] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-getting-started-3ff9e-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
            const meetup = {
                id : key,
                ...data[key]
            };

            meetups.push(meetup)
        }
        setLoading(false);
        setLoadMeetups(meetups);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadMeetups} />
    </section>
  );
};

export default AllMeetupsPage;
