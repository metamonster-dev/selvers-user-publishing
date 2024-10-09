import { Link } from "react-router-dom";
import styled from "styled-components";
import siteMap from "@/constants/siteMap.json";

const LinkPageWrap = styled.div`
  padding: 40px 20px;
  & h1 {
    font-size: 18px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-weight: 600;
    margin-bottom: 16px;
    color: #fff;
  }
  & a {
    color: #007bff;
    text-decoration: underline;
  }
  & table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    border-bottom: 1px solid #ddd;
    table-layout: fixed;
    font-size: 14px;
    & th,
    & td {
      border: 1px solid #ddd;
      text-align: center;
      padding: 8px;
      margin: 0;
    }
    & tr:last-child th,
    & tr:last-child td {
      border-bottom: 0;
    }
    & th {
      background: #eee;
    }
    & td {
      background: #fff;
      color: #666;
    }
    & td.text_left {
      text-align: left;
    }
    & td input {
      width: 100%;
    }
    & td input:read-only {
      background: #f2f2f2;
    }
    & .space {
      background: #f2f2f2 !important;
      height: 36px;
    }
    & .ing {
      color: #e50000;
    }
  }
`;

const LinkPage = () => {
  return (
    <LinkPageWrap>
      <h1>셀버스 퍼블리싱 화면</h1>
      <table>
        <thead>
          <tr>
            <th style={{ width: "80px" }}>번호</th>
            <th style={{ width: "20%" }}>화면구분</th>
            <th>화면명</th>
            <th style={{ width: "20%" }}>링크</th>
          </tr>
        </thead>
        <tbody>
          {siteMap.main.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.gubun}</td>
                <td>{data.name}</td>
                <td>
                  {data.link.length > 0 ? (
                    <Link to={data.link} target="_blank">
                      바로가기
                    </Link>
                  ) : (
                    "작업예정"
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="space"></td>
          </tr>
          {siteMap.loginJoin.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.gubun}</td>
                <td>{data.name}</td>
                <td>
                  {data.link.length > 0 ? (
                    <Link to={data.link} target="_blank">
                      바로가기
                    </Link>
                  ) : (
                    "작업예정"
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="space"></td>
          </tr>
          {siteMap.myPage.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.gubun}</td>
                <td>{data.name}</td>
                <td>
                  {data.link.length > 0 ? (
                    <Link to={data.link} target="_blank">
                      바로가기
                    </Link>
                  ) : (
                    "작업예정"
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="space"></td>
          </tr>
          {siteMap.eventDetail.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.gubun}</td>
                <td>{data.name}</td>
                <td>
                  {data.ing && (
                    <span className="ing">작업진행중&nbsp;&nbsp;</span>
                  )}
                  {data.link.length > 0 ? (
                    <Link to={data.link} target="_blank">
                      바로가기
                    </Link>
                  ) : (
                    "작업예정"
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="space"></td>
          </tr>
          {siteMap.review.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.gubun}</td>
                <td>{data.name}</td>
                <td>
                  {data.link.length > 0 ? (
                    <Link to={data.link} target="_blank">
                      바로가기
                    </Link>
                  ) : (
                    "작업예정"
                  )}
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={4} className="space"></td>
          </tr>
          {siteMap.agree.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.gubun}</td>
                <td>{data.name}</td>
                <td>
                  {data.link.length > 0 ? (
                    <Link to={data.link} target="_blank">
                      바로가기
                    </Link>
                  ) : (
                    "작업예정"
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </LinkPageWrap>
  );
};

export default LinkPage;
