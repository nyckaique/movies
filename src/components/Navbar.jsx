import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["HOME", "EM BREVE", "POPULAR", "MELHORES AVALIADOS"];
const navItemsPath = ["/", "/upcoming", "/popular", "/toprated"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <MovieFilterIcon style={{ fontSize: "3em" }} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Link
                    to={navItemsPath[index]}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" style={{ background: "#514A64" }}>
        <Toolbar
          sx={{
            display: { sm: "flex" },
            justifyContent: { sm: "space-evenly" },
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              flexGrow: "1",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MovieFilterIcon style={{ fontSize: "3em" }} />
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexGrow: "2",
              justifyContent: "space-evenly",
            }}
          >
            {navItems.map((item, index) => (
              <Button
                key={item}
                sx={{ color: "#fff", fontSize: { sm: ".7em", md: "1em" } }}
              >
                <Link
                  to={navItemsPath[index]}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}

export default DrawerAppBar;
