const DiseaseIndex = ({ params }: { params: { disease_slug: string } }) => {
  return <div>{params.disease_slug}</div>;
};

export default DiseaseIndex;
