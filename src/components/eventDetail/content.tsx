import { useState, useRef, useEffect, RefObject } from "react";
import {
  TabNav,
  ContentWrap,
  BasicInfo,
  DetailInfo,
  FaQ,
  ContactUs,
} from "./contentStyle";
import QIcon from "@/assets/icon/question.svg?react";
import FIcon from "@/assets/icon/answer.svg?react";

const faq = [
  {
    f: "본 행사는 참가 시 무료인가요?",
    q: "사전 신청자 대상으로 무료로 제공하고 있습니다.",
  },
  {
    f: "참가 신청 후, 티켓은 어디서 수령 받을 수 있나요?",
    q: "답변2",
  },
  {
    f: "핸드폰(전화번호)가 없는 미성년자일 경우 신청 가능한가요?",
    q: "답변3",
  },
  {
    f: "단체 신청은 어떻게 하면 되나요?",
    q: "답변4",
  },
  {
    f: "반려동물도 함께 참석이 가능한 행사인가요?",
    q: "답변5",
  },
];

const Content = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    sectionRef.current &&
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      section1Ref.current,
      section2Ref.current,
      section3Ref.current,
      section4Ref.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const accordionheadler = (idx: number) => {
    if (activeIndex === idx) {
      setActiveIndex(null);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <>
      <TabNav>
        <button
          onClick={() => scrollToSection(section1Ref)}
          className={activeSection === "section1" ? "active" : ""}
        >
          기본 정보
        </button>
        <button
          onClick={() => scrollToSection(section2Ref)}
          className={activeSection === "section2" ? "active" : ""}
        >
          상세 정보
        </button>
        <button
          onClick={() => scrollToSection(section3Ref)}
          className={activeSection === "section3" ? "active" : ""}
        >
          FAQ
        </button>
        <button
          onClick={() => scrollToSection(section4Ref)}
          className={activeSection === "section4" ? "active" : ""}
        >
          문의하기
        </button>
      </TabNav>
      <ContentWrap>
        <BasicInfo ref={section1Ref} id="section1">
          <h3>기본 정보</h3>
          <ul className="info_list">
            <li className="item">
              <span className="tit">행사 기간</span>
              <span className="desc">2024년 09월 05일 ~ 2024년 09월 08일</span>
            </li>
            <li className="item">
              <span className="tit">개최 장소</span>
              <span className="desc">양재 AT센터</span>
            </li>
            <li className="item">
              <span className="tit">세부 장소</span>
              <span className="desc">제1전시장 A홀</span>
            </li>
            <li className="item">
              <span className="tit">전시 분야</span>
              <span className="desc">농축산 · 식음료</span>
            </li>
            <li className="item">
              <span className="tit">참가 비용</span>
              <span className="desc">
                사전 신청 시 무료 · 현장 구매 시 유료
              </span>
            </li>
          </ul>
        </BasicInfo>
        <DetailInfo ref={section2Ref} id="section2">
          <h3>상세 정보</h3>
          <div className="detail_box">
            <div className="image">
              <img src="./dummy_detail.png" />
            </div>
            <div className="more_box">
              <p className="btn">
                <button>더보기</button>
              </p>
            </div>
          </div>
        </DetailInfo>
        <FaQ ref={section3Ref} id="section3">
          <h3>FAQ</h3>
          <ul className="faq_list">
            {faq.map((data, index) => {
              return (
                <li key={index} className="faq_item">
                  <div
                    onClick={() => accordionheadler(index)}
                    className="question"
                  >
                    <span className="icon">
                      <QIcon />
                    </span>
                    <span className="txt">{data.f}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="answer">
                      <span className="icon">
                        <FIcon />
                      </span>
                      <span className="txt"> {data.q}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </FaQ>
        <ContactUs ref={section3Ref} id="section4">
          <h3>문의하기</h3>
          <ul className="info_list">
            <li className="item">
              <span className="tit">담당자</span>
              <span className="desc">2024 대한민국 농업박람회 운영사무국</span>
            </li>
            <li className="item">
              <span className="tit">전화번호</span>
              <span className="desc">02-0000-0000</span>
            </li>
            <li className="item">
              <span className="tit">이메일</span>
              <span className="desc">admin@agri.com</span>
            </li>
          </ul>
        </ContactUs>
      </ContentWrap>
    </>
  );
};

export default Content;
