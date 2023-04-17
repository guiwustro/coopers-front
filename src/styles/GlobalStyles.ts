import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
	--white: #ffff; 
    --black: #000; 
    --green-200: #4AC959;
    --green-300: #46BD62;
    --orange: #E88D39;
    --grey-100: #9A9A9A;
    --grey-200: #C4C4C4;
    --grey-300: #9499B3;
}

* {
    box-sizing: border-box;
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
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    scroll-behavior: smooth;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
    -webkit-font-smoothing: antialiased;

    font-family: 'Nunito', sans-serif;

    overflow-y: auto;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;

    background: rgba(var(--bodyBackground), 1);
    // used because material UI modals add 17px in the body when they are oppened.
    padding-right: 0px !important;  

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

button {
    cursor: pointer;
    border: 0;
}

input {
    border: 0;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: black;
}

`;

export default GlobalStyle;
