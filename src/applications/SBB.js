import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
    subtitle: {
        marginBottom: theme.spacing(4),
        fontSize: 24
    },
    paragraph: {
        marginTop: theme.spacing(3),
    }
}));
const SBB = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4">Motivationsschreiben</Typography>
                <Divider/>
            </Grid>
            <Grid container item xs={12} style={{padding: 24}}>
                <Grid item xs={12} sm={10}>
                    <Typography className={classes.subtitle} variant="subtitle2">
                        Bewerbung um eine Arbeitsstelle als Informatiker PiBS
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Sehr geehrte Frau Brunner,
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Ich wurde durch meinen Studienkollegen Sven Daniel Bracklo, der bei Ihnen tätig ist, auf die freie Arbeitsstelle als Informatiker PiBS aufmerksam gemacht. Auf diese Stelle bewerbe ich mich gerne mit vorliegendem Schreiben.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Zurzeit bin ich Student des Bachelor-Studiengangs Informatik an der Berner Fachhochschule (BFH-TI) und arbeite nebenbei als Software Developer bei einer kleinen Firma Stormtec GmbH in Hoeri.
                        <br/> Als angehender Informatiker bin ich auf der Suche nach einer Möglichkeit, meine praktischen Fähigkeiten weiterzuentwickeln und nutzbringend einzusetzen.
                        <br/> Dabei haben Ihre Stellenausschreibung und die Erzählungen von Sven Bracklo mein Interesse an Ihrer Firma als möglichen Arbeitgeber besonders geweckt.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Während meinen ersten drei Semestern an der Berner Fachhochschule habe ich mich intensiv mit der Java-Programmierung beschäftigt. In den fortfolgenden Semestern konnte ich mein Wissen erweitern, neue Programmiersprachen erlernen und die neu erworbenen Kenntnisse umgehend in Hochschulprojekten umsetzen.
                        <br/>Ich interessiere mich besonders für die Themengebiete des Machine Learnings sowie Lifecycle von Data Engineering.
                        <br/>Aus diesem Interesse heraus habe ich mich in meinem Studium für die Vertiefung des Data Engineerings entschieden, welche besonders auf die Methodik des Informationsmanagements ausgerichtet ist.
                        <br/>Des Weiteren nehme ich mir auch gerne Zeit, um mich mit verschiedenen Webframeworks auseinanderzusetzen. Diesbezüglich konnte ich meine Kenntnisse von ReactJS sowie Spring-boot bereits durch das Erstellen von APIs umsetzen.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Ich hoffe sehr, dass ich Ihnen durch dieses Schreiben einen (positiven) ersten Eindruck von mir vermitteln konnte und würde mich freuen, wenn ich bei Ihnen für ein persönliches Gespräch vorbeikommen darf.
                    </Typography>
                    <Typography className={classes.paragraph}>
                        Mit freundlichen Grüssen,
                        <br/>
                        Ali Hinnawi

                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default SBB;
