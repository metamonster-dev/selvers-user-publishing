import{r as t,j as e}from"./react-vK_2paR8.js";import{c as B1}from"./react-dom-CwJHIhc-.js";import{R as I1,a as J,b as O1}from"./recoil-DCK8bSnJ.js";import{L as r,c as F1,R as P1}from"./react-router-dom-DMPkAsv3.js";import{d as V,O as C1,c as U}from"./react-router-CpYEAPtu.js";import{d as n,f as T1}from"./styled-components-CtooJHeQ.js";import{u as z}from"./usehooks-ts-DWv8JbR8.js";import{S as I,A as W1,N as q,P as _1,a as O}from"./swiper-FqFWQMZv.js";import{u as Q}from"./react-hook-form-BclDpZ8O.js";import{t as G}from"./@hookform-C0ktsbXX.js";import{o as X,s as b,c as D1,l as Y1,Z as J1}from"./zod-eJtvhOw1.js";import{L as U1}from"./react-scroll-D8dGEgaR.js";import{_ as m1}from"./react-star-ratings-Y-cnRIiD.js";import{r as q1}from"./styled-reset-VHz9fFSa.js";import"./classnames-BWlOjCkQ.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-BHHfG7hN.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./lodash.debounce-DWe-dgD7.js";import"./lodash.throttle-BojNFQ9H.js";import"./prop-types-BKNjMPK8.js";import"./object-assign-LtR7LJbL.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))a(d);new MutationObserver(d=>{for(const o of d)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function l(d){const o={};return d.integrity&&(o.integrity=d.integrity),d.referrerPolicy&&(o.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?o.credentials="include":d.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(d){if(d.ep)return;d.ep=!0;const o=l(d);fetch(d.href,o)}})();function Q1({children:i}){const s=V();return t.useEffect(()=>{window.scrollTo(0,0)},[s.pathname]),e.jsx("div",{children:i})}const K=I1({key:"user",default:{isLogin:!0,isLoginError:!1}}),G1=n.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: #000;
`,X1=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  & .user_name {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  & .close_btn {
    margin-left: auto;
    width: 30px;
    height: 30px;
    padding: 5px;
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`,K1=n.div`
  padding: 20px 16px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  & li {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 20px 0;
  }
`,$=i=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("rect",{x:1.52344,width:20.4717,height:2.15492,rx:1,transform:"rotate(45 1.52344 0)",fill:"white"}),t.createElement("rect",{x:16,y:1.52344,width:20.4717,height:2.15492,rx:1,transform:"rotate(135 16 1.52344)",fill:"white"})),g1=({children:i,setClose:s})=>{const a=J(K).isLogin,d=()=>{s(!1),document.body.style.overflow="auto"};return e.jsxs(G1,{children:[e.jsxs(X1,{children:[a&&e.jsx("div",{className:"user_name",children:"o o o 님"}),e.jsx("button",{onClick:()=>d(),className:"close_btn",children:e.jsx($,{})})]}),e.jsx(K1,{children:i})]})},$1=n.header`
  padding: 72px 110px 55px;
  background-color: #000;
  display: flex;
  align-items: center;

  @media (max-width: 1400px) {
    padding: 72px 70px 55px;
  }
  @media (max-width: 1200px) {
    padding: 72px 40px 55px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`,ee=n.header`
  display: none;
  padding: 0 16px;
  @media (max-width: 1024px) {
    display: block;
  }
`,ie=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`,v1=n.h1`
  flex: 0 0 auto;
  margin-right: 97px;
  width: 208px;
  @media (max-width: 1400px) {
    margin-right: 30px;
  }
  @media (max-width: 1200px) {
    margin-right: 20px;
  }
  @media (max-width: 1024px) {
    width: 130px;
  }
  @media (max-width: 400px) {
    width: 80px;
  }
  & a {
    display: block;
    & svg {
      width: 100%;
      height: auto;
    }
  }
`,te=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,y1=n.nav`
  width: 100%;
  & > div > form {
    width: 100%;
    max-width: 666px;
    & > div {
      width: 100%;
    }
  }
