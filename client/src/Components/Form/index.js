// import React from "react";
// import { withStyles } from "@material-ui/core/styles";

// const styles = (theme) => ({
//     paper: {
//       marginTop: theme.spacing(8),
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: "100%", // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//     root: {
//       width: "100%",
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//   });

function Form({ q, handleInputChange, handleFormSubmit }) {
    const { classes } = this.props;
  return (
    <form className={classes.form}>
      <div >
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <button
          onClick={handleFormSubmit}
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default withStyles(styles)(Form);

