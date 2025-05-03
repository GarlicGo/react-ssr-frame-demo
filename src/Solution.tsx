import React, { Suspense } from 'react';
import schemaMap from './schema-map';

export type SolutionProps = {
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
        
        if (!Component) return null;

        return (
          <Suspense key={index} fallback={<div>Loading...</div>}>
            <Component data={component.props} />
          </Suspense>
        );
      })}
    </>
  );
};