`,k1=n.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 1400px) {
    gap: 10px;
  }
  @media (max-width: 1024px) {
    padding: 10px 0 25px;
  }
`,C=n.li`
  color: #fff;
  font-weight: 700;
`,N1=n.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  & .searh_page_link {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    @media (max-width: 400px) {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    & a {
      display: block;
      width: 100%;
      height: 100%;
      & svg {
        width: 100%;
        height: 100%;
        & path {
          fill: #fff;
        }
      }
    }
  }
  & .toggle_menu {
    width: 30px;
    height: 30px;
    @media (max-width: 400px) {
      width: 20px;
      height: 20px;
    }
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`,f1=n.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 35px;
  & > div {
    padding: ${i=>i.$loginState?"0 15px":"0 18px"};
    @media (max-width: 1400px) {
      padding: ${i=>i.$loginState?"0 10px":"0 14px"};
    }
  }
  & > div:first-child {
    position: relative;
  }
  & > .login:first-child::after {
    content: "";
    position: absolute;
    background-color: #b0b8c1;
    width: 1px;
    height: 18px;
    top: 50%;
    right: 0;
    transform: translatey(-50%);
  }
  @media (max-width: 1400px) {
    margin-right: 20px;
  }
  @media (max-width: 1300px) {
    margin-right: 10px;
  }
`,H1=n.div`
  display: flex;
  gap: 18px;
  align-items: center;
  @media (max-width: 1400px) {
    gap: 10px;
  }
  @media (max-width: 1300px) {
    gap: 5px;
  }
  @media (max-width: 1024px) {
    gap: 10px;
    margin-right: 15px;
  }
  @media (max-width: 400px) {
    gap: 5px;
    margin-right: 5px;
  }
  & > button {
    padding: 10px 20px;
    border-radius: 50rem;
    font-weight: 700;
    font-size: 16px;
    @media (max-width: 1024px) {
      padding: 8px 10px;
      font-size: 12px;
    }
  }
  & > button:first-child {
    background-color: #fff;
    color: #235ef3;
  }
  & > button:last-child {
    background-color: #235ef3;
    color: #fff;
  }
`,e1=i=>t.createElement("svg",{width:1382,height:335,viewBox:"0 0 1382 335",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("mask",{id:"path-1-outside-1_724_15833",maskUnits:"userSpaceOnUse",x:0,y:0,width:1382,height:335,fill:"black"},t.createElement("rect",{fill:"white",width:1382,height:335}),t.createElement("path",{d:"M164.404 227.459L117.81 308.999H97.6191L51.5424 230.048V327.119H9.34855V145.919H46.6241L108.491 253.086L169.323 145.919H206.598L206.857 327.119H164.663L164.404 227.459Z"}),t.createElement("path",{d:"M281.447 145.919V327.119H236.405V145.919H281.447Z"}),t.createElement("path",{d:"M395.158 330.484C377.383 330.484 361.334 326.515 347.01 318.577C332.687 310.466 321.47 299.249 313.359 284.925C305.248 270.602 301.193 254.466 301.193 236.519C301.193 218.572 305.248 202.436 313.359 188.113C321.642 173.789 332.946 162.658 347.269 154.72C361.593 146.609 377.642 142.554 395.417 142.554C410.776 142.554 424.668 145.487 437.093 151.355C449.691 157.05 460.045 165.247 468.156 175.946L439.164 203.903C427.947 189.752 414.141 182.677 397.746 182.677C387.91 182.677 379.109 184.92 371.343 189.407C363.75 193.894 357.796 200.279 353.482 208.562C349.168 216.673 347.01 225.992 347.01 236.519C347.01 247.046 349.168 256.365 353.482 264.476C357.796 272.587 363.75 278.885 371.343 283.372C379.109 287.859 387.91 290.103 397.746 290.103C414.313 290.103 428.119 283.027 439.164 268.876L468.156 296.833C460.045 307.705 449.691 316.075 437.093 321.942C424.668 327.637 410.689 330.484 395.158 330.484Z"}),t.createElement("path",{d:"M621.36 327.119H485.201V145.919H617.995V183.712H530.242V216.846H607.9V253.604H530.242V289.067H621.36V327.119Z"}),t.createElement("path",{d:"M848.76 227.459L802.165 308.999H781.974L735.898 230.048V327.119H693.704V145.919H730.979L792.846 253.086L853.678 145.919H890.953L891.212 327.119H849.019L848.76 227.459Z"}),t.createElement("path",{d:"M959.33 290.62L945.352 327.119H899.017L975.638 145.919H1020.16L1096.53 327.119H1049.41L1035.43 290.62H959.33ZM997.382 192.254L973.568 254.639H1021.2L997.382 192.254Z"}),t.createElement("path",{d:"M1076.29 184.489V145.919H1228.76V184.489H1175.18V327.119H1130.14V184.489H1076.29Z"}),t.createElement("path",{d:"M1377.84 327.119H1241.68V145.919H1374.47V183.712H1286.72V216.846H1364.38V253.604H1286.72V289.067H1377.84V327.119Z"}),t.createElement("path",{d:"M80.8808 51.371V103.401H77.3862V4H80.8808V48.1353H96.2828V51.371H80.8808ZM54.089 8.78887V96.1534H4V8.78887H54.089ZM50.8533 92.7882V12.2834H7.49458V92.7882H50.8533Z"}),t.createElement("path",{d:"M182.598 103.401V4H186.222V103.401H182.598ZM133.674 7.36515C139.024 7.36515 143.77 9.04773 147.911 12.4129C152.053 15.778 155.289 20.8258 157.618 27.5561C159.948 34.2864 161.113 42.613 161.113 52.5358C161.113 62.4587 159.948 70.7853 157.618 77.5156C155.289 84.2459 152.053 89.2936 147.911 92.6588C143.77 96.0239 139.024 97.7065 133.674 97.7065C128.238 97.7065 123.449 96.0239 119.307 92.6588C115.166 89.2936 111.93 84.2459 109.6 77.5156C107.271 70.7853 106.106 62.4587 106.106 52.5358C106.106 42.613 107.271 34.2864 109.6 27.5561C111.93 20.8258 115.166 15.778 119.307 12.4129C123.449 9.04773 128.238 7.36515 133.674 7.36515ZM133.674 10.8597C129.015 10.8597 124.873 12.4129 121.249 15.5192C117.625 18.6255 114.777 23.3281 112.707 29.6269C110.636 35.8395 109.6 43.4758 109.6 52.5358C109.6 61.5959 110.636 69.2753 112.707 75.5742C114.777 81.7868 117.625 86.4462 121.249 89.5525C124.873 92.6588 129.015 94.2119 133.674 94.2119C138.247 94.2119 142.303 92.6588 145.84 89.5525C149.378 86.4462 152.182 81.7868 154.253 75.5742C156.324 69.2753 157.36 61.5959 157.36 52.5358C157.36 43.4758 156.324 35.8395 154.253 29.6269C152.182 23.3281 149.378 18.6255 145.84 15.5192C142.303 12.4129 138.247 10.8597 133.674 10.8597Z"}),t.createElement("path",{d:"M247.946 32.4744C242.596 42.4835 236.125 50.5081 228.532 56.5481C220.939 62.5882 213.13 65.6082 205.105 65.6082V62.1136C212.267 62.1136 219.17 59.4819 225.814 54.2184C232.544 48.8687 238.325 41.8364 243.157 33.1215C248.076 24.4066 251.613 15.0877 253.77 5.16486L257.524 6.32972C255.539 14.6995 252.821 22.422 249.37 29.4975L292.34 63.2784L290.14 65.7376L247.946 32.4744ZM296.482 93.9531V97.3182H203.293V93.9531H296.482Z"}),t.createElement("path",{d:"M393.669 103.401H390.045V4H393.669V103.401ZM371.667 4.64715V101.719H368.043V50.8533H348.111V96.1534H309.929V8.78887H348.111V47.4881H368.043V4.64715H371.667ZM313.424 12.2834V92.7882H344.487V12.2834H313.424Z"}),t.createElement("path",{d:"M490.08 103.401V4H493.704V103.401H490.08ZM441.156 7.36515C446.506 7.36515 451.252 9.04773 455.393 12.4129C459.535 15.778 462.771 20.8258 465.101 27.5561C467.43 34.2864 468.595 42.613 468.595 52.5358C468.595 62.4587 467.43 70.7853 465.101 77.5156C462.771 84.2459 459.535 89.2936 455.393 92.6588C451.252 96.0239 446.506 97.7065 441.156 97.7065C435.72 97.7065 430.931 96.0239 426.79 92.6588C422.648 89.2936 419.412 84.2459 417.082 77.5156C414.753 70.7853 413.588 62.4587 413.588 52.5358C413.588 42.613 414.753 34.2864 417.082 27.5561C419.412 20.8258 422.648 15.778 426.79 12.4129C430.931 9.04773 435.72 7.36515 441.156 7.36515ZM441.156 10.8597C436.497 10.8597 432.355 12.4129 428.731 15.5192C425.107 18.6255 422.26 23.3281 420.189 29.6269C418.118 35.8395 417.082 43.4758 417.082 52.5358C417.082 61.5959 418.118 69.2753 420.189 75.5742C422.26 81.7868 425.107 86.4462 428.731 89.5525C432.355 92.6588 436.497 94.2119 441.156 94.2119C445.729 94.2119 449.785 92.6588 453.323 89.5525C456.86 86.4462 459.665 81.7868 461.735 75.5742C463.806 69.2753 464.842 61.5959 464.842 52.5358C464.842 43.4758 463.806 35.8395 461.735 29.6269C459.665 23.3281 456.86 18.6255 453.323 15.5192C449.785 12.4129 445.729 10.8597 441.156 10.8597Z"}),t.createElement("path",{d:"M518.282 69.6205V8.78887H596.846V12.2834H521.647V37.3927H596.069V40.8872H521.647V66.1259H598.658V69.6205H518.282ZM603.964 97.3182H510.775V93.9531H603.964V97.3182Z"})),t.createElement("path",{d:"M164.404 227.459L117.81 308.999H97.6191L51.5424 230.048V327.119H9.34855V145.919H46.6241L108.491 253.086L169.323 145.919H206.598L206.857 327.119H164.663L164.404 227.459Z",fill:"white"}),t.createElement("path",{d:"M281.447 145.919V327.119H236.405V145.919H281.447Z",fill:"white"}),t.createElement("path",{d:"M395.158 330.484C377.383 330.484 361.334 326.515 347.01 318.577C332.687 310.466 321.47 299.249 313.359 284.925C305.248 270.602 301.193 254.466 301.193 236.519C301.193 218.572 305.248 202.436 313.359 188.113C321.642 173.789 332.946 162.658 347.269 154.72C361.593 146.609 377.642 142.554 395.417 142.554C410.776 142.554 424.668 145.487 437.093 151.355C449.691 157.05 460.045 165.247 468.156 175.946L439.164 203.903C427.947 189.752 414.141 182.677 397.746 182.677C387.91 182.677 379.109 184.92 371.343 189.407C363.75 193.894 357.796 200.279 353.482 208.562C349.168 216.673 347.01 225.992 347.01 236.519C347.01 247.046 349.168 256.365 353.482 264.476C357.796 272.587 363.75 278.885 371.343 283.372C379.109 287.859 387.91 290.103 397.746 290.103C414.313 290.103 428.119 283.027 439.164 268.876L468.156 296.833C460.045 307.705 449.691 316.075 437.093 321.942C424.668 327.637 410.689 330.484 395.158 330.484Z",fill:"white"}),t.createElement("path",{d:"M621.36 327.119H485.201V145.919H617.995V183.712H530.242V216.846H607.9V253.604H530.242V289.067H621.36V327.119Z",fill:"white"}),t.createElement("path",{d:"M848.76 227.459L802.165 308.999H781.974L735.898 230.048V327.119H693.704V145.919H730.979L792.846 253.086L853.678 145.919H890.953L891.212 327.119H849.019L848.76 227.459Z",fill:"white"}),t.createElement("path",{d:"M959.33 290.62L945.352 327.119H899.017L975.638 145.919H1020.16L1096.53 327.119H1049.41L1035.43 290.62H959.33ZM997.382 192.254L973.568 254.639H1021.2L997.382 192.254Z",fill:"white"}),t.createElement("path",{d:"M1076.29 184.489V145.919H1228.76V184.489H1175.18V327.119H1130.14V184.489H1076.29Z",fill:"white"}),t.createElement("path",{d:"M1377.84 327.119H1241.68V145.919H1374.47V183.712H1286.72V216.846H1364.38V253.604H1286.72V289.067H1377.84V327.119Z",fill:"white"}),t.createElement("path",{d:"M80.8808 51.371V103.401H77.3862V4H80.8808V48.1353H96.2828V51.371H80.8808ZM54.089 8.78887V96.1534H4V8.78887H54.089ZM50.8533 92.7882V12.2834H7.49458V92.7882H50.8533Z",fill:"white"}),t.createElement("path",{d:"M182.598 103.401V4H186.222V103.401H182.598ZM133.674 7.36515C139.024 7.36515 143.77 9.04773 147.911 12.4129C152.053 15.778 155.289 20.8258 157.618 27.5561C159.948 34.2864 161.113 42.613 161.113 52.5358C161.113 62.4587 159.948 70.7853 157.618 77.5156C155.289 84.2459 152.053 89.2936 147.911 92.6588C143.77 96.0239 139.024 97.7065 133.674 97.7065C128.238 97.7065 123.449 96.0239 119.307 92.6588C115.166 89.2936 111.93 84.2459 109.6 77.5156C107.271 70.7853 106.106 62.4587 106.106 52.5358C106.106 42.613 107.271 34.2864 109.6 27.5561C111.93 20.8258 115.166 15.778 119.307 12.4129C123.449 9.04773 128.238 7.36515 133.674 7.36515ZM133.674 10.8597C129.015 10.8597 124.873 12.4129 121.249 15.5192C117.625 18.6255 114.777 23.3281 112.707 29.6269C110.636 35.8395 109.6 43.4758 109.6 52.5358C109.6 61.5959 110.636 69.2753 112.707 75.5742C114.777 81.7868 117.625 86.4462 121.249 89.5525C124.873 92.6588 129.015 94.2119 133.674 94.2119C138.247 94.2119 142.303 92.6588 145.84 89.5525C149.378 86.4462 152.182 81.7868 154.253 75.5742C156.324 69.2753 157.36 61.5959 157.36 52.5358C157.36 43.4758 156.324 35.8395 154.253 29.6269C152.182 23.3281 149.378 18.6255 145.84 15.5192C142.303 12.4129 138.247 10.8597 133.674 10.8597Z",fill:"white"}),t.createElement("path",{d:"M247.946 32.4744C242.596 42.4835 236.125 50.5081 228.532 56.5481C220.939 62.5882 213.13 65.6082 205.105 65.6082V62.1136C212.267 62.1136 219.17 59.4819 225.814 54.2184C232.544 48.8687 238.325 41.8364 243.157 33.1215C248.076 24.4066 251.613 15.0877 253.77 5.16486L257.524 6.32972C255.539 14.6995 252.821 22.422 249.37 29.4975L292.34 63.2784L290.14 65.7376L247.946 32.4744ZM296.482 93.9531V97.3182H203.293V93.9531H296.482Z",fill:"white"}),t.createElement("path",{d:"M393.669 103.401H390.045V4H393.669V103.401ZM371.667 4.64715V101.719H368.043V50.8533H348.111V96.1534H309.929V8.78887H348.111V47.4881H368.043V4.64715H371.667ZM313.424 12.2834V92.7882H344.487V12.2834H313.424Z",fill:"white"}),t.createElement("path",{d:"M490.08 103.401V4H493.704V103.401H490.08ZM441.156 7.36515C446.506 7.36515 451.252 9.04773 455.393 12.4129C459.535 15.778 462.771 20.8258 465.101 27.5561C467.43 34.2864 468.595 42.613 468.595 52.5358C468.595 62.4587 467.43 70.7853 465.101 77.5156C462.771 84.2459 459.535 89.2936 455.393 92.6588C451.252 96.0239 446.506 97.7065 441.156 97.7065C435.72 97.7065 430.931 96.0239 426.79 92.6588C422.648 89.2936 419.412 84.2459 417.082 77.5156C414.753 70.7853 413.588 62.4587 413.588 52.5358C413.588 42.613 414.753 34.2864 417.082 27.5561C419.412 20.8258 422.648 15.778 426.79 12.4129C430.931 9.04773 435.72 7.36515 441.156 7.36515ZM441.156 10.8597C436.497 10.8597 432.355 12.4129 428.731 15.5192C425.107 18.6255 422.26 23.3281 420.189 29.6269C418.118 35.8395 417.082 43.4758 417.082 52.5358C417.082 61.5959 418.118 69.2753 420.189 75.5742C422.26 81.7868 425.107 86.4462 428.731 89.5525C432.355 92.6588 436.497 94.2119 441.156 94.2119C445.729 94.2119 449.785 92.6588 453.323 89.5525C456.86 86.4462 459.665 81.7868 461.735 75.5742C463.806 69.2753 464.842 61.5959 464.842 52.5358C464.842 43.4758 463.806 35.8395 461.735 29.6269C459.665 23.3281 456.86 18.6255 453.323 15.5192C449.785 12.4129 445.729 10.8597 441.156 10.8597Z",fill:"white"}),t.createElement("path",{d:"M518.282 69.6205V8.78887H596.846V12.2834H521.647V37.3927H596.069V40.8872H521.647V66.1259H598.658V69.6205H518.282ZM603.964 97.3182H510.775V93.9531H603.964V97.3182Z",fill:"white"}),t.createElement("path",{d:"M164.404 227.459L117.81 308.999H97.6191L51.5424 230.048V327.119H9.34855V145.919H46.6241L108.491 253.086L169.323 145.919H206.598L206.857 327.119H164.663L164.404 227.459Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M281.447 145.919V327.119H236.405V145.919H281.447Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M395.158 330.484C377.383 330.484 361.334 326.515 347.01 318.577C332.687 310.466 321.47 299.249 313.359 284.925C305.248 270.602 301.193 254.466 301.193 236.519C301.193 218.572 305.248 202.436 313.359 188.113C321.642 173.789 332.946 162.658 347.269 154.72C361.593 146.609 377.642 142.554 395.417 142.554C410.776 142.554 424.668 145.487 437.093 151.355C449.691 157.05 460.045 165.247 468.156 175.946L439.164 203.903C427.947 189.752 414.141 182.677 397.746 182.677C387.91 182.677 379.109 184.92 371.343 189.407C363.75 193.894 357.796 200.279 353.482 208.562C349.168 216.673 347.01 225.992 347.01 236.519C347.01 247.046 349.168 256.365 353.482 264.476C357.796 272.587 363.75 278.885 371.343 283.372C379.109 287.859 387.91 290.103 397.746 290.103C414.313 290.103 428.119 283.027 439.164 268.876L468.156 296.833C460.045 307.705 449.691 316.075 437.093 321.942C424.668 327.637 410.689 330.484 395.158 330.484Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M621.36 327.119H485.201V145.919H617.995V183.712H530.242V216.846H607.9V253.604H530.242V289.067H621.36V327.119Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M848.76 227.459L802.165 308.999H781.974L735.898 230.048V327.119H693.704V145.919H730.979L792.846 253.086L853.678 145.919H890.953L891.212 327.119H849.019L848.76 227.459Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M959.33 290.62L945.352 327.119H899.017L975.638 145.919H1020.16L1096.53 327.119H1049.41L1035.43 290.62H959.33ZM997.382 192.254L973.568 254.639H1021.2L997.382 192.254Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M1076.29 184.489V145.919H1228.76V184.489H1175.18V327.119H1130.14V184.489H1076.29Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M1377.84 327.119H1241.68V145.919H1374.47V183.712H1286.72V216.846H1364.38V253.604H1286.72V289.067H1377.84V327.119Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M80.8808 51.371V103.401H77.3862V4H80.8808V48.1353H96.2828V51.371H80.8808ZM54.089 8.78887V96.1534H4V8.78887H54.089ZM50.8533 92.7882V12.2834H7.49458V92.7882H50.8533Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M182.598 103.401V4H186.222V103.401H182.598ZM133.674 7.36515C139.024 7.36515 143.77 9.04773 147.911 12.4129C152.053 15.778 155.289 20.8258 157.618 27.5561C159.948 34.2864 161.113 42.613 161.113 52.5358C161.113 62.4587 159.948 70.7853 157.618 77.5156C155.289 84.2459 152.053 89.2936 147.911 92.6588C143.77 96.0239 139.024 97.7065 133.674 97.7065C128.238 97.7065 123.449 96.0239 119.307 92.6588C115.166 89.2936 111.93 84.2459 109.6 77.5156C107.271 70.7853 106.106 62.4587 106.106 52.5358C106.106 42.613 107.271 34.2864 109.6 27.5561C111.93 20.8258 115.166 15.778 119.307 12.4129C123.449 9.04773 128.238 7.36515 133.674 7.36515ZM133.674 10.8597C129.015 10.8597 124.873 12.4129 121.249 15.5192C117.625 18.6255 114.777 23.3281 112.707 29.6269C110.636 35.8395 109.6 43.4758 109.6 52.5358C109.6 61.5959 110.636 69.2753 112.707 75.5742C114.777 81.7868 117.625 86.4462 121.249 89.5525C124.873 92.6588 129.015 94.2119 133.674 94.2119C138.247 94.2119 142.303 92.6588 145.84 89.5525C149.378 86.4462 152.182 81.7868 154.253 75.5742C156.324 69.2753 157.36 61.5959 157.36 52.5358C157.36 43.4758 156.324 35.8395 154.253 29.6269C152.182 23.3281 149.378 18.6255 145.84 15.5192C142.303 12.4129 138.247 10.8597 133.674 10.8597Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M247.946 32.4744C242.596 42.4835 236.125 50.5081 228.532 56.5481C220.939 62.5882 213.13 65.6082 205.105 65.6082V62.1136C212.267 62.1136 219.17 59.4819 225.814 54.2184C232.544 48.8687 238.325 41.8364 243.157 33.1215C248.076 24.4066 251.613 15.0877 253.77 5.16486L257.524 6.32972C255.539 14.6995 252.821 22.422 249.37 29.4975L292.34 63.2784L290.14 65.7376L247.946 32.4744ZM296.482 93.9531V97.3182H203.293V93.9531H296.482Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M393.669 103.401H390.045V4H393.669V103.401ZM371.667 4.64715V101.719H368.043V50.8533H348.111V96.1534H309.929V8.78887H348.111V47.4881H368.043V4.64715H371.667ZM313.424 12.2834V92.7882H344.487V12.2834H313.424Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M490.08 103.401V4H493.704V103.401H490.08ZM441.156 7.36515C446.506 7.36515 451.252 9.04773 455.393 12.4129C459.535 15.778 462.771 20.8258 465.101 27.5561C467.43 34.2864 468.595 42.613 468.595 52.5358C468.595 62.4587 467.43 70.7853 465.101 77.5156C462.771 84.2459 459.535 89.2936 455.393 92.6588C451.252 96.0239 446.506 97.7065 441.156 97.7065C435.72 97.7065 430.931 96.0239 426.79 92.6588C422.648 89.2936 419.412 84.2459 417.082 77.5156C414.753 70.7853 413.588 62.4587 413.588 52.5358C413.588 42.613 414.753 34.2864 417.082 27.5561C419.412 20.8258 422.648 15.778 426.79 12.4129C430.931 9.04773 435.72 7.36515 441.156 7.36515ZM441.156 10.8597C436.497 10.8597 432.355 12.4129 428.731 15.5192C425.107 18.6255 422.26 23.3281 420.189 29.6269C418.118 35.8395 417.082 43.4758 417.082 52.5358C417.082 61.5959 418.118 69.2753 420.189 75.5742C422.26 81.7868 425.107 86.4462 428.731 89.5525C432.355 92.6588 436.497 94.2119 441.156 94.2119C445.729 94.2119 449.785 92.6588 453.323 89.5525C456.86 86.4462 459.665 81.7868 461.735 75.5742C463.806 69.2753 464.842 61.5959 464.842 52.5358C464.842 43.4758 463.806 35.8395 461.735 29.6269C459.665 23.3281 456.86 18.6255 453.323 15.5192C449.785 12.4129 445.729 10.8597 441.156 10.8597Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),t.createElement("path",{d:"M518.282 69.6205V8.78887H596.846V12.2834H521.647V37.3927H596.069V40.8872H521.647V66.1259H598.658V69.6205H518.282ZM603.964 97.3182H510.775V93.9531H603.964V97.3182Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"})),ne=i=>t.createElement("svg",{width:19,height:14,viewBox:"0 0 19 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("rect",{width:19,height:2,rx:1,fill:"white"}),t.createElement("rect",{y:6,width:19,height:2,rx:1,fill:"white"}),t.createElement("rect",{y:12,width:19,height:2,rx:1,fill:"white"})),i1=i=>t.createElement("svg",{width:31,height:31,viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M25.3167 27.125L17.1792 18.9875C16.5333 19.5042 15.7906 19.9132 14.951 20.2146C14.1115 20.516 13.2181 20.6667 12.2708 20.6667C9.92431 20.6667 7.93837 19.854 6.31302 18.2286C4.68767 16.6033 3.875 14.6174 3.875 12.2708C3.875 9.92431 4.68767 7.93837 6.31302 6.31302C7.93837 4.68767 9.92431 3.875 12.2708 3.875C14.6174 3.875 16.6033 4.68767 18.2286 6.31302C19.854 7.93837 20.6667 9.92431 20.6667 12.2708C20.6667 13.2181 20.516 14.1115 20.2146 14.951C19.9132 15.7906 19.5042 16.5333 18.9875 17.1792L27.125 25.3167L25.3167 27.125ZM12.2708 18.0833C13.8854 18.0833 15.2578 17.5182 16.388 16.388C17.5182 15.2578 18.0833 13.8854 18.0833 12.2708C18.0833 10.6562 17.5182 9.28385 16.388 8.15365C15.2578 7.02344 13.8854 6.45833 12.2708 6.45833C10.6562 6.45833 9.28385 7.02344 8.15365 8.15365C7.02344 9.28385 6.45833 10.6562 6.45833 12.2708C6.45833 13.8854 7.02344 15.2578 8.15365 16.388C9.28385 17.5182 10.6562 18.0833 12.2708 18.0833Z",fill:"#B0B8C1"})),se=()=>{const[i,s]=t.useState(!1),[l,a]=t.useState(!0),[d,o]=t.useState(!1),x=J(K).isLogin,c=V(),f=()=>{s(!0),document.body.style.overflow="hidden"},h=()=>{s(!1),document.body.style.overflow="auto"};return t.useLayoutEffect(()=>{c.pathname==="/"?a(!0):a(!1),c.pathname==="/"||c.pathname==="/list"?o(!1):o(!0)},[c.pathname]),e.jsxs(ee,{children:[e.jsxs(ie,{children:[e.jsx(v1,{children:e.jsx(r,{to:"/",children:e.jsx(e1,{})})}),e.jsxs(N1,{children:[e.jsxs(H1,{children:[e.jsx("button",{children:"행사등록"}),e.jsx("button",{children:"AI챗봇"})]}),d&&e.jsx("p",{className:"searh_page_link",children:e.jsx(r,{to:"/list",children:e.jsx(i1,{})})}),e.jsx("button",{onClick:()=>f(),className:"toggle_menu",children:e.jsx(ne,{})})]})]}),l&&e.jsx(y1,{children:e.jsxs(k1,{children:[e.jsx(C,{children:e.jsx(r,{to:"/list",children:"이번주 행사"})}),e.jsx(C,{children:e.jsx(r,{to:"/list",children:"무료 행사"})}),e.jsx(C,{children:e.jsx(r,{to:"/list",children:"온라인 행사"})}),e.jsx(C,{children:e.jsx(r,{to:"/list",children:"메이트 PICK"})})]})}),!x&&i&&e.jsx(g1,{setClose:s,children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/login",onClick:h,children:"로그인"})}),e.jsx("li",{children:e.jsx(r,{to:"/join",onClick:h,children:"회원가입"})})]})}),x&&i&&e.jsx(g1,{setClose:s,children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"/mypage/apply-list",onClick:h,children:"신청 행사"})}),e.jsx("li",{children:e.jsx(r,{to:"/mypage/cancel-list",onClick:h,children:"취소 내역"})}),e.jsx("li",{children:e.jsx(r,{to:"/mypage/wish-list",onClick:h,children:"관심 행사"})}),e.jsx("li",{children:e.jsx(r,{to:"/mypage/past-list",onClick:h,children:"지난 행사"})}),e.jsx("li",{children:e.jsx(r,{to:"/mypage/user-modify",onClick:h,children:"내 정보 수정"})}),e.jsx("li",{children:e.jsx(r,{to:"",onClick:h,children:"로그아웃"})})]})})]})},ae=i=>t.createElement("svg",{width:20,height:19,viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_848_8221)"},t.createElement("path",{d:"M9.55688 17.9853L0.865234 9.29976L9.55688 0.614258",stroke:"white",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"}),t.createElement("path",{d:"M0.958984 9.2998H19.3865",stroke:"white",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_848_8221"},t.createElement("rect",{width:20,height:18.5995,fill:"white"})))),le=n.div`
  position: relative;
`,re=n.form`
  @media (max-width: 1024px) {
    padding: 0 16px;
    position: ${i=>i.$filter&&"fixed"};
    z-index: ${i=>i.$filter&&"99"};
    top: ${i=>i.$filter&&"11px"};
    left: ${i=>i.$filter&&"40px"};
    right: ${i=>i.$filter&&"0"};
    margin-bottom: ${i=>i.$filter&&"11px"};
  }
  & > div {
    position: relative;
    width: 666px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & input {
    width: 100%;
    background-color: rgba(41, 46, 55, 0.7);
    padding: 21px 63px 21px 33px;
    font-size: 18px;
    color: #fff;
    border-radius: 50rem;
    line-height: 1;
    @media (max-width: 1024px) {
      padding: 12px 43px 12px 16px;
      font-size: 12px;
    }
  }
  & input::placeholder {
    color: #fff;
    font-size: 18px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & button {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    & svg {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
      right: 15px;
    }
  }
`,de=n.div`
  width: 924px;
  padding: 34px 25px;
  position: absolute;
  background-color: #000;
  border-radius: 10px;
  left: 50%;
  top: 73px;
  transform: translateX(-50%);
  font-size: 16px;
  z-index: 5;
  box-shadow: 0 1px 4px;
  @media (max-width: 1024px) {
    width: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    transform: translateX(0);
    flex-direction: column;
    padding: 60px 0;
  }
  & .back_btn {
    position: absolute;
    top: 21px;
    left: 17px;
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
  }
  & .title {
    color: #fff;
    font-weight: 700;
    flex: 0 0 auto;
  }
`,oe=n.div`
  display: flex;

  @media (max-width: 1024px) {
    padding: 25px;
    flex-direction: column;
    overflow-y: scroll;
    height: 90vh;
  }
`,pe=n.div`
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  padding-top: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 0;
  }

  & .btn_area {
    position: absolute;
    bottom: -10px;
    right: 20px;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      top: 0;
      right: 0;
      bottom: auto;
    }
  }
  & .btn_area::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & .btn_area button {
    color: rgba(255, 255, 255, 0.5);
    padding: 0 12px;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    column-gap: 32px;
    row-gap: 20px;
    @media (max-width: 1024px) {
      padding: 25px 0;
    }
  }
  & li {
    color: #fff;
  }
`,xe=n.div`
  width: 50%;
  display: flex;
  padding: 30px 0 0 50px;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    padding: 25px 0 0 0;
  }
  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 32px;
    row-gap: 20px;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
      padding-left: 0;
      padding: 25px 0;
    }
  }

  & .category {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
  }
  & .category li {
    width: 50%;
    /* padding-bottom: 20px; */
  }
  & .category li:first-child {
    width: 100%;
  }
`,t1=()=>{const[i,s]=t.useState(""),[l,a]=t.useState(!1),d=t.useRef(null),o=z("(max-width: 1024px)"),p=()=>{a(!0),o===!0&&(document.body.style.overflow="hidden")},x=()=>{a(!1),o===!0&&(document.body.style.overflow="auto")};return e.jsxs(le,{children:[e.jsx(re,{$filter:l,children:e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"마이스 메이트에서 나의 맞춤 행사를 찾아보세요!",onChange:c=>{s(c.target.value)},value:i,onFocus:p,onBlur:x}),e.jsx("button",{children:e.jsx(i1,{})})]})}),l&&e.jsxs(de,{ref:d,children:[e.jsx("button",{className:"back_btn",children:e.jsx(ae,{})}),e.jsxs(oe,{children:[e.jsxs(pe,{children:[e.jsx("p",{className:"title",children:"최근 검색어"}),e.jsxs("div",{className:"btn_area",children:[e.jsx("button",{children:"검색 기록 끄기"}),e.jsx("button",{children:"검색 기록 삭제"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(r,{to:"",children:"마케팅"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온온온온온온온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"최근 검색어"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"농축산농축산농축산"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"환경"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"test"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"교육"})})]})]}),e.jsxs(xe,{children:[e.jsx("p",{className:"title",children:"카테고리"}),e.jsxs("ul",{className:"category",children:[e.jsx("li",{children:e.jsx(r,{to:"",children:"전체"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"농축산/식음료"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"뷰티/화장품"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"에너지/환경"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"금융/부동산"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"섬유/의류"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"교육"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"금속/기계"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"임신/출산/육아"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"보건/의료"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"웨딩"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"건설/건축"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"문화/예술"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"가정용품"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"레저/관광"})})]})]})]})]})]})},ce=i=>t.createElement("svg",{width:28,height:30,viewBox:"0 0 28 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M0 4.6875C0 4.43886 0.0921872 4.2004 0.256282 4.02459C0.420376 3.84877 0.642936 3.75 0.875 3.75H3.5C3.69518 3.75006 3.88474 3.82003 4.03853 3.9488C4.19232 4.07756 4.30152 4.25772 4.34875 4.46062L5.0575 7.5H25.375C25.5079 7.50004 25.6391 7.53252 25.7585 7.59497C25.878 7.65743 25.9826 7.74822 26.0644 7.86045C26.1462 7.97268 26.203 8.10341 26.2307 8.2427C26.2583 8.382 26.2559 8.5262 26.2237 8.66437L23.5987 19.9144C23.5515 20.1173 23.4423 20.2974 23.2885 20.4262C23.1347 20.555 22.9452 20.6249 22.75 20.625H7C6.80482 20.6249 6.61526 20.555 6.46147 20.4262C6.30768 20.2974 6.19848 20.1173 6.15125 19.9144L2.8175 5.625H0.875C0.642936 5.625 0.420376 5.52623 0.256282 5.35041C0.0921872 5.1746 0 4.93614 0 4.6875ZM5.495 9.375L7.6825 18.75H22.0675L24.255 9.375H5.495ZM8.75 24.375C8.28587 24.375 7.84075 24.5725 7.51256 24.9242C7.18437 25.2758 7 25.7527 7 26.25C7 26.7473 7.18437 27.2242 7.51256 27.5758C7.84075 27.9275 8.28587 28.125 8.75 28.125C9.21413 28.125 9.65925 27.9275 9.98744 27.5758C10.3156 27.2242 10.5 26.7473 10.5 26.25C10.5 25.7527 10.3156 25.2758 9.98744 24.9242C9.65925 24.5725 9.21413 24.375 8.75 24.375ZM5.25 26.25C5.25 25.2554 5.61875 24.3016 6.27513 23.5984C6.9315 22.8951 7.82174 22.5 8.75 22.5C9.67826 22.5 10.5685 22.8951 11.2249 23.5984C11.8813 24.3016 12.25 25.2554 12.25 26.25C12.25 27.2446 11.8813 28.1984 11.2249 28.9016C10.5685 29.6049 9.67826 30 8.75 30C7.82174 30 6.9315 29.6049 6.27513 28.9016C5.61875 28.1984 5.25 27.2446 5.25 26.25ZM21 24.375C20.5359 24.375 20.0908 24.5725 19.7626 24.9242C19.4344 25.2758 19.25 25.7527 19.25 26.25C19.25 26.7473 19.4344 27.2242 19.7626 27.5758C20.0908 27.9275 20.5359 28.125 21 28.125C21.4641 28.125 21.9092 27.9275 22.2374 27.5758C22.5656 27.2242 22.75 26.7473 22.75 26.25C22.75 25.7527 22.5656 25.2758 22.2374 24.9242C21.9092 24.5725 21.4641 24.375 21 24.375ZM17.5 26.25C17.5 25.2554 17.8687 24.3016 18.5251 23.5984C19.1815 22.8951 20.0717 22.5 21 22.5C21.9283 22.5 22.8185 22.8951 23.4749 23.5984C24.1313 24.3016 24.5 25.2554 24.5 26.25C24.5 27.2446 24.1313 28.1984 23.4749 28.9016C22.8185 29.6049 21.9283 30 21 30C20.0717 30 19.1815 29.6049 18.5251 28.9016C17.8687 28.1984 17.5 27.2446 17.5 26.25Z",fill:"white"})),he=i=>t.createElement("svg",{width:24,height:26,viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_730_62662)"},t.createElement("path",{d:"M5.25 0C5.44891 0 5.63968 0.0856024 5.78033 0.237976C5.92098 0.390349 6 0.597012 6 0.8125V1.625H18V0.8125C18 0.597012 18.079 0.390349 18.2197 0.237976C18.3603 0.0856024 18.5511 0 18.75 0C18.9489 0 19.1397 0.0856024 19.2803 0.237976C19.421 0.390349 19.5 0.597012 19.5 0.8125V1.625H21C21.7956 1.625 22.5587 1.96741 23.1213 2.5769C23.6839 3.1864 24 4.01305 24 4.875V22.75C24 23.612 23.6839 24.4386 23.1213 25.0481C22.5587 25.6576 21.7956 26 21 26H3C2.20435 26 1.44129 25.6576 0.87868 25.0481C0.316071 24.4386 0 23.612 0 22.75V4.875C0 4.01305 0.316071 3.1864 0.87868 2.5769C1.44129 1.96741 2.20435 1.625 3 1.625H4.5V0.8125C4.5 0.597012 4.57902 0.390349 4.71967 0.237976C4.86032 0.0856024 5.05109 0 5.25 0V0ZM3 3.25C2.60218 3.25 2.22064 3.4212 1.93934 3.72595C1.65804 4.0307 1.5 4.44402 1.5 4.875V6.5H22.5V4.875C22.5 4.44402 22.342 4.0307 22.0607 3.72595C21.7794 3.4212 21.3978 3.25 21 3.25H3ZM22.5 8.125H1.5V22.75C1.5 23.181 1.65804 23.5943 1.93934 23.899C2.22064 24.2038 2.60218 24.375 3 24.375H21C21.3978 24.375 21.7794 24.2038 22.0607 23.899C22.342 23.5943 22.5 23.181 22.5 22.75V8.125Z",fill:"white"}),t.createElement("path",{d:"M16.5 12.1875C16.5 11.972 16.579 11.7653 16.7197 11.613C16.8603 11.4606 17.0511 11.375 17.25 11.375H18.75C18.9489 11.375 19.1397 11.4606 19.2803 11.613C19.421 11.7653 19.5 11.972 19.5 12.1875V13.8125C19.5 14.028 19.421 14.2347 19.2803 14.387C19.1397 14.5394 18.9489 14.625 18.75 14.625H17.25C17.0511 14.625 16.8603 14.5394 16.7197 14.387C16.579 14.2347 16.5 14.028 16.5 13.8125V12.1875Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_730_62662"},t.createElement("rect",{width:24,height:26,fill:"white"})))),me=i=>t.createElement("svg",{width:30,height:32,viewBox:"0 0 30 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M15 16C16.4918 16 17.9226 15.3679 18.9775 14.2426C20.0324 13.1174 20.625 11.5913 20.625 10C20.625 8.4087 20.0324 6.88258 18.9775 5.75736C17.9226 4.63214 16.4918 4 15 4C13.5082 4 12.0774 4.63214 11.0225 5.75736C9.96763 6.88258 9.375 8.4087 9.375 10C9.375 11.5913 9.96763 13.1174 11.0225 14.2426C12.0774 15.3679 13.5082 16 15 16ZM18.75 10C18.75 11.0609 18.3549 12.0783 17.6516 12.8284C16.9484 13.5786 15.9946 14 15 14C14.0054 14 13.0516 13.5786 12.3483 12.8284C11.6451 12.0783 11.25 11.0609 11.25 10C11.25 8.93913 11.6451 7.92172 12.3483 7.17157C13.0516 6.42143 14.0054 6 15 6C15.9946 6 16.9484 6.42143 17.6516 7.17157C18.3549 7.92172 18.75 8.93913 18.75 10ZM26.25 26C26.25 28 24.375 28 24.375 28H5.625C5.625 28 3.75 28 3.75 26C3.75 24 5.625 18 15 18C24.375 18 26.25 24 26.25 26ZM24.375 25.992C24.3731 25.5 24.0863 24.02 22.815 22.664C21.5925 21.36 19.2919 20 15 20C10.7063 20 8.4075 21.36 7.185 22.664C5.91375 24.02 5.62875 25.5 5.625 25.992H24.375Z",fill:"white"})),ge=()=>{const i=J(K),[s,l]=t.useState(!0),a=i.isLogin,d=V();return t.useLayoutEffect(()=>{d.pathname==="/"?l(!0):l(!1)},[d.pathname]),e.jsxs(e.Fragment,{children:[e.jsxs($1,{className:"maxframe",children:[e.jsx(v1,{children:e.jsx(r,{to:"/",children:e.jsx(e1,{})})}),e.jsxs(te,{children:[e.jsxs(y1,{children:[s===!0&&e.jsxs(k1,{children:[e.jsx(C,{children:e.jsx(r,{to:"/list",children:"이번주 행사"})}),e.jsx(C,{children:e.jsx(r,{to:"/list",children:"무료 행사"})}),e.jsx(C,{children:e.jsx(r,{to:"/list",children:"온라인 행사"})}),e.jsx(C,{children:e.jsx(r,{to:"/list",children:"메이트 PICK"})})]}),s===!1&&e.jsx(t1,{})]}),e.jsxs(N1,{children:[!a&&e.jsxs(f1,{$loginState:a,children:[e.jsx("div",{className:"login",children:e.jsx(r,{to:"/login",children:"로그인"})}),e.jsx("div",{children:e.jsx(r,{to:"/join",children:"회원가입"})})]}),a&&e.jsxs(f1,{children:[e.jsx("div",{children:e.jsx(r,{to:"/mypage/wish-list",children:e.jsx(ce,{})})}),e.jsx("div",{children:e.jsx(r,{to:"/mypage/apply-list",children:e.jsx(he,{})})}),e.jsx("div",{children:e.jsx(r,{to:"/mypage/user-modify",children:e.jsx(me,{})})})]}),e.jsxs(H1,{children:[e.jsx("button",{children:"행사등록"}),e.jsx("button",{children:"AI챗봇"})]})]})]})]}),e.jsx(se,{})]})},fe=i=>t.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 18.3164C9 14.7213 9 12.9237 9.85669 11.629C10.2392 11.0508 10.7344 10.5557 11.3126 10.1731C12.6073 9.31641 14.4049 9.31641 18 9.31641C21.5951 9.31641 23.3927 9.31641 24.6874 10.1731C25.2656 10.5557 25.7608 11.0508 26.1433 11.629C27 12.9237 27 14.7213 27 18.3164C27 21.9115 27 23.7091 26.1433 25.0039C25.7608 25.582 25.2656 26.0772 24.6874 26.4597C23.3927 27.3164 21.5951 27.3164 18 27.3164C14.4049 27.3164 12.6073 27.3164 11.3126 26.4597C10.7344 26.0772 10.2392 25.582 9.85669 25.0039C9 23.7091 9 21.9115 9 18.3164ZM22.6596 18.3165C22.6596 20.8898 20.5735 22.9759 18.0002 22.9759C15.4269 22.9759 13.3408 20.8898 13.3408 18.3165C13.3408 15.7431 15.4269 13.657 18.0002 13.657C20.5735 13.657 22.6596 15.7431 22.6596 18.3165ZM18.0002 21.3995C19.7029 21.3995 21.0832 20.0191 21.0832 18.3165C21.0832 16.6138 19.7029 15.2334 18.0002 15.2334C16.2975 15.2334 14.9172 16.6138 14.9172 18.3165C14.9172 20.0191 16.2975 21.3995 18.0002 21.3995ZM22.8436 14.5178C23.4483 14.5178 23.9385 14.0276 23.9385 13.4229C23.9385 12.8183 23.4483 12.3281 22.8436 12.3281C22.239 12.3281 21.7488 12.8183 21.7488 13.4229C21.7488 14.0276 22.239 14.5178 22.8436 14.5178Z",fill:"white"})),we=i=>t.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),t.createElement("path",{d:"M18.4402 25.2961L14.378 25.2202C13.0628 25.1937 11.7443 25.2465 10.4548 24.9724C8.49323 24.5629 8.35427 22.555 8.20886 20.8708C8.0085 18.5029 8.08606 16.0921 8.46417 13.744C8.67763 12.4265 9.51766 11.6404 10.8167 11.5548C15.2021 11.2443 19.6166 11.2811 23.9922 11.426C24.4544 11.4393 24.9197 11.5118 25.3753 11.5944C27.6246 11.9974 27.6795 14.2728 27.8253 16.1882C27.9707 18.1234 27.9093 20.0686 27.6314 21.9906C27.4084 23.582 26.9818 24.9166 25.1814 25.0454C22.9257 25.2139 20.7217 25.3495 18.4596 25.3063C18.4597 25.2961 18.4467 25.2961 18.4402 25.2961ZM16.052 21.2671C17.7519 20.2697 19.4194 19.2889 21.1096 18.2982C19.4065 17.3008 17.7422 16.32 16.052 15.3293V21.2671Z",fill:"white"})),je=i=>t.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),t.createElement("path",{d:"M12.9896 16.9581C12.6245 16.9581 12.3281 17.2578 12.3281 17.6267C12.3281 17.9957 12.6245 18.2953 12.9896 18.2953C13.3546 18.2953 13.651 17.9957 13.651 17.6267C13.651 17.2578 13.3546 16.9581 12.9896 16.9581Z",fill:"white"}),t.createElement("path",{d:"M19.5205 18.3275C19.9137 18.3275 20.2324 18.0054 20.2324 17.6079C20.2324 17.2105 19.9137 16.8884 19.5205 16.8884C19.1273 16.8884 18.8086 17.2105 18.8086 17.6079C18.8086 18.0054 19.1273 18.3275 19.5205 18.3275Z",fill:"white"}),t.createElement("path",{d:"M25.4327 10.3164H11.3689C9.95022 10.3164 8.80078 11.4782 8.80078 12.9121V21.3482C8.80078 22.7822 9.95022 23.944 11.3689 23.944H16.3368L18.026 27.9671C18.026 27.9671 18.1425 28.3164 18.4234 28.3164C18.7043 28.3164 18.8208 27.9671 18.8208 27.9671L20.51 23.944H25.4314C26.8501 23.944 27.9995 22.7822 27.9995 21.3482V12.9121C27.9995 11.4782 26.8501 10.3164 25.4314 10.3164H25.4327ZM14.8327 17.7739C14.825 19.3164 13.2471 19.3596 13.2471 19.3596C12.6374 19.3596 12.2931 18.9514 12.2931 18.9514V19.2287H11.145V14.4403C11.145 14.4403 11.1398 14.439 11.145 14.4376V14.4403C11.2162 14.452 12.2931 14.4376 12.2931 14.4376V16.2693C12.5636 15.8035 13.3442 15.8114 13.3442 15.8114C15.045 15.971 14.8327 17.7739 14.8327 17.7739ZM16.8546 15.9579V19.2366H15.7298V15.9906C15.7298 15.5484 15.1874 15.4267 15.1874 15.4267V14.282C16.9828 14.3552 16.8533 15.9579 16.8533 15.9579H16.8546ZM19.5198 19.3622C18.4791 19.3622 17.6351 18.5772 17.6351 17.6077C17.6351 16.6383 18.4791 15.8533 19.5198 15.8533C20.5605 15.8533 21.4045 16.6383 21.4045 17.6077C21.4045 18.5772 20.5605 19.3622 19.5198 19.3622ZM25.6799 19.3622C25.6799 19.3622 25.6954 21.0277 24.0218 21.0277H23.5118V19.9483H23.8185C23.8185 19.9483 24.5227 20.0137 24.5136 18.9174C24.5136 18.9174 24.3764 19.3609 23.3888 19.3609C23.3888 19.3609 21.9895 19.2588 21.9895 17.8786V17.3552C21.9895 17.3552 22.0219 15.9239 23.5584 15.8101C23.5584 15.8101 24.1654 15.7447 24.5369 16.2523V15.9004H25.6773V19.3609L25.6799 19.3622Z",fill:"white"}),t.createElement("path",{d:"M23.8943 18.3102C24.2782 18.3102 24.5894 17.9956 24.5894 17.6076C24.5894 17.2196 24.2782 16.905 23.8943 16.905C23.5104 16.905 23.1992 17.2196 23.1992 17.6076C23.1992 17.9956 23.5104 18.3102 23.8943 18.3102Z",fill:"white"})),ue=i=>t.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),t.createElement("path",{d:"M25.0511 11.3164H10.5268C10.255 11.3164 10.0025 11.3747 9.76953 11.4912L17.789 17.996L25.8084 11.4912C25.5754 11.3747 25.3424 11.3164 25.0511 11.3164Z",fill:"white"}),t.createElement("path",{d:"M18.3348 19.7836C18.1794 19.9195 17.9852 19.9778 17.7911 19.9778C17.5969 19.9778 17.4027 19.9195 17.2474 19.7836L8.80078 12.9292C8.80078 12.968 8.80078 12.9875 8.80078 13.0457V23.5894C8.80078 24.5409 9.57748 25.3176 10.5289 25.3176H25.0726C26.0241 25.3176 26.8008 24.5409 26.8008 23.5894V13.0457C26.8008 13.0069 26.8008 12.9875 26.8008 12.9292L18.3348 19.7836Z",fill:"white"})),be=n.footer`
  display: flex;
  flex-direction: column;
  padding: 0 200px;
  justify-content: center;
  height: 376px;
  @media (max-width: 1400px) {
    padding: 0 100px;
  }
  @media (max-width: 1350px) {
    padding: 0 50px;
  }
  @media (max-width: 1190px) {
    padding: 0 20px;
  }
  @media (max-width: 1050px) {
    padding: 0 10px;
  }
  @media (max-width: 1024px) {
    padding: 0 20px;
    height: 280px;
    margin-bottom: 40px;
  }
`,Ce=n.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  & .logo {
    width: 100%;
    & > svg {
      max-width: 208px;
      width: 100%;
      height: auto;
      @media (max-width: 1024px) {
        max-width: 130px;
      }
    }
  }
  & .footer_nav {
    width: 80%;
    display: flex;
    font-weight: 500;
    color: #fff;
    gap: 32px;
    padding-bottom: 45px;
    @media (max-width: 1240px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      padding-top: 10px;
      font-size: 12px;
      gap: 15px;
      padding-bottom: 20px;
    }
  }
`,ve=n.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  & .link_area {
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  & .sns_link {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-right: 20px;
    @media (max-width: 1024px) {
      padding: 10px 0;
      gap: 12px;
    }
  }
  & .sns_link li a {
    display: block;
    width: 30px;
  }
  & .sns_link li a svg {
    width: 100%;
  }
  & .docs_link {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    @media (max-width: 1240px) {
      font-size: 12px;
    }
  }
  & .desc {
    width: 80%;
    color: #b0b8c1;
    font-size: 14px;
    line-height: 1.5;
    @media (max-width: 1240px) {
      width: 100%;
      font-size: 10px;
    }
  }
  & .desc a {
    text-decoration: underline;
  }
  & .copyright {
    padding-top: 10px;
  }
`,ye=()=>e.jsxs(be,{className:"maxframe",children:[e.jsxs(Ce,{children:[e.jsx("p",{className:"logo",children:e.jsx(e1,{})}),e.jsxs("ul",{className:"footer_nav",children:[e.jsx("li",{children:e.jsx(r,{to:"",children:"이번주 행사"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"무료 행사"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"온라인 행사"})}),e.jsx("li",{children:e.jsx(r,{to:"",children:"메이트 PICK"})})]})]}),e.jsxs(ve,{children:[e.jsxs("div",{className:"link_area",children:[e.jsxs("ul",{className:"sns_link",children:[e.jsx("li",{children:e.jsx(r,{to:"",children:e.jsx(fe,{})})}),e.jsx("li",{children:e.jsx(r,{to:"",children:e.jsx(we,{})})}),e.jsx("li",{children:e.jsx(r,{to:"",children:e.jsx(je,{})})}),e.jsx("li",{children:e.jsx(r,{to:"",children:e.jsx(ue,{})})})]}),e.jsxs("div",{className:"docs_link",children:[e.jsx(r,{to:"",children:"창업기업확인서 받기 "}),"   |   ",e.jsx(r,{to:"",children:"사회적기업확인서 받기"})]})]}),e.jsxs("div",{className:"desc",children:[e.jsx("p",{children:"마인즈그라운드 주식회사  |  대표이사 : 민환기  |  사업자 등록번호 : 732-87-01581"}),e.jsx("p",{children:"서울특별시 금천구 가산디지털1로 171 SKV1 301호"}),e.jsx("p",{children:"Tel : 02-6747-7513  |  Fax : 02 -6499-7513  |  E-mail : admin@mindsground.com"}),e.jsx("p",{children:e.jsx(r,{to:"/privacy-policy",children:"개인정보처리방침"})}),e.jsx("p",{className:"copyright",children:"Copyright © 마인즈그라운드 주식회사. All Rights Reserved."})]})]})]}),ke=n.main``,Ne=()=>e.jsxs(Q1,{children:[e.jsx(ge,{}),e.jsx(ke,{children:e.jsx(C1,{})}),e.jsx(ye,{})]}),He=n.div`
  position: absolute;
  top: 52px;
  left: 56px;
  width: 280px;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  padding: 30px 20px;
  @media (max-width: 1600px) {
    width: 250px;
  }
  @media (max-width: 1400px) {
    left: 20px;
  }
  & h2 {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`,Ee=n.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,R=n.li`
  width: 100%;
  position: relative;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  color: ${i=>i.$isOn&&"rgba(255, 255, 255, 1);"};
  padding: 10px 25px;
  border-radius: 50rem;
  font-weight: 600;
  background-color: ${i=>i.$target&&"rgba(255, 255, 255, 0.1)"};
  cursor: pointer;
  &.sub_list {
    font-size: 16px;
    font-weight: 500;
    padding: 10px 25px;
  }
  & a {
    display: block;
    color: ${i=>i.$target&&"#fff"};
  }
  & > span {
    position: absolute;
    display: block;
    right: 16px;
    top: 50%;
    transform: translateY(-50%)
      rotate(${i=>i.$isOn?"180deg":"0"});
    width: 14px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg path {
      stroke-opacity: ${i=>i.$isOn?1:.5};
    }
  }
`,Le=n.div`
  display: ${i=>i.$isOn?"block":"none"};
  border-radius: 0 0 4px 4px;
  border-top: none;
`;n.li`
  font-size: 13px;
  padding: 5px 9px 6px;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: -0.001em;
`;const Me=i=>t.createElement("svg",{width:16,height:9,viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M1 1L8 8L15 1",stroke:"white",strokeOpacity:.5,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ve=()=>{const[i,s]=t.useState(!1),l=V(),a=[{id:"00",name:"참여 행사 관리",type:"toggleButton",subMenu:[{id:"00-00",path:"/mypage/apply-list",name:"신청 행사"},{id:"00-01",path:"/mypage/cancel-list",name:"취소 내역"},{id:"00-02",path:"/mypage/wish-list",name:"관심 행사"},{id:"00-03",path:"/mypage/past-list",name:"지난 행사"}]},{id:"01",path:"/mypage/user-modify",name:"내 정보 수정"},{id:"02",name:"로그아웃",type:"button"}],d=()=>{s(o=>!o)};return t.useEffect(()=>{l.pathname!=="/mypage/user-modify"&&s(!0)},[l.pathname]),e.jsxs(He,{children:[e.jsx("h2",{children:"마이페이지"}),e.jsx(Ee,{children:a.map(o=>o.type==="toggleButton"?e.jsxs("div",{children:[e.jsxs(R,{onClick:d,$isOn:i,children:["참여 행사 관리",e.jsx("span",{children:e.jsx(Me,{})})]}),e.jsx(Le,{$isOn:i,children:o.subMenu&&o.subMenu.map(p=>e.jsx(R,{$target:l.pathname.indexOf(p.path)>=0,children:e.jsx(r,{to:p.path,children:p.name})},p.id))})]},o.id):o.type!=="button"?e.jsx(R,{$target:!!(o.path&&l.pathname.indexOf(o.path)>=0),children:e.jsx(r,{to:o.path,children:o.name})},o.id):e.jsx(R,{children:o.name},o.id))})]})},ze=n.div`
  position: relative;
  display: flex;
  padding: 0px 110px 0 0;
  @media (max-width: 1400px) {
    padding: 0px 70px 0 0;
  }
  @media (max-width: 1200px) {
    padding: 0px 20px 0 0;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px 0;
  }
`,Ze=n.h3`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
    gap: 0px;
  }
  & .title {
    @media (max-width: 1024px) {
      display: ${i=>i.$subPage&&"none"};
    }
  }
  & .prev_btn {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50rem;
    overflow: hidden;
    margin-right: 10px;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 24px;
      height: 24px;
    }
    & svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: 1024px) {
        width: 76px;
        height: 76px;
      }
    }
  }
  & .sub_icon {
    @media (max-width: 1024px) {
      display: ${i=>i.$subPage&&"none"};
    }
  }
`,Se=n.div`
  padding-left: 364px;
  width: 100%;
  min-height: 90vh;
  @media (max-width: 1600px) {
    padding-left: 324px;
  }
  @media (max-width: 1400px) {
    padding-left: 280px;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
`,Re=i=>t.createElement("svg",{width:9,height:16,viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M1 15L8 8L1 1",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ae=i=>t.createElement("svg",{width:116,height:116,viewBox:"0 0 116 116",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{filter:"url(#filter0_d_724_46418)"},t.createElement("circle",{cx:58,cy:58,r:18,transform:"rotate(180 58 58)",fill:"#F7FAFB",fillOpacity:.28,shapeRendering:"crispEdges"})),t.createElement("path",{d:"M68.125 58.2812L50.9687 58.2813M50.9687 58.2813L57.4899 51.8125M50.9687 58.2813L57.4899 64.75",stroke:"white",strokeWidth:2,strokeLinecap:"round"}),t.createElement("defs",null,t.createElement("filter",{id:"filter0_d_724_46418",x:0,y:0,width:116,height:116,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},t.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),t.createElement("feOffset",null),t.createElement("feGaussianBlur",{stdDeviation:20}),t.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),t.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),t.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_724_46418"}),t.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_724_46418",result:"shape"})))),Be=()=>{const[i,s]=t.useState(),l=V(),a=U(),d=z("(max-width:1024px)");return t.useEffect(()=>{l.pathname==="/mypage/apply-list"?s({title:"신청 행사"}):l.pathname==="/mypage/cancel-list"?s({title:"취소 내역"}):l.pathname==="/mypage/wish-list"?s({title:"관심 행사"}):l.pathname==="/mypage/past-list"?s({title:"지난 행사"}):l.pathname==="/mypage/user-modify"?s({title:"내 정보 수정"}):l.pathname==="/mypage/apply-list/booth-select/01"?s({title:"신청 행사",subTitle:"2024 케이펫페어 서울"}):l.pathname==="/mypage/apply-list/booth-check/01"?s({title:"신청 행사",subTitle:"2024 케이펫페어 서울"}):l.pathname==="/mypage/user-modify/with-draw"?s({title:"탈퇴하기"}):s({})},[l.pathname]),e.jsxs(ze,{className:"maxframe",children:[!d&&e.jsx(Ve,{}),e.jsxs(Se,{children:[i&&e.jsxs(Ze,{$subPage:i==null?void 0:i.subTitle,children:[i.subTitle&&e.jsx("span",{onClick:()=>{a(-1)},className:"prev_btn",children:e.jsx(Ae,{})}),e.jsx("span",{className:"title",children:i.title}),i.subTitle&&e.jsxs(e.Fragment,{children:[e.jsx(Re,{className:"sub_icon"}),e.jsx("span",{className:"sub_title",children:i.subTitle})]})]}),e.jsx(C1,{})]})]})},Ie=n.div`
  & > .main_swiper {
    padding: 45px 0;
    @media (max-width: 1024px) {
      padding: 20px 0 0;
    }
  }
  & > .main_swiper .swiper-slide figure {
    position: relative;
    padding-top: 43.79%;
    overflow: hidden;
    border-radius: 30px;
    @media (max-width: 1024px) {
      border-radius: 10px;
    }
  }
  & > .main_swiper .swiper-slide figure img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > .main_swiper .swiper-slide figure img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* navigation */
  & > .main_swiper .swiper-button-prev,
  & > .main_swiper .swiper-button-next {
    width: 64px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .main_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 139px);
  }
  & > .main_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 139px);
  }
  & > .main_swiper .swiper-button-prev::after,
  & > .main_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  & > .main_swiper .swiper-button-prev::after {
    background-image: url("./arrow_prev_main.svg");
  }
  & > .main_swiper .swiper-button-next::after {
    background-image: url("./arrow_next_main.svg");
  }
  /* pagination */
  & > .main_swiper .swiper-pagination {
    bottom: var(--swiper-pagination-bottom, 0);
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .main_swiper .swiper-pagination .swiper-pagination-bullet {
    background-color: #fff;
  }
`,Oe=({bannerImgs:i})=>e.jsx(Ie,{children:e.jsx(I,{slidesPerView:1.05,centeredSlides:!0,spaceBetween:5,navigation:!0,pagination:!0,modules:[W1,q,_1],loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{1024:{spaceBetween:24}},className:"main_swiper",children:i&&i.map((s,l)=>e.jsx(O,{children:e.jsx("figure",{children:e.jsx("img",{src:s,alt:`메인배너_${l}`})})},l))})}),Fe=n.div`
  padding: 160px 0 0;
  @media (max-width: 1024px) {
    padding: 0;
  }
`,Pe=n.div`
  word-break: keep-all;
  color: #fff;
  padding: 0 60px 40px;
  @media (max-width: 1650px) {
    padding: 0 30px 20px;
  }
  @media (max-width: 1024px) {
    text-align: center;
    padding: 30px 16px 20px;
  }
  & h3 {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 13px;
    @media (max-width: 1024px) {
      font-size: 16px;
      padding-bottom: 5px;
    }
  }
  & span {
    font-size: 24px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`,Te=n.div`
  & > .event_swiper {
    padding: 0 60px;
    @media (max-width: 1650px) {
      padding: 0 30px;
    }
    @media (max-width: 1024px) {
      padding: 0 16px;
    }
  }
  & > .event_swiper::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    width: 60px;
    z-index: 2;
    @media (max-width: 1650px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      width: 16px;
    }
  }
  & > .event_swiper::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    width: 60px;
    z-index: 1;
    @media (max-width: 1650px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      width: 16px;
    }
  }

  /* navigation */
  & > .event_swiper .swiper-button-prev,
  & > .event_swiper .swiper-button-next {
    width: 76px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    top: var(--swiper-navigation-top-offset, 43%);
    @media (max-width: 1650px) {
      width: 50px;
      height: 43px;
    }
    @media (max-width: 1024px) {
      width: 35px;
      height: 31px;
    }
  }
  & > .event_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1650px) {
      left: var(--swiper-navigation-sides-offset, 8px);
    }
    @media (max-width: 1024px) {
      left: var(--swiper-navigation-sides-offset, 5px);
    }
  }
  & > .event_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1650px) {
      right: var(--swiper-navigation-sides-offset, 8px);
    }
    @media (max-width: 1024px) {
      right: var(--swiper-navigation-sides-offset, 5px);
    }
  }
  & > .event_swiper .swiper-button-prev::after,
  & > .event_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 1650px) {
      background-size: 174%;
    }
  }
  & > .event_swiper .swiper-button-prev::after {
    background-image: url("./arrow_prev.svg");
  }
  & > .event_swiper .swiper-button-next::after {
    background-image: url("./arrow_next.svg");
  }
