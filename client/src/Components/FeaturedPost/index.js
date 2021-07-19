import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { ListItem } from "../List";


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost({ title, authors, link, description, image, Button }) {
  const classes = useStyles();

  return (
    <ListItem>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {authors}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {description}
              </Typography>
              <Typography variant="subtitle1" paragraph>
              <img src={image} alt={title}></img>
              </Typography>
              <Typography variant="subtitle1" paragraph>
                <a href={link}>View Book on Google Books</a>
                <Button />
              </Typography>
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={image} title={title} />
          </Hidden> */}
        </Card>
      </CardActionArea>
    </ListItem>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};