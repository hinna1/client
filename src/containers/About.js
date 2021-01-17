import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import YoungerAli from "../media/Ali_Junger.png";

const useStyles = makeStyles(theme => ({
    keyword: {
        fontSize: 18
    },
    img : {
        width: "80%",
        marginBottom: theme.spacing(4)
    }
}));

const About = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4">Über mich</Typography>
                <Divider/>
            </Grid>
            <Grid container item xs={12} style={{paddingTop: 24}}>

                <Grid item xs={12} sm={6}>
                    <Typography variant="subtitle2">
                        <strong className={classes.keyword}>Aufgewachsen</strong> bin ich in Damaskus, Syrien. Dort besuchte ich das Gymnasium, welches ich erfolgreich mit der Matura abschloss. Die ersten Arbeitserfahrungen konnte ich im familieneigenen Elektronikgeschäft in Damaskus sammeln, wo ich danach auch ganze drei Jahre tätig war. Vor unserem Umzug in die Schweiz habe ich an der Universität von Damaskus Physik studiert.
                    </Typography>
                    <Typography style={{marginTop: 12}} variant="subtitle2">
                        <strong className={classes.keyword}>Nach dem Umzug</strong> in die Schweiz im Sommer 2014 habe ich mich intensiv mit der Sprache und der hiesigen Kultur beschäftigt. Dabei kam in mir der Wunsch auf, Informatik zu studieren – welchen ich mir zu erfüllen vermag.
                    </Typography>
                    <Typography style={{marginTop: 12}} variant="subtitle2">
                        <strong className={classes.keyword}>Das Studium</strong> und die dadurch erlernten Fähigkeiten liefern mir immer wieder neue Ideen für eigene Projekte und zeigt mir Möglichkeiten auf, wie ich sie realisieren kann. Dadurch ist das Programmieren für mich zu einem Hobby geworden.
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={6} container justify="center">
                    <img src={YoungerAli} alt="younger ali" className={classes.img}/>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;
