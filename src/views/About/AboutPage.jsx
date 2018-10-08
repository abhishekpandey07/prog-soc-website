import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import appStyle from 'assets/AppStyle';

const style = {
  container: {
    marginRight : '25px',
    padding: '10px'
  },
  heading: {
    ...appStyle.defaultFont,
    color: 'rgba(0,0,0,0.7)',
    marginBottom: '10px'
  },
  para: {
    fontSize: '18px',
    ...appStyle.defaultFont,
    width: '400px'
  }
}
function AboutPage(props){
  const {classes} = props;
  return (
    <div className={classes.container}>  
      <Typography variant='display1' className={classes.heading}> What is ProgSoc ?</Typography>
      <Typography variant='p' className={classes.para}>
      The University of Edinburgh Programming Society aims to help people across all disciplines with none or very less
        previous coding experience to learn how to code and apply that knowledge to create something of value.
      </Typography>
      <Typography variant='display1' className={classes.heading}> Who is a part of ProgSoc ?</Typography>
      <Typography variant='p' className={classes.para}>
      All interested members can be a part of ProgSoc. Our Society is open to any student in any year who wants to learn
      how to program Python. We feel that these skills are applicable in every field, as lot of different fields like fintech and healthtech are
      emerging.
      </Typography>
      <Typography variant='display1' className={classes.heading}>What do I do if I have coding experience already ?</Typography>
      <Typography variant='p' className={classes.para}>
        We are looking for interested teaching assistants to join our team and help the folks attending out sessions with any problems
        theat they come across. We shall be quickly diving into the PyGame framework and you can learn how to build more advanced games if you feel
        you've already mastered the basics.
      </Typography>
    </div>
  );

}

export default withStyles(style)(AboutPage);