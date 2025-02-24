const css = `
/* =========================================================== */
/* Obsidian的默认样式                                            */
/* =========================================================== */
.obsidian-light {
    padding: 20px 20px;
    user-select: text;
    -webkit-user-select: text;
    color: #222222;
    font-size: 16px;
    font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

.obsidian-light:last-child {
    margin-bottom: 0;
}

.obsidian-light .fancybox-img {
    border: none;
}

.obsidian-light .fancybox-img:hover {
    opacity: none;
    border: none;
}

/*
=================================
Heading 
==================================
*/
.obsidian-light h1 {
    color: #222;
    font-weight: 700;
    font-size: 1.802em;
    line-height: 1.2;
    margin-block-start: 1em;
    margin-block-end: 0;
}

.obsidian-light h2 {
    color: inherit;
    font-weight: 600;
    font-size: 1.602em;
    line-height: 1.2;
    margin-block-start: 1em;
    margin-block-end: 0;
}

.obsidian-light h3 {
    color: inherit;
    font-weight: 600;
    font-size: 1.424em;
    line-height: 1.3;
    margin-block-start: 1em;
    margin-block-end: 0;
}

.obsidian-light h4 {
    color: inherit;
    font-weight: 600;
    font-size: 1.266em;
    line-height: 1.4;
    margin-block-start: 1em;
    margin-block-end: 0;
}

.obsidian-light h5 {
    color: inherit;
    margin-block-start: 1em;
    margin-block-end: 0;
}

.obsidian-light h6 {
    color: inherit;
    margin-block-start: 1em;
    margin-block-end: 0;
}

/*
=================================
Horizontal Rules
==================================
    */
.obsidian-light hr {
    border-color: #e0e0e0;
    margin-top: 3em;
    margin-bottom: 3em;
}

/*
=================================
Paragraphs
==================================
    */
.obsidian-light p {
    line-height: 1.6em;
    margin: 1em 0;
}

/*
=================================
Emphasis
==================================
    */
.obsidian-light strong {
    color: #222222;
    font-weight: 600;
}

.obsidian-light em {
    color: inherit;
    font-style: italic;
}

.obsidian-light s {
    color: inherit;
}

/*
=================================
    Blockquotes
==================================
    */
.obsidian-light blockquote {
    font-size: 1rem;
    display: block;
    margin: 2em 0;
    padding: 0em 0.8em 0em 0.8em;
    position: relative;
    color: inherit;
    border-left: 0.15rem solid #7852ee;
}

.obsidian-light blockquote blockquote {
    margin: 0 0;
}

.obsidian-light blockquote p {
    margin: 0;
}

.obsidian-light blockquote footer strong {
    margin-right: 0.5em;
}

/*
=================================
List
==================================
*/
.obsidian-light ul {
    margin: 0;
    margin-top: 1.25em;
    margin-bottom: 1.25em;
}

.obsidian-light ul>li {
    /* position: relative; */
    /* padding-left: 1.75rem; */
    margin-top: 0.1em;
    margin-bottom: 0.1em;
}

.obsidian-light ul>li::marker {
    color: #ababab;
    /* font-size: 1.5em; */
}

.obsidian-light li>p {
    margin: 0;
}

.obsidian-light ol {
    margin: 0;
    padding: 0;
    margin-top: 1.25em;
    margin-bottom: 0em;
    list-style-type: decimal;
}

.obsidian-light ol>li {
    position: relative;
    padding-left: 0.1em;
    margin-left: 2em;
    margin-top: 0.1em;
    margin-bottom: 0.1em;
}

/*
=================================
Link
==================================
*/
.obsidian-light a {
    color: #7852ee;
    text-decoration: none;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px solid #7852ee;
    transition: border 0.3s ease-in-out;
}

.obsidian-light a:hover {
    color: #7952eebb;
    border-bottom: 1px solid #7952eebb;
}

/*
=================================
Table
==================================
*/
.obsidian-light table {
    width: 100%;
    table-layout: auto;
    text-align: left;
    margin-top: 2em;
    margin-bottom: 2em;
    font-size: 0.875em;
    line-height: 1.7142857;
    border-collapse: collapse;
    border-color: inherit;
    text-indent: 0;
}

.obsidian-light table thead {
    color: #000;
    font-weight: 600;
    border: #e0e0e0 1px solid;
}

.obsidian-light table thead th {
    vertical-align: bottom;
    padding-right: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-left: 0.5714286em;
    border: #e0e0e0 1px solid;
}

.obsidian-light table thead th:first-child {
    padding-left: 0.5em;
}

.obsidian-light table thead th:last-child {
    padding-right: 0.5em;
}

.obsidian-light table tbody tr {
    border-style: solid;
    border: #e0e0e0 1px solid;
}

.obsidian-light table tbody tr:last-child {
    border-bottom-width: 0;
}

.obsidian-light table tbody td {
    vertical-align: top;
    padding-top: 0.5714286em;
    padding-right: 0.5714286em;
    padding-bottom: 0.5714286em;
    padding-left: 0.5714286em;
    border: #e0e0e0 1px solid;
}

.obsidian-light table tbody td:first-child {
    padding-left: 0;
}

.obsidian-light table tbody td:last-child {
    padding-right: 0;
}

/*
=================================
Images
==================================
*/
.obsidian-light img {
    margin-top: 2em;
    margin-bottom: 2em;
}

.obsidian-light .footnotes hr {
    margin-top: 4em;
    margin-bottom: 0.5em;
}

/*
=================================
Code
==================================
*/
.obsidian-light .code-section {
    display: flex;
    background-color: rgb(250, 250, 250);
    border: rgb(240, 240, 240) 1px solid;
}

.obsidian-light section ul {
    flex-shrink: 0;
    counter-reset: line;
    margin: 0;
    padding: 0.875em 0 0.875em 0.875em;
    white-space: normal;
    width: fit-content;
}

.obsidian-light section ul>li {
    font-family: Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace;
    position: relative;
    margin: 0;
    padding: 0;
    display: list-item;
    text-align: right;
    line-height: 1.75em;
    font-size: 0.875em;
    padding: 0;
    list-style-type: none;
    color: rgba(0, 0, 0, 0.25);
    text-wrap: nowrap;
}

.obsidian-light section pre {
    margin: 0;
    padding: 0;
    overflow: auto;
}

.obsidian-light code {
    font-family: Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, "Liberation Mono", "Courier New", monospace;
    color: #5c5c5c;
    background-color: #fafafa;
    font-size: 0.875em;
    vertical-align: baseline;
    padding: 0 0.5em;
}    

.obsidian-light pre code {
    display: block;
    text-wrap: nowrap;
    line-height: 1.75em;
    padding: 1em;
}
`

export default {name: '默认', className: 'obsidian-light', desc: '默认主题', author: 'SunBooshi', css:css};