if (navigator.clipboard) {
  const clipBoardSvg = `Copy <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.0475 0.905273H1.67197C0.812542 0.905273 0.109375 1.60844 0.109375 2.46787V13.406H1.67197V2.46787H11.0475V0.905273ZM13.3914 4.03046H4.79716C3.93773 4.03046 3.23456 4.73363 3.23456 5.59306V16.5312C3.23456 17.3906 3.93773 18.0938 4.79716 18.0938H13.3914C14.2509 18.0938 14.954 17.3906 14.954 16.5312V5.59306C14.954 4.73363 14.2509 4.03046 13.3914 4.03046ZM13.3914 16.5312H4.79716V5.59306H13.3914V16.5312Z" fill="currentColor"></path></svg>`;
  const clipBoardCheckedSvg = `Copied <svg width="15" height="19" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3.33333H3.33333V5H5V3.33333ZM5 6.66667H3.33333V8.33333H5V6.66667ZM5 0C4.075 0 3.33333 0.75 3.33333 1.66667H5V0ZM8.33333 10H6.66667V11.6667H8.33333V10ZM13.3333 0V1.66667H15C15 0.75 14.25 0 13.3333 0ZM8.33333 0H6.66667V1.66667H8.33333V0ZM5 11.6667V10H3.33333C3.33333 10.9167 4.075 11.6667 5 11.6667ZM13.3333 8.33333H15V6.66667H13.3333V8.33333ZM13.3333 5H15V3.33333H13.3333V5ZM13.3333 11.6667C14.25 11.6667 15 10.9167 15 10H13.3333V11.6667ZM1.66667 3.33333H0V13.3333C0 14.25 0.741667 15 1.66667 15H11.6667V13.3333H1.66667V3.33333ZM10 1.66667H11.6667V0H10V1.66667ZM10 11.6667H11.6667V10H10V11.6667Z" fill="currentColor"></path></svg>`;

  let allPreParent = document.querySelectorAll('div.remark-highlight');

  allPreParent.forEach((pre) => {
    let button = document.createElement('button');
    button.innerHTML = clipBoardSvg;
    button.addEventListener('click', async () => {
      const codeContent = pre.querySelector('code').innerText;
      await navigator.clipboard.writeText(codeContent);

      button.innerHTML = clipBoardCheckedSvg;

      setTimeout(() => {
        button.innerHTML = clipBoardSvg;
      }, 2000);
    });
    pre.appendChild(button);
  });
}
