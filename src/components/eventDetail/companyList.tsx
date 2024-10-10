import { CompanyListWrap } from "./companyListStyle";

const CompanyList = () => {
  return (
    <CompanyListWrap>
      <ul>
        {Array.from({ length: 12 }).map((_, index) => {
          return (
            <li key={index}>
              <span className="text">
                기업명 기업명 기업명 기업명 기업명 기업명
              </span>
            </li>
          );
        })}
      </ul>
    </CompanyListWrap>
  );
};

export default CompanyList;
