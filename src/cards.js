import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const CardShow = (props) => {
    let data = props
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (

        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {bull}{data.data.title}
                </Typography>

                <Typography variant="body2" component="p">
                    {bull}{data.data.body}
                </Typography>
            </CardContent>

        </Card>
    )
}
export default CardShow