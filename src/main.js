const root = document.querySelector('#root');
const log = console.log;
const crelement = content => {
  // const ab = data[0].split('\n');
  // const abc = ab.filter(Boolean);
  // log(abc[0].substring(2, abc[0].length));
  // content
  //   .split('\n\n')
  //   .map(a => {
  //     log(a.split('\n').filter(Boolean));
  //   })
  // .join('');
  content
    .split('\n\n')
    .map(a => {
      if (!(a.split('\n').filter(Boolean)[0].indexOf('<p') === -1)) {
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
                  ? `${b.substring(2, b.length)}<br/>`
                  : `${b.substring(2, b.length)}`
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
              ? `${b.substring(2, b.length)}<br/>`
              : `${b.substring(2, b.length)}`
          )
          .join('')}</p>`;
      }
    })
    .join('');
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
};

const htmlTemplete = `
  <p>hello</p>
  hellox

  sdf
`;
crelement(htmlTemplete);
