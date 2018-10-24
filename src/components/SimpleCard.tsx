import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class SimpleCard extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;
    // const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom={true}
          >
            week from 21 to 28
          </Typography>

          <Typography variant="h5" component="h2">
            monday
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            gym-day
          </Typography>

          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">open</Button>
        </CardActions>
      </Card>
    );
  }
}
/* SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
}; */

export default withStyles(styles)(SimpleCard);
