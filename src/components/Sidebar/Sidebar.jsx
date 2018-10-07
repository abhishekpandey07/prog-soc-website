import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles/';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from 'assets/logo.png';

const style = {
  drawer: {
    padding: '10px'
  },
  listItem:{
    borderRadius: '8px',
    margin: 'auto 12px auto 2px',
    
  },
  selected:{
    backgroundColor: '#61dafb',
  },
  listItemText: {
    color: 'white'
  }
}


class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        open: true,
        selected: 0
    }
  };

  render () {
    const {classes} = this.props;
    return(
      <div>
        <Drawer variant='permanent'
          open={true} className={classes.drawer}>
          <img src={logo} alt=""/> 
          <List>
            {
              this.props.links.map((prop,key) => {
                return(
                  <ListItem button key={key} divider  className={classNames({[classes.listItem]:true,[classes.selected]:key===0})}>
                    <ListItemText className={classes.listItemText}>
                      {prop.name}
                    </ListItemText>
                  </ListItem>
                );
              })
            }
          </List>
        </Drawer>
      </div>
    );
  }

}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
}

export default withStyles(style)(Sidebar);