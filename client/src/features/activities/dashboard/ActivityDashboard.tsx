import { Box, Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";

export default function ActivityDashboard() {
  return (
    <Box sx={{ bgcolor: "#eeeeee" }}>
      <Grid container spacing={3}>
        <Grid size={8}>
          <ActivityList />
        </Grid>
        <Grid size={4}>
          <ActivityFilters />
        </Grid>
      </Grid>
    </Box>
  );
}
