import Feeds from './materials/Feeds';
import Banners from './materials/Banners';
import ViteTemplate from './materials/ViteTemplate';

interface SchemaMap {
  [key: string]: React.FC<{ data?: any }>;
}

const schemaMap: SchemaMap = {
  Feeds,
  Banners,
  ViteTemplate,
};

export default schemaMap;
