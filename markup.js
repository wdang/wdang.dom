const el = (tag, attrsOrClassnames = {}, ...childrenOrTextContent) => {
    // custom components as tag
    if (typeof tag === "function") return tag();

    const element = document.createElement(tag);
    // assign attributes
    attrsOrClassnames = attrsOrClassnames || {};
    if (typeof attrsOrClassnames === "string")
        element.setAttribute("class", attrsOrClassnames);
    else
        Object.assign(element, attrsOrClassnames);


    // append children
    const frag = document.createDocumentFragment();
    for (let child of childrenOrTextContent) {
        if (child instanceof HTMLElement)
            frag.appendChild(child)
        else if (typeof child === "string" || typeof child === "number")
            frag.appendChild(document.createTextNode(child));
        else if (typeof child === "function")
            frag.appendChild(child())
        else
            console.error('Cannot append child element:', child);
    }

    element.appendChild(frag);
    return element;
}
const markup = (tag) => (attrs, ...args) => el(tag, attrs, ...args);
export const a = markup("a");
export const abbr = markup("abbr");
export const address = markup("address");
export const area = markup("area");
export const article = markup("article");
export const aside = markup("aside");
export const audio = markup("audio");
export const b = markup("b");
export const bdi = markup("bdi");
export const bdo = markup("bdo");
export const blockquote = markup("blockquote");
export const br = markup("br");
export const button = markup("button");
export const canvas = markup("canvas");
export const caption = markup("caption");
export const cite = markup("cite");
export const code = markup("code");
export const col = markup("col");
export const colgroup = markup("colgroup");
export const data = markup("data");
export const datalist = markup("datalist");
export const dd = markup("dd");
export const del = markup("del");
export const details = markup("details");
export const dfn = markup("dfn");
export const dialog = markup("dialog");
export const div = markup("div");
export const dl = markup("dl");
export const dt = markup("dt");
export const em = markup("em");
export const fieldset = markup("fieldset");
export const figcaption = markup("figcaption");
export const figure = markup("figure");
export const footer = markup("footer");
export const form = markup("form");
export const h1 = markup("h1");
export const h2 = markup("h2");
export const h3 = markup("h3");
export const h4 = markup("h4");
export const h5 = markup("h5");
export const h6 = markup("h6");
export const header = markup("header");
export const hr = markup("hr");
export const i = markup("i");
export const iframe = markup("iframe");
export const img = markup("img");
export const input = markup("input");
export const ins = markup("ins");
export const kbd = markup("kbd");
export const label = markup("label");
export const legend = markup("legend");
export const li = markup("li");
export const main = markup("main");
export const map = markup("map");
export const mark = markup("mark");
export const menuitem = markup("menuitem");
export const meter = markup("meter");
export const nav = markup("nav");
export const object = markup("object");
export const ol = markup("ol");
export const optgroup = markup("optgroup");
export const option = markup("option");
export const output = markup("output");
export const p = markup("p");
export const param = markup("param");
export const picture = markup("picture");
export const pre = markup("pre");
export const progress = markup("progress");
export const q = markup("q");
export const rp = markup("rp");
export const rt = markup("rt");
export const rtc = markup("rtc");
export const ruby = markup("ruby");
export const s = markup("s");
export const samp = markup("samp");
export const section = markup("section");
export const select = markup("select");
export const small = markup("small");
export const source = markup("source");
export const span = markup("span");
export const strong = markup("strong");
export const sub = markup("sub");
export const summary = markup("summary");
export const sup = markup("sup");
export const svg = markup("svg");
export const table = markup("table");
export const tbody = markup("tbody");
export const td = markup("td");
export const textarea = markup("textarea");
export const tfoot = markup("tfoot");
export const th = markup("th");
export const thead = markup("thead");
export const time = markup("time");
export const tr = markup("tr");
export const track = markup("track");
export const ul = markup("ul");
export const video = markup("video");
export const wbr = markup("wbr");