import React, { Component } from "react";
// import { useParams } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Link from '@material-ui/core/Link';
// import Grid from "@material-ui/core/Grid";
// import Box from '@material-ui/core/Box';
// import MenuBookIcon from "@material-ui/icons/MenuBook";
// import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
import { Container } from "../Components/Container";
import Card from "../Components/Card";
// import List from "@material-ui/core/List";
// import ListItem from "../Components/ListItem";
import { List } from "../Components/List";
// import GridList from '@material-ui/core/GridList';
import FeaturedPost from "../Components/FeaturedPost";
// import Form from '../Components/Form';
import API from "../utils/API";

const styles = (theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  });

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };

  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Card title="Saved Books">
          {this.state.books.length ? (
            <List>
              {this.state.books.map((book) => (
                <FeaturedPost
                  key={book._id}
                  title={book.title}
                  subtitle={book.subtitle}
                  link={book.link}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  Button={() => (
                    <button
                      onClick={() => this.handleBookDelete(book._id)}
                      className="btn btn-primary ml-2"
                    >
                      Delete from Saved Books
                    </button>
                  )}
                />
              ))}
            </List>
          ) : (
            <h2 className="text-center">No Books Saved</h2>
          )}
        </Card>
      </Container>
    );
  }
}

export default withStyles(styles)(Saved);
