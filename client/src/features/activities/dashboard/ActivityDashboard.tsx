import { Box, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity?: Activity;
};

export default function ActivityDashboard({
  activities,
  cancelSelectedActivity,
  selectActivity,
  selectedActivity,
}: Props) {
  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <Grid container spacing={3}>
        <Grid size={7}>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
          />
        </Grid>
        <Grid size={5}>
          {selectedActivity && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectedActivity}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
