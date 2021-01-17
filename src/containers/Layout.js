import React from 'react';
import {Container, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useSpring, animated} from "react-spring";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4),
        minHeight: 550,
        flexGrow: 1
    }
}));


const Layout = ({children}) => {

    const fadeIn = useSpring({
        opacity: 1,
        from: {
            opacity: 0
        }
    })
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Paper className={classes.root}>
                <animated.div style={fadeIn}>
                    {children}
                </animated.div>
            </Paper>
        </Container>
    );
};

export default Layout;
