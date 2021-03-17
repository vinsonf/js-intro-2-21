function createElement(type, name, parent) {
    const element = document.createElement(type);
    element.classList.add(name);
    parent.appendChild(element);
    return element;
}

function createAnchor(text, parent) {
    const link = createElement('a', text, parent);
    link.innerHTML = text;
    link.href = '#';
}

function createButton(name, text, parent, callback) {
    const button = createElement('button', name, parent);
    button.innerHTML = text;
    button.addEventListener('click', callback);

    return button;
}