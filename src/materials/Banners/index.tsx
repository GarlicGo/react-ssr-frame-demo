import React from 'react';

interface Props {
  data?: any;
}

const Banners: React.FC<Props> = ({ data }) => {
  return <div>Banners data: {JSON.stringify(data)}</div>;
};

export default Banners;
