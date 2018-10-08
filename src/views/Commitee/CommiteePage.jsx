import React from 'react';
import ProfileCard from 'components/ProfileCard/ProfileCard';
import profiles from 'assets/profiles';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const style = (theme) => ({
  container: {
    margin: '10px 100px',
    padding: '5px 50px'
  },
  grid: {
    margin: '15px 5px'
  }
})

function CommiteePage(props){
  const {classes} = props;
  return(
    <div>
      <Typography variant='display1' align='center'>
        Our Committee
      </Typography>
      <div className={classes.container}>
        <Grid container justify='center' alignItems='center'>
          {
            profiles.map((prop) => {
              return (
                <Grid item className={classes.grid} xs={5}>
                  <ProfileCard data={prop}/>
                </Grid>
              );
            })
          }
        </Grid>
      </div>
     </div>
  );
}


export default withStyles(style)(CommiteePage);