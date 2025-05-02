import React from 'react';
import { Solution } from './Solution';

interface Props {
  data?: any;
}

const App: React.FC<Props> = ({ data }) => {
  return <Solution components={data?.components} />;
};

export default App;
