import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { AccountCircle } from '@mui/icons-material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Badge, Menu, MenuItem } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useLocation, useNavigate } from 'react-router-dom';
import SideBarRoute from '../router';
// import { RiFileExcel2Line } from "react-icons/ri";
import NotificationsIcon from '@mui/icons-material/Notifications';

const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 0,
                },
            },
        ],
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Layout = () => {
    // const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const location = useLocation()

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    const routes = [
        {
            key: "",
            title: "Dashbord",
            path: "/",
            // icon: <ApartmentIcon />
        },
        {
            key: "conversation",
            title: "Conversation",
            path: "/conversation",
            // icon: <PersonIcon />    
        },
        {
            key: "drivemapping",
            title: "Drive Mapping",
            path: "/drivemapping",
        },
        {
            kay: "Documnet Management",
            title: "Documnet Management",
            path: "/documnetmanagement",
        },
        {
            key: "User Management",
            title: "User Management",
            path: "/usermanagement",
        },
        {
            key: "Notification",
            title: "Notification",
            path: "/notification",
        },
        {
            key: "Setting",
            title: "Setting",
            path: "/setting",
        },
        {
            key: "Settings",
            title: "Settings",
            path: "/settings",
        }
    ]
    const pathName = location?.pathname?.replace(/\//g, "")
    const activeRoute = routes?.find((item) => item?.key === pathName?.replace(/\//g, ""))

    const NavigationList = ({ routes }) => {
        const navigate = useNavigate();

        const handleRedirect = (path) => {
            navigate(path);
        };

        return (
            <List>
                {routes?.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => handleRedirect(item?.path)} style={{ background: activeRoute?.key == item?.key ? "#ffffff" : "", color: "Black", borderRadius: "8px", boxSizing: "border-box" }}>
                            {/* <ListItemIcon sx={{ color: 'white' }}>
                                {item?.icon}
                            </ListItemIcon> */}
                            <ListItemText primary={item?.title}  />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        );
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ background: "#ffffff", boxShadow: "none" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={[
                                {
                                    mr: 2,
                                    display: 'none',
                                },
                            ]}
                        >
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" color='black'>
                            {activeRoute?.title}
                        </Typography>
                    </Box>
                    <Box>
                    <IconButton color="inherit">
        <Badge badgeContent={2} color="error">
            <NotificationsIcon sx={{ color: "black" }} />
        </Badge>
    </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="black"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        background: "#ffffff",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Typography sx={{ color: "black" }}>Drive Ai chatbot</Typography>
                </DrawerHeader>
                <Divider />
                <List>
                    <NavigationList routes={routes} />
                </List>
            </Drawer>

            <Main open={open} style={{ padding: "100px 40px 0px 40px" }}>
                <SideBarRoute />
            </Main>

        </Box>

    );
}

export default Layout


// f9f9f9