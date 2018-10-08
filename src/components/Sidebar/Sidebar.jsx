import React from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles/';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavLink} from 'react-router-dom';
import logo from 'assets/logo.png';
import Divider from '@material-ui/core/Divider';
import style from './sidebarStyle';


class Sidebar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        open: true
    }
  };
  isSelectedRoute = (path) => {
    console.log(window.location.pathname);
    return window.location.pathname === path;
  }
  render () {
    const {classes} = this.props;
    return(
      <div>
        <Drawer variant='permanent'
          open={true} className={classes.drawer}
          PaperProps={{
            className:classes.drawerModal
            }}>
          <img src={logo} alt="" className={classes.image}/> 
          <Divider className={classes.divider}/>
          <List className={classes.list}>
            {
              this.props.links.map((prop,key) => {
                const is_curr_path = this.isSelectedRoute(prop.path)
                return(
                  <NavLink to={prop.path} className={classes.links} activeClassName={classes.selected}>
                    <ListItem button key={key} divider  className={classNames({[classes.listItem]:true,[classes.selected]:is_curr_path})}>
                      <ListItemText
                        primaryTypographyProps={{
                          className:is_curr_path ? classes.listItemTextSelected : classes.listItemText
                          }}
                          >
                        {prop.name}
                      </ListItemText>
                    </ListItem>
                  </NavLink>
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