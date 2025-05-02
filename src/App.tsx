import React from 'react';
import { Solution } from './solution';

interface Props {
  data?: any;
}

const App: React.FC<Props> = ({ data }) => {
  return <Solution components={data?.components} />;
};

export default App;
