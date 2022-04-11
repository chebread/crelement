const root = document.querySelector("#root");
// const log = console.log;
const html = `
  <i>Satisfying CSS web browser defaults, only changing fonts</i>
  <h1>Hello world!</h1>
  <p>Made by Cha Haneum</p>
`;
// let time;
// console.time(time);
const createElementConverter = (target, content, className) => {
  const elem = document.createElement(target);
  if (!(className === null)) {
    elem.classList.add(className);
  }
  if (!(content === null)) {
    elem.innerHTML = content;
  }
  document.querySelector("#root").appendChild(elem);
};
const converter = (content) => {
  const arr = content.split("\n");
  arr.shift();
  arr.pop();
  for (let i = 0; i < arr.length; i++) {
    const string = arr[i].substring(2, arr[i].length);
    const tag = string.substring(
      string.indexOf("<") + 1,
      string.indexOf(">", string.indexOf("<"))
    );
    let completeContent = string.substring(
      string.indexOf(">", string.indexOf("<")) + 1,
      string.lastIndexOf("<", string.lastIndexOf(">"))
    );
    if (completeContent === string) {
      completeContent = null;
    }
    let completeTag;
    let className;
    if (!(tag.indexOf("class") === -1)) {
      completeTag = tag.substring(0, tag.indexOf("class") - 1);
      className = tag.substring(tag.indexOf("class") + 7, tag.length - 1);
    } else {
      completeTag = tag;
      className = null;
    }
    if (!(completeTag.indexOf("/") === -1)) {
      completeTag = completeTag.substring(0, completeTag.indexOf("/"));
    }
    // log(
    //   `tag: '${completeTag}'\nclassName: '${className}'\ncontent: '${completeContent}'`
    // );
    createElementConverter(completeTag, completeContent, className);
  }
};
converter(html);
// console.timeEnd(time);
