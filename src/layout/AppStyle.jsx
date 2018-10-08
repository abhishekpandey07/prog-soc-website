import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import {Switch, Route} from 'react-router-dom';
import routes from 'routes/routes';
import {withStyles} from '@material-ui/core/styles';
import style from './appStyle';
class AppStyle extends React.Component {
  render(){
    const {classes} = this.props; 
    return (
      <div className={classes.appFrame}>
        <Sidebar links={routes}/>
        <main className={classes.content}>
          <Switch>
            {
              routes.map((prop,key) => {
                return <Route path={prop.path} component={prop.component}/>
              })
            }
          </Switch>
        </main>
      </div>
    )
  }
}

export default withStyles(style)(AppStyle);
