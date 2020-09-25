const el = (tag, attributesOrClassnames = {}, ...childrenOrTextContent) => {
    const element = document.createElement(tag);
    // apply attributes or class names
    if (Array.isArray(attributesOrClassnames))
        element.setAttribute("class", attributesOrClassnames.join(" "));
    else if (typeof(attributesOrClassnames) === "string")
        element.setAttribute("class", attributesOrClassnames);
    else if (typeof(attributesOrClassnames) === "object") {
        for (let [key, value] of Object.entries(attributesOrClassnames)) {
            if (key.startsWith('on'))
                element.addEventListener(key.slice(2).toLowerCase(), value, false);
            else
                element.setAttribute(key, String(value));
        }
    }
    // Append child nodes
    for (let child of childrenOrTextContent.flat(Infinity)) {
        if (typeof child === "string")
            element.appendChild(document.createTextNode(child));
        else if (child instanceof HTMLElement)
            element.appendChild(child)
        else
            console.warn(`Cannot add this as child element: ${tag}`, child);
    }
    return element;
}

export { el as default };