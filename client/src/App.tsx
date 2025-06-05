import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);

  return (
    <>
      <Typography variant="h3">Hello</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
