import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
  Avatar,
  IconButton,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance $100
        </Typography>
        <Typography
          variant="subtitle"
          style={{ lineHeight: "1.5rem", marginTop: "20px" }}
        >
          {/* Info Card ... */}
          Try saying: Add income for $100 in Category Salary for Monday ...
        </Typography>
        <Divider />
        <Form />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default Main;
