import { css } from "@emotion/react";
import { mainColor } from "./color";

import { tablet } from "./media";

// prettier-ignore
export const globalStyles = css`

@font-face {
	font-family: pretendard;
	font-weight: 400;
	src: url("/fonts/Pretendard-Regular.woff");
}
@font-face {
	font-family: pretendard;
	font-weight: 500;
	src: url("/fonts/Pretendard-Medium.woff");
}
@font-face {
	font-family: pretendard;
	font-weight: 600;
	src: url("/fonts/Pretendard-Bold.woff");
}
@font-face {
	font-family: pretendard;
	font-weight: 700;
	src: url("/fonts/Pretendard-ExtraBold.woff");
}

.ant-modal-wrap {
    /* z-index: 9999 !important; */
	.ant-modal-title {
    font-size: 1.6rem;
    line-height: 2.2rem;

}
.ant-modal-content{
	.ant-modal{
		left: 50%;
		transform: translateX(-50%);
	}
	.ant-btn-primary{
		border-color: ${mainColor};
		background-color: ${mainColor};
	}
}
p{
		font-size: 1.6rem;
		margin-bottom: 0;
	}
	.ant-btn {
    line-height: 1.5715;
    height: 32px;
    padding: 0.2rem 1.5rem;
    font-size: 1.4rem;
    border-radius: 2px;
	@media ${tablet}{
		height: 25px;
	}
}
.ant-modal-close-x {
    width: 5.4rem;
    height: 5.4rem;
    font-size: 16px;
    line-height: 54px;
    text-align: center;
 @media ${tablet}{
    line-height: 34px;
 }
}
  }

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;

}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

html,body{
	font-family: pretendard;
	font-size: 10px;
	@media (max-width : 767px){
	font-size: 7px;
}
}

body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}



`;
