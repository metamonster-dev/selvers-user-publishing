import { Category } from "@/type";
import { CategoryListWrap, CateItem } from "./categoryListStyle";

type Props = {
  categoryList: Category[];
};

const CategoryList = ({ categoryList }: Props) => {
  return (
    <CategoryListWrap>
      {categoryList.map((data) => {
        return <CateItem key={data.id}>{data.label}</CateItem>;
      })}
    </CategoryListWrap>
  );
};

export default CategoryList;
