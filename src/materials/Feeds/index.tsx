import React from 'react';

interface Props {
  data?: any;
}

const Feeds: React.FC<Props> = ({ data }) => {
  return <div>Feeds data: {JSON.stringify(data)}</div>;
};

export default Feeds;
