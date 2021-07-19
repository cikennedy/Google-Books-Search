import React, { Component } from "react";
// import { useParams } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Header from '../Components/Header';
import FeaturedPost from '../Components/FeaturedPost';
import API from "../utils/API";

const styles = (theme) => ({
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
});

class Search extends Component {
  state = {
    books: [],
    search: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.search)
    .then((res) => this.setState({
      books: res.data
    })
    ).catch(() => 
    this.setState({
      books: []
    })
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleSaveBook = id => {
    const book = this.state.books.find((book) => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.image,
      link: book.volumeInfo.link
    }).then(() => this.getBooks());
  };

  render() {
  const { classes } = this.props;
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
        <form className={classes.form} noValidate
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        search={this.state.search}
        >
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
            onChange={this.handleInputChange}
        />
        <Button
            onClick={this.handleFormSubmit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
        >
            Search
        </Button>
        </form>
    </div>

    <Container maxWidth="lg">
        <main>
          <Grid container spacing={4}>
            {this.state.books.map((book) => (
              <FeaturedPost 
              key={book.id} 
              title={book.volumeInfo.title}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              link={book.volumeInfo.infoLink}
              Button={() => (
                <Button
                onClick={() => this.handleSaveBook(book.id)}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>
                  Save Book
                </Button>
              )}
             />
             ))}
          </Grid>
        </main>
      </Container>
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
}
export default withStyles(styles)(Search);

// function Search() {
//     const [formObject, setFormObject] = useState({});
//     // const [books, setBooks] = useState({res.data});
//     const classes = useStyles();
//     const [books, setBooks] = useState([]);
//     const [q, setQ] = useState("");

//     useEffect(() => {
//       getSearchedBooks();
//     }, []);
  
//     function handleInputChange(event) {
//       const { name, value } = event.target;
//       setFormObject({...formObject, [name]: value})
//     };
  
//     async function handleFormSubmit(event) {
//       event.preventDefault();
//       getSearchedBooks();
//     };

//     const getSearchedBooks = () => {
//       API.getBooks(q).then((res) => {
//         books = res.data;
//         console.log('hello');
//         console.log(books);
//         setBooks(() => books);
//       })
//       .catch(err => console.log(err));
//     };

    // // add message if no books are found 
    // // const {id} = useParams()
    // useEffect(() => {
    //   API.saveBook({
    //     googleId: book.id,
    //     title: book.volumeInfo.title,
    //     authors: book.volumeInfo.authors,
    //     description: book.volumeInfo.description,
    //     image: book.volumeInfo.image,
    //     link: book.volumeInfo.link
    //   }).then((res) => getSearchedBooks())
    // })

    // const saveSearchedBook = (id) => {
    //   const book = 
    // }
    
    
      // handleBookSave = id => {
      //   const book = this.state.books.find(book => book.id === id);
    
      //   API.saveBook({
      //     googleId: book.id,
      //     title: book.volumeInfo.title,
      //     subtitle: book.volumeInfo.subtitle,
      //     link: book.volumeInfo.infoLink,
      //     authors: book.volumeInfo.authors,
      //     description: book.volumeInfo.description,
      //     image: book.volumeInfo.imageLinks.thumbnail
      //   }).then(() => this.getBooks());
      // };

    // BREAK // 
    
  //   return (
  //       <Container component="main" maxWidth="xs">
  //       <CssBaseline />
  //       <div className={classes.paper}>
  //           <Avatar className={classes.avatar}>
  //           <MenuBookIcon />
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //          Search for a book!
  //           </Typography>
  //           <form className={classes.form} noValidate>
  //           <TextField
  //               variant="outlined"
  //               margin="normal"
  //               required
  //               fullWidth
  //               id="search"
  //               label="Search..."
  //               name="search"
  //               // autoComplete="Book"
  //               autoFocus
  //               onChange={handleInputChange}
  //           />
  //           <Button
  //               onClick={handleFormSubmit}
  //               fullWidth
  //               variant="contained"
  //               color="primary"
  //               className={classes.submit}
  //           >
  //               Search
  //           </Button>
  //           </form>
  //       </div>
  //       {/* <Row>
  //         <Col size="md-12">
  //           <Card title="Results">
  //             {this.state.books.length ? (
  //               <List>
  //                 {this.state.books.map(book => (
  //                   <Book
  //                     key={book.id}
  //                     title={book.volumeInfo.title}
  //                     subtitle={book.volumeInfo.subtitle}
  //                     link={book.volumeInfo.infoLink}
  //                     authors={book.volumeInfo.authors.join(", ")}
  //                     description={book.volumeInfo.description}
  //                     image={book.volumeInfo.imageLinks.thumbnail}
  //                     Button={() => (
  //                       <button
  //                         onClick={() => this.handleBookSave(book.id)}
  //                         className="btn btn-primary ml-2"
  //                       >
  //                         Save
  //                       </button>
  //                     )}
  //                   />
  //                 ))}
  //               </List>
  //             ) : (
  //               <h2 className="text-center">{this.state.message}</h2>
  //             )}
  //           </Card>
  //         </Col>
  //       </Row> */}
  //       </Container>
  //   );
  // }
  
