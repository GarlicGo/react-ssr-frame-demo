import React, { use } from 'react';
import { cacheFetch } from '../../utils';

interface Props {
  data?: unknown;
}

const Banners: React.FC<Props> = ({ data }) => {
  const res = use(cacheFetch('/banners'));

  return (
    <div>
      Banners data: {JSON.stringify(data)}, res: {JSON.stringify(res)}
    </div>
  );
};

export default Banners;
