const root = document.querySelector('#root');
const log = console.log;
const crelement = content => {
  let data = content.split('\n');
  log(data.splice(0, 1));
  log(data.splice(-1, 1));
  log(data.map(a => a.substring(2, a.length)));
  let arr = data.map(a => a.substring(2, a.length));
  log(arr.join('\n'));
};

const crelement2 = content => {
  let arr = content.split('\n');
  arr.splice(0, 1);
  arr.splice(-1, 1);
  log(
    arr
      .map(a => a.substring(2, a.length))
      .join()
      .replace(/,,/gi, '\n\n')
      .replace(/,/g, '\n')
      .split('\n\n')
  );
  arr
    .map(a => a.substring(2, a.length))
    .join('\n')
    .split('\n\n')
    .map(a => {
      if (
        !(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1) ||
        !(a.split('\n').filter(Boolean)[0].indexOf('<blockquote>') === -1)
      ) {
        log(a);
        root.innerHTML += a
          .split('\n')
          .filter(Boolean)
          .map(
            b =>
              `${
                !(
                  a.split('\n').filter(Boolean)[
                    a.split('\n').filter(Boolean).length - 1
                  ] === b
                )
                  ? `${b}<br/>`
                  : `${b}`
              }`
          )
          .join('');
      } else {
        root.innerHTML += `<p>${a
          .split('\n')
          .filter(Boolean)
          .map(b =>
            !(
              a.split('\n').filter(Boolean)[
                a.split('\n').filter(Boolean).length - 1
              ] === b
            )
              ? `${b}<br/>`
              : `${b}`
          )
          .join('')}</p>`;
      }
    })
    .join('');
};
const htmlTemplete = `
  hello
  
  hello

  hello
`;
crelement2(htmlTemplete);
// let arr = content.split('\n');
// arr.pop();
// arr.shift();
// arr
//   .map(a => a.substring(2, a.length))
//   .join()
//   .replace(/,,/gi, '\n\n')
//   .replace(/,/g, '\n')
//   .split('\n\n')
//   .map(a => {
//     if (!(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1)) {
//       root.innerHTML += a
//         .split('\n')
//         .filter(Boolean)
//         .map(
//           b =>
//             `${
//               !(
//                 a.split('\n').filter(Boolean)[
//                   a.split('\n').filter(Boolean).length - 1
//                 ] === b
//               )
//                 ? `${b}<br/>`
//                 : `${b}`
//             }`
//         )
//         .join('');
//     } else {
//       root.innerHTML += `<p>${a
//         .split('\n')
//         .filter(Boolean)
//         .map(b =>
//           !(
//             a.split('\n').filter(Boolean)[
//               a.split('\n').filter(Boolean).length - 1
//             ] === b
//           )
//             ? `${b}<br/>`
//             : `${b}`
//         )
//         .join('')}</p>`;
//     }
//   })
//   .join('');

// content
//   .split('\n\n')
//   .map(a => {
//     if (!(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1)) {
//       root.innerHTML += a
//         .split('\n')
//         .filter(Boolean)
//         .map(
//           b =>
//             `${
//               !(
//                 a.split('\n').filter(Boolean)[
//                   a.split('\n').filter(Boolean).length - 1
//                 ] === b
//               )
//                 ? `${b}<br/>`
//                 : `${b}`
//             }`
//         )
//         .join('');
//     } else {
//       root.innerHTML += `<p>${a
//         .split('\n')
//         .filter(Boolean)
//         .map(b =>
//           !(
//             a.split('\n').filter(Boolean)[
//               a.split('\n').filter(Boolean).length - 1
//             ] === b
//           )
//             ? `${b}<br/>`
//             : `${b}`
//         )
//         .join('')}</p>`;
//     }
//   })
//   .join('');

// const ab = data[0].split('\n');
// const abc = ab.filter(Boolean);
// log(abc[0].substring(2, abc[0].length));
// content
//   .split('\n\n')
//   .map(a => {
//     log(a.split('\n').filter(Boolean));
//   })
// .join('');
// content
//   .split('\n\n')
//   .map(a => {
//     log(content.split('\n'));
//     if (!(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1)) {
//       root.innerHTML += a
//         .split('\n')
//         .filter(Boolean)
//         .map(
//           b =>
//             `${
//               !(
//                 a.split('\n').filter(Boolean)[
//                   a.split('\n').filter(Boolean).length - 1
//                 ] === b
//               )
//                 ? `${b.substring(2, b.length)}<br/>`
//                 : `${b.substring(2, b.length)}`
//             }`
//         )
//         .join('');
//     } else {
//       root.innerHTML += `<p>${a
//         .split('\n')
//         .filter(Boolean)
//         .map(b =>
//           !(
//             a.split('\n').filter(Boolean)[
//               a.split('\n').filter(Boolean).length - 1
//             ] === b
//           )
//             ? `${b.substring(2, b.length)}<br/>`
//             : `${b.substring(2, b.length)}`
//         )
//         .join('')}</p>`;
//     }
//   })
//   .join('');
// content
//   .split('\n\n')
//   .map(a => {
//     if (!(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1)) {
//       a.split('\n')
//         .filter(Boolean)
//         .map(
//           b =>
//             `${
//               !(
//                 a.split('\n').filter(Boolean)[
//                   a.split('\n').filter(Boolean).length - 1
//                 ] === b
//               )
//                 ? `${b.substring(2, b.length)}<br/>`
//                 : `${b.substring(2, b.length)}`
//             }`
//         )
//         .join('');
//     } else {
//       root.innerHTML += `<p>${a
//         .split('\n')
//         .filter(Boolean)
//         .map(b =>
//           !(
//             a.split('\n').filter(Boolean)[
//               a.split('\n').filter(Boolean).length - 1
//             ] === b
//           )
//             ? `${b.substring(2, b.length)}<br/>`
//             : `${b.substring(2, b.length)}`
//         )
//         .join('')}</p>`;
//     }
//   })
//   .join('');
// content
//   .split('\n\n')
//   .map(a => {
//     a.split('\n')
//       .filter(Boolean)
//       .map(b => {
//         log(b.substring(2, b.length));
//       });
//   })
//   .join('');
