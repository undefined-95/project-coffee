import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Grid, Link } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from  "@material-ui/icons/Telegram"
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocalMallIcon from '@material-ui/icons/LocalMall';


const useStyles = makeStyles({
  box: {
    backgroundColor: "grey",
    height: 150
  },
  flex: {
    display: "flex"
  },
  shrift: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    justifyContent: "space-between",
    alignItems: 'center'
  },
  main: {
    paddingTop: '10px',
  },
  icons: {
    fontSize: 40,
    color: "wheat",
    "&:hover": {
      color: "red"
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Container className={classes.main} >
        <Grid container className={classes.container}>
          <Grid item xs={3}>
            <div className={classes.shrift}>CAFFEE ©2021</div>
            <br/>
            <div><Link className={classes.shrift}>О нас</Link></div>
          </Grid>
          <Grid item xs={3} className={classes.shrift}>
            <div>Услуги</div>
            <br/>
            <div>Доставка</div>
            <div>Поддержка</div>
          </Grid>
          <Grid item xs={3} >
            <Grid container>
              <div><Link href="https://www.instagram.com/myxammad.13/" target="_blank" >{<InstagramIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://www.facebook.com/coffee" target="_blank" className={classes.shrift}>{<FacebookIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://web.telegram.org/z/#-1154410942" target="_blank" className={classes.shrift}>{<TelegramIcon className={classes.icons}/>}</Link></div>
              <div><Link href="https://www.youtube.com/user/nescaferu" target="_blank" className={classes.shrift}>{<YouTubeIcon className={classes.icons}/>}</Link></div>
            </Grid>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;