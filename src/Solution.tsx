import React from 'react';
import schemaMap from './schema-map';

type SolutionProps = {
  components: {
    name: string;
    props: unknown;
  }[];
};

export const Solution: React.FC<SolutionProps> = (props) => {
  const { components } = props;

  return (
    <>
      {components.map((component, index) => {
        const Component = schemaMap[component.name];
        return !Component ? null : <Component key={index} data={component.props} />;
      })}
    </>
  );
};
