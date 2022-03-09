import React, {useContext} from "react";
import {
  List as MUIList,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  Icon,
} from "@material-ui/core";


import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from "./styles";

function List() {
  const classes = useStyles();



  const transactions = [
    { id: 1, type: "Income", category: "Salary", amount: 50, date: "Wed Dec 16" },
    { id: 2, type: "Expense", category: "Bird", amount: 50, date: "Fri Jan 19" },
    { id: 3, type: "Income", category: "Business", amount: 150, date: "Tue Feb 30" },
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
}

export default List;
