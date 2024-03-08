import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import "./index.css";

export default ({ town, setTown }) => {
  return (
    <Dialog open={!!town} onClose={() => setTown(null)} maxWidth="md">
      <DialogTitle className="dialog-title">{town?.properties?.Name}</DialogTitle>
      <DialogContent>
        {town?.properties["Alt Name"] && (
          <Typography className="dialog-text">{town?.properties["Alt Name"]}</Typography>
        )}
        {town?.properties.Faction && (
          <Typography className="dialog-text">{town?.properties.Faction}</Typography>
        )}
        {town?.properties.Size && (
          <Typography className="dialog-text">{town?.properties.Size}</Typography>
        )}
        {town?.properties?.URL && (
          <DialogActions>
            <Button
              variant="contained"
              onClick={() => {
                window.open(town.properties.URL, "_blank");
              }}
              sx={{ mt: 2 }}
            >
              OPEN WIKI
            </Button>
          </DialogActions>
        )}
      </DialogContent>
    </Dialog>
  );
};
