const CategoryIndex = ({ params }: { params: { category_slug: string } }) => {
  return <div>{params.category_slug}</div>;
};

export default CategoryIndex;
