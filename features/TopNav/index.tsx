import { useGitBookTopRepositories } from "../useGitBookTopRepositories";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles,
  WithStyles,
} from "@material-ui/core";
import { DrawerMenuToggleButton } from "../DrawerMenu";

const styles = () => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function TopNav({ classes }: WithStyles<typeof styles>) {
  const [_, refreshRepositories] = useGitBookTopRepositories();

  return (
    <AppBar>
      <Toolbar>
        <DrawerMenuToggleButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        />
        <Typography variant="h6" color="inherit" className={classes.grow}>
          GitHub Repo Organizer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(TopNav);
