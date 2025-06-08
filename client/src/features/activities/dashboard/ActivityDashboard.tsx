import { Box, Grid } from "@mui/material";
import ActivityList from "./ActivityList";

export default function ActivityDashboard() {
  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <Grid container spacing={3}>
        <Grid size={7}>
          <ActivityList />
        </Grid>
        <Grid size={5}>Activity Filters go here</Grid>
      </Grid>
    </Box>
  );
}
