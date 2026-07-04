

(() => {
  const copyrightElement = document.getElementById("copyright");
  copyrightElement.innerHTML = "&copy;  " + new Date().getFullYear() + " https://sorestar.github.io/portfolio/ - All Rights Reserved.";
})();

const boundary = document.getElementById('boundary');
const squares = [
  { x: 76, y: 710, bg: '#CECBF6', bgi: "url('images/coding.png')", fg: '#3C3489' },
  { x: 60, y: 430, bg: '#dae19f', fg: '#595c31', bgi: "url('images/conference.png')" },
  { x: 70, y: 550, bg: '#9FE1CB', fg: '#085041', bgi: "url('images/crochet.png')" },
  { x: 49, y: 680, bg: '#dae19f', fg: '#595c31', bgi: "url('images/gameideas.png')" },
];
let selected = null;
let dragging = false;
let dragOffsetX = 0, dragOffsetY = 0;

squares.forEach(s => {
  const el = document.createElement('div');
  el.className = 'sq';
  el.style.left = s.x + 'vw';
  el.style.top = s.y + 'px';
  //el.style.background = s.bg;
  el.style.backgroundImage = s.bgi;
  el.style.backgroundSize = "cover";
  el.style.color = s.fg;

  el.addEventListener('mousedown', (e) => {
    e.stopPropagation();

    if (selected && selected !== el) selected.classList.remove('selected');
    selected = el;
    el.classList.add('selected');

    dragging = true;
    const rect = boundary.getBoundingClientRect();
    dragOffsetX = e.clientX - rect.left - el.offsetLeft;
    dragOffsetY = e.clientY - rect.top - el.offsetTop;

    e.preventDefault();
  });

  boundary.appendChild(el);
});

document.addEventListener('mousemove', (e) => {
  if (!dragging || !selected) return;

  const rect = boundary.getBoundingClientRect();
  const sqW = selected.offsetWidth;
  const sqH = selected.offsetHeight;

  let x = e.clientX - rect.left - dragOffsetX;
  let y = e.clientY - rect.top - dragOffsetY;

  x = Math.max(0, Math.min(x, rect.width - sqW));
  y = Math.max(0, Math.min(y, rect.height - sqH));

  selected.style.left = x + 'px';
  selected.style.top = y + 'px';
});

document.addEventListener('mouseup', () => {
  dragging = false;
});

boundary.addEventListener('mousedown', () => {
  if (selected) { selected.classList.remove('selected'); selected = null; }
});
