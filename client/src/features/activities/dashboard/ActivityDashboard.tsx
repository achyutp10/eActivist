import { Box, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity?: Activity;
  openForm: (id: string) => void;
  closeForm: () => void;
  editMode: boolean;
  deleteActivity: (id: string) => void;
};

export default function ActivityDashboard({
  activities,
  cancelSelectedActivity,
  selectActivity,
  selectedActivity,
  openForm,
  closeForm,
  editMode,
  deleteActivity,
}: Props) {
  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <Grid container spacing={3}>
        <Grid size={7}>
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
            deleteActivity={deleteActivity}
          />
        </Grid>
        <Grid size={5}>
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectedActivity}
              openForm={openForm}
            />
          )}
          {editMode && (
            <ActivityForm closeForm={closeForm} activity={selectedActivity} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
