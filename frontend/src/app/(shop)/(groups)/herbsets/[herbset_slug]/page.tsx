const HerbsetIndex = ({ params }: { params: { herbset_slug: string } }) => {
  return <div>{params.herbset_slug}</div>;
};

export default HerbsetIndex;
