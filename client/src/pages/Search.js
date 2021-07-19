import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Search() {
    const [formObject, setFormObject] = useState({});
    // const [books, setBooks] = useState({res.data});
    const classes = useStyles();
    const [books, setBooks] = useState([]);

    useEffect(() => {
      getSearchedBooks();
    }, []);
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    async function handleFormSubmit(event) {
      event.preventDefault();
      getSearchedBooks();
    };

    const getSearchedBooks = () => {
      API.getBooks(q).then((res) => {
        const allBookData = res.data;
        console.log('hello');
        console.log(allBookData);
        setBooks(() => allBookData);
      })
      .catch(err => console.log(err));
    };

    // add message if no books are found 
    // const {id} = useParams()
    useEffect(() => {
      API.saveBook({
        googleId: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description,
        image: book.volumeInfo.image,
        link: book.volumeInfo.link
      }).then((res) => getSearchedBooks())
    })

    // const saveSearchedBook = (id) => {
    //   const book = 
    // }
    
    
      handleBookSave = id => {
        const book = this.state.books.find(book => book.id === id);
    
        API.saveBook({
          googleId: book.id,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          link: book.volumeInfo.infoLink,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
      };

    // BREAK // 
    
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <MenuBookIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
           Search for a book!
            </Typography>
            <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="search"
                label="Search..."
                name="search"
                // autoComplete="Book"
                autoFocus
                onChange={handleInputChange}
            />
            <Button
                onClick={handleFormSubmit}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Search
            </Button>
            </form>
        </div>
        {/* <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row> */}
        </Container>
    );
  }
  
export default Search;