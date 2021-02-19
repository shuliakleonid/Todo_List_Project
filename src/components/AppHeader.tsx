import React, {FunctionComponent} from 'react';

type AppHeaderPropsType = {
  title: string
}

const AppHeader: FunctionComponent<AppHeaderPropsType> = ({title}) => {
  return <h1>{title}</h1>

};

export default AppHeader;
