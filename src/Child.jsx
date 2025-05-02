export const Child = ({ data }) => {
  console.log('Child data:', data);

  return <div>Child, data: {JSON.stringify(data)}</div>;
};
