import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Ali from "../media/Ali.jpg";

const useStyles = makeStyles(theme => ({
    img: {
        maxWidth: "100%",
        maxHeight: 300,
        marginTop: theme.spacing(5)
    },
    subTitle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    bodyTitle: {
        textDecoration: "underline"
    },
    tableGrid: {
        marginBottom: theme.spacing(2),
    },
    black: {
        backgroundColor: "black",
        minHeight: 200
    },
    orange: {
        backgroundColor: "orange",
        minHeight: 200
    },
    green: {
        backgroundColor: "green",
        minHeight: 200
    },
    section: {
        paddingBottom: theme.spacing(4)
    }
}));


const TableGrid = ({name, value}) => {
    return ([
        <Grid
            key={name}
            xs={6}
            item
        >
            {name}
        </Grid>,
        <Grid
            key={value}
            xs={6}
            item
        >
            {value}
        </Grid>
    ])
}


const TableGridCareer = ({date, value, description, important}) => {
    const classes = useStyles();
    return ([
        <Grid
            key={date}
            xs={12}
            sm={6}
            item
        >
            {important ? <strong>{date}</strong> : date}
        </Grid>,
        <Grid
            container
            key={value}
            xs={12}
            sm={6}
            item
            className={classes.tableGrid}
        >
            {important ? <strong>{value} <br/> {description} </strong> : <div> {value} <br/> {description} </div>}
        </Grid>
    ])
}

const Resume = () => {
    const classes = useStyles();
    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
            >
                <Typography variant="h4">Lebenslauf</Typography>
                <Divider className={classes.divider}/>
            </Grid>
            <Grid
                container
                item
                xs={12}
            >
                <Grid
                    item
                    container
                    xs={12}
                    sm={6}
                >
                    <Grid
                        container
                        item
                        xs={12}>
                        <Typography className={classes.subTitle} variant="h5">Personalien</Typography>
                        <Grid
                            item
                            className={classes.section}
                            xs={12}
                            container>
                            <TableGrid name="Name" value="Ali Hinnawi"/>
                            <TableGrid name="Adresse" value="Rütmattstrasse 7"/>
                            <TableGrid name="Wohnort" value="5004 Aarau"/>
                            <TableGrid name="Geburtsdatum" value="04.03.1995"/>
                            <TableGrid name="Geboren" value="Syrien / Damaskus"/>
                            <TableGrid name="Nationalität" value="Staatenlos"/>
                        </Grid>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography className={classes.subTitle} variant="h5">Beruflicher Werdegang</Typography>
                        <Grid
                            className={classes.section}
                            xs={12}
                            item
                            container
                        >
                            <TableGridCareer date="2020 - Heute" value="Stormtec GmbH, Hoeri"
                                             description="Software Developer"/>
                            <TableGridCareer date="2014 - 2018" value="Alterszentrum Schiffländi, Gränichen"
                                             description="Praktikum in der Altenpflege"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={6}
                    justify="center">
                    <img src={Ali} className={classes.img} alt="me"/>
                </Grid>
            </Grid>
            <Grid
                item container xs={12} sm={7}>
                <Typography className={classes.subTitle} variant="h5">Bildung</Typography>
                <Grid
                    className={classes.section}
                    xs={12}
                    item
                    container
                >
                    <TableGridCareer date="Seit 2018" value="Berner Fachhochschule" description="Informatik"
                                     important={true}/>
                    <TableGridCareer date="09.2017 - 02.2018" value="Berner fachhochschule"
                                     description="Medizininformatik"/>
                    <TableGridCareer date="2010 - 2013" value="Al Saadeh School in Damaskus, Syrien"
                                     description="Abitur/Gymnasium"/>
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
            >
                <Grid
                    item
                    container
                    xs={12}
                    sm={6}
                >
                    <Grid item xs={12}>
                        <Typography className={classes.subTitle} variant="h5">Informatik</Typography>
                        <Typography>
                            Java (JPA, JavaFX, Vaadin, Spring boot)
                            <br/> Kotlin (Spring boot)
                            <br/> JavaScript (ReactJS, NodeJS)
                            <br/> Python
                            <br/> Dart (Flutter)
                            <br/> DBMS (Document oriented / Relational)
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={6}
                    justify="center">

                    <Grid
                        container
                        item
                        xs={12}>
                        <Typography className={classes.subTitle} variant="h5">Sprachen</Typography>
                        <Grid
                            item
                            className={classes.section}
                            xs={12}
                            container>
                            <TableGrid name="Deutsch" value="Fliessend"/>
                            <TableGrid name="Mundart" value="Fliessend"/>
                            <TableGrid name="Englisch" value="Sehr gut"/>
                            <TableGrid name="Arabisch" value="Muttersprache"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Resume;
