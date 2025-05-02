import React from 'react';

interface Props {
  data?: unknown;
}

const Banners: React.FC<Props> = ({ data }) => {
  return <div>Banners data: {JSON.stringify(data)}</div>;
};

export default Banners;
