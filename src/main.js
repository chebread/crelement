const root = document.querySelector('#root');
const log = console.log;
const crelement = content => {
  let data = content.split('\n\n');
  data
    .map(
      a =>
        (root.innerHTML += `<p>${a
          .split('\n')
          .filter(Boolean)
          .map(c => `${c}<br/>`)
          .join('')}</p>`)
    )
    .join('');
};

const htmlTemplete = `
안녕햐세요
반갑고요

네네 그럽시다. 하.
이런

우와!
`;
crelement(htmlTemplete);
