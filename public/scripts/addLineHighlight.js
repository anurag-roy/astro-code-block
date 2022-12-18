function highlightCode(pre, highlightRanges, lineNumberRowsContainer) {
  const ranges = highlightRanges.split(',').filter((val) => val);
  const preWidth = pre.scrollWidth;

  for (const range of ranges) {
    let [start, end] = range.split('-');
    if (!start || !end) {
      start = range;
      end = range;
    }

    for (let i = +start; i <= +end; i++) {
      const lineNumberSpan = lineNumberRowsContainer.querySelector(
        `span:nth-child(${i})`
      );
      //   lineNumberSpan.style.setProperty(
      //     '--highlight-background',
      //     'rgb(100 100 100 / 1)'
      //   );
      lineNumberSpan.style.setProperty(
        '--highlight-width',
        `calc(${preWidth}px)`
      );
      lineNumberSpan.style.setProperty(
        'border-left',
        `solid 3px var(--color-prettylights-syntax-entity)`
      );
    }
  }
}

const allPres = document.querySelectorAll('pre');

for (const pre of allPres) {
  const code = pre.firstElementChild;
  if (!code || !/code/i.test(code.tagName)) {
    continue;
  }

  const highlightRanges = pre.dataset.line;
  const lineNumbersContainer = pre.querySelector('.line-numbers-rows');

  if (!highlightRanges || !lineNumbersContainer) {
    continue;
  }

  const runHighlight = () =>
    highlightCode(pre, highlightRanges, lineNumbersContainer);
  runHighlight();

  const ro = new ResizeObserver(runHighlight);
  ro.observe(pre);
}
