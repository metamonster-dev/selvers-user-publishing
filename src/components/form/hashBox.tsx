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
            <button onClick={() => onClick(data.id)}>
              <DeleteIcon />
            </button>
            <span>{data.label}</span>
          </HashItem>
        );
      })}
    </HashBoxWrap>
  );
};

export default HashBox;
