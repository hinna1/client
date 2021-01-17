import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(4, 4),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
    button: {
        fontSize: 12,
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container style={{textAlign: "center"}}>
                <Typography variant="body1">
                    Ali Hinnawi<br/>
                    alihinnawi2014@gmail.com<br/>
                    +41 79 906 63 91<br/>
                </Typography>
            </Container>
        </footer>
    );
}