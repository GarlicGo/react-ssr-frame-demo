import React, { use } from 'react';
import { cacheFetch } from '../../utils';

interface Props {
  data?: unknown;
}

const Feeds: React.FC<Props> = ({ data }) => {
  const res = use(cacheFetch('/feeds'));
  
  return <div>Feeds data: {JSON.stringify(data)}, res: {JSON.stringify(res)}</div>;
};

export default Feeds;
