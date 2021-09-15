import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  image: {
    width: 50,
  },
  main: {
    marginTop: 490,
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    left: 950,
    width: 420,
  },
  main1: {
    display: "flex",
  },
  main2: {
    marginLeft: 13,
  },
  close: {
    position: "inherit",
    top: 5,
    right: 10,
    cursor: "pointer",
    opacity: 0.5,
    fontSize: 14,
  },
});

const BasketMain = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setOpen(true);
  };

  const basket = useSelector((state) => state.basket.basketUser);
  console.log(basket[0].coffeeId);

  return (
    <Container className={classes.main}>
      <span className={classes.close} onClick={handleClose}>
        Закрыть
      </span>
      <table>
        <thead>
          {basket[0].coffeeId.map((item) => {
            console.log(item)
            return (
              <tr className={classes.main1}>
                <th className={classes.main2}>
                  <img className={classes.image} src={item.image} alt="" />
                </th>
                <th className={classes.main2}>{item.name}</th>
                <button className={classes.main2}>-</button>
                <th className={classes.main2}>1</th>
                <button className={classes.main2}>+</button>
                <th className={classes.main2}>{item.price}</th>
                <button className={classes.main2}>X</button>
              </tr>
            );
          })}
        </thead>
      </table>
    </Container>
  );
};

export default BasketMain;
