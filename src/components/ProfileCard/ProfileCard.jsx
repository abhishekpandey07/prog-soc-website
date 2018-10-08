import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const style = {
  paper: {  
    width: '300px',
    height: '300px',
    padding: '10px',
    margin: 'auto',    
  },
  avatar:{
    margin: 'auto',
    padding: 'auto',
    width: 125,
    height: 125,
  },
  name: {
    margin: '10px 0px'
  }
}

function ProfileCard(props){
  const {classes} = props;
  return (
    <Paper className={classes.paper}>
      <Avatar alt={props.data.intials} src={props.data.image_path} className={classes.avatar}>
        {
          props.data.image_path ? null : props.data.initals
        }
      </Avatar>
      <div className={classes.name}>
        <Typography variant='title' align='center'>
          {props.data.name}
        </Typography>
        <Typography variant='subheading' align='center'>
          {props.data.role}
        </Typography>
      </div>
      <Divider/>
      <Typography variant='body1' align='left'>
        {props.data.text}
      </Typography>
    </Paper>
  );
}

ProfileCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default withStyles(style)(ProfileCard);
