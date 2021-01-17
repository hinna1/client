import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Resume from "./Resume";
import Layout from "./Layout";
import About from "./About";
import Footer from "./Footer";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    },
    header: {},
    title: {
        flexGrow: 1,
        padding: 24,
        fontSize: 16
    },
}));

const Main = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <div>
                <Paper className={classes.root}>
                    <Tabs
                        variant="scrollable"
                        value={value}
                        className={classes.header}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="primary"
                        scrollButtons="on"
                    >
                        <Tab className={classes.title} {...a11yProps(0)} label="Motivationsschreiben"/>
                        <Tab className={classes.title} {...a11yProps(1)} label="Lebenslauf"/>
                        <Tab className={classes.title} {...a11yProps(2)} label="Über mich"/>
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Layout>
                        {props.children}
                    </Layout>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Layout>
                        <Resume/>
                    </Layout>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Layout>
                        <About/>
                    </Layout>
                </TabPanel>
            </div>
            <Footer/>
        </div>
    );

};

export default Main;
