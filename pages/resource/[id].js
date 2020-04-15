const Resource = ({ resource }) => <div>{resource.name}</div>;

Resource.getInitialProps = async ({ query: { id } }, res) => {
  const response = await fetch(`http://localhost:3000/api/resource/${id}`);
  const resource = await response.json();

  return { resource };
};

export default Resource;
