import React from 'react';
import { Solution, SolutionProps } from './Solution';

interface Props {
  data?: {
    components: SolutionProps['components'];
  };
}

const App: React.FC<Props> = ({ data }) => {
  return <Solution components={data?.components ?? []} />;
};

export default App;
