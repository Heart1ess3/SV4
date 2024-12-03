import { Link } from "react-router-dom";
import { Grid2, Button } from "@mui/material";
import './Buttons.css';

function Buttons() {
  return (
    <div className="actions">
      <Grid2 container spacing={5} justifyContent="center">
        <Grid2 item>
          <Link to="/choose" style={{ textDecoration: 'none' }}>
            <Button className="button button-contained">
              Choose
            </Button>
          </Link>
        </Grid2>
        <Grid2 item>
          <Link to="/learn-more" style={{ textDecoration: 'none' }}>
            <Button className="button button-outlined">
              Learn more
            </Button>
          </Link>
        </Grid2>
        <Grid2 item>
          <Link to="/more" style={{ textDecoration: 'none' }}>
            <Button className="button button-secondary">
              More
            </Button>
          </Link>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Buttons;
