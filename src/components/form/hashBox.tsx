import { HashBoxWrap, HashItem } from "./hashBoxStyle";
import DeleteIcon from "@/assets/icon/hash_del.svg?react";

type Props = {
  hashList: { label: string; id: string }[];
  onClick: (target: string) => void;
};

const HashBox = ({ hashList, onClick }: Props) => {
  return (
    <HashBoxWrap>
      {hashList.map((data, index) => {
        return (
          <HashItem key={index}>
            <span onClick={() => onClick(data.id)} className="close_btn">
              <DeleteIcon />
            </span>
            <span className="label">{data.label}</span>
          </HashItem>
        );
      })}
    </HashBoxWrap>
  );
};

export default HashBox;