`,We=n.div`
  position: relative;
`,_e=n.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #000;
  position: absolute;
  top: 26px;
  right: 27px;
  border-radius: 50rem;
  z-index: 1;
  color: #fff;
  padding: 8px 10px;
  font-size: 18px;
  line-height: 1;
  @media (max-width: 1300px) {
    top: 25px;
    right: 25px;
  }
  @media (max-width: 1024px) {
    top: 15px;
    right: 15px;
    font-size: 10px;
    gap: 5px;
    padding: 6px 6px;
  }
  & .heart_icon {
    width: 13px;
    height: 13px;
    @media (max-width: 1024px) {
      width: 12px;
    }
    & svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`,De=n.figure`
  position: relative;
  overflow: hidden;
  padding-top: 141.66%;
  border-radius: 20px;
  & > img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1024px) {
    border-radius: 10px;
  }
`,Ye=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 30px 10px 0;
  @media (max-width: 1024px) {
    padding: 15px 5px 0;
  }
  & > div:first-child {
    padding-right: 10px;
  }
  & > div:last-child {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  & .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 1.2;
    @media (max-width: 1300px) {
      font-size: 20px;
    }
    & .title {
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .infomation {
    color: #b0b8c1;
    line-height: 1.2;
    @media (max-width: 1024px) {
      font-size: 9px;
    }
  }
  & .dday {
    padding: 5px 20px;
    background-color: #235ef3;
    border-radius: 9px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    @media (max-width: 1300px) {
      padding: 5px 13px;
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      padding: 7px 5px;
      font-size: 14px;
      border-radius: 4px;
      min-width: 62px;
    }
  }
  & .price {
    padding-top: 15px;
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 1300px) {
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      font-size: 14px;
      border-radius: 4px;
    }
  }
`,E1=i=>t.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_730_61909)"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.00366 1.47733C13.9964 -3.65492 26.4794 5.32596 9.00366 16.8741C-8.47209 5.32708 4.01091 -3.65492 9.00366 1.47733Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_730_61909"},t.createElement("rect",{width:18,height:18,fill:"white"})))),Je=i=>t.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_730_61925)"},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.00183 3.09058L8.19521 2.26145C6.30183 0.315203 2.83008 0.986828 1.57683 3.4337C0.98846 4.58458 0.85571 6.2462 1.93008 8.36683C2.96508 10.4087 5.11833 12.8545 9.00183 15.5185C12.8853 12.8545 15.0375 10.4087 16.0736 8.36683C17.148 6.24508 17.0163 4.58458 16.4268 3.4337C15.1736 0.986828 11.7018 0.314078 9.80846 2.26033L9.00183 3.09058ZM9.00183 16.8741C-8.24779 5.47558 3.69071 -3.42092 8.80383 1.28495C8.87133 1.34683 8.93771 1.41095 9.00183 1.47733C9.06531 1.41101 9.13136 1.34721 9.19983 1.28608C14.3118 -3.42317 26.2515 5.47445 9.00183 16.8741Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_730_61925"},t.createElement("rect",{width:18,height:18,fill:"white"})))),L1=({imgUrl:i,title:s,date:l,location:a,dDay:d,price:o,likeNum:p,like:x})=>e.jsx(We,{children:e.jsxs(r,{to:"/detail/01",children:[e.jsxs(_e,{children:[e.jsx("span",{children:p}),e.jsx("span",{className:"heart_icon",children:x?e.jsx(E1,{}):e.jsx(Je,{})})]}),e.jsx(De,{children:e.jsx("img",{src:i})}),e.jsxs(Ye,{children:[e.jsxs("div",{children:[e.jsx("p",{className:"title",children:s}),e.jsxs("p",{className:"infomation",children:[l,e.jsx("br",{}),a]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"dday",children:d}),e.jsx("p",{className:"price",children:o})]})]})]})}),M=({title:i,subTitle:s,eventList:l})=>e.jsxs(Fe,{className:"maxframe EventSliderWrap",children:[e.jsxs(Pe,{className:"TitleBox",children:[i&&e.jsx("h3",{children:i}),e.jsx("span",{children:s})]}),e.jsx(Te,{children:e.jsx(I,{slidesPerView:2,spaceBetween:10,navigation:!0,modules:[q],loop:!0,loopAdditionalSlides:1,observer:!0,observeParents:!0,breakpoints:{1024:{slidesPerView:3,spaceBetween:15},1650:{slidesPerView:4,spaceBetween:24}},className:"event_swiper",children:l.map(a=>e.jsx(O,{children:e.jsx(L1,{id:a.id,imgUrl:a.imgUrl,title:a.title,date:a.date,location:a.location,dDay:a.dDay,price:a.price,likeNum:a.likeNum,like:a.like})},a.id))})})]}),Ue=n.div`
  margin-top: 160px;
  @media (max-width: 1024px) {
    margin-top: 25px;
  }
  & > img {
    width: 100%;
  }
`,qe=()=>e.jsx(Ue,{children:e.jsx("img",{src:"./sub_banner.png"})}),Qe=n.div`
  padding-bottom: 210px;
  @media (max-width: 1024px) {
    padding-bottom: 40px;
  }
`,Ge=[{id:"0",imgUrl:"./card_1.png",title:"제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-21",price:"15,000",likeNum:1e3,like:!0},{id:"1",imgUrl:"./card_2.png",title:"제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-301",price:"무료",likeNum:1e3,like:!1},{id:"2",imgUrl:"./card_3.png",title:"제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-1",price:"10,000원",likeNum:1e3,like:!0},{id:"3",imgUrl:"./card_4.png",title:"제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-1",price:"무료",likeNum:1e3,like:!1},{id:"4",imgUrl:"./card_1.png",title:"제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-21",price:"15,000",likeNum:1e3,like:!0},{id:"5",imgUrl:"./card_2.png",title:"제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-301",price:"무료",likeNum:1e3,like:!1},{id:"6",imgUrl:"./card_3.png",title:"제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-1",price:"10,000원",likeNum:1e3,like:!0},{id:"7",imgUrl:"./card_4.png",title:"제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-1",price:"무료",likeNum:1e3,like:!1}],Xe=[{id:"0",imgUrl:"./card_1.png",title:"제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어 제 1회 북앤 콘텐츠 페어",date:"2024/08/24 ~ 2024/08/24",location:"송도 컨벤시아",dDay:"D-21",price:"15,000",likeNum:1e3,like:!0}],k={eventList:Ge,applyList:Xe},Ke=["./banner_1.png","./banner_2.png","./banner_3.png","./banner_1.png","./banner_2.png","./banner_3.png"],$e=()=>e.jsxs(Qe,{children:[e.jsx(t1,{}),e.jsx(Oe,{bannerImgs:Ke}),e.jsx(M,{title:"AI 메이트가 맞추는 취향저격 전시",subTitle:"마이스 메이트가 추천해드려요! 회원가입하면 더 정확한 추천을 받을 수 있어요 ✨",eventList:k.eventList}),e.jsx(M,{title:"New! 따끈따끈 신규행사",subTitle:"마이스 메이트에 새롭게 등록된 행사를 모아봤어요 ✨",eventList:k.eventList}),e.jsx(qe,{}),e.jsx(M,{title:"마이스 메이트 인기 전시 모음 ",subTitle:"가장 관심을 많이 받고있는 인기 행사 놓치지마세요!",eventList:k.eventList}),e.jsx(M,{title:"마이스 메이트 주말 특급 정보",subTitle:"이번 주말, 마이스 메이트가 추천하는 핫한 행사 ✨",eventList:k.eventList})]}),ei=n.div`
  padding: 190px 0 370px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 80px 0 100px;
  }
  @media (max-width: 380px) {
    padding: 80px 16px 100px;
  }
