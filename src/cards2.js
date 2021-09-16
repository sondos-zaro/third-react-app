import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});;
const CardsShow = (props) => {
    const classes = useStyles();
    let data = props.data
    return (<Card className={classes.root}>

        <CardMedia
            className={classes.media}
            image={data.picture}
            title={"Contemplative Reptile"}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {data.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Name:{data.firstName} {data.lastName}
            </Typography>
        </CardContent>




    </Card>)
}
export default CardsShow