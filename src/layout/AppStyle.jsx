import React from 'react';
import Sidebar from 'components/Sidebar/Sidebar';
import routes from 'routes/routes';

class AppStyle extends React.Component {
  render(){
    return <Sidebar links={routes}/>
  }
}

export default AppStyle;