`,H=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 319px;
  height: 40px;
  border-radius: 50rem;
  font-weight: 600;
  position: relative;
  font-size: 16px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    width: 100%;
  }
  &.kakao {
    background-color: #fee500;
    border: 1px solid #fee500;
  }
  &.naver {
    background-color: #00c73c;
    border: 1px solid #00c73c;
    color: #fff;
  }
  &.gmail {
    background-color: #fff;
    border: 1px solid #e0e0e0;
  }
  &.mail {
    background-color: #1e9eff;
    border: 1px solid #e0e0e0;
    color: #fff;
  }
  &.login {
    color: #8d8991;
    background-color: transparent;
    margin-top: 10px;
  }
  & .icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    & svg {
      display: block;
    }
  }
`,ii=i=>t.createElement("svg",{width:21,height:19,viewBox:"0 0 21 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M8.16844 7.17395L7.57139 8.85862H8.7636L8.16844 7.17395ZM8.16844 7.17395L7.57139 8.85862H8.7636L8.16844 7.17395ZM10.3589 0C4.63889 0 0 3.63315 0 8.11804C0 11.0163 1.93805 13.5602 4.85548 14.9943C3.40712 19.9597 2.55582 20.2838 8.51875 16.1061C9.12836 16.192 9.74325 16.2348 10.3589 16.2342C16.0788 16.2342 20.7177 12.5992 20.7177 8.11616C20.7177 3.63315 16.0788 0 10.3589 0ZM4.63135 10.9503C3.59735 10.9503 4.20758 9.52005 4.03431 6.85549C3.65762 6.79142 2.51438 7.11177 2.51438 6.27321C2.51537 6.1186 2.57759 5.9707 2.68738 5.86191C2.79718 5.75311 2.9456 5.69231 3.10013 5.69281C5.2736 5.84921 6.74645 5.28766 6.74645 6.27321C6.74645 7.12684 5.64652 6.78388 5.2284 6.85549C5.05513 9.51062 5.66347 10.9503 4.63135 10.9503ZM10.2515 10.8599C9.32298 11.282 9.30038 10.3303 9.07813 9.91766H7.25686C7.03273 10.3398 7.01389 11.2895 6.08348 10.8599C5.38473 10.5395 6.52232 8.91327 7.37175 6.27697C7.42611 6.10861 7.53242 5.96183 7.67539 5.85771C7.81837 5.75359 7.99066 5.6975 8.16749 5.6975C8.34433 5.6975 8.51662 5.75359 8.6596 5.85771C8.80257 5.96183 8.90888 6.10861 8.96324 6.27697C9.82962 8.96415 10.954 10.5395 10.2515 10.8599ZM11.3552 10.8599C10.3551 10.8599 10.9634 9.50874 10.7902 6.28074C10.7902 5.49494 12.0106 5.49683 12.0106 6.28074V9.77444C12.587 9.8517 13.8526 9.4899 13.8526 10.319C13.8451 11.1953 12.4853 10.7525 11.3552 10.8636V10.8599ZM16.8812 10.6884L15.4799 8.84166L15.2727 9.04894V10.3473C15.2727 10.4258 15.2572 10.5036 15.2271 10.5761C15.1969 10.6485 15.1528 10.7144 15.0971 10.7697C15.0414 10.8251 14.9754 10.8688 14.9027 10.8985C14.8301 10.9282 14.7523 10.9433 14.6738 10.9428C13.636 10.9428 14.2576 9.44656 14.0768 6.28451C14.0778 6.12674 14.1411 5.97576 14.253 5.86455C14.3648 5.75334 14.5161 5.69092 14.6738 5.69092C15.576 5.69092 15.1861 6.96855 15.2709 7.56214C16.9659 5.94343 16.9226 5.77195 17.2711 5.77195C17.7513 5.77195 18.0451 6.36931 17.725 6.68589L16.3632 8.0389L17.8342 9.97607C18.3145 10.6036 17.3558 11.3215 16.8812 10.6922V10.6884ZM7.57139 8.85862H8.7636L8.16844 7.17395L7.57139 8.85862ZM8.16844 7.17395L7.57139 8.85862H8.7636L8.16844 7.17395ZM8.16844 7.17395L7.57139 8.85862H8.7636L8.16844 7.17395Z",fill:"#371C1D"})),ti=i=>t.createElement("svg",{width:23,height:22,viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...i},t.createElement("rect",{width:23,height:22,fill:"url(#pattern0_4_112)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern0_4_112",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image0_4_112",transform:"matrix(0.00466596 0 0 0.00487805 -0.00625663 0)"})),t.createElement("image",{id:"image0_4_112",width:217,height:205,xlinkHref:"data:image/png;base64,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"}))),ni=i=>t.createElement("svg",{width:19,height:19,viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...i},t.createElement("rect",{width:19,height:19,fill:"url(#pattern0_4_111)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern0_4_111",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image0_4_111",transform:"translate(0 -0.0112613) scale(0.0045045)"})),t.createElement("image",{id:"image0_4_111",width:222,height:227,xlinkHref:"data:image/png;base64,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"}))),si=i=>t.createElement("svg",{width:26,height:18,viewBox:"0 0 26 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("rect",{x:1.75,y:.75,width:22.5,height:16.5,rx:2.25,fill:"white",stroke:"#1E9EFF",strokeWidth:1.5}),t.createElement("path",{d:"M1 3L12.7333 10L25 3",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M2 15L10 8.5L12.5 10L15.5 8.5L24 15",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),ai=()=>{const i=U();return e.jsxs(ei,{children:[e.jsxs(H,{className:"kakao",children:[e.jsx("span",{className:"icon",children:e.jsx(ii,{})}),e.jsx("span",{children:"카카오 계정으로 가입하기"})]}),e.jsxs(H,{className:"naver",children:[e.jsx("span",{className:"icon",children:e.jsx(ti,{})}),e.jsx("span",{children:"네이버 계정으로 가입하기"})]}),e.jsxs(H,{className:"gmail",children:[e.jsx("span",{className:"icon",children:e.jsx(ni,{})}),e.jsx("span",{children:"구글 계정으로 가입하기"})]}),e.jsxs(H,{onClick:()=>{i("/join/form")},className:"mail",children:[e.jsx("span",{className:"icon",children:e.jsx(si,{})}),e.jsx("span",{children:"이메일 계정으로 가입하기"})]}),e.jsx(H,{onClick:()=>{i("/login")},className:"login",children:e.jsx("span",{children:"이미 회원이신가요?"})})]})},li=n.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  & label {
    color: #fff;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & input {
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 50rem;
    padding: 15px;
    color: #fff;
    font-size: 16px;
  }
  & input::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`,ri=n.input`
  width: 100%;
  padding: 15px 16px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d6deeb;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  &::placeholder {
    color: #738096;
    font-size: 14px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`,di=n.div`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 18px;
    @media (max-width: 1024px) {
      width: 100%;
      font-size: 16px;
    }
  }
  & input {
    width: 412px;
    margin-top: 15px;
    padding: 15px 20px;
    font-size: 16px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #fff;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      width: 100%;
      padding: 15px;
    }
    &::placeholder {
      color: #fff;
      font-size: 16px;
    }
  }
  & input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`,oi=n.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .input_area .input {
    color: #fff;
    width: 100%;
    padding: 10px 15px;
    display: block;
    font-size: 24px;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`,Y=({label:i,type:s,id:l,placeholder:a,register:d})=>e.jsxs(li,{children:[e.jsx("label",{children:i}),e.jsx("input",{type:s,id:l,...d&&d(l),placeholder:a,autoComplete:"off"})]}),E=({type:i,id:s,register:l,placeholder:a})=>e.jsx(ri,{type:i,id:s,...l&&l(s),placeholder:a,autoComplete:"off"}),_=({label:i,type:s,id:l,placeholder:a})=>e.jsxs(di,{children:[e.jsx("label",{htmlFor:l,children:i}),e.jsx("input",{type:s,id:l,placeholder:a,autoComplete:"off"})]}),A=({label:i,type:s,id:l,required:a})=>e.jsxs(oi,{children:[e.jsxs("label",{htmlFor:l,className:"label",children:[e.jsx("span",{className:"txt",children:i}),a&&e.jsx("span",{className:"req",children:" *"})]}),e.jsx("div",{className:"input_area",children:e.jsx("input",{type:s,id:l,autoComplete:"off",className:"input"})})]}),pi=n.div`
  width: 100%;
  & input {
    display: none;
  }
  & label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #738096;
    font-size: 14px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #d6deeb;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & input[type="radio"]:checked ~ label {
    background-color: #235ef3;
    border: 1px solid #235ef3;
    color: #fff;
  }
`,xi=n.div`
  width: 100%;
  & input {
    display: none;
  }
  & label {
    position: relative;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    padding-left: 25px;
  }
  & input[type="radio"]:checked ~ label {
    color: #fff;
  }
  & label::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50rem;
    border: 2px solid #fff;
  }
  & input[type="radio"]:checked ~ label::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50rem;
    background-color: #fff;
  }
`,w1=({label:i,id:s,name:l,register:a})=>e.jsxs(pi,{children:[e.jsx("input",{type:"radio",id:s,value:s,...a&&a(l)}),e.jsx("label",{htmlFor:s,children:i})]}),u=({label:i,id:s,name:l,register:a,defaultChecked:d})=>e.jsxs(xi,{children:[e.jsx("input",{type:"radio",id:s,value:s,name:l,...a&&a(l),defaultChecked:d}),e.jsx("label",{htmlFor:s,children:i})]}),ci=n.div`
  & input {
    display: none;
  }
  & label {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    line-height: 1.4;
    & .req {
      color: rgba(255, 0, 0, 1);
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & label::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 0.5px solid #fff;
    border-radius: 3px;
  }
  & input[type="checkbox"]:checked ~ label::before {
    background-image: url("./chk.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
  }
`,hi=n.div`
  & input {
    display: none;
  }
  & label {
    position: relative;
    padding-left: 24px;
    font-size: 14px;
    cursor: pointer;
    color: #738096;
    line-height: 1.4;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & label::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    background-image: url("./round_chk.svg");
    background-size: cover;
  }
  & input[type="checkbox"]:checked ~ label::before {
    background-image: url("./round_chk_on.svg");
  }
`,j=({label:i,id:s,register:l,required:a})=>e.jsxs(ci,{className:"InputCheckboxA",children:[e.jsx("input",{type:"checkbox",id:s,...l&&l(s)}),e.jsxs("label",{htmlFor:s,children:[i,a&&e.jsx("span",{className:"req",children:" *"})]})]}),v=({label:i,id:s,register:l,onChange:a})=>e.jsxs(hi,{children:[e.jsx("input",{type:"checkbox",id:s,...l&&l(s),onChange:a,value:i}),e.jsx("label",{htmlFor:s,children:i})]}),mi=n.div`
  pointer-events: all;
  width: 100%;
  position: relative;
`,gi=n.div`
  width: 100%;
  padding: 15px 16px;
  background-color: #fff;
  position: relative;
  font-size: 14px;
  color: #738096;
  border-radius: ${i=>i.$isOn?"4px 4px 0 0":"4px"};
  border: 1px solid #d6deeb;
  border-bottom: ${i=>i.$isOn&&"1px solid #fff;"};
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  & > span {
    position: absolute;
    display: block;
    right: 10px;
    top: 50%;
    transform: translateY(-50%)
      rotate(${i=>i.$isOn?"180deg":"0"});
    width: 14px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,fi=n.div`
  display: ${i=>i.$isOn?"block":"none"};
  width: 100%;
  position: absolute;
  top: 45px;
  z-index: 5;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  padding: 10px 14px 25px;
  border: 1px solid #dddddd;
  border-top: none;
`;n.li`
  font-size: 13px;
  padding: 5px 9px 6px;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: -0.001em;
`;const wi=n.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .select_box {
    position: relative;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  & .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 10px 20px 10px 15px;
    & .icon {
      width: 18px;
      height: 9px;
      opacity: 0.5;
      transform: rotate(${i=>i.$isOn?"180deg":"0deg"});
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .option_box {
    display: ${i=>i.$isOn?"block":"none"};
    padding: 26px 17px;
    position: absolute;
    width: 100%;
    background-color: rgba(18, 18, 18, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    z-index: 5;
  }
  & .option {
    cursor: pointer;
    padding: 10px 0;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`,ji=n.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .select_box {
    position: relative;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  & .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 10px 15px;
    & .icon {
      width: 18px;
      height: 9px;
      opacity: 0.5;
      transform: rotate(${i=>i.$isOn?"180deg":"0deg"});
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .option_box {
    display: ${i=>i.$isOn?"block":"none"};
    padding: 26px 17px;
    position: absolute;
    width: 100%;
    background-color: rgba(18, 18, 18, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    z-index: 5;
  }
  & .option {
    cursor: pointer;
    padding: 10px 0;
  }
`,ui=i=>t.createElement("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M13 1L7 7L1 0.999999",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})),B=i=>t.createElement("svg",{width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M1 1L6 6L11 1",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),bi=({text:i,children:s})=>{const[l,a]=t.useState(!1),d=()=>{a(o=>!o)};return e.jsxs(mi,{children:[e.jsxs(gi,{onClick:d,$isOn:l,children:[i,e.jsx("span",{children:e.jsx(ui,{})})]}),e.jsx(fi,{$isOn:l,children:s})]})},j1=({label:i,required:s,optionList:l,setState:a})=>{const[d,o]=t.useState(!1),[p,x]=t.useState(l[0]),c=t.useRef(null),f=()=>{o(g=>!g)},h=g=>{x(g),o(!1),a&&a(g)},m=g=>{c.current&&!c.current.contains(g.target)&&o(!1)};return t.useEffect(()=>(document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[]),e.jsxs(wi,{ref:c,$isOn:d,children:[e.jsxs("p",{className:"label",children:[e.jsx("span",{className:"txt",children:i}),s&&e.jsx("span",{className:"req",children:" *"})]}),e.jsxs("div",{className:"select_box",children:[e.jsxs("div",{onClick:f,className:"select",children:[e.jsx("span",{children:p}),e.jsx("span",{className:"icon",children:e.jsx(B,{})})]}),e.jsx("ul",{className:"option_box",children:l.map((g,S)=>e.jsx("li",{onClick:()=>h(g),className:"option",children:g},S))})]})]})},Ci=({label:i,required:s,optionList:l,children:a})=>{const[d,o]=t.useState(!1),p=t.useRef(null),x=()=>{o(f=>!f)},c=f=>{p.current&&!p.current.contains(f.target)&&o(!1)};return t.useEffect(()=>(document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}),[]),e.jsxs(ji,{ref:p,$isOn:d,children:[e.jsxs("p",{className:"label",children:[e.jsx("span",{className:"txt",children:i}),s&&e.jsx("span",{className:"req",children:" *"})]}),e.jsxs("div",{className:"select_box",children:[e.jsxs("div",{onClick:x,className:"select",children:[e.jsx("div",{children:l.map((f,h)=>e.jsxs("span",{children:[f,"/"]},h))}),e.jsx("span",{className:"icon",children:e.jsx(B,{})})]}),e.jsx("div",{className:"option_box",children:a})]})]})},vi=n.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,yi=n.li`
  position: relative;
  padding: 5px 10px;
  font-size: 14px;
  color: #1e9eff;
  background-color: #fff;
  font-weight: 500;
  border-radius: 4px;
  display: flex;
  align-items: center;
  & .close_btn {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    cursor: pointer;
    & svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  & .label {
    display: block;
    padding-left: 16px;
  }
`,ki=i=>t.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M1.34375 1L6.95181 7",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M6.95117 1L1.34311 7",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),M1=({hashList:i,onClick:s})=>e.jsx(vi,{children:i.map((l,a)=>e.jsxs(yi,{children:[e.jsx("span",{onClick:()=>s(l.id),className:"close_btn",children:e.jsx(ki,{})}),e.jsx("span",{className:"label",children:l.label})]},a))}),Ni=n.div`
  padding: 94px 0 57px;
  background-color: #0b0c37;
  @media (max-width: 400px) {
    padding: 50px 16px 40px;
  }
`,Hi=n.form`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 400px) {
    width: 100%;
  }
`,L=n.div`
  width: 100%;
  display: flex;
  column-gap: 7px;
  & > div {
    width: 100%;
  }
  &.password {
    flex-direction: column;
    & > input:first-child {
      border-radius: 4px 4px 0 0;
      border-bottom: none;
    }
    & > input:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`,Ei=n.div`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  & > div:last-child label {
    border-left: none !important;
  }
`,Li=n.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 23px;
  & > div {
    width: 50%;
  }
  & > div label {
    font-size: 16px;
    font-weight: 600;
  }
`,Mi=n.div`
  background-color: #fff;
  border-radius: 2px;
  & > div {
    padding: 14px 16px;
  }
  & > div:first-child {
    border-bottom: 1px solid #d6deeb;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > div {
      padding-left: 16px;
    }
    & > div:last-child {
      padding-left: 0;
    }
  }
  & .required_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .link {
      position: relative;
      font-size: 12px;
      color: #9b9b9b;
      padding-right: 10px;
    }
    & .link::after {
      content: "";
      position: absolute;
      width: 5px;
      height: 9px;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background-size: cover;
      background-image: url("./link_arrow.svg");
    }
  }
`,Vi=n.button`
  font-size: 16px;
  color: #fff;
  width: 100%;
  background-color: #1f8ce6;
  border: 1px solid #0077d9;
  padding: 10px 0;
  border-radius: 2px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,zi=[{id:"field_01",label:"농축산/식음료"},{id:"field_02",label:"뷰티/화장품"},{id:"field_03",label:"에너지/환경"},{id:"field_04",label:"금융/부동산"},{id:"field_05",label:"섬유/의류"},{id:"field_06",label:"교육"},{id:"field_07",label:"금속/기계"},{id:"field_08",label:"임신/출산/육아"},{id:"field_09",label:"보건/의료"},{id:"field_10",label:"웨딩"},{id:"field_11",label:"건설/건축"},{id:"field_12",label:"문화/예술"},{id:"field_13",label:"가정용품"},{id:"field_14",label:"레저/관광"}],V1={favoriteList:zi},Zi=X({email:b().email({message:"올바른 이메일을 입력해주세요."}),password:b().trim().regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/," 영문,숫자조합 8자리 이상 입력해주세요."),passwordChk:b().trim().min(1,"비밀번호를 확인해주세요."),name:b(),birth:D1.number().gte(8),gender:b(),agree_01:Y1(!0)}).superRefine(({passwordChk:i,password:s},l)=>{i!==s&&l.addIssue({code:J1.custom,message:"비밀번호를 확인해주세요.",path:["passwordChk"]})}),Si=()=>{var h,m,g,S,n1,s1,a1,l1,r1,d1,o1,p1,x1,c1,h1;const[i,s]=t.useState([]),l=w=>{w.currentTarget.checked?(o("agree_01",!0),o("agree_02",!0),o("agree_03",!0),o("agree_04",!0),o("agree_05",!0)):(o("agree_01",!1),o("agree_02",!1),o("agree_03",!1),o("agree_04",!1),o("agree_05",!1))},{register:a,handleSubmit:d,setValue:o,formState:{errors:p}}=Q({resolver:G(Zi)}),x=d(w=>console.log(w)),c=w=>{const P=w.currentTarget.value,T=w.currentTarget.id;w.currentTarget.checked?s(W=>[...W,{id:T,label:P}]):s(W=>W.filter(A1=>console.log(A1)))},f=w=>{o(w,!1),s(P=>P.filter(T=>T.id!==w))};return e.jsx(Ni,{children:e.jsxs(Hi,{onSubmit:x,children:[e.jsx(L,{children:e.jsx(E,{type:"text",id:"email",register:a,placeholder:"이메일(ID)"})}),((h=p.email)==null?void 0:h.message)&&e.jsx("p",{className:"err_msg",children:(g=(m=p.email)==null?void 0:m.message)==null?void 0:g.toString()}),e.jsxs(L,{className:"password",children:[e.jsx(E,{type:"password",id:"password",register:a,placeholder:"비밀번호"}),e.jsx(E,{type:"password",id:"passwordChk",register:a,placeholder:"비밀번호 확인"})]}),((S=p.password)==null?void 0:S.message)&&e.jsx("p",{className:"err_msg",children:(s1=(n1=p.password)==null?void 0:n1.message)==null?void 0:s1.toString()}),((a1=p.passwordChk)==null?void 0:a1.message)&&e.jsx("p",{className:"err_msg",children:(r1=(l1=p.passwordChk)==null?void 0:l1.message)==null?void 0:r1.toString()}),e.jsx(L,{children:e.jsx(E,{type:"text",id:"name",register:a,placeholder:"이름"})}),((d1=p.name)==null?void 0:d1.message)&&e.jsx("p",{className:"err_msg",children:(p1=(o1=p.name)==null?void 0:o1.message)==null?void 0:p1.toString()}),e.jsxs(L,{children:[e.jsx(E,{type:"number",id:"birth",register:a,placeholder:"생년월일"}),e.jsxs(Ei,{children:[e.jsx(w1,{id:"man",label:"남",name:"gender",register:a}),e.jsx(w1,{id:"woman",label:"여",name:"gender",register:a})]})]}),((x1=p.name)==null?void 0:x1.message)&&e.jsx("p",{className:"err_msg",children:(h1=(c1=p.name)==null?void 0:c1.message)==null?void 0:h1.toString()}),e.jsx(L,{children:e.jsx(bi,{text:"관심 분야",children:e.jsx(Li,{children:V1.favoriteList.map(w=>e.jsx(v,{label:w.label,id:w.id,register:a,onChange:c},w.id))})})}),i.length>=1&&e.jsx(M1,{hashList:i,onClick:f}),e.jsxs(Mi,{children:[e.jsx(v,{label:"선택 포함 전체 약관 동의",id:"allChk",register:a,onChange:l}),e.jsxs("div",{children:[e.jsxs("div",{className:"required_box",children:[e.jsx(v,{label:"이용약관 동의 (필수)",id:"agree_01",register:a}),e.jsx("p",{className:"link",children:e.jsx(r,{to:"/terms-service",target:"blank_",children:"약관 보기"})})]}),e.jsx(v,{label:"이벤트 혜택 알림 수신 동의 (선택)",id:"agree_02",register:a}),e.jsxs("div",{className:"required_box",children:[e.jsx(v,{label:"성별, 생년 정보 제공 동의 (필수)",id:"agree_03",register:a}),e.jsx("p",{className:"link",children:e.jsx(r,{to:"/gender-birth-information",target:"blank_",children:"내용 확인"})})]}),e.jsxs("div",{className:"required_box",children:[e.jsx(v,{label:"개인 정보 수집 및 이용 동의 (필수)",id:"agree_04",register:a}),e.jsx("p",{className:"link",children:e.jsx(r,{to:"/personal-information",target:"blank_",children:"내용 확인"})})]})]})]}),e.jsx(Vi,{className:"btn",children:"회원가입"})]})})},Ri=n.div`
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`,Ai=n.div`
  padding: 64px 0 47px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  padding-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  & h2 {
    font-weight: 700;
    padding-bottom: 44px;
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
  }
  & span {
    font-weight: 500;
  }
`,Bi=n.form`
  width: 384px;
  margin: 0 auto;
  & > .input_box {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 10px;
  }
  & > .login_stay {
    padding: 20px 0 15px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`,Ii=n.button`
  background-color: #fff;
  font-size: 16px;
  width: 100%;
  border-radius: 50rem;
  color: #09338c;
  font-weight: 700;
  padding: 15px 0;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,Oi=n.div`
  padding: 15px 0 25px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,Fi=n.div`
  & h3 {
    text-align: center;
    color: #fff;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .btn_area {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    gap: 25px;
  }
`,Pi=n.p`
  padding: 120px 0 40px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,Ti=i=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...i},t.createElement("circle",{cx:24,cy:24,r:24,fill:"white"}),t.createElement("rect",{x:15,y:16,width:19,height:19,fill:"url(#pattern0_730_62530)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern0_730_62530",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image0_730_62530",transform:"translate(0 -0.0112613) scale(0.0045045)"})),t.createElement("image",{id:"image0_730_62530",width:222,height:227,xlinkHref:"data:image/png;base64,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"}))),Wi=i=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",...i},t.createElement("circle",{cx:24,cy:24,r:24,fill:"#00C73C"}),t.createElement("rect",{x:13,y:13,width:23,height:22,fill:"url(#pattern0_730_62531)"}),t.createElement("defs",null,t.createElement("pattern",{id:"pattern0_730_62531",patternContentUnits:"objectBoundingBox",width:1,height:1},t.createElement("use",{xlinkHref:"#image0_730_62531",transform:"matrix(0.00466596 0 0 0.00487805 -0.00625663 0)"})),t.createElement("image",{id:"image0_730_62531",width:217,height:205,xlinkHref:"data:image/png;base64,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"}))),_i=i=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("circle",{cx:24,cy:24,r:24,fill:"#FEE500"}),t.createElement("path",{d:"M22.1684 23.174L21.5714 24.8586H22.7636L22.1684 23.174ZM22.1684 23.174L21.5714 24.8586H22.7636L22.1684 23.174ZM24.3589 16C18.6389 16 14 19.6331 14 24.118C14 27.0163 15.938 29.5602 18.8555 30.9943C17.4071 35.9597 16.5558 36.2838 22.5188 32.1061C23.1284 32.192 23.7432 32.2348 24.3589 32.2342C30.0788 32.2342 34.7177 28.5992 34.7177 24.1162C34.7177 19.6331 30.0788 16 24.3589 16ZM18.6314 26.9503C17.5974 26.9503 18.2076 25.52 18.0343 22.8555C17.6576 22.7914 16.5144 23.1118 16.5144 22.2732C16.5154 22.1186 16.5776 21.9707 16.6874 21.8619C16.7972 21.7531 16.9456 21.6923 17.1001 21.6928C19.2736 21.8492 20.7464 21.2877 20.7464 22.2732C20.7464 23.1268 19.6465 22.7839 19.2284 22.8555C19.0551 25.5106 19.6635 26.9503 18.6314 26.9503ZM24.2515 26.8599C23.323 27.282 23.3004 26.3303 23.0781 25.9177H21.2569C21.0327 26.3398 21.0139 27.2895 20.0835 26.8599C19.3847 26.5395 20.5223 24.9133 21.3717 22.277C21.4261 22.1086 21.5324 21.9618 21.6754 21.8577C21.8184 21.7536 21.9907 21.6975 22.1675 21.6975C22.3443 21.6975 22.5166 21.7536 22.6596 21.8577C22.8026 21.9618 22.9089 22.1086 22.9632 22.277C23.8296 24.9641 24.954 26.5395 24.2515 26.8599ZM25.3552 26.8599C24.3551 26.8599 24.9634 25.5087 24.7902 22.2807C24.7902 21.4949 26.0106 21.4968 26.0106 22.2807V25.7744C26.587 25.8517 27.8526 25.4899 27.8526 26.319C27.8451 27.1953 26.4853 26.7525 25.3552 26.8636V26.8599ZM30.8812 26.6884L29.4799 24.8417L29.2727 25.0489V26.3473C29.2727 26.4258 29.2572 26.5036 29.2271 26.5761C29.1969 26.6485 29.1528 26.7144 29.0971 26.7697C29.0414 26.8251 28.9754 26.8688 28.9027 26.8985C28.8301 26.9282 28.7523 26.9433 28.6738 26.9428C27.636 26.9428 28.2576 25.4466 28.0768 22.2845C28.0778 22.1267 28.1411 21.9758 28.253 21.8645C28.3648 21.7533 28.5161 21.6909 28.6738 21.6909C29.576 21.6909 29.1861 22.9686 29.2709 23.5621C30.9659 21.9434 30.9226 21.772 31.2711 21.772C31.7513 21.772 32.0451 22.3693 31.725 22.6859L30.3632 24.0389L31.8342 25.9761C32.3145 26.6036 31.3558 27.3215 30.8812 26.6922V26.6884ZM21.5714 24.8586H22.7636L22.1684 23.174L21.5714 24.8586ZM22.1684 23.174L21.5714 24.8586H22.7636L22.1684 23.174ZM22.1684 23.174L21.5714 24.8586H22.7636L22.1684 23.174Z",fill:"#371C1D"})),Di=X({email:b().email({message:"이메일 또는 비밀번호를 확인해주세요."}),password:b()}),Yi=()=>{var d,o,p,x;const{register:i,handleSubmit:s,formState:{errors:l}}=Q({resolver:G(Di)}),a=s(c=>console.log(c));return e.jsxs(Ri,{children:[e.jsxs(Ai,{children:[e.jsx("h2",{children:"LOGIN"}),e.jsx("span",{children:"즐거운 만남을 시작해보세요!"})]}),e.jsxs(Bi,{onSubmit:a,children:[e.jsxs("div",{className:"input_box",children:[e.jsx(Y,{label:"이메일(ID)",type:"text",id:"email",placeholder:"이메일 입력",register:i}),e.jsx(Y,{label:"비밀번호",type:"password",id:"password",placeholder:"비밀번호 입력",register:i})]}),l.email&&e.jsx("p",{className:"err_msg",children:(o=(d=l.email)==null?void 0:d.message)==null?void 0:o.toString()}),l.password&&e.jsx("p",{className:"err_msg",children:(x=(p=l.password)==null?void 0:p.message)==null?void 0:x.toString()}),e.jsx("div",{className:"login_stay",children:e.jsx(j,{label:"로그인유지",id:"loginStayed",register:i})}),e.jsx(Ii,{children:"로그인"})]}),e.jsxs(Oi,{children:[e.jsx(r,{to:"/login/password-find",children:"비밀번호 찾기"}),"   |   ",e.jsx(r,{to:"/join",children:"회원가입"})]}),e.jsxs(Fi,{children:[e.jsx("h3",{children:"간편 로그인하기"}),e.jsxs("div",{className:"btn_area",children:[e.jsx("button",{children:e.jsx(Ti,{})}),e.jsx("button",{children:e.jsx(Wi,{})}),e.jsx("button",{children:e.jsx(_i,{})})]})]}),e.jsx(Pi,{className:"desc_btn",children:e.jsx(r,{to:"",children:"개인정보 처리방침"})})]})},Ji=n.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`,Ui=n.div`
  position: fixed;
  width: 595px;
  /* height: 181px; */
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 0 35px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border: 1px solid #ccc;
  @media (max-width: 1024px) {
    width: auto;
    right: 16px;
    left: 16px;
    transform: none;
    transform: translateY(-50%);
  }
  & .alret_header {
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    & .close_btn {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      & svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  & .desc {
    word-break: keep-all;
    padding: 25px 0 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
  & .btn_area {
    text-align: center;
    padding-bottom: 30px;
    & button {
      width: 134px;
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 10px;
      @media (max-width: 400px) {
        width: 100px;
        padding: 8px;
        font-size: 15px;
      }
    }
    & .primary {
      background-color: #09338c;
      color: #fff;
      border: 2px solid rgba(11, 12, 55, 1);
    }
  }
`,z1=i=>t.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M1 1L13 13",stroke:"#555555",strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M13 1L0.999999 13",stroke:"#555555",strokeLinecap:"round",strokeLinejoin:"round"})),Z1=({text:i,setAlret:s})=>{const l=()=>{s(!1)};return e.jsx(Ji,{children:e.jsxs(Ui,{children:[e.jsx("div",{className:"alret_header",children:e.jsx("button",{onClick:l,className:"close_btn",children:e.jsx(z1,{})})}),e.jsx("div",{className:"desc",children:i}),e.jsx("div",{className:"btn_area",children:e.jsx("button",{onClick:l,className:"primary",children:"확인"})})]})})},qi=n.div`
  width: 384px;
  margin: 0 auto 160px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 16px;
  }
`,Qi=n.div`
  padding: 130px 0 58px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 1024px) {
    padding: 64px 0 58px;
    font-size: 18px;
  }
  & h2 {
    font-weight: 700;
    padding-bottom: 44px;
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
  }
  & span {
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
  }
`,Gi=n.form`
  & input {
    margin-bottom: 12px;
  }
  & .err_msg {
    height: 20px;
  }
`,Xi=n.button`
  margin-top: 30px;
  background-color: #fff;
  font-size: 16px;
  width: 100%;
  border-radius: 50rem;
  color: #09338c;
  font-weight: 700;
  padding: 15px 0;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,Ki=X({email:b().email({message:"올바른 이메일을 입력해주세요."})}),$i=()=>{var x,c;const[i,s]=t.useState(!1),{register:l,handleSubmit:a,formState:{errors:d,isValid:o}}=Q({resolver:G(Ki)}),p=a(()=>s(!0));return console.log(o),e.jsxs(qi,{children:[e.jsxs(Qi,{children:[e.jsx("h2",{children:"비밀번호 찾기"}),e.jsx("span",{children:"가입하신 이메일로 임시 비밀번호를 전송해드립니다."})]}),e.jsxs(Gi,{onSubmit:p,children:[e.jsx(Y,{label:"이메일(ID)",type:"text",id:"email",placeholder:"이메일 입력",register:l}),e.jsx("p",{className:"err_msg",children:(c=(x=d.email)==null?void 0:x.message)==null?void 0:c.toString()}),e.jsx(Xi,{children:"임시 비밀번호 받기"})]}),i&&e.jsx(Z1,{text:"메일로 임시 비밀번호를 발송했습니다.",setAlret:s})]})},et=n.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,it=n.div`
  padding-top: 97px;
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    padding-top: 58px;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    gap: 5px;
  }

  & button {
    background-color: rgba(41, 46, 55, 1);
    color: #fff;
    font-size: 16px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .icon {
    min-width: 48px;
  }
  & .on {
    background-color: rgba(35, 94, 243, 1);
  }
`,tt=i=>t.createElement("svg",{width:8,height:14,viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.35489 0.645917C7.40146 0.692363 7.4384 0.747539 7.46361 0.808284C7.48881 0.869029 7.50179 0.93415 7.50179 0.999917C7.50179 1.06568 7.48881 1.13081 7.46361 1.19155C7.4384 1.2523 7.40146 1.30747 7.35489 1.35392L1.70789 6.99992L7.35489 12.6459C7.44878 12.7398 7.50153 12.8671 7.50153 12.9999C7.50153 13.1327 7.44878 13.26 7.35489 13.3539C7.26101 13.4478 7.13367 13.5005 7.00089 13.5005C6.86812 13.5005 6.74078 13.4478 6.64689 13.3539L0.646894 7.35392C0.60033 7.30747 0.563387 7.2523 0.538181 7.19155C0.512974 7.1308 0.5 7.06568 0.5 6.99992C0.5 6.93415 0.512974 6.86903 0.538181 6.80828C0.563387 6.74754 0.60033 6.69236 0.646894 6.64592L6.64689 0.645917C6.69334 0.599354 6.74852 0.562411 6.80926 0.537205C6.87001 0.511998 6.93513 0.499023 7.00089 0.499023C7.06666 0.499023 7.13178 0.511998 7.19253 0.537205C7.25327 0.562411 7.30845 0.599354 7.35489 0.645917Z",fill:"#EDEFF3"})),nt=i=>t.createElement("svg",{width:8,height:14,viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.646894 0.645917C0.693339 0.599354 0.748515 0.562411 0.80926 0.537205C0.870005 0.511998 0.935126 0.499023 1.00089 0.499023C1.06666 0.499023 1.13178 0.511998 1.19253 0.537205C1.25327 0.562411 1.30845 0.599354 1.35489 0.645917L7.35489 6.64592C7.40146 6.69236 7.4384 6.74754 7.46361 6.80828C7.48881 6.86903 7.50179 6.93415 7.50179 6.99992C7.50179 7.06568 7.48881 7.1308 7.46361 7.19155C7.4384 7.2523 7.40146 7.30747 7.35489 7.35392L1.35489 13.3539C1.26101 13.4478 1.13367 13.5005 1.00089 13.5005C0.868118 13.5005 0.74078 13.4478 0.646894 13.3539C0.553007 13.26 0.500262 13.1327 0.500262 12.9999C0.500262 12.8671 0.553007 12.7398 0.646894 12.6459L6.29389 6.99992L0.646894 1.35392C0.60033 1.30747 0.563387 1.2523 0.538181 1.19155C0.512974 1.13081 0.5 1.06568 0.5 0.999917C0.5 0.93415 0.512974 0.869029 0.538181 0.808284C0.563387 0.747539 0.60033 0.692363 0.646894 0.645917Z",fill:"#EDEFF3"})),Z=()=>e.jsxs(it,{className:"pagination",children:[e.jsx("button",{className:"icon",children:e.jsx(tt,{})}),e.jsx("button",{className:"on",children:"1"}),e.jsx("button",{children:"2"}),e.jsx("button",{children:"3"}),e.jsx("button",{children:"4"}),e.jsx("button",{className:"icon",children:e.jsx(nt,{})})]}),st=n.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: rgba(41, 46, 55, 0.5);
  align-items: center;
  border-radius: 20px;
  padding: 37px 33px;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 16px;
  }
`,at=n.figure`
  width: 100%;
  max-width: 437px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 437 / 246;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  & a {
    display: block;
    width: 100%;
    height: 100%;
  }
  & img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .blind {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }
`,lt=n.div`
  width: 100%;
  padding-left: 45px;
  padding-right: 400px;
  align-items: center;
  @media (max-width: 1720px) {
    padding-left: 20px;
    padding-right: 260px;
  }
  @media (max-width: 1600px) {
    padding-right: 210px;
  }
  @media (max-width: 1400px) {
    padding-right: 0px;
  }
  @media (max-width: 1024px) {
    padding-left: 0;
    padding-top: 15px;
  }
`,rt=n.div`
  & .apply {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 22px;
    @media (max-width: 1024px) {
      justify-content: space-between;
      margin-bottom: 12px;
    }
    & .state {
      min-width: 130px;
      text-align: center;
      padding: 12px 10px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      font-weight: 700;
      @media (max-width: 1024px) {
        min-width: 100px;
        font-size: 13px;
        padding: 8px 16px;
      }
    }
    & .date {
      color: #6c757d;
      font-size: 16px;
      @media (max-width: 1024px) {
        font-size: 13px;
      }
    }
  }

  & .txt_box {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    & .title {
      margin: 0 0 10px;
      font-size: 28px;
      color: #fff;
      font-weight: 700;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
    & .date,
    & .location {
      color: #b0b8c1;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`,dt=n.div`
  position: absolute;
  right: 27px;
  bottom: 27px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    position: static;
    padding: 4px 0 20px;
    justify-content: flex-end;
  }
  & > button {
    font-weight: 500;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
  }
`,ot=n.div`
  position: absolute;
  right: 152px;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 1720px) {
    right: 70px;
  }
  @media (max-width: 1600px) {
    right: 27px;
  }
  @media (max-width: 1400px) {
    position: static;
    position: static;
    transform: translateY(0);
  }
  & a {
    display: block;
    min-width: 277px;
    padding: 32px 10px;
    background-color: #fff;
    color: #235ef3;
    font-weight: 700;
    font-size: 24px;
    border-radius: 10px;
    text-align: center;
    @media (max-width: 1720px) {
      min-width: 210px;
    }
    @media (max-width: 1600px) {
      margin-top: 10px;
      min-width: 277px;
      min-width: 200px;
      /* padding: 15px 10px; */
    }
    @media (max-width: 1400px) {
      padding: 15px 10px;
    }
    @media (max-width: 1024px) {
      margin-top: 0;
      min-width: auto;
      padding: 15px 10px;
      width: 100%;
      font-size: 20px;
    }
  }
`,pt=n.div`
  position: absolute;
  top: 37px;
  right: 37px;
  @media (max-width: 1024px) {
    top: 22px;
    right: 22px;
  }
  & button {
    width: 55px;
    height: 55px;
    background-color: rgba(59, 64, 72, 1);
    border-radius: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      width: 22px;
      height: 22px;
    }
  }
`,xt=n.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`,ct=n.div`
  position: fixed;
  width: 595px;
  /* height: 181px; */
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 0 35px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border: 1px solid #ccc;
  @media (max-width: 1024px) {
    width: auto;
    right: 16px;
    left: 16px;
    transform: none;
    transform: translateY(-50%);
  }
  & .alret_header {
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    & .close_btn {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      & svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  & .desc {
    word-break: keep-all;
    padding: 25px 0 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
  & .btn_area {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding-bottom: 30px;
    & button {
      width: 134px;
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 10px;

      @media (max-width: 400px) {
        width: 100px;
        padding: 8px;
        font-size: 15px;
      }
    }
    & .secondary {
      border: 2px solid rgba(9, 51, 140, 1);
    }
    & .primary {
      background-color: #09338c;
      color: #fff;
      border: 2px solid rgba(11, 12, 55, 1);
    }
  }
`,ht=({text:i,setConfirm:s,setShowConfirm:l})=>{const[a,d]=t.useState(!1),o=()=>{s(!1),l(!1)},p=()=>{s(!0),d(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(xt,{children:e.jsxs(ct,{children:[e.jsx("div",{className:"alret_header",children:e.jsx("button",{onClick:o,className:"close_btn",children:e.jsx(z1,{})})}),e.jsx("div",{className:"desc",children:i}),e.jsxs("div",{className:"btn_area",children:[e.jsx("button",{onClick:o,className:"secondary",children:"닫기"}),e.jsx("button",{onClick:p,className:"primary",children:"취소하기"})]})]})}),a&&e.jsx(Z1,{text:"취소가 완료되었습니다.",setAlret:l})]})},mt=({applyDate:i,state:s,title:l,date:a,location:d,linkBtn:o})=>{const[p,x]=t.useState(""),[c,f]=t.useState(!1),[h,m]=t.useState(!1);return t.useLayoutEffect(()=>{s==="apply"?x("참가 신청 완료"):s==="cancel"?x("취소 완료"):s==="wish"?x("관심 행사"):s==="past"&&x("종료 행사")},[]),e.jsxs(e.Fragment,{children:[e.jsxs(st,{children:[e.jsx(at,{children:e.jsxs(r,{to:"/detail/01",children:[(s==="cancel"||s==="past")&&e.jsx("span",{className:"blind",children:p}),e.jsx("img",{src:"./dummy_image_01.png"})]})}),e.jsxs(lt,{children:[e.jsxs(rt,{children:[(s==="apply"||s==="cancel")&&e.jsxs("div",{className:"apply",children:[e.jsx("span",{className:"state",children:p}),e.jsxs("span",{className:"date",children:["신청일 : ",i]})]}),e.jsxs("div",{className:"txt_box",children:[e.jsx("span",{className:"title",children:l}),e.jsx("span",{className:"date",children:a}),e.jsx("span",{className:"location",children:d})]})]}),s==="apply"&&e.jsxs(dt,{children:[e.jsx("button",{children:"수정"}),"  |  ",e.jsx("button",{onClick:()=>{m(!0)},children:"취소"})]}),o&&e.jsxs(ot,{children:[o==="AI 추천 부스 받기"&&e.jsx(r,{to:"/mypage/apply-list/booth-select/01",children:o}),o==="AI 추천 부스 확인"&&e.jsx(r,{to:"/mypage/apply-list/booth-check/01",children:o})]}),p.length<=0&&e.jsx(pt,{children:e.jsx("button",{children:e.jsx(E1,{})})})]})]}),h&&e.jsx(ht,{text:"취소하시겠습니까? 취소 확정 후에는 복구하실 수 없습니다.",setConfirm:f,setShowConfirm:m})]})},gt=n.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
`,F=({list:i})=>e.jsx(gt,{children:i.map(s=>e.jsx(mt,{state:s.state,applyDate:s.applyDate,title:s.title,date:s.date,location:s.location,linkBtn:s.linkBtn},s.id))}),ft=[{id:"0",state:"apply",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장",linkBtn:"AI 추천 부스 받기"},{id:"1",state:"apply",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"2",state:"apply",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장",linkBtn:"행사 접속하기"},{id:"3",state:"apply",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장",linkBtn:"AI 추천 부스 확인"}],wt=()=>e.jsxs(et,{children:[e.jsx(F,{list:ft}),e.jsx(Z,{})]}),jt=n.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,ut=[{id:"0",state:"cancel",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"1",state:"cancel",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"2",state:"cancel",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"3",state:"cancel",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"}],bt=()=>e.jsxs(jt,{children:[e.jsx(F,{list:ut}),e.jsx(Z,{})]}),Ct=n.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,vt=[{id:"0",state:"",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"1",state:"",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"2",state:"",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"3",state:"",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"}],yt=()=>e.jsxs(Ct,{children:[e.jsx(F,{list:vt}),e.jsx(Z,{})]}),kt=n.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,Nt=[{id:"0",state:"past",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"1",state:"past",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"2",state:"past",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"},{id:"3",state:"past",applyDate:"2024.08.24",title:"2024 케이펫페어",date:"2024/08/24 ~ 2024/08/24",location:"SETEC 제1전시장"}],Ht=()=>e.jsxs(kt,{children:[e.jsx(F,{list:Nt}),e.jsx(Z,{})]}),Et=n.div`
  position: relative;
  padding: 50px 20px 86px 140px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding: 24px 14px 40px;
    margin-bottom: 80px;
  }
`,Lt=n.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  & > div {
    display: flex;
    align-items: center;
    font-weight: 500;
    flex-wrap: wrap;
    & .label {
      min-width: 120px;
      font-size: 18px;
      @media (max-width: 1024px) {
        font-size: 14px;
        min-width: 90px;
      }
      @media (max-width: 400px) {
        font-size: 14px;
        min-width: 70px;
      }
    }
    & .info {
      font-size: 16px;
    }
  }
`,Mt=n.form`
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 40px;
  }
  & .radio_box {
    display: flex;
    align-items: center;
    & .label {
      min-width: 120px;
      font-size: 18px;
      @media (max-width: 1024px) {
        gap: 16px;
      }
    }
    & > div {
      width: auto;
      margin-right: 35px;
      & > label {
        color: #fff;
        padding-left: 30px;
      }
    }
  }
  & .favorite_box {
    & .label {
      font-weight: 700;
      padding-bottom: 23px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
    & .favorite_list {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
      @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      & > div {
        min-width: 170px;
        @media (max-width: 1024px) {
          min-width: auto;
        }
      }
    }
  }
`,Vt=n.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  gap: 40px;
  @media (max-width: 1024px) {
    padding-top: 50px;
  }
  & .submit_btn {
    position: absolute;
    bottom: 67px;
    right: 54px;
    background-color: rgba(35, 94, 243, 1);
    border: 1px solid rgba(11, 12, 55, 1);
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    padding: 15px 55px;
    @media (max-width: 1024px) {
      position: static;
      width: 100%;
      padding: 15px 10px;
    }
  }
  & a {
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`,zt=()=>e.jsxs(Et,{children:[e.jsxs(Lt,{children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"이름"}),e.jsx("span",{className:"info",children:"김고은"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"이메일(ID)"}),e.jsx("span",{className:"info",children:"abcd@mindsground.com"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"기업명"}),e.jsx("span",{className:"info",children:"마인즈그라운드"})]})]}),e.jsxs(Mt,{children:[e.jsx(_,{label:"전화번호",type:"tel",id:"phone",placeholder:"전화번호를 입력하세요"}),e.jsx(_,{label:"비밀번호 변경",type:"password",id:"changePassword",placeholder:"비밀번호를 입력하세요"}),e.jsxs("div",{className:"radio_box",children:[e.jsx("p",{className:"label",children:"성별"}),e.jsx(u,{label:"남",id:"man",name:"gender",defaultChecked:!0}),e.jsx(u,{label:"여",id:"woman",name:"gender"})]}),e.jsx(_,{label:"생년월일",type:"date",id:"birth",placeholder:"생년월일을 입력하세요"}),e.jsxs("div",{className:"favorite_box",children:[e.jsx("p",{className:"label",children:"관심분야"}),e.jsx("div",{className:"favorite_list",children:V1.favoriteList.map(i=>e.jsx(j,{label:i.label,id:i.id},i.id))})]}),e.jsxs(Vt,{children:[e.jsx("button",{className:"submit_btn",children:"저장"}),e.jsx(r,{to:"/mypage/user-modify/with-draw",children:"마이스 메이트 탈퇴하기"})]})]})]}),Zt=n.div`
  padding: 20px 0 0;
  position: relative;
`,St=n.div`
  background-color: #121212;
  border-radius: 10px;
`,Rt=n.div`
  position: relative;
  padding: 60px 40px 0;
  @media (max-width: 1024px) {
    padding: 24px 16px 0;
  }
  & > h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 40px;
    @media (max-width: 1024px) {
      font-size: 18px;
      padding-bottom: 25px;
    }
  }
`,At=n.div`
  padding-bottom: 50px;
  display: flex;
  @media (max-width: 1024px) {
    padding-bottom: 35px;
  }
  & .filter_btn {
    margin-right: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 5px 15px;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    border-radius: 6px;
    border: 1px solid #e6e6e6;
    border: 1px solid ${i=>i.$filterOn?"#235EF3":"#e6e6e6"};
    background-color: ${i=>i.$filterOn&&"#235EF3"};
    @media (max-width: 1024px) {
      position: absolute;
      top: 20px;
      right: 16px;
      margin-right: 0;
      gap: 10px;
      font-size: 13px;
      & svg {
        width: 13px;
      }
    }
  }
  /* HashBox */
  & > ul {
    gap: 16px;
    @media (max-width: 1024px) {
      gap: 12px;
    }
    & > li {
      font-size: 22px;
      @media (max-width: 1024px) {
        font-size: 16px;
        padding: 11px 12px;
      }
      & .close_btn {
        width: 13px;
        height: 13px;
      }
      & .label {
        padding-left: 25px;
      }
    }
  }
`,Bt=n.div`
  position: absolute;
  left: 0;
  top: 196px;
  width: 340px;
  padding: 35px 30px;
  background-color: #000000;
  border: 1px solid #292e37;
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 30px 16px;
    border: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    overflow-y: scroll;
  }
  & .title_area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .title {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
    & .reset_btn {
      font-size: 14px;
      font-weight: 700;
      color: #b0b8c1;
      cursor: pointer;
    }
  }

  & .radio_box {
    padding-top: 34px;
    & .type {
      display: block;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding-bottom: 36px;
    }
    & .radio_list {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
  }
  & .btn_box {
    display: flex;
    padding-top: 40px;
    @media (max-width: 1024px) {
      padding-top: 50px;
    }
    & button {
      margin-left: auto;
      border-radius: 10px;
      padding: 11px 50px;
      background-color: #235ef3;
      color: #fff;
      font-weight: 600;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`,It=n.div`
  padding: 0 60px 80px;
  display: grid;
  column-gap: 24px;
  row-gap: 80px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1650px) {
    padding: 0 30px 80px;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px 80px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
`,Ot=n.ul`
  display: flex;
  justify-content: space-around;
`;n.div`
  & .swiper-slide {
    /* width: auto !important; */
  }
`;const Ft=n.li`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 30px 0;
  @media (max-width: 1024px) {
    padding: 16px 0;
  }
`,Pt=({categoryList:i})=>e.jsx(Ot,{className:"maxframe",children:e.jsx(I,{slidesPerView:2.5,centeredSlides:!1,spaceBetween:3,loop:!1,touchRatio:1,breakpoints:{1400:{slidesPerView:14,touchRatio:0},800:{slidesPerView:6.5,touchRatio:1},500:{slidesPerView:4.5,touchRatio:1},400:{slidesPerView:3.5,touchRatio:1}},className:"category_swiper",children:i.map(s=>e.jsx(O,{children:e.jsx(Ft,{children:s.label})},s.id))})}),Tt=i=>t.createElement("svg",{width:24,height:23,viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 2.0001C16.9545 2.0001 16.6619 2.0583 16.389 2.17137C16.116 2.28444 15.8679 2.45018 15.659 2.65911C15.4501 2.86804 15.2843 3.11608 15.1713 3.38906C15.0582 3.66204 15 3.95462 15 4.2501C15 4.54557 15.0582 4.83815 15.1713 5.11114C15.2843 5.38412 15.4501 5.63216 15.659 5.84109C15.8679 6.05002 16.116 6.21575 16.389 6.32883C16.6619 6.4419 16.9545 6.5001 17.25 6.5001C17.8467 6.5001 18.419 6.26304 18.841 5.84109C19.2629 5.41913 19.5 4.84683 19.5 4.2501C19.5 3.65336 19.2629 3.08106 18.841 2.65911C18.419 2.23715 17.8467 2.0001 17.25 2.0001ZM13.575 3.5001C13.7471 2.65238 14.207 1.89024 14.8768 1.34281C15.5466 0.795387 16.385 0.496338 17.25 0.496338C18.115 0.496338 18.9534 0.795387 19.6232 1.34281C20.293 1.89024 20.7529 2.65238 20.925 3.5001H24V5.0001H20.925C20.7529 5.84781 20.293 6.60995 19.6232 7.15738C18.9534 7.70481 18.115 8.00386 17.25 8.00386C16.385 8.00386 15.5466 7.70481 14.8768 7.15738C14.207 6.60995 13.7471 5.84781 13.575 5.0001H0V3.5001H13.575ZM6.75 9.5001C6.15326 9.5001 5.58097 9.73715 5.15901 10.1591C4.73705 10.5811 4.5 11.1534 4.5 11.7501C4.5 12.3468 4.73705 12.9191 5.15901 13.3411C5.58097 13.763 6.15326 14.0001 6.75 14.0001C7.34674 14.0001 7.91903 13.763 8.34099 13.3411C8.76295 12.9191 9 12.3468 9 11.7501C9 11.1534 8.76295 10.5811 8.34099 10.1591C7.91903 9.73715 7.34674 9.5001 6.75 9.5001ZM3.075 11.0001C3.24714 10.1524 3.70705 9.39024 4.37681 8.84281C5.04657 8.29539 5.88498 7.99634 6.75 7.99634C7.61502 7.99634 8.45343 8.29539 9.12319 8.84281C9.79295 9.39024 10.2529 10.1524 10.425 11.0001H24V12.5001H10.425C10.2529 13.3478 9.79295 14.11 9.12319 14.6574C8.45343 15.2048 7.61502 15.5039 6.75 15.5039C5.88498 15.5039 5.04657 15.2048 4.37681 14.6574C3.70705 14.11 3.24714 13.3478 3.075 12.5001H0V11.0001H3.075ZM17.25 17.0001C16.6533 17.0001 16.081 17.2372 15.659 17.6591C15.2371 18.0811 15 18.6534 15 19.2501C15 19.8468 15.2371 20.4191 15.659 20.8411C16.081 21.263 16.6533 21.5001 17.25 21.5001C17.8467 21.5001 18.419 21.263 18.841 20.8411C19.2629 20.4191 19.5 19.8468 19.5 19.2501C19.5 18.6534 19.2629 18.0811 18.841 17.6591C18.419 17.2372 17.8467 17.0001 17.25 17.0001ZM13.575 18.5001C13.7471 17.6524 14.207 16.8902 14.8768 16.3428C15.5466 15.7954 16.385 15.4963 17.25 15.4963C18.115 15.4963 18.9534 15.7954 19.6232 16.3428C20.293 16.8902 20.7529 17.6524 20.925 18.5001H24V20.0001H20.925C20.7529 20.8478 20.293 21.61 19.6232 22.1574C18.9534 22.7048 18.115 23.0039 17.25 23.0039C16.385 23.0039 15.5466 22.7048 14.8768 22.1574C14.207 21.61 13.7471 20.8478 13.575 20.0001H0V18.5001H13.575Z",fill:"white"})),Wt=[{id:"field_00",label:"전체"},{id:"field_01",label:"농축산/식음료"},{id:"field_02",label:"에너지/환경"},{id:"field_03",label:"섬유/의류"},{id:"field_04",label:"금속/기계"},{id:"field_05",label:"보건/의료"},{id:"field_06",label:"건설/건축"},{id:"field_07",label:"가정용품"},{id:"field_08",label:"뷰티/화장품"},{id:"field_09",label:"금융/부동산"},{id:"field_10",label:"교육"},{id:"field_11",label:"임신/출산/육아"},{id:"field_12",label:"웨딩"},{id:"field_13",label:"문화/예술"},{id:"field_14",label:"레저/관광"}],_t={categoryList:Wt},Dt=()=>{const[i,s]=t.useState(!1),l=z("(max-width: 1024px)"),a=()=>{s(d=>!d),l&&!i?document.body.style.overflow="hidden":document.body.style.overflow="auto"};return e.jsxs(Zt,{children:[l&&e.jsx(t1,{}),e.jsx(Pt,{categoryList:_t.categoryList}),e.jsxs(St,{children:[e.jsxs(Rt,{className:"maxframe",children:[e.jsx("h2",{children:"검색결과"}),e.jsxs(At,{$filterOn:i,children:[e.jsxs("button",{onClick:a,className:"filter_btn",children:[e.jsx(Tt,{}),e.jsx("span",{children:"필터"})]}),i&&e.jsxs(Bt,{children:[e.jsxs("div",{className:"title_area",children:[e.jsx("span",{className:"title",children:"필터"}),e.jsx("span",{className:"reset_btn",children:"필터 초기화"})]}),e.jsxs("div",{className:"radio_box",children:[e.jsx("span",{className:"type",children:"온/오프라인별"}),e.jsxs("ul",{className:"radio_list",children:[e.jsx("li",{children:e.jsx(u,{label:"온/오프라인 모두",id:"typeAll",name:"type",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(u,{label:"온라인",id:"online",name:"type"})}),e.jsx("li",{children:e.jsx(u,{label:"오프라인",id:"offline",name:"type"})})]})]}),e.jsxs("div",{className:"radio_box",children:[e.jsx("span",{className:"type",children:"날짜별"}),e.jsxs("ul",{className:"radio_list",children:[e.jsx("li",{children:e.jsx(u,{label:"모든 날짜",id:"dateAll",name:"date",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(u,{label:"이번주 행사",id:"thisWeek",name:"date"})}),e.jsx("li",{children:e.jsx(u,{label:"지난 행사",id:"lastWeek",name:"date"})})]})]}),e.jsxs("div",{className:"radio_box",children:[e.jsx("span",{className:"type",children:"참가비"}),e.jsxs("ul",{className:"radio_list",children:[e.jsx("li",{children:e.jsx(u,{label:"유/무료 모두",id:"priceAll",name:"price",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(u,{label:"유료",id:"charged",name:"price"})}),e.jsx("li",{children:e.jsx(u,{label:"무료",id:"free",name:"price"})})]})]}),e.jsx("div",{className:"btn_box",children:e.jsx("button",{onClick:a,children:"적용"})})]}),e.jsx(M1,{hashList:[{label:"무료",id:"01"},{label:"뷰티/화장품",id:"02"}],onClick:d=>console.log(d)})]})]}),e.jsx(It,{className:"maxframe",children:k.eventList.map(d=>e.jsx(L1,{id:d.id,imgUrl:d.imgUrl,title:d.title,date:d.date,location:d.location,dDay:d.dDay,price:d.price,likeNum:d.likeNum,like:d.like},d.id))})]})]})},Yt=n.div`
  padding: 26px 0 185px;
  position: relative;
  @media (max-width: 1024px) {
    padding: 24px 0 76px;
    & .EventSliderWrap .TitleBox {
      padding: 40px 16px 16px;
      text-align: left;
    }
  }
`,Jt=n.div`
  padding: 0 110px 0 56px;
  display: flex;
  gap: 51px;
  @media (max-width: 1650px) {
    padding: 0 30px;
    gap: 20px;
  }
  @media (max-width: 1300px) {
    padding: 0 20px;
    gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px;
    flex-direction: column;
  }
`,Ut=n.div`
  max-width: 1190px;
`,qt=n.div`
  flex: 1 1 auto;
  width: 405px;
  min-width: 320px;
  color: #fff;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: auto;
  }
`,Qt=n.div`
  padding-bottom: 80px;
  @media (max-width: 1024px) {
    padding-bottom: 0;
  }
  & .thumb_img {
    max-width: 1191px;
    aspect-ratio: 1191/627;
    overflow: hidden;
    border-radius: 20px;
    @media (max-width: 1024px) {
      border-radius: 10px;
    }
    & img {
      width: 100%;
    }
  }
`,Gt=n.div`
  position: relative;
  padding: 38px 185px 0 34px;
  @media (max-width: 1300px) {
    padding: 38px 185px 0 0;
  }
  @media (max-width: 1024px) {
    padding: 16px 0 30px;
  }
  & .title_box {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 1024px) {
      justify-content: space-between;
    }
    & h2 {
      color: #fff;
      font-size: 32px;
      font-weight: 800;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
    & .d_day {
      padding: 6px;
      background-color: #235ef3;
      font-weight: 700;
      font-size: 24px;
      color: #fff;
      border-radius: 9px;
      min-width: 80px;
      text-align: center;
      @media (max-width: 1024px) {
        border-radius: 50rem;
        font-size: 10px;
        min-width: 40px;
      }
    }
  }

  & .desc_box {
    padding: 12px 0 15px;
    color: #b0b8c1;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 1.2;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      font-size: 10px;
      padding-right: 105px;
    }
    & span {
      display: block;
    }
    & .date {
      position: relative;
      padding-right: 40px;
      @media (max-width: 1024px) {
        padding-right: 0;
      }
    }
    & .date::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 18px;
      width: 2px;
      height: 20px;
      background-color: #b0b8c1;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  & .rating_box {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
    & .icon {
      display: block;
      width: 18px;
      height: 18px;
      @media (max-width: 1024px) {
        width: 12px;
        height: 12px;
      }
      & svg {
        width: 100%;
        height: 100%;
      }
    }
    & .count {
      color: #235ef3;
    }
  }

  & .public_btn_box {
    position: absolute;
    right: 0;
    top: 37px;
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 1024px) {
      top: 53px;
      gap: 20px;
    }
    & .icon_btn {
      width: 55px;
      height: 55px;
      @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
      }
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  & .apply_btn_box {
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 1024px) {
      margin-top: 23px;
      position: static;
    }
    & .btn {
      border-radius: 8px;
      padding: 11px 16px;
      min-width: 177px;
      font-weight: 600;
      text-align: center;
      @media (max-width: 1024px) {
        width: 100%;
        font-size: 16px;
      }
    }
    & .primary {
      background-color: #235ef3;
      color: #fff;
    }
    & .disable {
      cursor: default;
      background-color: #495057;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,Xt=i=>t.createElement("svg",{width:55,height:55,viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("circle",{cx:27.5,cy:27.5,r:27.5,fill:"#3B4048"}),t.createElement("g",{clipPath:"url(#clip0_746_68963)"},t.createElement("path",{d:"M27.9999 21.6951L27.014 20.6817C24.6999 18.3029 20.4566 19.1238 18.9249 22.1144C18.2057 23.5211 18.0435 25.5519 19.3566 28.1438C20.6216 30.6394 23.2534 33.6287 27.9999 36.8847C32.7464 33.6287 35.3767 30.6394 36.6431 28.1438C37.9562 25.5506 37.7954 23.5211 37.0749 22.1144C35.5431 19.1238 31.2999 18.3016 28.9857 20.6803L27.9999 21.6951ZM27.9999 38.5416C6.91698 24.6101 21.5085 13.7366 27.7579 19.4882C27.8404 19.5638 27.9215 19.6422 27.9999 19.7233C28.0774 19.6423 28.1582 19.5643 28.2419 19.4896C34.4899 13.7338 49.0827 24.6087 27.9999 38.5416Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_746_68963"},t.createElement("rect",{width:22,height:22,fill:"white",transform:"translate(17 17)"})))),Kt=i=>t.createElement("svg",{width:55,height:55,viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("circle",{cx:27.5,cy:27.5,r:27.5,fill:"#3B4048"}),t.createElement("g",{clipPath:"url(#clip0_746_68966)"},t.createElement("path",{d:"M31.1254 20.4377C31.1253 19.6312 31.4088 18.8503 31.9263 18.2317C32.4438 17.613 33.1623 17.1961 33.9562 17.0537C34.75 16.9114 35.5687 17.0527 36.2689 17.453C36.9691 17.8533 37.5062 18.487 37.7864 19.2433C38.0665 19.9996 38.0718 20.8304 37.8013 21.5902C37.5308 22.35 37.0017 22.9905 36.3066 23.3996C35.6116 23.8088 34.7948 23.9605 33.9992 23.8282C33.2036 23.696 32.4798 23.2882 31.9545 22.6762L22.7172 26.9662C22.9296 27.6392 22.9296 28.3612 22.7172 29.0342L31.9545 33.3242C32.5098 32.6784 33.285 32.2617 34.13 32.155C34.975 32.0482 35.8295 32.2589 36.528 32.7463C37.2265 33.2336 37.7191 33.9629 37.9105 34.7929C38.1019 35.6228 37.9784 36.4942 37.5639 37.2382C37.1494 37.9823 36.4735 38.5459 35.6671 38.82C34.8607 39.0941 33.9813 39.059 33.1992 38.7216C32.4172 38.3842 31.7883 37.7686 31.4343 36.9939C31.0804 36.2192 31.0266 35.3407 31.2835 34.5287L22.0462 30.2387C21.589 30.7716 20.9794 31.1517 20.2997 31.3278C19.6199 31.5039 18.9025 31.4677 18.244 31.2238C17.5855 30.98 17.0174 30.5404 16.6162 29.9641C16.2151 29.3878 16 28.7024 16 28.0002C16 27.298 16.2151 26.6126 16.6162 26.0363C17.0174 25.46 17.5855 25.0203 18.244 24.7765C18.9025 24.5327 19.6199 24.4964 20.2997 24.6726C20.9794 24.8487 21.589 25.2288 22.0462 25.7617L31.2835 21.4717C31.1783 21.1371 31.125 20.7884 31.1254 20.4377Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_746_68966"},t.createElement("rect",{width:22,height:22,fill:"white",transform:"translate(16 17)"})))),$t=i=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_759_23095)"},t.createElement("path",{d:"M10.8359 46.3285C9.67787 46.9225 8.36387 45.8815 8.59787 44.5525L11.0879 30.3625L0.518867 20.2945C-0.468133 19.3525 0.0448665 17.6305 1.36787 17.4445L16.0619 15.3565L22.6139 2.37555C23.2049 1.20555 24.8039 1.20555 25.3949 2.37555L31.9469 15.3565L46.6409 17.4445C47.9639 17.6305 48.4769 19.3525 47.4869 20.2945L36.9209 30.3625L39.4109 44.5525C39.6449 45.8815 38.3309 46.9225 37.1729 46.3285L23.9999 39.5605L10.8329 46.3285H10.8359Z",fill:"#1E9EFF"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_759_23095"},t.createElement("rect",{width:48,height:48,fill:"white"})))),S1=({applyBtn:i})=>{const[s,l]=t.useState(!0);return e.jsxs(Qt,{children:[e.jsx("figure",{className:"thumb_img",children:e.jsx("img",{src:"./dummy_thumb.png"})}),e.jsxs(Gt,{children:[e.jsxs("div",{className:"title_box",children:[e.jsx("h2",{children:"2024 케이펫페어 서울"}),e.jsx("p",{className:"d_day",children:"D-1"})]}),e.jsxs("div",{className:"desc_box",children:[e.jsx("span",{className:"date",children:"2024년 09월 05일 ~ 2024월 09월 08일"}),e.jsx("span",{className:"location",children:"양재 AT센터 제1전시장 A홀"})]}),e.jsxs("div",{className:"rating_box",children:[e.jsx("span",{className:"icon",children:e.jsx($t,{})}),e.jsx("span",{className:"rating",children:"4.4"}),e.jsx("span",{className:"count",children:"(4,423)"})]}),e.jsxs("div",{className:"public_btn_box",children:[e.jsx("div",{className:"icon_btn",children:e.jsx(Xt,{})}),e.jsx("div",{className:"icon_btn",children:e.jsx(Kt,{})})]}),i&&e.jsxs("div",{className:"apply_btn_box",children:[s&&e.jsx("div",{onClick:()=>l(a=>!a),className:"btn primary",children:"사전 신청하기"}),!s&&e.jsx("div",{onClick:()=>l(a=>!a),className:"btn disable",children:"모집이 종료되었습니다."})]})]})]})},e2=n.div`
  display: flex;
  align-items: center;
  margin-bottom: 37px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  background-color: #000;
  z-index: 99;
  & a {
    cursor: pointer;
    display: block;
    min-width: 162px;
    padding: 14px 10px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    @media (max-width: 1024px) {
      min-width: auto;
      width: 100%;
      font-size: 15px;
      padding: 15px 2px;
    }
  }
  & .active {
    position: relative;
    color: rgba(49, 111, 233, 1);
  }
  & .active::after {
    content: "";
    position: absolute;
    background-color: rgba(49, 111, 233, 1);
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 50rem;
  }
`,i2=n.div`
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  color: #fff;
  padding: 0 55px 100px;
  @media (max-width: 1300px) {
    padding: 0px 20px 100px;
  }
  @media (max-width: 1300px) {
    padding: 0px 20px 40px;
  }
  & section {
    padding-top: 100px;
    @media (max-width: 1024px) {
      padding-top: 40px;
    }
  }
  & section:first-child {
    padding-top: 83px;
    @media (max-width: 1024px) {
      padding-top: 40px;
    }
  }
  & section h3 {
    color: #fff;
    font-weight: 800;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  & .info_list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1024px) {
      gap: 14px;
    }
    & .item {
      display: flex;
      font-weight: 500;
      align-items: center;
      @media (max-width: 1024px) {
        font-size: 14px;
        align-items: flex-start;
        word-break: keep-all;
      }
      & .tit {
        min-width: 100px;
        color: rgba(176, 184, 193, 1);
      }
      & .desc {
        color: #fff;
      }
    }
  }
`,t2=n.section``,n2=n.section`
  & .detail_box {
    position: relative;
    /* height: 800px; */
    overflow: hidden;
    & .image {
      width: 100%;
      & img {
        width: 100%;
      }
    }

    & .more_box {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: linear-gradient(
        180deg,
        rgba(217, 217, 217, 0) 0%,
        rgba(136, 137, 139, 0.43) 39.5%,
        #121212 89.5%
      );
      & .btn {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;
        & button {
          min-width: 177px;
          padding: 12px 10px;
          color: #fff;
          font-weight: 600;
          background-color: rgba(49, 111, 233, 1);
          border-radius: 10px;
          @media (max-width: 1024px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`,s2=n.section`
  & .icon {
    @media (max-width: 1024px) {
      width: 16px;
      height: 16px;
    }
    & svg {
      @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .question {
    cursor: pointer;
  }
  & .faq_item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px 0;
    @media (max-width: 1024px) {
      padding: 16px 0;
      line-height: 1.3;
    }
  }
  & .faq_item:first-child {
    padding: 0;
    padding-bottom: 25px;
    @media (max-width: 1024px) {
      padding-bottom: 16px;
    }
  }
  & .faq_item > div {
    display: flex;
    align-items: center;
    gap: 46px;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 14px;
      gap: 11px;
    }
  }
  & .answer {
    padding-top: 25px;
    @media (max-width: 1024px) {
      padding-top: 16px;
    }
  }
`,a2=n.section``,l2=i=>t.createElement("svg",{width:29,height:30,viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M15.5234 16.1992L26.3234 26.9992",stroke:"#316FE9",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("circle",{cx:13.5,cy:13.5,r:11,stroke:"#316FE9",strokeWidth:5})),r2=i=>t.createElement("svg",{width:29,height:30,viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M14.5 3L3 26.7931",stroke:"#6EA8FE",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M14.5 3L26 26.7931",stroke:"#6EA8FE",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("path",{d:"M7.75781 16.8789H21.2406",stroke:"#6EA8FE",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"})),d2=[{id:1,name:"기본 정보"},{id:2,name:"상세 정보"},{id:3,name:"FAQ"},{id:4,name:"문의하기"}],o2=[{f:"본 행사는 참가 시 무료인가요?",q:"사전 신청자 대상으로 무료로 제공하고 있습니다."},{f:"참가 신청 후, 티켓은 어디서 수령 받을 수 있나요?",q:"답변2"},{f:"핸드폰(전화번호)가 없는 미성년자일 경우 신청 가능한가요?",q:"답변3"},{f:"단체 신청은 어떻게 하면 되나요?",q:"답변4"},{f:"반려동물도 함께 참석이 가능한 행사인가요?",q:"답변5"}],p2=()=>{const[i,s]=t.useState(null),l=a=>{s(i===a?null:a)};return e.jsxs(e.Fragment,{children:[e.jsx(e2,{children:d2.map(a=>e.jsx(U1,{to:`section${a.id}`,spy:!0,smooth:!0,offset:-70,duration:500,children:a.name},a.id))}),e.jsxs(i2,{children:[e.jsxs(t2,{id:"section1",children:[e.jsx("h3",{children:"기본 정보"}),e.jsxs("ul",{className:"info_list",children:[e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"행사 기간"}),e.jsx("span",{className:"desc",children:"2024년 09월 05일 ~ 2024년 09월 08일"})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"개최 장소"}),e.jsx("span",{className:"desc",children:"양재 AT센터"})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"세부 장소"}),e.jsx("span",{className:"desc",children:"제1전시장 A홀"})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"전시 분야"}),e.jsx("span",{className:"desc",children:"농축산 · 식음료"})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"참가 비용"}),e.jsx("span",{className:"desc",children:"사전 신청 시 무료 · 현장 구매 시 유료"})]})]})]}),e.jsxs(n2,{id:"section2",children:[e.jsx("h3",{children:"상세 정보"}),e.jsxs("div",{className:"detail_box",children:[e.jsx("div",{className:"image",children:e.jsx("img",{src:"./dummy_detail.png"})}),e.jsx("div",{className:"more_box",children:e.jsx("p",{className:"btn",children:e.jsx("button",{children:"더보기"})})})]})]}),e.jsxs(s2,{id:"section3",children:[e.jsx("h3",{children:"FAQ"}),e.jsx("ul",{className:"faq_list",children:o2.map((a,d)=>e.jsxs("li",{className:"faq_item",children:[e.jsxs("div",{onClick:()=>l(d),className:"question",children:[e.jsx("span",{className:"icon",children:e.jsx(l2,{})}),e.jsx("span",{className:"txt",children:a.f})]}),i===d&&e.jsxs("div",{className:"answer",children:[e.jsx("span",{className:"icon",children:e.jsx(r2,{})}),e.jsxs("span",{className:"txt",children:[" ",a.q]})]})]},d))})]}),e.jsxs(a2,{id:"section4",children:[e.jsx("h3",{children:"문의하기"}),e.jsxs("ul",{className:"info_list",children:[e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"담당자"}),e.jsx("span",{className:"desc",children:"2024 대한민국 농업박람회 운영사무국"})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"전화번호"}),e.jsx("span",{className:"desc",children:"02-0000-0000"})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"이메일"}),e.jsx("span",{className:"desc",children:"admin@agri.com"})]})]})]})]})]})},x2=n.div`
  /* width: 405px; */
`,c2=n.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  & button {
    width: 100%;
    padding: 15px 10px;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
  }
  & .active {
    position: relative;
  }
  & .active::after {
    content: "";
    position: absolute;
    background-color: rgba(49, 111, 233, 1);
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 50rem;
  }
`,h2=n.div`
  /* padding: 16px; */
`,m2=n.div`
  /* pointer-events: ${i=>i.$loading?"all":"none"}; */
  width: ${i=>`${i.$width}px`};
  position: relative;
`,g2=n.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  padding: 10px 0;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  & .txt {
    min-width: 50px;
  }
`,f2=n.ul`
  display: ${i=>i.$isOn?"block":"none"};
  width: 100%;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 10;
  border-radius: 5px;
  background-color: #000;
  padding: 5px 15px;
  border: 1px solid #fff;
`,w2=n.li`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
  cursor: pointer;
`,j2=({options:i,selectedValue:s,width:l})=>{const[a,d]=t.useState(!1),[o,p]=t.useState("베스트순"),x=t.useRef(null),c=()=>{d(m=>!m)},f=m=>{p(m),d(!1)},h=m=>{x.current&&!x.current.contains(m.target)&&d(!1)};return t.useEffect(()=>(document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}),[]),t.useEffect(()=>{const m=i.find(g=>g.value===s);m&&p(m.text)},[s,i]),e.jsxs(m2,{ref:x,$width:l,children:[e.jsxs(g2,{onClick:c,$isOn:a,children:[e.jsx("span",{className:"txt",children:o}),e.jsx("span",{children:a?e.jsx(B,{}):e.jsx(B,{})})]}),e.jsx(f2,{$isOn:a,children:i.map((m,g)=>e.jsx(w2,{onClick:()=>f(m.text),children:m.text},g))})]})},u2=n.div`
  position: relative;
  word-break: keep-all;
  padding: 15px 50px 15px 20px;
  background-color: rgba(8, 66, 152, 1);
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 7px;
  & button {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    padding: 6px;
    & svg {
      width: 10px;
      height: 10px;
      display: block;
    }
  }
`,b2=n.div`
  padding: 16px 0;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  & .pagination {
    padding-top: 30px;
    justify-content: center;
  }
`,C2=n.div`
  padding: 0 16px;
`,v2=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  & .stars {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    @media (max-width: 1500px) {
      gap: 5px;
    }
    & .star-ratings {
      display: flex !important;
      gap: 6px;
      @media (max-width: 1500px) {
        gap: 3px;
      }
    }
  }
  & .stars .total {
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .average {
    font-size: 30px;
    font-weight: 600;
  }
`,y2=n.ul`
  padding: 10px 0 0;
`,k2=n.li`
  position: relative;
  padding: 12px 16px 55px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  & .writer_info {
    color: rgba(176, 184, 193, 1);
    font-size: 14px;
    padding: 14px 0;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .desc {
    font-size: 14px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .like_btn {
    min-width: 50px;
    padding: 5px 0;
    position: absolute;
    right: 16px;
    bottom: 12px;
    background-color: rgba(35, 94, 243, 1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    & .num {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`,u1="M10.8359 46.3285C9.67787 46.9226 8.36387 45.8815 8.59787 44.5525L11.0879 30.3625L0.518867 20.2945C-0.468133 19.3525 0.0448665 17.6305 1.36787 17.4445L16.0619 15.3565L22.6139 2.37555C23.2049 1.20555 24.8039 1.20555 25.3949 2.37555L31.9469 15.3565L46.6409 17.4445C47.9639 17.6305 48.4769 19.3525 47.4869 20.2945L36.9209 30.3625L39.4109 44.5525C39.6449 45.8815 38.3309 46.9226 37.1729 46.3285L23.9999 39.5606L10.8329 46.3285H10.8359Z",N2=i=>t.createElement("svg",{width:15,height:16,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_767_24184)"},t.createElement("path",{d:"M8.31 0.290575C7.41375 0.0662197 6.58125 0.744917 6.52125 1.62356C6.45375 2.61016 6.30562 3.51603 6.12 4.05486C6.00281 4.3928 5.67094 5.00579 5.145 5.59343C4.62281 6.17826 3.94312 6.69925 3.14719 6.91703C2.51719 7.08882 1.875 7.63516 1.875 8.43307V12.1889C1.875 12.9821 2.51437 13.5632 3.2325 13.6392C4.23562 13.7463 4.69875 14.0288 5.17125 14.3179L5.21625 14.3461C5.47125 14.501 5.75812 14.6728 6.12562 14.8004C6.49781 14.9281 6.93281 15.0041 7.5 15.0041H10.7812C11.6597 15.0041 12.2803 14.5564 12.5944 14.0053C12.7462 13.7453 12.8282 13.4504 12.8325 13.1492C12.8325 13.0065 12.8109 12.8563 12.7603 12.7137C12.9487 12.4668 13.1166 12.1711 13.2178 11.8679C13.3209 11.5581 13.3791 11.1526 13.2216 10.7893C13.2862 10.6672 13.3341 10.5368 13.3706 10.411C13.4428 10.1575 13.4766 9.87777 13.4766 9.60648C13.4766 9.33612 13.4428 9.05732 13.3706 8.80293C13.3378 8.68598 13.2945 8.57224 13.2412 8.46311C13.4054 8.22925 13.511 7.95931 13.5492 7.67603C13.5874 7.39275 13.557 7.10443 13.4606 6.83536C13.2675 6.27964 12.8212 5.80276 12.3356 5.6413C11.5416 5.37658 10.6453 5.38222 9.97687 5.44323C9.8381 5.45574 9.69963 5.47139 9.56156 5.49017C9.88679 4.09559 9.86683 2.64256 9.50344 1.25746C9.44021 1.03554 9.31893 0.834552 9.15213 0.675292C8.98534 0.516032 8.77908 0.40428 8.55469 0.351592L8.31 0.290575Z",fill:"white"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_767_24184"},t.createElement("rect",{width:15,height:15.0196,fill:"white",transform:"translate(0 0.247314)"})))),H2=i=>t.createElement("svg",{width:15,height:16,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_724_48675)"},t.createElement("path",{d:"M8.31 0.290575C7.41375 0.0662197 6.58125 0.744917 6.52125 1.62356C6.45375 2.61016 6.30562 3.51603 6.12 4.05486C6.00281 4.3928 5.67094 5.00579 5.145 5.59343C4.62281 6.17826 3.94313 6.69925 3.14719 6.91703C2.51719 7.08882 1.875 7.63516 1.875 8.43307V12.1889C1.875 12.9821 2.51437 13.5632 3.2325 13.6392C4.23562 13.7463 4.69875 14.0288 5.17125 14.3179L5.21625 14.3461C5.47125 14.501 5.75812 14.6728 6.12562 14.8004C6.49781 14.9281 6.93281 15.0041 7.5 15.0041H10.7812C11.6597 15.0041 12.2803 14.5564 12.5944 14.0053C12.7462 13.7453 12.8282 13.4504 12.8325 13.1492C12.8325 13.0065 12.8109 12.8563 12.7603 12.7137C12.9487 12.4668 13.1166 12.1711 13.2178 11.8679C13.3209 11.5581 13.3791 11.1526 13.2216 10.7893C13.2862 10.6672 13.3341 10.5368 13.3706 10.411C13.4428 10.1575 13.4766 9.87777 13.4766 9.60648C13.4766 9.33612 13.4428 9.05732 13.3706 8.80293C13.3378 8.68598 13.2945 8.57224 13.2412 8.46311C13.4054 8.22925 13.511 7.95931 13.5492 7.67603C13.5874 7.39275 13.557 7.10443 13.4606 6.83536C13.2675 6.27964 12.8212 5.80277 12.3356 5.6413C11.5416 5.37658 10.6453 5.38222 9.97687 5.44323C9.8381 5.45574 9.69963 5.47139 9.56156 5.49017C9.88679 4.09559 9.86683 2.64256 9.50344 1.25746C9.44021 1.03554 9.31893 0.834552 9.15213 0.675292C8.98534 0.516032 8.77908 0.40428 8.55469 0.351592L8.31 0.290575ZM10.7812 14.0664H7.5C7.02187 14.0664 6.69094 14.0016 6.43125 13.9124C6.16781 13.8214 5.95687 13.6984 5.70375 13.5435L5.66625 13.521C5.14594 13.2027 4.54312 12.8348 3.33187 12.7061C3.01969 12.6724 2.8125 12.4339 2.8125 12.1898V8.43307C2.8125 8.19464 3.02437 7.92334 3.39375 7.8229C4.42031 7.54128 5.24719 6.88793 5.84437 6.21956C6.43969 5.55306 6.84187 4.83494 7.005 4.36276C7.23281 3.70565 7.38656 2.7031 7.45687 1.6874C7.48031 1.34758 7.79437 1.12979 8.08219 1.20114L8.32781 1.26309C8.47781 1.30064 8.56969 1.39733 8.59781 1.50247C8.98067 2.96314 8.93346 4.50352 8.46187 5.93794C8.43518 6.01772 8.4304 6.10322 8.44802 6.18548C8.46564 6.26775 8.50503 6.34376 8.56205 6.40556C8.61907 6.46736 8.69163 6.51267 8.77214 6.53676C8.85266 6.56085 8.93815 6.56282 9.01969 6.54248L9.0225 6.54154L9.03562 6.53873L9.09 6.52558C9.41058 6.45742 9.73489 6.40821 10.0612 6.3782C10.6828 6.32188 11.4272 6.32751 12.0394 6.53215C12.2034 6.5866 12.4612 6.81377 12.5737 7.14232C12.6741 7.43145 12.6553 7.77127 12.3244 8.1017L11.9934 8.43307L12.3244 8.76538C12.3647 8.80575 12.4228 8.89774 12.4687 9.06108C12.5137 9.21784 12.5391 9.40841 12.5391 9.60648C12.5391 9.80549 12.5137 9.99511 12.4687 10.1528C12.4219 10.3162 12.3647 10.4081 12.3244 10.4485L11.9934 10.7799L12.3244 11.1122C12.3684 11.1563 12.4266 11.2783 12.3291 11.5703C12.2275 11.8534 12.066 12.1112 11.8556 12.326L11.5247 12.6573L11.8556 12.9896C11.8612 12.9943 11.8941 13.0366 11.8941 13.1492C11.8899 13.2869 11.8509 13.4213 11.7806 13.5397C11.6259 13.8101 11.3091 14.0654 10.7812 14.0654V14.0664Z",fill:"white"})),t.createElement("path",{d:"M4.82031 6.68311C4.99888 8.11354 5.24888 11.4035 4.82031 13.1201",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_724_48675"},t.createElement("rect",{width:15,height:15.0196,fill:"white",transform:"translate(0 0.247314)"})))),E2=[{text:"베스트순",value:"best"},{text:"최신순",value:"newest"}],L2=()=>{const[i,s]=t.useState(!0),l=z("(max-width: 1024px)"),a=U(),d=o=>{a(`?type=${o}`)};return e.jsxs(e.Fragment,{children:[i&&e.jsxs(u2,{children:[e.jsxs("span",{children:["전시회 참여 후 리뷰를 작성해주세요.",e.jsx("br",{}),"고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다"]}),e.jsx("button",{onClick:()=>s(!1),children:e.jsx($,{})})]}),e.jsxs(b2,{children:[e.jsxs(C2,{children:[e.jsxs(v2,{children:[e.jsxs("div",{className:"stars",children:[e.jsx(m1,{rating:4.4,starRatedColor:"rgba(30, 158, 255, 1)",starEmptyColor:"rgba(85, 85, 85, 1)",starDimension:"22px",starSpacing:"0",svgIconPath:u1}),e.jsx("p",{className:"total",children:"4,423개 평점"})]}),e.jsx("div",{className:"average",children:"4.4"})]}),e.jsx(j2,{options:E2,width:122,selectedValue:"최신순",onChange:d})]}),e.jsx(y2,{children:Array.from(l?{length:5}:{length:10}).map((o,p)=>e.jsxs(k2,{children:[e.jsx(m1,{rating:3.1,starRatedColor:"rgba(30, 158, 255, 1)",starEmptyColor:"rgba(85, 85, 85, 1)",starDimension:"10px",starSpacing:"2px",svgIconPath:u1}),e.jsx("p",{className:"writer_info",children:"마이스미츄 · 2024년 08월 23일"}),e.jsx("p",{className:"desc",children:"극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요. 아쿠아맨2도 쿠플에서 볼 수 있기를...극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요. 아쿠아맨2도 쿠플에서 볼 수 있기를...극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요. 아쿠아맨2도 쿠플에서 볼 수 있기를..."}),e.jsxs("button",{className:"like_btn",children:[e.jsx("span",{className:"icon",children:p===0?e.jsx(N2,{}):e.jsx(H2,{})}),e.jsx("span",{className:"num",children:"30"})]})]},p))}),e.jsx(Z,{})]})]})},M2=n.div`
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  & {
    padding: 12px 0 54px;
  }
  & li {
    padding: 24px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  & .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`,V2=()=>e.jsx(M2,{children:e.jsx("ul",{children:Array.from({length:12}).map((i,s)=>e.jsx("li",{children:e.jsx("span",{className:"text",children:"기업명 기업명 기업명 기업명 기업명 기업명"})},s))})}),z2=()=>{const[i,s]=t.useState("review");return e.jsxs(x2,{children:[e.jsxs(c2,{children:[e.jsx("button",{onClick:()=>s("review"),className:i==="review"?"active":"",children:"리뷰"}),e.jsx("button",{onClick:()=>s("company"),className:i==="company"?"active":"",children:"참여 기업"})]}),e.jsxs(h2,{children:[i==="review"&&e.jsx(L2,{}),i==="company"&&e.jsx(V2,{})]})]})},Z2=()=>e.jsxs(Yt,{className:"maxframe",children:[e.jsxs(Jt,{children:[e.jsxs(Ut,{children:[e.jsx(S1,{applyBtn:!0}),e.jsx(p2,{})]}),e.jsx(qt,{children:e.jsx(z2,{})})]}),e.jsx(M,{title:"AI 메이트가 맞추는 ‘OOOO’님의 취향저격 전시 ",eventList:k.eventList})]}),S2=n.div``,R2=n.form`
  padding: 26px 80px 170px;
  display: flex;
  gap: 55px;
  @media (max-width: 1650px) {
    padding: 26px 30px 170px;
    gap: 20px;
  }
  @media (max-width: 1300px) {
    padding: 26px 20px 170px;
    gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px 84px;
    flex-direction: column;
  }
`,A2=n.div`
  max-width: 1204px;
`,B2=n.div``,I2=n.div`
  flex: 1 1 auto;
  width: 477px;
  min-width: 380px;
  color: #fff;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: auto;
  }
`,O2=n.div`
  line-height: 1.2;
  & h3 {
    font-size: 32px;
    padding: 97px 32px 32px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
      padding: 40px 12px 16px;
    }
  }
  & .field {
    display: flex;
    flex-direction: column;
    gap: 16px;
    & .input_box {
      background-color: rgba(18, 18, 18, 1);
      border-radius: 10px;
      padding: 32px 67px 32px 46px;
      @media (max-width: 1024px) {
        padding: 20px 12px;
      }
      & .mt_16 {
        margin-top: 20px;
      }
    }

    & .InputCheckboxA {
      padding: 10px 0;
    }
    & .InputCheckboxA label {
      font-size: 24px;
      padding-left: 37px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }

    & .requird {
      color: #fff;
      width: 100%;
      padding: 10px 15px;
      display: block;
      font-size: 24px;
      font-weight: 500;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
  }
`,F2=n.div`
  background-color: rgba(18, 18, 18, 1);
  border-radius: 10px;
  padding: 32px 46px;
  @media (max-width: 1024px) {
    padding: 20px 12px;
  }
  & .title_area .tit {
    display: block;
    font-size: 24px;
    margin-bottom: 17px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  & .sub {
    display: block;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .download_btn {
    max-width: 532px;
    width: 100%;
    margin: 17px 0 19px;
    padding: 10px 0;
    border-radius: 10px;
    width: 100%;
    color: #fff;
    background-color: rgba(49, 111, 233, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    @media (max-width: 1024px) {
      max-width: 100%;
    }
    & .icon {
      width: 15px;
      height: 15px;
      & svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  & .alret_chang {
    max-width: 532px;
    width: 100%;
    padding: 10px 20px;
    background-color: rgba(49, 111, 233, 0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    @media (max-width: 1024px) {
      font-size: 12px;
      max-width: 100%;
    }
    & .icon {
      width: 10px;
      height: 10px;
      & svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    & .txt {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
    }
  }

  & .agree {
    margin: 23px 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & label {
      font-size: 14px;
    }
  }

  & .upload {
    & input {
      display: none;
    }
    & .label {
      padding: 20px 10px;
      display: block;
      max-width: 532px;
      width: 100%;
      border-radius: 10px;
      background-color: rgba(248, 250, 251, 0.2);
      margin-top: 15px;
      @media (max-width: 1024px) {
        max-width: 100%;
      }
      & span {
        padding: 10px 0;
        max-width: 240px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: block;
        font-size: 16px;
        font-weight: 500;
      }
      & span.btn {
        border-radius: 50rem;
        color: rgba(9, 51, 140, 1);
        background-color: #fff;
      }
      & span.txt {
        color: #fff;
      }
    }
  }
`,P2=n.div`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  padding: 15px 20px;
  min-height: 96px;
  & textarea {
    width: 100%;
    min-height: 64px;
    resize: none;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
    & ::placeholder {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,T2=n.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & textarea {
    color: #fff;
    width: 100%;
    padding: 10px 15px;
    display: block;
    font-size: 24px;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    resize: none;
    min-height: 120px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`,W2=({placeholder:i})=>e.jsx(P2,{children:e.jsx("textarea",{placeholder:i})}),_2=({label:i,required:s})=>e.jsxs(T2,{children:[e.jsxs("p",{className:"label",children:[e.jsx("span",{className:"txt",children:i}),s&&e.jsx("span",{className:"req",children:" *"})]}),e.jsx("div",{className:"select_box",children:e.jsx("textarea",{})})]}),D2=i=>t.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M7.96837 6.09375C7.96837 5.96943 7.91898 5.8502 7.83107 5.76229C7.74317 5.67439 7.62394 5.625 7.49962 5.625C7.3753 5.625 7.25607 5.67439 7.16816 5.76229C7.08025 5.8502 7.03087 5.96943 7.03087 6.09375V9.64969L5.95649 8.57438C5.91291 8.53079 5.86117 8.49622 5.80423 8.47263C5.74728 8.44905 5.68625 8.43691 5.62462 8.43691C5.56298 8.43691 5.50195 8.44905 5.44501 8.47263C5.38806 8.49622 5.33632 8.53079 5.29274 8.57438C5.24916 8.61796 5.21459 8.6697 5.191 8.72664C5.16741 8.78358 5.15527 8.84462 5.15527 8.90625C5.15527 8.96789 5.16741 9.02892 5.191 9.08586C5.21459 9.1428 5.24916 9.19454 5.29274 9.23813L7.16774 11.1131C7.21128 11.1568 7.26301 11.1914 7.31996 11.215C7.37691 11.2387 7.43796 11.2508 7.49962 11.2508C7.56127 11.2508 7.62232 11.2387 7.67927 11.215C7.73622 11.1914 7.78795 11.1568 7.83149 11.1131L9.70649 9.23813C9.75007 9.19454 9.78465 9.1428 9.80823 9.08586C9.83182 9.02892 9.84396 8.96789 9.84396 8.90625C9.84396 8.84462 9.83182 8.78358 9.80823 8.72664C9.78465 8.6697 9.75007 8.61796 9.70649 8.57438C9.66291 8.53079 9.61117 8.49622 9.55423 8.47263C9.49728 8.44905 9.43625 8.43691 9.37462 8.43691C9.31298 8.43691 9.25195 8.44905 9.19501 8.47263C9.13806 8.49622 9.08632 8.53079 9.04274 8.57438L7.96837 9.64969V6.09375Z",fill:"white"}),t.createElement("path",{d:"M13.125 13.125V4.21875L8.90625 0H3.75C3.25272 0 2.77581 0.197544 2.42417 0.549175C2.07254 0.900806 1.875 1.37772 1.875 1.875V13.125C1.875 13.6223 2.07254 14.0992 2.42417 14.4508C2.77581 14.8025 3.25272 15 3.75 15H11.25C11.7473 15 12.2242 14.8025 12.5758 14.4508C12.9275 14.0992 13.125 13.6223 13.125 13.125ZM8.90625 2.8125C8.90625 3.18546 9.05441 3.54315 9.31813 3.80687C9.58185 4.07059 9.93954 4.21875 10.3125 4.21875H12.1875V13.125C12.1875 13.3736 12.0887 13.6121 11.9129 13.7879C11.7371 13.9637 11.4986 14.0625 11.25 14.0625H3.75C3.50136 14.0625 3.2629 13.9637 3.08709 13.7879C2.91127 13.6121 2.8125 13.3736 2.8125 13.125V1.875C2.8125 1.62636 2.91127 1.3879 3.08709 1.21209C3.2629 1.03627 3.50136 0.9375 3.75 0.9375H8.90625V2.8125Z",fill:"white"})),R1=i=>t.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_724_46867)"},t.createElement("path",{d:"M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM8.93 6.588L7.93 11.293C7.86 11.633 7.959 11.826 8.234 11.826C8.428 11.826 8.721 11.756 8.92 11.58L8.832 11.996C8.545 12.342 7.912 12.594 7.367 12.594C6.664 12.594 6.365 12.172 6.559 11.275L7.297 7.807C7.361 7.514 7.303 7.408 7.01 7.337L6.559 7.256L6.641 6.875L8.931 6.588H8.93ZM8 5.5C7.73478 5.5 7.48043 5.39464 7.29289 5.20711C7.10536 5.01957 7 4.76522 7 4.5C7 4.23478 7.10536 3.98043 7.29289 3.79289C7.48043 3.60536 7.73478 3.5 8 3.5C8.26522 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5C9 4.76522 8.89464 5.01957 8.70711 5.20711C8.51957 5.39464 8.26522 5.5 8 5.5Z",fill:"#EEEEEE"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_724_46867"},t.createElement("rect",{width:16,height:16,fill:"white"})))),Y2=["개인 신청","단체 신청"],b1=["항목1","항목2","항목3","항목4"],J2=({pageState:i,setPageState:s})=>e.jsxs(O2,{children:[e.jsx("div",{className:"field",children:e.jsxs("div",{className:"input_box",children:[e.jsx(j1,{label:"신청 유형",required:!1,optionList:Y2,setState:s}),e.jsx("div",{className:"requird mt_16",children:"사전 신청시 무료 / 현장 등록 시 유료(5,000원)"})]})}),e.jsx("h3",{children:"신청자 기본정보"}),e.jsxs("div",{className:"field",children:[e.jsx("div",{className:"input_box",children:e.jsx(A,{label:"이름",type:"text",id:"name",required:!0})}),e.jsx("div",{className:"input_box",children:e.jsx(A,{label:"이메일",type:"email",id:"email",required:!0})}),e.jsx("div",{className:"input_box",children:e.jsx(A,{label:"휴대폰번호",type:"tel",id:"tel",required:!0})}),e.jsx("div",{className:"input_box",children:e.jsx(A,{label:"소속 (회사/학교/기관)",type:"text",id:"team",required:!0})})]}),i==="개인 신청"&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"사전 설문"}),e.jsxs("div",{className:"field",children:[e.jsx("div",{className:"input_box",children:e.jsx(j1,{label:"행사 참여 목적",required:!0,optionList:b1})}),e.jsx("div",{className:"input_box",children:e.jsxs(Ci,{label:"관심분야",required:!0,optionList:b1,children:[e.jsx(j,{label:"항목1",id:"type1"}),e.jsx(j,{label:"항목2",id:"type2"}),e.jsx(j,{label:"항목3",id:"type3"}),e.jsx(j,{label:"항목4",id:"type4"})]})}),e.jsx("div",{className:"input_box",children:e.jsx(_2,{label:"세미나에서 궁금한 점 또는 기대되는 점을 기재해주세요"})})]})]}),i==="단체 신청"&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"단체신청"}),e.jsxs(F2,{children:[e.jsxs("div",{className:"title_area",children:[e.jsx("span",{className:"tit",children:"참가자 엑셀 등록하기"}),e.jsx("span",{className:"sub",children:"엑셀 양식으로 업로드하여 한번에 참가자를 등록할 수 있습니다. (지원 파일 양식 : xlsx)"})]}),e.jsxs("button",{className:"download_btn",children:[e.jsx("span",{className:"icon",children:e.jsx(D2,{})}),e.jsx("span",{className:"txt",children:"엑셀 양식 내려받기"})]}),e.jsxs("p",{className:"alret_chang",children:[e.jsx("span",{className:"icon",children:e.jsx(R1,{})}),e.jsx("span",{className:"txt",children:"정보/그룹을 수정한 경우 새로운 양식으로 등록해주세요."})]}),e.jsxs("div",{className:"agree",children:[e.jsx("p",{className:"sub",children:"개인정보 보호를 위해 제3자 제공 동의가 완료된 참가자 명단을 등록할 수 있습니다."}),e.jsx(j,{label:"네, 제3자 제공 동의를 받은 개인 정보입니다.",id:"agree1",required:!0})]}),e.jsx("p",{className:"sub",children:"엑셀 양식을 업로드해주세요."}),e.jsxs("div",{className:"upload",children:[e.jsxs("label",{htmlFor:"excelUpload",className:"label",children:[e.jsx("span",{className:"btn",children:"업로드 파일 선택"}),e.jsx("span",{className:"txt",children:"또는 여기에 끌어서 놓기"})]}),e.jsx("input",{type:"file",id:"excelUpload"})]})]})]})]}),U2=n.div`
  width: 100%;
  padding: 48px 16px 64px;
  background-color: rgba(18, 18, 18, 1);
  border-radius: 5px;
  @media (max-width: 1024px) {
    padding: 32px 16px 40px;
  }
  & h3 {
    padding-left: 20px;
    font-weight: 700;
    font-size: 32px;
    @media (max-width: 1024px) {
      padding-left: 0;
      font-size: 20px;
    }
  }
  & .apply_desc {
    padding: 37px 30px 46px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 1024px) {
      padding: 16px 0 40px;
    }
  }
  & .apply_desc .type {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    & .tit {
      font-size: 24px;
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
    & .info {
      font-weight: 700;
      font-size: 32px;
      @media (max-width: 1024px) {
        font-size: 24px;
      }
    }
  }
  & .all_chk {
    padding: 0 20px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      padding: 0 0 16px;
    }
  }
  & .all_chk label {
    padding-left: 35px;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
  & .agree_list {
    padding: 42px 20px 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1024px) {
      padding: 20px 0 60px;
    }
  }
  & .agree_list label {
    padding-left: 35px;
  }
  & .agree_list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .link a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    font-weight: 500;
    text-decoration: underline;
  }

  & .submit_btn {
    text-align: center;
    & button {
      min-width: 290px;
      padding: 20px 10px;
      background-color: rgba(49, 111, 233, 1);
      border-radius: 50rem;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
  }
`,q2=({pageState:i})=>e.jsxs(U2,{children:[e.jsx("h3",{children:"신청 내용"}),e.jsxs("div",{className:"apply_desc",children:[e.jsxs("div",{className:"type",children:[e.jsx("span",{className:"tit",children:"신청 유형"}),e.jsx("span",{className:"info",children:i==="개인 신청"?"개인 신청":"단체 신청"})]}),e.jsxs("div",{className:"type",children:[e.jsx("span",{className:"tit",children:"신청 비용"}),e.jsx("span",{className:"info",children:"사전등록 무료"})]})]}),e.jsx("div",{className:"all_chk",children:e.jsx(j,{label:"전체 동의하기",id:"allChk"})}),e.jsxs("div",{className:"agree_list",children:[e.jsxs("div",{children:[e.jsx(j,{label:"(필수) 성별 생년 정보 제공 동의",id:"agree1"}),e.jsx("p",{className:"link",children:e.jsx(r,{to:"/gender-birth-information",target:"blank_",children:"자세히 보기"})})]}),e.jsxs("div",{children:[e.jsx(j,{label:"(필수) 개인정보 수집 이용 동의",id:"agree2"}),e.jsx("p",{className:"link",children:e.jsx(r,{to:"/personal-information",target:"blank_",children:"자세히 보기"})})]}),e.jsxs("div",{children:[e.jsx(j,{label:"(필수) 제 3자 제공 동의",id:"agree3"}),e.jsx("p",{className:"link",children:e.jsx(r,{to:"/onward-transfer",target:"blank_",children:"자세히 보기"})})]}),e.jsxs("div",{children:[e.jsx(j,{label:"(선택) 마케팅 정보 수신 동의",id:"agree4"}),e.jsx("p",{className:"link",children:e.jsx(r,{to:"/markeyting-information",target:"blank_",children:"자세히 보기"})})]})]}),e.jsx("div",{className:"submit_btn",children:e.jsx("button",{children:"사전 신청하기"})})]}),Q2=()=>{const[i,s]=t.useState("개인 신청");return console.log(i),e.jsx(S2,{className:"maxframe",children:e.jsxs(R2,{children:[e.jsxs(A2,{children:[e.jsx(S1,{applyBtn:!1}),e.jsx(B2,{children:e.jsx(J2,{pageState:i,setPageState:s})})]}),e.jsx(I2,{children:e.jsx(q2,{pageState:i})})]})})},G2=i=>t.createElement("svg",{width:283,height:69,viewBox:"0 0 283 69",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("path",{d:"M282.338 68.0001H254.285V30.6667H281.645V38.4534H263.565V45.2801H279.565V52.8534H263.565V60.1601H282.338V68.0001Z",fill:"white"}),t.createElement("path",{d:"M220.211 38.6134V30.6667H251.624V38.6134H240.584V68.0001H231.304V38.6134H220.211Z",fill:"white"}),t.createElement("path",{d:"M196.112 60.4801L193.232 68.0001H183.685L199.472 30.6667H208.645L224.379 68.0001H214.672L211.792 60.4801H196.112ZM203.952 40.2134L199.045 53.0667H208.859L203.952 40.2134Z",fill:"white"}),t.createElement("path",{d:"M173.331 47.4667L163.731 64.2667H159.571L150.077 48.0001V68.0001H141.384V30.6667H149.064L161.811 52.7467L174.344 30.6667H182.024L182.077 68.0001H173.384L173.331 47.4667Z",fill:"white"}),t.createElement("path",{d:"M126.479 68.0001H98.4255V30.6667H125.786V38.4534H107.706V45.2801H123.706V52.8534H107.706V60.1601H126.479V68.0001Z",fill:"white"}),t.createElement("path",{d:"M79.8737 68.6934C76.2114 68.6934 72.9048 67.8756 69.9537 66.2401C67.0025 64.569 64.6914 62.2579 63.0203 59.3067C61.3492 56.3556 60.5137 53.0312 60.5137 49.3334C60.5137 45.6356 61.3492 42.3112 63.0203 39.3601C64.727 36.409 67.0559 34.1156 70.007 32.4801C72.9581 30.809 76.2648 29.9734 79.927 29.9734C83.0914 29.9734 85.9537 30.5778 88.5137 31.7867C91.1092 32.9601 93.2426 34.649 94.9137 36.8534L88.9403 42.6134C86.6292 39.6978 83.7848 38.2401 80.407 38.2401C78.3803 38.2401 76.567 38.7023 74.967 39.6267C73.4025 40.5512 72.1759 41.8667 71.287 43.5734C70.3981 45.2445 69.9537 47.1645 69.9537 49.3334C69.9537 51.5023 70.3981 53.4223 71.287 55.0934C72.1759 56.7645 73.4025 58.0623 74.967 58.9867C76.567 59.9112 78.3803 60.3734 80.407 60.3734C83.8203 60.3734 86.6648 58.9156 88.9403 56.0001L94.9137 61.7601C93.2426 64.0001 91.1092 65.7245 88.5137 66.9334C85.9537 68.1067 83.0737 68.6934 79.8737 68.6934Z",fill:"white"}),t.createElement("path",{d:"M56.4453 30.6667V68.0001H47.1653V30.6667H56.4453Z",fill:"white"}),t.createElement("path",{d:"M32.3307 47.4667L22.7307 64.2667H18.5708L9.07742 48.0001V68.0001H0.384083V30.6667H8.06408L20.8107 52.7467L33.3441 30.6667H41.0241L41.0774 68.0001H32.3841L32.3307 47.4667Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M282.338 68.0001V60.1601H263.565V52.8534H279.565V45.2801H263.565V38.4534H281.645V30.6667H254.285V68.0001H282.338ZM263.765 38.6534H281.845V30.4667H254.085V68.2001H282.538V59.9601H263.765V53.0534H279.765V45.0801H263.765V38.6534Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M220.211 38.6134H231.304V68.0001H240.584V38.6134H251.624V30.6667H220.211V38.6134ZM240.784 38.8134H251.824V30.4667H220.011V38.8134H231.104V68.2001H240.784V38.8134Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M193.232 68.0001L196.112 60.4801H211.792L214.672 68.0001H224.379L208.645 30.6667H199.472L183.685 68.0001H193.232ZM211.654 60.6801L214.534 68.2001H224.68L208.778 30.4667H199.339L183.384 68.2001H193.37L196.25 60.6801H211.654ZM203.952 40.2134L208.859 53.0667H199.045L203.952 40.2134ZM203.952 40.7742L199.336 52.8667H208.568L203.952 40.7742Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M173.331 47.4667L173.384 68.0001H182.077L182.024 30.6667H174.344L161.811 52.7467L149.064 30.6667H141.384V68.0001H150.077V48.0001L159.571 64.2667H163.731L173.331 47.4667ZM173.133 48.2165L173.185 68.2001H182.278L182.224 30.4667H174.228L161.809 52.3442L149.18 30.4667H141.184V68.2001H150.277V48.7396L159.456 64.4667H163.847L173.133 48.2165Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M126.479 68.0001V60.1601H107.706V52.8534H123.706V45.2801H107.706V38.4534H125.786V30.6667H98.4255V68.0001H126.479ZM107.906 38.6534H125.986V30.4667H98.2255V68.2001H126.679V59.9601H107.906V53.0534H123.906V45.0801H107.906V38.6534Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M69.8567 66.415L69.8551 66.4141C66.8725 64.7251 64.5353 62.3879 62.8463 59.4053C61.1567 56.4214 60.3137 53.0625 60.3137 49.3334C60.3137 45.6043 61.1567 42.2454 62.8463 39.2615L62.8472 39.2599C64.5717 36.278 66.9266 33.9587 69.9095 32.3054C72.8928 30.6164 76.2335 29.7734 79.927 29.7734C83.1168 29.7734 86.0082 30.3827 88.5975 31.6051C91.2218 32.7918 93.3815 34.5012 95.073 36.7326L95.1803 36.8741L88.9205 42.9104L88.7836 42.7376C86.506 39.8644 83.717 38.4401 80.407 38.4401C78.4124 38.4401 76.6345 38.8945 75.068 39.7993C73.538 40.7036 72.3369 41.9905 71.4644 43.6658L71.4636 43.6673C70.5922 45.3055 70.1537 47.1925 70.1537 49.3334C70.1537 51.4744 70.5922 53.3613 71.4636 54.9995C72.3358 56.6393 73.5369 57.9092 75.068 58.8141C76.6345 59.719 78.4124 60.1734 80.407 60.1734C83.753 60.1734 86.5414 58.7487 88.7827 55.877L88.9193 55.702L95.1793 61.7384L95.074 61.8797C93.3826 64.1469 91.2229 65.8922 88.5981 67.1147L88.597 67.1152C86.0075 68.3021 83.0985 68.8934 79.8737 68.8934C76.1805 68.8934 72.84 68.0684 69.8567 66.415ZM74.967 58.9867C73.4025 58.0623 72.1759 56.7645 71.287 55.0934C70.3981 53.4223 69.9537 51.5023 69.9537 49.3334C69.9537 47.1645 70.3981 45.2445 71.287 43.5734C72.1759 41.8667 73.4025 40.5512 74.967 39.6267C76.567 38.7023 78.3803 38.2401 80.407 38.2401C83.7238 38.2401 86.5263 39.6457 88.8146 42.4568C88.8567 42.5085 88.8986 42.5607 88.9403 42.6134L94.9137 36.8534C93.2426 34.649 91.1092 32.9601 88.5137 31.7867C85.9537 30.5778 83.0914 29.9734 79.927 29.9734C76.2648 29.9734 72.9581 30.809 70.007 32.4801C67.0559 34.1156 64.727 36.409 63.0203 39.3601C61.3492 42.3112 60.5137 45.6356 60.5137 49.3334C60.5137 53.0312 61.3492 56.3556 63.0203 59.3067C64.6914 62.2579 67.0025 64.569 69.9537 66.2401C72.9048 67.8756 76.2114 68.6934 79.8737 68.6934C83.0737 68.6934 85.9537 68.1067 88.5137 66.9334C91.1092 65.7245 93.2426 64.0001 94.9137 61.7601L88.9403 56.0001C88.899 56.0531 88.8574 56.1056 88.8156 56.1577C86.5611 58.9682 83.7583 60.3734 80.407 60.3734C78.3803 60.3734 76.567 59.9112 74.967 58.9867Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56.4453 30.6667H47.1653V68.0001H56.4453V30.6667ZM56.6453 30.4667V68.2001H46.9653V30.4667H56.6453Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.3307 47.4667L32.3841 68.0001H41.0774L41.0241 30.6667H33.3441L20.8107 52.7467L8.06408 30.6667H0.384083V68.0001H9.07742V48.0001L18.5708 64.2667H22.7307L32.3307 47.4667ZM32.1327 48.2164L32.1846 68.2001H41.2777L41.2238 30.4667H33.2276L20.8093 52.3442L8.17956 30.4667H0.184082V68.2001H9.27741V48.7396L18.4559 64.4667H22.8468L32.1327 48.2164Z",fill:"white"}),t.createElement("path",{d:"M179.241 14.9467V2.4134H195.428V3.1334H179.935V8.30674H195.268V9.02674H179.935V14.2267H195.801V14.9467H179.241ZM196.895 20.6534H177.695V19.9601H196.895V20.6534Z",fill:"white"}),t.createElement("path",{d:"M173.431 21.9067V1.42674H174.178V21.9067H173.431ZM163.351 2.12007C164.453 2.12007 165.431 2.46674 166.284 3.16007C167.138 3.8534 167.804 4.8934 168.284 6.28007C168.764 7.66674 169.004 9.38229 169.004 11.4267C169.004 13.4712 168.764 15.1867 168.284 16.5734C167.804 17.9601 167.138 19.0001 166.284 19.6934C165.431 20.3867 164.453 20.7334 163.351 20.7334C162.231 20.7334 161.244 20.3867 160.391 19.6934C159.538 19.0001 158.871 17.9601 158.391 16.5734C157.911 15.1867 157.671 13.4712 157.671 11.4267C157.671 9.38229 157.911 7.66674 158.391 6.28007C158.871 4.8934 159.538 3.8534 160.391 3.16007C161.244 2.46674 162.231 2.12007 163.351 2.12007ZM163.351 2.84007C162.391 2.84007 161.538 3.16007 160.791 3.80007C160.044 4.44007 159.458 5.40896 159.031 6.70674C158.604 7.98674 158.391 9.56007 158.391 11.4267C158.391 13.2934 158.604 14.8756 159.031 16.1734C159.458 17.4534 160.044 18.4134 160.791 19.0534C161.538 19.6934 162.391 20.0134 163.351 20.0134C164.293 20.0134 165.129 19.6934 165.858 19.0534C166.586 18.4134 167.164 17.4534 167.591 16.1734C168.018 14.8756 168.231 13.2934 168.231 11.4267C168.231 9.56007 168.018 7.98674 167.591 6.70674C167.164 5.40896 166.586 4.44007 165.858 3.80007C165.129 3.16007 164.293 2.84007 163.351 2.84007Z",fill:"white"}),t.createElement("path",{d:"M153.567 21.9067H152.82V1.42674H153.567V21.9067ZM149.034 1.56007V21.5601H148.287V11.0801H144.18V20.4134H136.314V2.4134H144.18V10.3867H148.287V1.56007H149.034ZM137.034 3.1334V19.7201H143.434V3.1334H137.034Z",fill:"white"}),t.createElement("path",{d:"M123.543 7.2934C122.441 9.35563 121.108 11.009 119.543 12.2534C117.979 13.4978 116.37 14.1201 114.716 14.1201V13.4001C116.192 13.4001 117.614 12.8578 118.983 11.7734C120.37 10.6712 121.561 9.22229 122.556 7.42674C123.57 5.63118 124.299 3.71118 124.743 1.66674L125.516 1.90674C125.108 3.63118 124.548 5.22229 123.836 6.68007L132.69 13.6401L132.236 14.1467L123.543 7.2934ZM133.543 19.9601V20.6534H114.343V19.9601H133.543Z",fill:"white"}),t.createElement("path",{d:"M110.079 21.9067V1.42674H110.826V21.9067H110.079ZM99.9993 2.12007C101.102 2.12007 102.079 2.46674 102.933 3.16007C103.786 3.8534 104.453 4.8934 104.933 6.28007C105.413 7.66674 105.653 9.38229 105.653 11.4267C105.653 13.4712 105.413 15.1867 104.933 16.5734C104.453 17.9601 103.786 19.0001 102.933 19.6934C102.079 20.3867 101.102 20.7334 99.9993 20.7334C98.8793 20.7334 97.8926 20.3867 97.0393 19.6934C96.186 19.0001 95.5193 17.9601 95.0393 16.5734C94.5593 15.1867 94.3193 13.4712 94.3193 11.4267C94.3193 9.38229 94.5593 7.66674 95.0393 6.28007C95.5193 4.8934 96.186 3.8534 97.0393 3.16007C97.8926 2.46674 98.8793 2.12007 99.9993 2.12007ZM99.9993 2.84007C99.0393 2.84007 98.186 3.16007 97.4393 3.80007C96.6926 4.44007 96.106 5.40896 95.6793 6.70674C95.2526 7.98674 95.0393 9.56007 95.0393 11.4267C95.0393 13.2934 95.2526 14.8756 95.6793 16.1734C96.106 17.4534 96.6926 18.4134 97.4393 19.0534C98.186 19.6934 99.0393 20.0134 99.9993 20.0134C100.942 20.0134 101.777 19.6934 102.506 19.0534C103.235 18.4134 103.813 17.4534 104.239 16.1734C104.666 14.8756 104.879 13.2934 104.879 11.4267C104.879 9.56007 104.666 7.98674 104.239 6.70674C103.813 5.40896 103.235 4.44007 102.506 3.80007C101.777 3.16007 100.942 2.84007 99.9993 2.84007Z",fill:"white"}),t.createElement("path",{d:"M89.1221 11.1867V21.9067H88.4021V1.42674H89.1221V10.5201H92.2954V11.1867H89.1221ZM83.6021 2.4134V20.4134H73.2821V2.4134H83.6021ZM82.9354 19.7201V3.1334H74.0021V19.7201H82.9354Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M179.241 14.9467H195.801V14.2267H179.935V9.02674H195.268V8.30674H179.935V3.1334H195.428V2.4134H179.241V14.9467ZM180.72 3.91854H196.213V1.62827H178.456V15.7319H196.587V13.4416H180.72V9.81187H196.053V7.5216H180.72V3.91854ZM196.895 20.6534V19.9601H177.695V20.6534H196.895ZM197.68 21.4385H176.91V19.1749H197.68V21.4385Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M172.646 22.6919V0.641602H174.963V22.6919H172.646ZM159.777 6.95195L159.776 6.95502C159.384 8.13081 159.176 9.61455 159.176 11.4267C159.176 13.2375 159.383 14.7311 159.776 15.9264C160.174 17.1189 160.696 17.9384 161.302 18.4573C161.91 18.9786 162.583 19.2283 163.351 19.2283C164.096 19.2283 164.749 18.9817 165.339 18.4634C165.93 17.9447 166.446 17.1236 166.845 15.928C167.238 14.7324 167.446 13.2383 167.446 11.4267C167.446 9.61455 167.238 8.13081 166.846 6.95502L166.845 6.95195C166.445 5.73571 165.929 4.90726 165.339 4.39005C164.749 3.87177 164.096 3.62521 163.351 3.62521C162.583 3.62521 161.91 3.8749 161.302 4.39619C160.698 4.91335 160.175 5.73967 159.777 6.95195ZM167.564 16.2527C167.398 16.7382 167.21 17.1767 167 17.5682C166.673 18.1769 166.292 18.672 165.858 19.0534C165.839 19.0694 165.821 19.0852 165.803 19.1008C165.087 19.7092 164.27 20.0134 163.351 20.0134C162.421 20.0134 161.592 19.7134 160.862 19.1133C160.838 19.0937 160.815 19.0737 160.791 19.0534C160.076 18.4403 159.507 17.5335 159.085 16.333C159.067 16.2803 159.049 16.2272 159.031 16.1734C158.604 14.8756 158.391 13.2934 158.391 11.4267C158.391 9.56007 158.604 7.98674 159.031 6.70674C159.051 6.64479 159.072 6.58359 159.093 6.52314C159.514 5.31721 160.08 4.40952 160.791 3.80007C160.815 3.77978 160.838 3.75981 160.862 3.74017C161.592 3.1401 162.421 2.84007 163.351 2.84007C164.27 2.84007 165.087 3.14428 165.803 3.7527C165.821 3.76829 165.839 3.78408 165.858 3.80007C166.173 4.0772 166.46 4.416 166.719 4.81646C167.058 5.34083 167.349 5.97092 167.591 6.70674C167.698 7.02792 167.792 7.36757 167.872 7.72569C168.111 8.79478 168.231 10.0285 168.231 11.4267C168.231 13.2934 168.018 14.8756 167.591 16.1734C167.582 16.2 167.573 16.2264 167.564 16.2527ZM167.377 4.38789C167.731 4.92368 168.033 5.55441 168.284 6.28007C168.422 6.67843 168.54 7.10394 168.638 7.55658C168.882 8.67957 169.004 9.96962 169.004 11.4267C169.004 13.3957 168.782 15.0596 168.336 16.4185C168.336 16.4195 168.336 16.4205 168.335 16.4216C168.326 16.4499 168.317 16.4781 168.307 16.5061C168.3 16.5286 168.292 16.5511 168.284 16.5734C168.111 17.0729 167.914 17.5274 167.693 17.9369C167.319 18.6293 166.875 19.1932 166.362 19.6284C166.336 19.6504 166.31 19.6721 166.284 19.6934C165.431 20.3867 164.453 20.7334 163.351 20.7334C162.231 20.7334 161.244 20.3867 160.391 19.6934C160.362 19.6697 160.333 19.6457 160.304 19.6212C159.492 18.9287 158.854 17.9128 158.391 16.5734C158.372 16.518 158.353 16.462 158.334 16.4055C158.334 16.4046 158.334 16.4036 158.333 16.4027C157.892 15.0467 157.671 13.3881 157.671 11.4267C157.671 9.477 157.889 7.82639 158.326 6.4749C158.326 6.47393 158.326 6.47296 158.327 6.472C158.348 6.40734 158.369 6.34336 158.391 6.28007C158.854 4.94072 159.492 3.92478 160.304 3.23225C160.333 3.20779 160.362 3.18373 160.391 3.16007C161.244 2.46674 162.231 2.12007 163.351 2.12007C164.453 2.12007 165.431 2.46674 166.284 3.16007C166.31 3.1814 166.336 3.20306 166.362 3.22505C166.738 3.54373 167.076 3.93134 167.377 4.38789ZM173.431 1.42674V21.9067H174.178V1.42674H173.431ZM163.351 1.33493C164.633 1.33493 165.786 1.74336 166.779 2.55072C167.778 3.36228 168.514 4.54336 169.026 6.02324C169.544 7.51795 169.789 9.32661 169.789 11.4267C169.789 13.5269 169.544 15.3355 169.026 16.8302C168.514 18.3101 167.778 19.4912 166.779 20.3028C165.786 21.1101 164.633 21.5185 163.351 21.5185C162.054 21.5185 160.892 21.1121 159.896 20.3028C158.897 19.4912 158.161 18.3101 157.649 16.8302C157.132 15.3355 156.886 13.5269 156.886 11.4267C156.886 9.32661 157.132 7.51795 157.649 6.02324C158.161 4.54336 158.897 3.36228 159.896 2.55072C160.892 1.74139 162.054 1.33493 163.351 1.33493Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M154.352 22.6919H152.035V0.641602H154.352V22.6919ZM149.819 0.774935V22.3452H147.502V11.8652H144.965V21.1985H135.529V1.62827H144.965V9.6016H147.502V0.774935H149.819ZM148.287 21.5601H149.034V1.56007H148.287V10.3867H144.18V2.4134H136.314V20.4134H144.18V11.0801H148.287V21.5601ZM143.434 3.1334H137.034V19.7201H143.434V3.1334ZM142.649 3.91854V18.9349H137.819V3.91854H142.649ZM153.567 21.9067V1.42674H152.82V21.9067H153.567Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M124.812 6.44858C125.423 5.09513 125.912 3.64094 126.28 2.08788L126.45 1.37426L124.158 0.663024L123.976 1.49995C123.548 3.46875 122.847 5.31476 121.873 7.04084L121.87 7.04602C120.917 8.76509 119.789 10.1294 118.496 11.158C117.239 12.1535 115.984 12.6149 114.716 12.6149H113.931V14.9052H114.716C116.582 14.9052 118.359 14.1989 120.032 12.8679C121.477 11.718 122.724 10.2498 123.777 8.47743L132.33 15.22L133.833 13.54L124.812 6.44858ZM123.155 7.98695C123.267 7.79587 123.377 7.60094 123.485 7.40215C123.504 7.36603 123.524 7.32978 123.543 7.2934L132.236 14.1467L132.69 13.6401L123.836 6.68007C123.855 6.64271 123.873 6.60527 123.891 6.56774C124.576 5.14066 125.118 3.58699 125.516 1.90674L124.743 1.66674C124.687 1.92398 124.627 2.17925 124.562 2.43255C124.111 4.19238 123.442 5.85711 122.556 7.42674C122.404 7.70118 122.248 7.96751 122.086 8.22575C121.22 9.61279 120.222 10.7662 119.092 11.686C119.056 11.7154 119.019 11.7445 118.983 11.7734C117.614 12.8578 116.192 13.4001 114.716 13.4001V14.1201C114.979 14.1201 115.241 14.1043 115.502 14.0729C116.842 13.9112 118.152 13.3337 119.432 12.3404C119.433 12.3402 119.433 12.34 119.433 12.3397C119.47 12.3113 119.507 12.2825 119.543 12.2534C120.75 11.2934 121.819 10.0901 122.751 8.64347C122.889 8.42993 123.023 8.21109 123.155 7.98695ZM134.328 19.1749V21.4385H113.558V19.1749H134.328ZM133.543 19.9601H114.343V20.6534H133.543V19.9601Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M109.294 22.6919V0.641602H111.611V22.6919H109.294ZM96.4252 6.95195L96.4241 6.95502C96.0322 8.13081 95.8244 9.61455 95.8244 11.4267C95.8244 13.2379 96.032 14.7317 96.4248 15.9272C96.8225 17.1193 97.345 17.9385 97.9502 18.4573C98.5584 18.9786 99.2317 19.2283 99.9993 19.2283C100.745 19.2283 101.398 18.9817 101.988 18.4634C102.579 17.9444 103.095 17.1229 103.494 15.9264C103.887 14.7311 104.094 13.2375 104.094 11.4267C104.094 9.61455 103.886 8.13081 103.494 6.95502L103.493 6.95195C103.094 5.73571 102.577 4.90726 101.988 4.39005C101.398 3.87177 100.745 3.62521 99.9993 3.62521C99.2317 3.62521 98.5584 3.8749 97.9502 4.39619C97.3469 4.91335 96.8237 5.73967 96.4252 6.95195ZM104.212 16.2536C104.046 16.7391 103.858 17.1776 103.648 17.5691C103.321 18.1774 102.94 18.6722 102.506 19.0534C102.488 19.0694 102.469 19.0852 102.451 19.1008C101.735 19.7092 100.918 20.0134 99.9993 20.0134C99.0697 20.0134 98.2402 19.7134 97.5106 19.1133C97.4867 19.0937 97.463 19.0737 97.4393 19.0534C96.724 18.4403 96.1555 17.5335 95.7339 16.333C95.7154 16.2803 95.6972 16.2272 95.6793 16.1734C95.2526 14.8756 95.0393 13.2934 95.0393 11.4267C95.0393 9.56007 95.2526 7.98674 95.6793 6.70674C95.6997 6.64479 95.7204 6.58359 95.7415 6.52314C96.1623 5.31721 96.7283 4.40952 97.4393 3.80007C97.463 3.77978 97.4867 3.75982 97.5106 3.74017C98.2402 3.1401 99.0697 2.84007 99.9993 2.84007C100.918 2.84007 101.735 3.14428 102.451 3.75269C102.469 3.76828 102.488 3.78408 102.506 3.80007C102.822 4.07727 103.109 4.41618 103.368 4.81678C103.707 5.34108 103.997 5.97107 104.239 6.70674C104.346 7.02786 104.44 7.36745 104.52 7.7255C104.76 8.79463 104.879 10.0284 104.879 11.4267C104.879 13.2934 104.666 14.8756 104.239 16.1734C104.23 16.2003 104.221 16.227 104.212 16.2536ZM104.027 4.38952C104.38 4.92496 104.682 5.55514 104.933 6.28007C105.071 6.67849 105.189 7.10407 105.287 7.55679C105.531 8.67973 105.653 9.96971 105.653 11.4267C105.653 13.3957 105.43 15.0596 104.985 16.4185C104.984 16.4195 104.984 16.4205 104.984 16.4216C104.975 16.4496 104.965 16.4774 104.956 16.5052C104.948 16.528 104.94 16.5507 104.933 16.5734C104.76 17.0731 104.562 17.5278 104.341 17.9374C103.967 18.6296 103.523 19.1933 103.011 19.6284C102.985 19.6504 102.959 19.6721 102.933 19.6934C102.079 20.3867 101.102 20.7334 99.9993 20.7334C98.8793 20.7334 97.8926 20.3867 97.0393 19.6934C97.0102 19.6697 96.9813 19.6457 96.9526 19.6212C96.1407 18.9287 95.5029 17.9128 95.0393 16.5734C95.0201 16.518 95.0013 16.462 94.9829 16.4055C94.9826 16.4046 94.9823 16.4036 94.9819 16.4027C94.5402 15.0467 94.3193 13.3881 94.3193 11.4267C94.3193 9.477 94.5376 7.82639 94.9741 6.4749C94.9744 6.47393 94.9748 6.47297 94.9751 6.472C94.996 6.40734 95.0174 6.34336 95.0393 6.28007C95.5029 4.94072 96.1407 3.92478 96.9526 3.23225C96.9813 3.20779 97.0102 3.18373 97.0393 3.16007C97.8926 2.46674 98.8793 2.12007 99.9993 2.12007C101.102 2.12007 102.079 2.46674 102.933 3.16007C102.959 3.1814 102.985 3.20306 103.011 3.22505C103.387 3.54411 103.725 3.93227 104.027 4.38952ZM110.079 1.42674V21.9067H110.826V1.42674H110.079ZM99.9993 1.33493C101.281 1.33493 102.434 1.74336 103.428 2.55072C104.427 3.36228 105.162 4.54336 105.675 6.02324C106.192 7.51795 106.438 9.32661 106.438 11.4267C106.438 13.5269 106.192 15.3355 105.675 16.8302C105.162 18.3101 104.427 19.4912 103.428 20.3028C102.434 21.1101 101.281 21.5185 99.9993 21.5185C98.7026 21.5185 97.5403 21.1121 96.5442 20.3028C95.5453 19.4912 94.8096 18.3101 94.2973 16.8302C93.78 15.3355 93.5342 13.5269 93.5342 11.4267C93.5342 9.32661 93.78 7.51795 94.2973 6.02324C94.8096 4.54336 95.5453 3.36228 96.5442 2.55072C97.5403 1.74139 98.7026 1.33493 99.9993 1.33493Z",fill:"white"}),t.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M88.4021 21.9067H89.1221V11.1867H92.2954V10.5201H89.1221V1.42674H88.4021V21.9067ZM89.9072 9.73494V0.641602H87.617V22.6919H89.9072V11.9719H93.0806V9.73494H89.9072ZM84.3872 1.62827V21.1985H72.497V1.62827H84.3872ZM82.1503 3.91854H74.7872V18.9349H82.1503V3.91854ZM74.0021 3.1334H82.9354V19.7201H74.0021V3.1334ZM83.6021 2.4134H73.2821V20.4134H83.6021V2.4134Z",fill:"white"})),X2=n.div`
  min-height: 70vh;
  padding-top: 200px;
  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 70px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div {
    text-align: center;
    word-break: keep-all;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  & .logo {
    padding-bottom: 40px;
    @media (max-width: 1024px) {
      padding-bottom: 20px;
    }
  }

  & .msg {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 80px;
    @media (max-width: 1024px) {
      font-size: 24px;
      padding-bottom: 40px;
    }
  }

  & .link_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    & .home {
      color: #fff;
    }
    & .apply_list {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,K2=()=>e.jsx(X2,{children:e.jsxs("div",{children:[e.jsx("p",{className:"logo",children:e.jsx(G2,{})}),e.jsx("p",{className:"msg",children:"행사 신청이 완료되었습니다"}),e.jsxs("div",{className:"link_box",children:[e.jsx("span",{className:"home",children:e.jsx(r,{to:"/",children:"홈으로 돌아가기"})}),e.jsx("span",{className:"apply_list",children:e.jsx(r,{to:"/mypage/apply-list",children:"신청 내역 확인하기 >"})})]})]})}),$2=n.div`
  position: relative;
  padding: 0 0 97px;
  margin-bottom: 100px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding: 0 0 24px;
    margin-bottom: 80px;
  }
`,e0=n.div`
  padding: 30px 120px 82px;
  @media (max-width: 1700px) {
    padding: 30px 50px 82px;
  }
  @media (max-width: 1400px) {
    padding: 30px 30px 82px;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px;
  }
`,i0=n.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100px;
  @media (max-width: 1024px) {
    min-height: auto;
  }
  & .main_title {
    font-size: 40px;
    font-weight: 700;
    padding-right: 26px;
    @media (max-width: 1024px) {
      font-size: 20px;
      padding-right: 12px;
    }
  }
`,t0=n.div`
  position: absolute;
  left: 250px;
  width: 450px;
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 10px;
  z-index: 10;
  @media (max-width: 1400px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 310px;
    padding: 10px 15px 20px;
    left: 30px;
    top: 25px;
  }
  @media (max-width: 400px) {
    left: 0;
    width: 100%;
  }
  & span {
    font-weight: 500;
    display: block;
    font-size: 12px;
    color: #000;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  & .tit {
    font-weight: 600;
    padding-bottom: 8px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`,n0=n.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  word-break: keep-all;
  @media (max-width: 1024px) {
    padding-top: 12px;
    font-size: 13px;
  }
`,s0=n.div`
  position: relative;
  & > .booth_list_swiper {
    padding: 0 120px;
    @media (max-width: 1700px) {
      padding: 0 50px;
    }
    @media (max-width: 1400px) {
      padding: 0 30px 160px;
    }
    @media (max-width: 1024px) {
      padding: 0 12px 74px;
    }
  }
  & > .booth_list_swiper::before,
  & > .booth_list_swiper::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #15171c;
    width: 120px;
    z-index: 2;
    @media (max-width: 1700px) {
      width: 50px;
    }
    @media (max-width: 1400px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .booth_list_swiper::before {
    left: 0;
  }
  & > .booth_list_swiper::after {
    right: 0;
  }

  /* navigation */
  & > .booth_list_swiper .swiper-button-prev,
  & > .booth_list_swiper .swiper-button-next {
    width: 64px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    @media (max-width: 1400px) {
      top: var(--swiper-navigation-top-offset, auto);
      bottom: 0;
    }
    @media (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }
  }
  & > .booth_list_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1700px) {
      left: var(--swiper-navigation-sides-offset, 30px);
    }
    @media (max-width: 1024px) {
      left: var(--swiper-navigation-sides-offset, 12px);
    }
  }
  & > .booth_list_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1700px) {
      right: var(--swiper-navigation-sides-offset, 10px);
    }
    @media (max-width: 1400px) {
      right: var(--swiper-navigation-sides-offset, auto);
      left: 200px;
    }
    @media (max-width: 1024px) {
      left: 20%;
    }
  }
  & > .booth_list_swiper .swiper-button-prev::after,
  & > .booth_list_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
      background-size: 95px;
    }
  }
  & > .booth_list_swiper .swiper-button-prev::after {
    background-image: url("./arrow_prev_main.svg");
  }
  & > .booth_list_swiper .swiper-button-next::after {
    background-image: url("./arrow_next_main.svg");
  }
`,a0=n.div`
  padding: 60px 120px 0;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1700px) {
    padding: 60px 60px 0;
  }
  @media (max-width: 1400px) {
    position: absolute;
    right: 30px;
    bottom: 97px;
    padding: 0;
  }
  @media (max-width: 1024px) {
    right: 12px;
    bottom: 20px;
  }
  & a {
    background-color: rgba(35, 94, 243, 1);
    border: 1px solid rgba(11, 12, 55, 1);
    padding: 15px 50px;
    color: #fff;
    border-radius: 10px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`,l0=n.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 22px;
  row-gap: 30px;
  @media (max-width: 1700px) {
    column-gap: 10px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }
`,r0=n.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .title {
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & figure {
    position: relative;
    margin: 10px 0 12px;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 100/100;

    & img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }
  & a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  & .num {
    display: none;
  }
  &.target .num,
  &.outline .num {
    z-index: 10;
    position: absolute;
    left: -12px;
    top: 12px;
    background-color: rgba(30, 158, 255, 1);
    display: block;
    z-index: 1;
    width: 46px;
    height: 46px;
    border-radius: 50rem;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1700px) {
      width: 40px;
      height: 40px;
      font-size: 20px;
      left: -5px;
      top: 15px;
    }
    @media (max-width: 1024px) {
      width: 24px;
      height: 24px;
      font-size: 16px;
      left: -3px;
      top: 17px;
    }
  }
  &.target figure {
    border: 10px solid rgba(30, 158, 255, 1);
    @media (max-width: 1024px) {
      border: 4px solid rgba(30, 158, 255, 1);
    }
    & img {
      width: 110%;
    }
  }
`,d0=()=>e.jsx(l0,{children:Array.from({length:21}).map((i,s)=>{let l="";return s===3?l="target":[10,15,18,20].includes(s)&&(l="outline"),e.jsxs(r0,{className:l,children:[e.jsx("span",{className:"num",children:s===3?1:s==10?2:s===15?3:s===18?4:s===20?5:""}),e.jsx("p",{className:"title",children:"로이카 E-18"}),e.jsx("figure",{children:e.jsx("img",{src:"./dummy_image_02.png",alt:"로이카 E-18"})}),e.jsx(r,{to:"",children:"홈페이지 바로가기"})]},s)})}),o0=()=>{const[i,s]=t.useState(!0),l=()=>{s(a=>!a)};return e.jsxs($2,{children:[e.jsxs(e0,{children:[e.jsxs(i0,{children:[e.jsx("span",{className:"main_title",children:"AI 추천 부스"}),e.jsx("button",{onClick:l,className:"offset_btn",children:e.jsx(R1,{})}),i&&e.jsxs(t0,{children:[e.jsx("span",{className:"tit",children:"AI 추천 부스 서비스 이용방법"}),e.jsx("span",{children:"· 기업은 순위대로 5개 이상 골라주셔야 좀 더 정확한 추천이 가능해요."}),e.jsx("span",{children:"· 참가기업에 대한 자세한 정보는 웹페이지를 참고해주세요."})]})]}),e.jsx(n0,{children:"몇 가지 정보만 알려주시면 평균 5개 이상의 추천부스를 받을 수 있어요!"})]}),e.jsx(s0,{children:e.jsx(I,{slidesPerView:1,navigation:!0,modules:[q],spaceBetween:15,loop:!0,breakpoints:{1400:{spaceBetween:10},1700:{spaceBetween:22}},className:"booth_list_swiper",children:Array.from({length:5}).map((a,d)=>e.jsx(O,{children:e.jsx(d0,{})},d))})}),e.jsx(a0,{children:e.jsx(r,{to:"/mypage/apply-list/booth-check/01",children:"다음"})})]})},p0=n.div`
  position: relative;
  padding: 40px 40px 100px;
  margin-bottom: 100px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding: 12px 12px 56px;
    margin-bottom: 60px;
  }
`,x0=n.div`
  width: 100%;
  & img {
    width: 100%;
  }
`,c0=n.div`
  position: absolute;
  top: 40px;
  left: 40px;
  @media (max-width: 1024px) {
    position: static;
  }

  & button {
    font-weight: 700;
    background-color: rgba(13, 110, 253, 1);
    font-size: 24px;
    padding: 12px 55px;
    border-radius: 10px;
    color: #fff;
    @media (max-width: 1200px) {
      padding: 12px 30px;
    }
    @media (max-width: 1024px) {
      margin-top: 24px;
      width: 100%;
      padding: 17px 10px;
      font-size: 16px;
    }
  }
`,h0=n.div`
  & > div {
    margin-top: 60px;
    @media (max-width: 1024px) {
      margin-top: 32px;
    }
  }
  & .type_title {
    font-weight: 700;
    padding-bottom: 20px;
  }
  & .booth_list {
    display: flex;
    column-gap: 8px;
    row-gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    & > li {
      padding: 10px 15px;
      color: #fff;
      border-radius: 50rem;
    }
  }
  & .booth_list.commend > li {
    background-color: rgba(61, 139, 253, 1);
  }
  & .booth_list.wish > li {
    background-color: rgba(245, 103, 103, 1);
    display: flex;
    gap: 8px;
    align-items: center;
    & .icon {
      width: 15px;
      height: 15px;
      display: block;
      @media (max-width: 1024px) {
        width: 10px;
        height: 10px;
      }
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
`,m0=n.div`
  position: relative;
`,g0=n.form`
  position: relative;
  width: 480px;
  margin-left: auto;
  background-color: rgba(41, 46, 55, 0.7);
  border-radius: ${i=>i.$filter?"25px":"50rem"};
  padding-bottom: ${i=>i.$filter?"40px":"0"};
  margin-bottom: ${i=>i.$filter?"0":"40px"};
  @media (max-width: 1200px) {
    width: 350px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding-bottom: ${i=>i.$filter?"12px":"0"};
    margin-bottom: ${i=>i.$filter?"0":"12px"};
    border-radius: ${i=>i.$filter?"20px":"50rem"};
    border-bottom-left-radius: ${i=>i.$filter?"0":"50rem"};
    border-bottom-right-radius: ${i=>i.$filter?"0":"50rem"};
  }
  & input {
    width: 100%;
    padding: 16px 53px 16px 33px;
    background-color: transparent;
    font-size: 18px;
    color: #fff;
    line-height: 1;
    @media (max-width: 1024px) {
      padding: 12px 43px 12px 16px;
      font-size: 12px;
    }
  }
  & input::placeholder {
    color: #fff;
    font-size: 18px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .search_btn {
    width: 23px;
    height: 23px;
    position: absolute;
    right: 28px;
    top: 16px;
    & svg {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
      right: 15px;
      top: 10px;
    }
  }
`,f0=n.div`
  width: 100%;
  padding: 30px 33px;
  position: absolute;
  background-color: rgba(41, 46, 55, 1);
  border-radius: 20px;
  left: 50%;
  top: 50;
  transform: translateX(-50%);
  font-size: 16px;
  z-index: 5;
  @media (max-width: 1024px) {
    border-radius: 15px;
    padding: 25px 16px;
  }
  & .title {
    color: #fff;
    font-weight: 700;
    flex: 0 0 auto;
  }
`,w0=n.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 24px;
  }
`,D=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .text {
    font-weight: 600;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .add_btn {
    background-color: rgba(245, 103, 103, 1);
    display: block;
    border-radius: 50rem;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`,j0=()=>{const[i,s]=t.useState(""),[l,a]=t.useState(!1),d=t.useRef(null),o=z("(max-width: 1024px)"),p=()=>{a(!0),o===!0&&(document.body.style.overflow="hidden")},x=()=>{a(!1),o===!0&&(document.body.style.overflow="auto")};return e.jsx(m0,{children:e.jsxs(g0,{$filter:l,children:[e.jsx("input",{type:"text",placeholder:"방문하고싶은 부스를 검색해보세요!",onChange:c=>{s(c.target.value)},value:i,onFocus:p,onBlur:x}),e.jsx("button",{className:"search_btn",children:e.jsx(i1,{})}),l&&e.jsx(f0,{ref:d,children:e.jsxs(w0,{children:[e.jsxs(D,{children:[e.jsx("span",{className:"text",children:"마인즈그라운드"}),e.jsx("button",{className:"add_btn",children:"관심부스추가"})]}),e.jsxs(D,{children:[e.jsx("span",{className:"text",children:"마인즈그라운드"}),e.jsx("button",{className:"add_btn",children:"관심부스추가"})]}),e.jsxs(D,{children:[e.jsx("span",{className:"text",children:"마인즈그라운드"}),e.jsx("button",{className:"add_btn",children:"관심부스추가"})]})]})})]})})},u0=()=>e.jsxs(p0,{children:[e.jsx(j0,{}),e.jsx(x0,{children:e.jsx("img",{src:"./booth.png"})}),e.jsx(c0,{children:e.jsx("button",{children:"AI 추천 부스 확인"})}),e.jsxs(h0,{children:[e.jsxs("div",{children:[e.jsx("p",{className:"type_title",children:"추천 부스 리스트"}),e.jsxs("ul",{className:"booth_list commend",children:[e.jsx("li",{children:"A-02 네츄럴코어"}),e.jsx("li",{children:"A-11 분독"}),e.jsx("li",{children:"B-12 메이드인랩"}),e.jsx("li",{children:"A-11 분독"}),e.jsx("li",{children:"B-12 메이드인랩"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"type_title",children:"관심 부스 리스트"}),e.jsx("ul",{className:"booth_list wish",children:e.jsxs("li",{children:[e.jsx("span",{children:"A-02 마인즈그라운드"}),e.jsx("span",{className:"icon",children:e.jsx($,{})})]})})]})]})]}),b0=n.div`
  position: relative;
  padding: 50px 140px 280px 140px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  margin-bottom: 160px;
  @media (max-width: 1400px) {
    padding: 50px 70px 280px 70px;
  }
  @media (max-width: 1024px) {
    padding: 24px 14px 80px;
    margin-bottom: 80px;
  }
  & .title {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      font-size: 18px;
      padding-bottom: 24px;
    }
  }
  & .info_box {
    padding: 36px 0 100px;
    line-height: 2;
    word-break: keep-all;
    @media (max-width: 1024px) {
      padding: 24px 0 50px;
      font-size: 14px;
    }
  }

  & .chk_wrap {
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
    & label {
      padding-left: 30px;
    }
  }

  & .btn_area {
    position: absolute;
    bottom: 67px;
    right: 54px;
    @media (max-width: 1024px) {
      position: static;
    }
    & .err_txt {
      color: rgba(245, 103, 103, 1);
      font-size: 16px;
      font-weight: 500;
      padding-right: 24px;
      @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 1.2;
        word-break: keep-all;
      }
    }
    & button,
    & a {
      padding: 15px 40px;
      background-color: rgba(18, 18, 18, 1);
      border: 2px solid rgba(9, 51, 140, 1);
      color: #fff;
      font-size: 16px;
      border-radius: 10px;
      @media (max-width: 1024px) {
        margin-top: 30px;
        width: 100%;
      }
    }
  }
`,C0=()=>e.jsxs(b0,{children:[e.jsx("div",{className:"title",children:"그 동안 서비스를 이용해주셔서 감사합니다."}),e.jsxs("div",{className:"info_box",children:["- 회원탈퇴 신청 시, 회원님 이메일 아이디로 즉시 탈퇴 처리가 진행됩니다.",e.jsx("br",{}),"- 회원가입 시, 입력한 회원정보는 모두 삭제됩니다.",e.jsx("br",{}),"- 회원탈퇴가 완료된 이메일은 본인을 포함한 타인 모두 재사용이나 복구가 불가능합니다.",e.jsx("br",{}),"- 회원탈퇴 완료 후, 삭제된 행사와 접수내역의 데이터는 복구되지 않습니다.",e.jsx("br",{}),"- 등록한 행사나 참가한 행사 중에 진행중인 행사가 있을 시, 탈퇴가 불가능합니다. 행사 내역 삭제나 취소를 후에 탈퇴 부탁드립니다."]}),e.jsx("div",{className:"chk_wrap",children:e.jsx(j,{label:"안내사항을 모두 확인하였으며, 이에 동의합니다.",id:"agree01"})}),e.jsxs("div",{className:"btn_area",children:[e.jsx("span",{className:"err_txt",children:"참가한 행사가 존재합니다. [마이페이지 >신청 행사 내역]에서 취소해주세요."}),e.jsx(r,{to:"/with-draw-finish",children:"탈퇴하기"})]})]}),v0=n.div`
  min-height: 70vh;
  padding-top: 200px;
  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 70px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .desc_box {
    text-align: center;
    word-break: keep-all;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    @media (max-width: 1024px) {
      gap: 10px;
    }
    & span:first-child {
      font-size: 24px;
      font-weight: 700;
      @media (max-width: 1024px) {
        font-size: 18px;
      }
    }
    & span:last-child {
      font-size: 16px;
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }
  & a {
    display: block;
    margin-top: 44px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
`,y0=()=>e.jsx(v0,{children:e.jsxs("p",{className:"desc_box",children:[e.jsx("span",{children:"탈퇴가 완료되었습니다."}),e.jsx("span",{children:"그 동안 서비스를 이용해주셔서 감사합니다."}),e.jsx(r,{to:"/",children:"홈으로 돌아가기"})]})}),k0=n.form`
  max-width: 584px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`,N0=n.figure`
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 584/328;
  border-radius: 10px;
  & img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,H0=n.form`
  width: 100%;
  & .text_box {
    padding: 48px 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    word-break: keep-all;
    line-height: 1.2;
    @media (max-width: 1024px) {
      padding: 24px 0 32px;
    }
    & :first-child {
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }

    & :last-child {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
  & .input_text_area {
    width: 100%;
    margin: 24px 0 16px;
    @media (max-width: 1024px) {
      margin: 40px 0 24px;
    }
  }
  & .submit_area {
    & button {
      padding: 15px 10px;
      border-radius: 10px;
      width: 100%;
      background-color: #235ef3;
      color: #fff;
      font-size: 16px;
    }
  }
`,E0=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  @media (max-width: 400px) {
    gap: 5px;
  }
`,L0=n.span`
  cursor: pointer;
  &.fill svg path {
    fill: #1e9eff;
  }
  &.stroke svg path {
    fill: #555;
  }
`,M0=i=>t.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},t.createElement("g",{clipPath:"url(#clip0_759_23108)"},t.createElement("path",{d:"M10.8359 46.3285C9.67787 46.9226 8.36387 45.8815 8.59787 44.5525L11.0879 30.3625L0.518867 20.2945C-0.468133 19.3525 0.0448665 17.6305 1.36787 17.4445L16.0619 15.3565L22.6139 2.37555C23.2049 1.20555 24.8039 1.20555 25.3949 2.37555L31.9469 15.3565L46.6409 17.4445C47.9639 17.6305 48.4769 19.3525 47.4869 20.2945L36.9209 30.3625L39.4109 44.5525C39.6449 45.8815 38.3309 46.9226 37.1729 46.3285L23.9999 39.5606L10.8329 46.3285H10.8359Z",fill:"#555555"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_759_23108"},t.createElement("rect",{width:48,height:48,fill:"white"})))),V0=()=>{const i=["first","second","third","fourth","five"],[s,l]=t.useState(0);return console.log(s),e.jsx(E0,{children:i.map((a,d)=>e.jsx(L0,{onClick:()=>l(d+1),className:s>d?"fill":"stroke",children:e.jsx(M0,{})},a))})},z0=()=>e.jsxs(k0,{children:[e.jsx(N0,{children:e.jsx("img",{src:"./dummy_image_01.png"})}),e.jsxs(H0,{children:[e.jsxs("div",{className:"text_box",children:[e.jsx("span",{children:"ㅇㅇㅇ님, 참여한 행사는 어떠셨나요?"}),e.jsx("span",{children:"리뷰를 남겨주시면 더 좋은 행사를 준비하는데에 큰 도움이 될 수 있어요!"})]}),e.jsx(V0,{}),e.jsx("div",{className:"input_text_area",children:e.jsx(W2,{placeholder:"참여한 행사에 대해 더 남겨주실 의견이 있으신가요?"})}),e.jsx("div",{className:"submit_area",children:e.jsx("button",{children:"리뷰 남기기"})})]})]}),N=n.div`
  max-width: 1496px;
  margin: 67px auto 180px;
  padding: 0 30px;
  color: #fff;
  line-height: 1.5;
  & a,
  & button {
    font-weight: 700;
    text-decoration: underline;
    color: #fff;
  }
  & .pb_20 {
    padding-bottom: 20px;
  }

  @media (max-width: 1024px) {
    margin: 30px auto 80px;
    padding: 0 16px;
  }
  & .title {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 30px;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  &.desc {
    word-break: keep-all;
    font-size: 16px;
    font-weight: 500px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .box {
    padding: 0 0 10px 5px;
    font-size: 15px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    & .num {
      font-size: 9px;
    }
  }
  & h3 {
    font-weight: 700;
    padding-bottom: 15px;
  }
  & h4 {
    padding-bottom: 10px;
    font-size: 14px;
  }
  & h5 {
    padding-bottom: 10px;
    font-size: 14px;
  }

  /* table */
  & .table {
    width: 70%;
    text-align: left;
    border-collapse: collapse;
    border-color: #fff;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .table th,
  & .table td {
    padding: 5px 20px;
    border: 1px solid #fff;
    font-size: 16px;
    font-weight: 500px;
    word-break: keep-all;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .table th {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,Z0=()=>e.jsxs(N,{children:[e.jsx("h2",{className:"title",children:"[성별 생년 정보 제공 동의]"}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"수집목적"}),e.jsx("th",{children:"수집항목"}),e.jsx("th",{children:"보유/이용기간"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"50%",children:"신규 서비스 개발 및 마케팅에 활용. 통계학적 특성, 이용 형태 등에 따른 맞춤형 서비스 제공, 광고 게재, 이벤트 참여 기회 제 공, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계"}),e.jsx("td",{width:"20%",children:"생년, 성별"}),e.jsx("td",{width:"30%",children:"회원탈퇴 또는 동의철회 시"})]})})]}),e.jsxs("div",{className:"desc",children:["자세한 내용은 ",e.jsx(r,{to:"/privacy-policy",children:"개인정보 처리방침"}),"을 참고하시기 바랍니다."]})]}),S0=()=>e.jsxs(N,{children:[e.jsx("h2",{className:"title",children:"[개인정보 수집 이용 동의]"}),e.jsxs("div",{className:"desc",children:["회원가입 수집·이용 동의서",e.jsx("br",{}),e.jsx("br",{}),"마이스메이트 (주식회사 마인즈그라운드)의 개인정보 수집 이용 목적은 다음과 같습니다.",e.jsx("br",{}),"내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.",e.jsx("br",{}),e.jsx("br",{}),"수집 목적: 회원가입 및 이용자 식별",e.jsx("br",{}),"필수수집 항목: 이름, 이메일, 비밀번호, 카카오톡ID, 네이버ID",e.jsx("br",{}),"선택수집 항목: 전화번호, 소속, 부서, 직급/직할, 출생년도, 성별, 활동지역, 관심분야",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),e.jsx("br",{}),"수집 목적: 서비스관련 각종 고지 안내",e.jsx("br",{}),"수집 항목: 이름, 이메일, 휴대전화번호",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),"수집 목적: 고객 관계 관리(CRM)",e.jsx("br",{}),"필수수집 항목: 이름, 이메일",e.jsx("br",{}),"선택수집 항목: 전화번호, 소속 및 직함, 연령, 성별",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),e.jsx("br",{}),"수집 목적: 행사 참가자 식별 및 행사 운영",e.jsx("br",{}),"필수수집 항목: 이메일, 이름, 성별",e.jsx("br",{}),"선택수집 항목: 휴대전화번호, 기타 호스트가 요청하는 정보",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),e.jsx("br",{}),"자세한 내용은 ",e.jsx(r,{to:"/privacy-policy",children:"개인정보처리방침(링크)"}),"을 확인해주세요.",e.jsx("br",{}),"귀하는 위와 같이 개인정보를 수집·이용하는데 동의를 거부할 권리가 있습니다. ",e.jsx("br",{}),"필수 수집 항목에 대한 동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다.",e.jsx("br",{})]})]}),R0=()=>e.jsxs(N,{children:[e.jsx("h2",{className:"title",children:"[마이스 메이트 개인정보 처리방침]"}),e.jsxs("div",{className:"desc",children:[e.jsxs("div",{className:"box",children:["'주식회사 마인즈그라운드'(이하 '회사')이(가) 운영하는 ‘마이스메이트’가 취급하는 모든 개인정보는 개인정보 보호법 및 “회사” 개인정보 보호지침 등 관련 법령상의 개인정보 보호 규정을 준수하여 수집,보유, 처리 되고 있습니다.",e.jsx("br",{})," 시행일 : 2024-10-30"]}),e.jsxs("div",{className:"box",children:['"회사"는 개인정보 보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.',e.jsx("br",{}),' "회사"는 개인정보 처리방침을 변경하는 경우에는 시행의 시기, 변경된 내용을 정보주체가 쉽게 확인할 수 있도록 변경 전·후를 비교하여 공개하도록 할 예정입니다.']}),e.jsx("h3",{children:"1. 개인정보의 처리목적, 개인정보의 처리 및 보유기간, 처리하는 개인정보의 항목"}),e.jsxs("div",{className:"box",children:['"회사가 인터넷을통해 제공하는 전시회 정보 플랫폼 ‘’(이하 "마이스 메이트"라 한다)는 개인정보를 다음의 목적을 위해 수집합니다.',e.jsx("br",{}),"수집한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다."]}),e.jsx("h4",{children:"1) 홈페이지 회원가입 및 관리"}),e.jsx("div",{className:"box",children:"회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 서비스 부정이용 방지, 각종 고지 및 통지 등을 목적으로 개인정보를 처리합니다."}),e.jsx("h3",{children:"2. 수집하는 개인정보의 항목"}),e.jsx("div",{className:"box",children:'"마이스 메이트"는 서비스 제공을 위해 필요한 최소한의 범위 내에서 다음과 같은 개인정보를 수집하고 있습니다. 선택항목 정보는 회원에게 더 나은 서비스를 제공하기 위해 추가로 수집하는 정보입니다. 회원이 원하지 않을 경우 해당 추가정보는 수집하지 않으며, 이로 인한 서비스 이용 상의 제한은 없습니다.'}),e.jsx("h4",{children:"1) 수집 항목"}),e.jsxs("div",{className:"box",children:["- 전시주최자/호스트 회원 : 상호/업체명, 사업자등록번호, 대표자명, 사업장 소재지, 담당자명, 담당자 연락처(휴대폰), 이메일 주소, 회사홈페이지, 블로그, 페이스북, 인스타그램",e.jsx("br",{}),"- 일반회원 : 이름, 연락처(휴대폰), 이메일 주소, 성별, 연령"]}),e.jsx("h3",{children:"3. 개인정보의 처리 및 보유기간"}),e.jsxs("div",{className:"box",children:["회원의 개인정보는 원칙적으로 개인정보의 처리목적이 달성되거나 해당 서비스가 폐지되면 지체없이 파기합니다.",e.jsx("br",{}),"단, 다음의 정보에 대하여는 아래의 사유로 일정기간 동안 보존합니다. - 보유기간 : 2년 또는 회원 탈퇴 시까지"]}),e.jsx("h3",{children:"4. 개인정보의 제3자 제공"}),e.jsx("div",{className:"box",children:'"회사"는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 아래의 경우를 제외하고는 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.'}),e.jsx("h4",{children:"1) 정보주체로부터 별도의 동의를 받는 경우"}),e.jsx("h4",{children:"2) 법률에 특별한 규정이 있는 경우"}),e.jsx("h4",{children:"3) 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우"}),e.jsx("h4",{children:"4) 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우"}),e.jsx("h4",{children:"5) 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우"}),e.jsx("h4",{children:"4) 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우"}),e.jsx("h4",{children:"6) 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에 제공하기 위하여 필요한 경우"}),e.jsx("h4",{children:"7) 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우"}),e.jsx("h4",{children:"8) 법원의 재판업무 수행을 위하여 필요한 경우"}),e.jsx("h4",{children:"9) 형 및 감호, 보호처분의 집행을 위하여 필요한 경우"}),e.jsx("h3",{children:"5. 정보주체의 권리·의무 및 그 행사 방법"}),e.jsx("div",{className:"box",children:"정보주체는 아래와 같은 권리를 행사 할 수 있으며, 만14세 미만 아동의 법정대리인은 그 아동의 개인정보에 대한 열람, 정정·삭제, 처리정지를 요구할 수 있습니다."}),e.jsx("h4",{children:"1) 개인정보 열람 요구"}),e.jsxs("div",{className:"box",children:['"회사"에서 보유하고 있는 개인정보파일은「개인정보 보호법」제35조(개인정보의 열람)에 따라 자신의 개인정보에 대한 열람을 요구할 수 있습니다.',e.jsx("br",{}),"다만, 개인정보 열람 요구는 법 제35조 5항에 의하여 아래와 같이 제한될 수 있습니다."]}),e.jsx("h5",{children:"가. 정보주체로부터 별도의 동의를 받는 경우"}),e.jsx("h5",{children:"나. 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우"}),e.jsx("h5",{children:"다. 공공기관이 아래 각 목의 어느 하나에 해당하는 업무를 수행할 때 중대한 지장을 초래하는 경우"}),e.jsxs("div",{className:"box",children:["- 조세의 부과·징수 또는 환급에 관한 업무 - 학력·기능 및 채용에 관한 시험, 자격 심사에 관한 업무",e.jsx("br",{})," - 보상금·급부금 산정 등에 대하여 진행 중인 평가 또는 판단에 관한 업무",e.jsx("br",{})," - 다른 법률에 따라 진행 중인 감사 및 조사에 관한 업무"]}),e.jsx("h4",{children:"2) 개인정보 정정·삭제 요구"}),e.jsxs("div",{className:"box",children:['"회사"에서 보유하고 있는 개인정보파일은「개인정보 보호법」제36조(개인정보의 정정·삭제)에 따라 정정·삭제를 요구할 수 있습니다.',e.jsx("br",{}),"다만, 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다."]}),e.jsx("h4",{children:"3) 개인정보 처리정지 요구"}),e.jsxs("div",{className:"box",children:['"회사"에서 보유하고 있는 개인정보파일은 「개인정보보호법」 제37조(개인정보의 처리정지 등)에 따라 처리정지를 요구할 수 있습니다.',e.jsx("br",{}),"다만, 개인정보 처리정지 요구는 법 제37조 2항에 의하여 거절될 수 있습니다."]}),e.jsx("h5",{children:"가. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우"}),e.jsx("h5",{children:"나. 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우"}),e.jsx("h5",{children:"다. 공공기관이 개인정보를 처리하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우"}),e.jsx("h5",{children:"라. 개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 계약의 해지 의사를 명확하게 밝히지 아니한 경우"}),e.jsx("h3",{children:"6. 개인정보의 파기"}),e.jsx("div",{className:"box",children:'"회사"는 원칙적으로 개인정보 보존기간이 경과되거나, 개인정보 처리목적이 달성된 경우에는 지체 없이 파기합니다. 파기의 절차, 기한 및 방법은 아래와 같습니다.'}),e.jsx("h4",{children:"1) 파기 절차"}),e.jsx("div",{className:"box",children:"개인정보는 목적 달성 후 즉시 또는 별도의 공간에 옮겨져 내부 방침 및 기타 관련법령에 따라 일정기간 저장된 후 파기됩니다. 별도의 공간으로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다."}),e.jsx("h4",{children:"2) 파기 기한 및 파기 방법"}),e.jsxs("div",{className:"box",children:["보유기간이 만료되었거나 개인정보의 처리목적달성, 해당 업무의 폐지 등 그 개인정보가 불필요하게 되었을 때에는 지체없이 파기합니다. 전자적 파일형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.",e.jsx("br",{}),"종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다."]}),e.jsx("h3",{children:"7. 개인정보의 안전성 확보 조치"}),e.jsx("div",{className:"box",children:'"회사"는 개인정보 보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적, 관리적, 물리적 조치를 하고 있습니다.'}),e.jsx("h4",{children:"1) 개인정보 취급직원의 최소화 및 교육"}),e.jsx("div",{className:"box",children:"개인정보를 취급하는 직원은 반드시 필요한 인원에 한하여 지정 · 관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한 교육을 실시하고 있습니다."}),e.jsx("h4",{children:"2) 개인정보에 대한 접근 제한"}),e.jsx("div",{className:"box",children:"개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여·변경·말소를 통하여 개인정보에 대한 접근통제를 위한 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다."}),e.jsx("h4",{children:"3) 접속기록의 보관"}),e.jsx("div",{className:"box",children:"개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 6개월 이상 보관·관리하고 있습니다."}),e.jsx("h4",{children:"4) 개인정보의 암호화"}),e.jsx("div",{className:"box",children:"개인정보는 암호화 등을 통해 안전하게 저장 및 관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있습니다."}),e.jsx("h4",{children:"5) 보안프로그램 설치 및 주기적 점검·갱신"}),e.jsx("div",{className:"box",children:"해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적으로 갱신·점검하고 있습니다."}),e.jsx("h4",{children:"6) 비인가자에 대한 출입 통제"}),e.jsx("div",{className:"box",children:"개인정보를 보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다."}),e.jsx("h4",{children:"7) 정기적인 자체 점검 실시"}),e.jsx("div",{className:"box",children:"개인정보 취급 관련 안정성 확보를 위해 정기적으로 소속·산하기관을 포함하여 개인정보 보호관리 점검을 실시하고 있습니다."}),e.jsx("h4",{children:"8) 내부관리계획의 수립 및 시행"}),e.jsx("div",{className:"box",children:"개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다."}),e.jsx("h3",{children:"8. 개인정보 보호책임자 및 담당자"}),e.jsx("div",{className:"box",children:'"회사"는 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호 책임 담당부서를 지정하고 있습니다.'}),e.jsx("h4",{children:"1) 개인정보보호 담당자 부서: 경영지원팀 "}),e.jsx("div",{className:"box",children:"연락처 : admin@mindsground.com"}),e.jsx("h3",{children:"9. 권익침해 구제방법"}),e.jsx("div",{className:"box",children:"개인정보주체 및 법정대리인은 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보 침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 또한, 개인정보의 열람, 정정·삭제, 처리정지 등에 대한 정보주체자의 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을 침해 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다."}),e.jsxs("h4",{children:["1) 개인정보 분쟁조정위원회 : 2-2100-2499(",e.jsx("button",{onClick:()=>{window.open("https://www.kopico.go.kr")},children:"www.kopico.go.kr"}),"),(국번없이) 118"]}),e.jsx("h4",{children:"2) 개인정보 침해신고센터 : (국번없이) 118 ( privacy.kisa.or.kr)"}),e.jsx("h4",{children:"3) 대검찰청 사이버범죄수사과 : 02-3480-3570 ( cybercid@spo.go.kr)"}),e.jsx("h4",{children:"4) 경찰청 사이버안전국 : 02-3150-2659 ( cyberbureau.police.go.kr)"}),e.jsxs("h4",{children:["5) 행정심판에 대한 자세한 사항은 국민권익위원회(",e.jsx("button",{onClick:()=>{window.open("https://www.acrc.go.kr/")},children:"www.acrc.go.kr"}),")홈페이지를 참고하시기 바랍니다."]})]})]}),A0=()=>e.jsx("div",{children:e.jsxs(N,{children:[e.jsx("h2",{className:"title",children:"[제 3자 제공 동의]"}),e.jsxs("div",{className:"desc",children:["국내 제3자 제공 동의서",e.jsx("br",{}),e.jsx("br",{}),"행사 참가자 관리 및 행사운영에 필요한 서비스 제공",e.jsx("br",{}),"(메일 및 문자 발송 등)",e.jsx("br",{}),e.jsx("br",{}),"마이스메이트 관리(주식회사 마인즈그라운드)의 개인정보 수집 이용 목적은 다음과 같습니다. 내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.",e.jsx("br",{}),e.jsx("br",{}),"제공받는 자: 마인즈그라운드",e.jsx("br",{}),"제공 목적: 행사 참가자 관리 및 행사운영에 필요한 서비스 제공",e.jsx("br",{}),"제공 항목: 이름/이메일/기타 업로드 파일 내 포함된 주최사가 수집한 개인정보",e.jsx("br",{}),"제공 받은 자의 보유·이용기간: 주최사가 등록된 정보를 삭제하거나 주최사의 회원탈퇴 까지",e.jsx("br",{}),"자세한 내용은 ",e.jsx(r,{to:"/privacy-policy",children:"개인정보처리방침"}),"을 확인해주세요."]})]})}),B0=()=>e.jsxs(N,{children:[e.jsx("h2",{className:"title",children:"[마케팅 정보 수신 동의]"}),e.jsxs("div",{className:"desc pb_20",children:["마케팅 정보 수신 동의",e.jsx("br",{}),e.jsx("br",{}),"마이스메이트 (주식회사 마인즈그라운드)는 개인정보보호법 및 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 광고성 정보를 전송하기 위해 이용자의 사전 수신 동의를 받고 있습니다. 마케팅 정보 수신 동의 시 마케팅 수신에 일괄 동의한 것으로 처리됩니다.",e.jsx("br",{}),"마이스메이트 광고성정보 수신동의 서비스 이용자의 개인정보를 수집하는 목적은 다음과 같습니다."]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"수집목적"}),e.jsx("th",{children:"수집항목"}),e.jsx("th",{children:"보유/이용기간"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"50%",children:"- 신규 기능 및 서비스 홍보 및 이용 권유"}),e.jsx("td",{width:"20%",children:"이메일, 이름, 회사명"}),e.jsx("td",{width:"30%",children:"회원탈퇴 또는 동의철회 시"})]})})]}),e.jsx("div",{className:"desc",children:"동의를 거부할 권리가 있으며, 동의 거부 시 회원가입을 통한 기본서비스 이용은 가능하나, 광고 및 이벤트 안내 등의 서비스가 제한됩니다."})]}),I0=()=>e.jsxs(N,{children:[e.jsx("h2",{className:"title",children:"[서비스 이용약관]"}),e.jsx("h3",{children:"제 1 조 (목적)"}),e.jsx("div",{className:"box",children:'본 약관은 주식회사 마인즈그라운드의 플랫폼서비스, 마이스메이트(이하 "회사"라 합니다)가 운영, 제공하는 마이스메이트 서비스 및 관련 제반서비스, 기타 서비스(이하 "서비스")를 이용함에 있어 회사와 서비스 이용자의 권리.의무 및 책임사항을 규정함을 목적으로 합니다.'}),e.jsx("h3",{children:"제 2 조 (정의)"}),e.jsxs("div",{className:"box",children:['"서비스 이용자"란 회원과 비회원을 말한다.',e.jsx("br",{}),'"회원"이란 회사에 회원가입을 하고 회사의 가입 승인이 완료된 서비스 이용자를 말한다.',e.jsx("br",{}),'"비회원"이란 회원에 가입하지 않고 "회사" 서비스를 이용할 수 있는 자를 말한다. ',e.jsx("br",{}),'"플랫폼"이란 회사가 운영하는 웹사이트를 말한다.']}),e.jsx("h3",{children:"제 3 조 (약관 등의 명시와 설명 및 개정)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 이 약관의 내용과 상호 및 대표자의 성명, 영업소 소재지 주소, 전화번호, 사업자등록번호, 등 필요정보를 이용자가 쉽게 알 수 있도록 플랫폼 메인하단에 게시합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 온라인 디지털콘텐츠산업발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 소비자기본법, 정보통신망 이용촉진 및 정보보호에 관한법률(이하 '정보통신망법') 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 7일 전부터 적용일 이후 상당한 기간 동안 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 회사 인터넷 홈페이지에 공지하고 등록된 서비스이용자의 전자우편주소로 개정약관을 발송하여 고지합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 회사가 전항에 따라 서비스 이용자에게 통지하면서 공지 또는 고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 의사표시가 없는 경우에는 서비스 이용자가 변경된 약관을 승인한 것으로 봅니다. 서비스 이용자는 개정약관에 동의하지 않을 경우 제17조제1항의 규정에 따라 이용계약을 해지할 수 있습니다."]}),e.jsx("h3",{children:"제 4 조 (회원가입절차)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"}),' 서비스 이용자가 본 약관을 읽고 "동의" 버튼을 누르거나 "확인" 등에 체크하는 경우 본 약관에 동의한 것으로 간주합니다. ',e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사의 서비스 이용을 위한 회원가입은 서비스 이용자가 전항과 같이 동의한 후, 회사가 정한 온라인 회원가입 신청서에 회원 아이디를 포함한 필수사항을 입력하고, 회원가입버튼을 누르는 방법으로 합니다. 다만, 회사가 필요하다고 인정하는 경우 서비스 이용자에게 별도의 서류를 제출하도록 할 수 있습니다.",e.jsx("br",{})]}),e.jsx("h3",{children:"제 5 조 (회원등록의 성립과 유보 및 거절)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회원등록은 제3조에 정한 절차에 의한 서비스 이용자의 회원가입 신청과 회사의 회원등록 승낙에 의하여 성립합니다. 회사는 회원가입 신청자가 필수사항 등을 성실히 입력하여 가입신청을 완료하였을 때에는 필요한 사항을 확인한 후 지체 없이 이를 승낙하여야 합니다. 단 회원가입 신청서 제출 이외에 별도의 자료 제출이 요구되는 경우에는 예외로 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 아래 각 호의 어느 하나에 해당하는 경우에는 회원등록의 승낙을 유보할 수 있습니다.",e.jsx("br",{}),"제공서비스 설비용량에 현실적인 여유가 없는 경우",e.jsx("br",{}),"서비스를 제공하기에는 기술적으로 문제가 있다고 판단되는 경우",e.jsx("br",{}),"기타 회사가 재정적, 기술적으로 필요하다고 인정하는 경우",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사는 아래 각 호의 어느 하나에 해당하는 경우에는 회원등록을 거절할 수 있습니다.",e.jsx("br",{}),"가입신청서의 내용을 허위로 기재하였거나 허위서류를 첨부하여 가입신청을 하는 경우",e.jsx("br",{}),"만14세 미만이 개인정보제공에 대한 동의를 부모 등 법정대리인으로부터 받지 않은 경우",e.jsx("br",{}),"기타 회사가 관련법령 등을 기준으로 하여 명백하게 사회질서 및 미풍양속에 반할 우려가 있음을 인정하는 경우",e.jsx("br",{}),"제17조제2항에 의하여 회사가 계약을 해지했던 회원이 다시 회원가입 신청을 하는 경우"]}),e.jsx("h3",{children:"제 6 조 (회원 아이디 등의 관리책임)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회원은 서비스 이용을 위한 회원 아이디 및 비밀번호의 관리에 대한 책임을 지며 그 외 본인의 회원 아이디의 제3자에 의한 부정사용 등 회원의 고의과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 이것이 회사의 고의과실로 인하여 야기된 경우는 회사가 책임을 부담합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회원은 회원 아이디 및 비밀번호 그 외 추가정보 등을 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 본인의 회원 비밀번호를 수정하는 등의 조치를 취하여야 하며 즉시 이를 회사에 통보하여 회사의 안내를 따라야 합니다."]}),e.jsx("h3",{children:"제 7 조 (개인정보의 보호)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 서비스를 제공하기 위하여 관련 법령의 규정에 따라 서비스 이용자로부터 필요한 개인정보를 수집합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"}),' 회사는 서비스의 제공과 관련하여 알게 된 서비스 이용자의 개인정보를 본인의 동의 없이 제3자에게 누설, 배포하지 않고, 이를 보호하기 위하여 노력합니다. 서비스 이용자의 개인정보보호에 관한 기타의 사항은 정보통신망법 및 회사가 별도로 정한 "개인정보처리방침"에 따릅니다.']}),e.jsx("h3",{children:"제 8 조 (회원정보의 변경)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회원은 서비스 설정화면에서 언제든지 본인의 회원정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 회원 아이디 등은 수정이 불가능합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회원은 회원가입 신청 시 기재한 사항이 변경되었을 경우, 온라인으로 수정을 하거나 전자우편 등 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회원이 전항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다."]}),e.jsx("h3",{children:"제 9 조 (서비스 범위 및 이용)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 서비스 이용자에게 아래와 같은 서비스를 제공합니다.",e.jsx("br",{}),"가. 플랫폼서비스 행사의 주최, 행사 참가자 모집, 관리 및 등록, 행사페이지 개설, 행사안내 메일 및 문자전송, 행사정보안내 등 서비스 이용자에게 제공되는 서비스와 그 외 원활한 행사진행을 위하여 행사 기획부터 행사 종료 후 사후관리까지 행사전반에 걸쳐서 서비스 이용자에게 제공되는 서비스",e.jsx("br",{}),"나. 행사가이드서비스",e.jsx("br",{}),"사이트 내에서 제공하는 행사 추천, 부스 추천, 챗봇 등 행사참가자에게 제공하는 서비스",e.jsx("br",{}),"기타 서비스",e.jsx("br",{}),"제1호의 서비스와 관련한 부가서비스 및 그 외 회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 서비스 이용자에게 제공하는 일체의 서비스",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 서비스 이용은 회사의 서비스 사용승낙 직후부터 가능합니다. ",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 민법상 미성년자인 서비스 이용자가 유료서비스를 이용할 경우 미성년자인 서비스 이용자는 결제 전 법정대리인의 동의를 얻어야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 서비스 이용시간은 회사의 업무상 또는 기술상 불가능한 경우를 제외하고는 연중무휴 1일 24시간(00:00-24:00)으로 함을 원칙으로 합니다. 다만, 서비스설비의 정기점검 등의 사유로 회사가 서비스를 특정범위로 분할하여 별도로 날짜와 시간을 정할 수 있습니다.",e.jsx("br",{})]}),e.jsx("h3",{children:"제 10 조 (서비스 이용자에 대한 통지 등)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사가 서비스 이용자에게 통지하는 경우 등록된 서비스 이용자의 전자우편주소로 통지할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 전항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 7일 이상 사이트의 공지사항 페이지 등에 게시함으로써 전항의 통지를 갈음할 수 있습니다. 단, 서비스 이용자 본인의 거래와 관련하여 중대한 영향을 미치는 사항은 상당한 기간 동안 게시판을 통해 이를 공지하고 서비스 이용자의 등록된 전자우편주소로 개별통지합니다."]}),e.jsx("h3",{children:"제 11 조 (권리의 귀속 및 저작물의 이용)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"}),' 서비스 이용자가 서비스 내에 게시한 게시물 등(이하 "게시물 등"이라 합니다)의 저작권은 해당 게시물 등의 저작자에게 귀속되며, 해당 게시물 등이 타인의 지적재산권을 침해하여 발생되는 모든 책임은 저작자에게 있습니다',e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 게시물 등은 검색결과 내지 서비스 및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 서비스 이용자는 언제든지 고객센터 또는 각 서비스 내 관리기능을 통해 해당 게시물 등에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 요청할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사는 전항 이외의 방법으로 서비스 이용자의 게시물 등을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 서비스 이용자의 동의를 얻습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 서비스 이용자의 게시물 등에 대해 제3자로부터 저작권 및 기타 권리의 침해로 이의가 제기된 경우 회사는 해당 게시물 등을 법령에 따라 정지 또는 삭제할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑤"})," 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다."]}),e.jsx("h3",{children:"제 12 조 (서비스 이용의 제한 및 중지)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 아래 각 호의 어느 하나에 해당하는 사유가 발생한 경우에는 서비스 이용자의 서비스 이용을 제한하거나 중지시킬 수 있습니다.",e.jsx("br",{}),"서비스 이용자가 회사 서비스의 운영을 고의과실로 방해하는 경우",e.jsx("br",{}),"서비스 이용자가 제13조의 의무를 위반한 경우",e.jsx("br",{}),"서비스용 설비 점검, 교체, 보수 또는 공사로 인하여 부득이한 경우",e.jsx("br",{}),"전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우",e.jsx("br",{}),"국가비상사태, 서비스의 장애 또는 서비스 이용의 폭주 등 서비스 이용에 지장이 있을 때",e.jsx("br",{}),"기타 중대한 사유로 인하여 회사가 서비스 제공이 부적당하다고 인정하는 경우",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한 기간 등을 제9조의 규정에 따라 서비스 이용자에게 알려야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 제17조 제2항에 의해 회사가 회원과의 계약을 해지하고 탈퇴시키기로 결정한 경우 회사는 회원의 탈퇴 처리 전에 이를 제9조의 규정에 따라 회원에게 통지하고, 회원은 회사의 통지를 받은 날로부터 30일 이내에 이에 대한 항변의 기회를 가집니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 회원이 서비스를 이용하는 도중, 연속하여 12개월 동안 서비스를 이용하기 위해 log-in한 기록이 없는 경우, 회사는 당해 회원의 서비스이용을 제한할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑤"}),' 정보통신망법에 의해 다른 서비스 이용자의 공개된 게시물 등이 본인의 사생활을 침해하거나 명예를 훼손하는 등 권리를 침해 받은 서비스 이용자 또는 제3자(이하 "삭제 등 신청인"이라 합니다)는 그 침해사실을 소명하여 회사에 해당 게시물 등의 삭제 또는 반박 내용의 게재를 요청할 수 있습니다. 이 경우 회사는 해당 게시물 등의 권리 침해 여부를 판단할 수 없거나 당사자 간의 다툼이 예상되는 경우 해당 게시물 등에 대한 접근을 임시적으로 차단하는 조치(이하 "임시조치"라 합니다)를 최장 30일까지 취합니다.',e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑥"}),' 제5항에 의해 본인의 게시물 등이 임시조치된 서비스 이용자(이하 "게시자"라 합니다)는 임시조치기간 중 회사에 해당 게시물 등을 복원해 줄 것을 요청(이하 "재게시 청구"라 합니다)할 수 있으며, 회사는 임시조치된 게시물 등의 명예훼손 등 판단에 대한 방송통신심의위원회 심의 요청에 대한 게시자 및 삭제 등 신청인의 동의가 있는 경우 게시자 및 삭제 등 신청인을 대리하여 이를 요청하고 동의가 없는 경우 회사가 이를 판단하여 게시물 등의 복원 여부를 결정합니다. 게시자의 재게시 청구가 있는 경우 임시조치 기간 내에 방송통신심의위원회 또는 회사의 결정이 있으면 그 결정에 따르고 그 결정이 임시조치 기간 내에 있지 않는 경우 해당 게시물 등은 임시조치 만료일 이후 복원됩니다. 재게시 청구가 없는 경우 해당 게시물 등은 임시조치 기간 만료 이후 삭제됩니다.',e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑦"}),' 회사는 서비스 내에 게시된 게시물 등이 사생활 침해 또는 명예훼손 등 제3자의 권리를 침해한다고 인정하는 경우 제5항에 따른 서비스 이용자 또는 제3자의 신고가 없는 경우에도 임시조치(이하 "임의의 임시조치"라 합니다)를 취할 수 있습니다. 임의의 임시조치된 게시물 등의 처리 절차는 제5항 후단 및 제6항의 규정에 따릅니다.',e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑧"})," 서비스 이용자의 게시물 등으로 인한 법률상 이익 침해를 근거로, 다른 서비스 이용자 또는 제3자가 서비스 이용자 또는 회사를 대상으로 하여 민형사상의 법적 조치(예: 형사고소, 가처분 신청, 손해배상청구 등 민사소송의 제기)를 취하는 경우, 회사는 동 법적 조치의 결과인 법원의 확정판결이 있을 때까지 관련 게시물 등에 대한 접근을 잠정적으로 제한할 수 있습니다. 게시물 등의 접근 제한과 관련한 법적 조치의 소명, 법원의 확정판결에 대한 소명 책임은 게시물 등에 대한 조치를 요청하는 자가 부담합니다."]}),e.jsx("h3",{children:"제 13 조 (회사의 의무)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 회사의 서비스 제공 및 보안과 관련된 설비를 지속적이고 안정적인 서비스 제공에 적합하도록 유지, 점검 또는 복구 등의 조치를 성실히 이행하여야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 서비스 이용자가 수신 동의를 하지 않은 영리 목적의 광고성 전자우편, SMS 문자메시지 등을 발송하지 아니합니다."]}),e.jsx("h3",{children:"제 14 조 (서비스 이용자의 의무)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 서비스 이용자는 아래 각 호의 어느 하나에 해당하는 행위를 하여서는 아니 됩니다.",e.jsx("br",{}),e.jsx("br",{}),"회원가입신청 또는 변경 시 허위내용을 등록하는 행위",e.jsx("br",{}),"서비스에 게시된 정보를 변경하거나 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 영리 또는 비영리의 목적으로 복제, 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위.",e.jsx("br",{}),"회사가 제공하는 서비스를 이용하여 제3자에게 본인을 홍보할 기회를 제공하거나 제3자의 홍보를 대행하는 등의 방법으로 금전을 수수하거나 서비스를 이용할 권리를 양도하고 이를 대가로 금전을 수수하는 행위.",e.jsx("br",{}),"회사 및 기타 제3자에 대한 허위의 사실을 게재하거나 지적재산권을 침해하는 등 회사나 제3자의 권리를 침해하는 행위",e.jsx("br",{}),"다른 회원 아이디 및 비밀번호를 도용하여 부당하게 서비스를 이용하는 행위",e.jsx("br",{}),"정크메일(junk mail), 스팸메일(spam mail), 행운의 편지(chain letters), 피라미드 조직에",e.jsx("br",{}),"가입할 것을 권유하는 메일, 외설 또는 폭력적인 메시지&화상&음성 등이 담긴 메일을",e.jsx("br",{}),"보내거나 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위",e.jsx("br",{}),"정보통신망법 등 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)를 전송하거나 게시하는 행위",e.jsx("br",{}),"청소년보호법에서 규정하는 청소년유해매체물을 게시하는 행위",e.jsx("br",{}),"공공질서 또는 미풍양속에 위배되는 내용의 정보, 문장, 도형, 음성 등을 유포하는 행위",e.jsx("br",{}),"회사의 직원이나 서비스의 관리자를 가장하거나 사칭 또는 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위",e.jsx("br",{}),"컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로 발송하는 행위",e.jsx("br",{}),"스토킹(stalking), 욕설, 채팅글 도배 등 다른 서비스 이용자의 서비스 이용을 방해하는 행위",e.jsx("br",{}),"다른 서비스 이용자의 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위",e.jsx("br",{}),"불특정 다수의 서비스 이용자를 대상으로 하여 광고 또는 선전을 게시하거나 스팸메일을 전송할 목적으로 회사에서 제공하는 메일발송 등의 서비스를 이용하여 영리활동을 하는 행위",e.jsx("br",{}),"회사가 제공하는 소프트웨어 등을 개작하거나 리버스 엔지니어링, 디컴파일, 디스어셈블 하는 행위.",e.jsx("br",{}),"현행 법령, 본 약관 기타 서비스 이용에 관한 규정을 위반하는 행위",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 서비스 이용자가 전항의 행위를 하는 경우 해당 게시물 등을 삭제 또는 임시조치할 수 있고 서비스의 이용을 제한하거나 일방적으로 본 계약을 해지할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사가 제공하는 서비스 중 관련 법령 등의 규정에 의하여 성인인증이 필요한 경우 서비스 이용자는 해당 서비스를 이용하기 위하여 회사가 제공하는 방법에 따라 실명정보를 회사에 제공하여야 합니다."]}),e.jsx("h3",{children:"제 15 조 (양도금지)"}),e.jsx("div",{className:"box",children:"서비스 이용자의 서비스 받을 권리는 이를 양도 내지 증여하거나 질권의 목적으로 사용할 수 없습니다."}),e.jsx("h3",{children:"제 16 조 (이용계약의 해지)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 서비스 이용자가 서비스 이용계약을 해지하고자 하는 때에는 언제든지 '문의하기' 또는 마이페이지에서 회원탈퇴 신청 후, 회사가 정한 절차에 따라 서비스 이용계약을 해지하거나 회원 아이디를 삭제하고 탈퇴할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 서비스 이용자가 제13조의 규정을 위반한 경우 회사는 일방적으로 본 계약을 해지할 수 있고, 이로 인하여 서비스 운영에 손해가 발생한 경우 이에 대한 민형사상 책임도 물을 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회원이 서비스를 이용하는 도중, 연속하여 1년 동안 서비스를 이용하기 위해 회사의 서비스에 log-in한 기록이 없는 경우 회사는 당해 회원의 회원자격을 상실시킬 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 유료서비스 이용계약의 해지는 서비스 이용자의 서비스 해지신청 및 회사의 승낙에 의해 성립합니다. 단, 정기 결제 서비스의 경우 정기결제 페이지에서 '해지하기' 버튼을 클릭하면 다음 결제일부터 자동 결제가 진행되지 않습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑤"})," 회사가 승낙한 시점에 해지의 효과는 발생하며 환불에 대해서는 제16조의 규정을 따릅니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑥"})," 각 개별 유료서비스에서 전항의 규정과 다른 계약해지의 방법 및 효과를 개별약관에서 규정하고 있는 경우 각 개별 유료서비스의 계약해지에 관해서는 당해 개별 약관의 규정을 따릅니다."]}),e.jsx("h3",{children:"제 17 조 (면책)"}),e.jsxs("div",{className:"box",children:["회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 서비스 이용자에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.",e.jsx("br",{}),"천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우",e.jsx("br",{}),"서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우",e.jsx("br",{}),"서비스 이용자의 귀책사유로 서비스 이용에 장애가 있는 경우",e.jsx("br",{}),"제1호 내지 제3호를 제외한 기타 회사의 고의과실이 없는 사유로 인한 경우"]}),e.jsx("h3",{children:"제18조 (재판권 및 준거법)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사와 서비스 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시 서비스 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 법원을 전속관할로 합니다. 다만, 전자상거래 외 분쟁의 경우와 제소 당시 서비스 이용자의 주소 또는 거소가 분명하지 않거나 외국거주자의 경우에는 민사소송법상의 관할법원에 소송을 제기합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 본 약관에 명시되지 않은 사항에 대해서는 관련법령에 의하고, 법에 명시되지 않은 부분에 대하여는 관습에 의합니다."]})]}),O0=[{id:1,gubun:"메인",name:"메인페이지",link:"/"},{id:2,gubun:"메인",name:"메인페이지 > 검색",link:"/list"}],F0=[{id:3,gubun:"로그인&회원가입",name:"로그인",link:"/login"},{id:4,gubun:"로그인&회원가입",name:"로그인 > 비밀번호 찾기",link:"/login/password-find"},{id:5,gubun:"로그인&회원가입",name:"회원가입",link:"/join"},{id:6,gubun:"로그인&회원가입",name:"회원가입 > 이메일 회원가입",link:"/join/form"}],P0=[{id:7,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 신청 행사",link:"/mypage/apply-list"},{id:8,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 신청 행사 > 부스 선택",link:"/mypage/apply-list/booth-select/01"},{id:9,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 신청 행사 > AI 추천 부스 받기",link:"/mypage/apply-list/booth-check/01"},{id:10,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 취소 내역",link:"/mypage/cancel-list"},{id:11,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 관심 행사",link:"/mypage/wish-list"},{id:12,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 지난 행사",link:"/mypage/past-list"},{id:13,gubun:"마이페이지",name:"마이페이지 > 내 정보 수정",link:"/mypage/user-modify"},{id:14,gubun:"마이페이지",name:"마이페이지 > 내 정보 수정 > 탈퇴",link:"/mypage/user-modify/with-draw"},{id:15,gubun:"마이페이지",name:"마이페이지 > 내 정보 수정 > 탈퇴 > 완료",link:"/with-draw-finish"}],T0=[{id:16,gubun:"행사 상세페이지",name:"행사 상세페이지",link:"/detail/01"},{id:17,gubun:"행사 상세페이지",name:"행사 상세페이지 > 신청하기",link:"/detail/01/apply"},{id:18,gubun:"행사 상세페이지",name:"행사 상세페이지 > 신청하기 > 신청완료",link:"/detail/01/finish"}],W0=[{id:19,gubun:"리뷰",name:"리뷰 남기기",link:"/edit-review"}],_0=[{id:20,gubun:"이용약관",name:"성별 생년 정보 제공 동의",link:"/gender-birth-information"},{id:21,gubun:"이용약관",name:"개인정보 수집 이용 동의",link:"/personal-information"},{id:22,gubun:"이용약관",name:"개인정보처리방침",link:"/privacy-policy"},{id:23,gubun:"이용약관",name:"제 3자 제공 동의",link:"/onward-transfer"},{id:24,gubun:"이용약관",name:"마케팅 정보 수신 동의",link:"/markeyting-information"},{id:25,gubun:"이용약관",name:"서비스 이용약관",link:"/terms-service"}],y={main:O0,loginJoin:F0,myPage:P0,eventDetail:T0,review:W0,agree:_0},D0=n.div`
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
`,Y0=()=>e.jsxs(D0,{children:[e.jsx("h1",{children:"셀버스 퍼블리싱 화면"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"80px"},children:"번호"}),e.jsx("th",{style:{width:"20%"},children:"화면구분"}),e.jsx("th",{children:"화면명"}),e.jsx("th",{style:{width:"20%"},children:"링크"})]})}),e.jsxs("tbody",{children:[y.main.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.gubun}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.link.length>0?e.jsx(r,{to:i.link,target:"_blank",children:"바로가기"}):"작업예정"})]},i.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),y.loginJoin.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.gubun}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.link.length>0?e.jsx(r,{to:i.link,target:"_blank",children:"바로가기"}):"작업예정"})]},i.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),y.myPage.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.gubun}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.link.length>0?e.jsx(r,{to:i.link,target:"_blank",children:"바로가기"}):"작업예정"})]},i.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),y.eventDetail.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.gubun}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.link.length>0?e.jsx(r,{to:i.link,target:"_blank",children:"바로가기"}):"작업예정"})]},i.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),y.review.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.gubun}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.link.length>0?e.jsx(r,{to:i.link,target:"_blank",children:"바로가기"}):"작업예정"})]},i.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),y.agree.map(i=>e.jsxs("tr",{children:[e.jsx("td",{children:i.id}),e.jsx("td",{children:i.gubun}),e.jsx("td",{children:i.name}),e.jsx("td",{children:i.link.length>0?e.jsx(r,{to:i.link,target:"_blank",children:"바로가기"}):"작업예정"})]},i.id))]})]})]}),J0=F1([{path:"/",element:e.jsx(Ne,{}),children:[{path:"/",element:e.jsx($e,{})},{path:"join",element:e.jsx(ai,{})},{path:"join/form",element:e.jsx(Si,{})},{path:"login",element:e.jsx(Yi,{})},{path:"login/password-find",element:e.jsx($i,{})},{path:"mypage",element:e.jsx(Be,{}),children:[{path:"apply-list",element:e.jsx(wt,{})},{path:"apply-list/booth-select/:id",element:e.jsx(o0,{})},{path:"apply-list/booth-check/:id",element:e.jsx(u0,{})},{path:"cancel-list",element:e.jsx(bt,{})},{path:"wish-list",element:e.jsx(yt,{})},{path:"past-list",element:e.jsx(Ht,{})},{path:"user-modify",element:e.jsx(zt,{})},{path:"user-modify/with-draw",element:e.jsx(C0,{})}]},{path:"/list",element:e.jsx(Dt,{})},{path:"/detail/:id",element:e.jsx(Z2,{})},{path:"/detail/:id/apply",element:e.jsx(Q2,{})},{path:"/detail/:id/finish",element:e.jsx(K2,{})},{path:"/with-draw-finish",element:e.jsx(y0,{})},{path:"/gender-birth-information",element:e.jsx(Z0,{})},{path:"/personal-information",element:e.jsx(S0,{})},{path:"/privacy-policy",element:e.jsx(R0,{})},{path:"/onward-transfer",element:e.jsx(A0,{})},{path:"/markeyting-information",element:e.jsx(B0,{})},{path:"/terms-service",element:e.jsx(I0,{})}],errorElement:e.jsx("div",{style:{color:"#fff"},children:"없는 페이지 입니다."})},{path:"/link",element:e.jsx(Y0,{}),errorElement:e.jsx("div",{style:{color:"#fff"},children:"없는 페이지 입니다."})},{path:"/edit-review",element:e.jsx(z0,{}),errorElement:e.jsx("div",{style:{color:"#fff"},children:"없는 페이지 입니다."})}]),U0=()=>e.jsx(P1,{router:J0}),q0=T1`
  ${q1};
  /* Pretendard */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff')
      format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff')
      format('woff');
  }

  * {
    box-sizing: border-box;
  }

  html{
    background-color:#000;
    font-size:18px;
    font-family: 'Pretendard';
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  /* body{
    @media (max-width: 390px) {
      width: 390px;
    }
  } */
  a {
    color: inherit;
    text-decoration: inherit;
  }
  button{
    font-family: 'Pretendard';
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color:#000;
    font-size: 18px;
  }
  input,textarea,textarea::placeholder, input::placeholder{
    border: none;
    font-family: 'Pretendard';
    outline: none;
    font-size: 18px;
    padding: 0;
  }

  table, th, tr, td{
    font-family: 'Pretendard';
  }
  .err_msg{
    color: #F56767;
    padding:2px 0;
    font-size: 16px;
    font-weight: 500;
  }
  .maxframe{
    max-width: 1920px;
    margin: 0 auto;
  }

`;function Q0(){return e.jsxs(e.Fragment,{children:[e.jsx(q0,{}),e.jsx(U0,{})]})}B1(document.getElementById("root")).render(e.jsx(O1,{children:e.jsx(Q0,{})}));
