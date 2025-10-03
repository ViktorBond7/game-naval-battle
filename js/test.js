const refs = {
  inputTest: document.querySelector('.input-test'),
  btnTest: document.querySelector('.btn-test'),
  divTest: document.querySelector('.container-test'),
};

const createMarkup = (item, left) => {
  return `<span class='span' style="position:absolute; top: 0px; left:${left}px">${item}</span>`;
};

const onBtnTestClick = e => {
  const items = refs.inputTest.value;
  let count = 0;
  const createString = [...items]
    .map(item => {
      const markup = createMarkup(item, count);
      count += 100;
      return markup;
    })
    .join(' ');
  refs.divTest.innerHTML = createString;
};

let isDragging = false;
let element = null;
let shiftX = 0,
  shiftY = 0;

let startX = 0,
  startY = 0;

const onDivTestMousedown = e => {
  e.preventDefault();
  if (e.target === e.currentTarget) return;
  element = e.target;
  const r = element.getBoundingClientRect();
  isDragging = true;

  shiftX = e.clientX - r.left;
  shiftY = e.clientY - r.top;
  startX = parseFloat(element.style.left) || 0;
  startY = parseFloat(element.style.top) || 0;
};

const swapPositions = (el1, el2) => {
  el1.style.left = el2.style.left;
  el1.style.top = el2.style.top;
  el2.style.left = startX + 'px';
  el2.style.top = startY + 'px';
};

const onDivTestMousemove = e => {
  if (!isDragging || !element) return;

  const containerRect = refs.divTest.getBoundingClientRect();
  element.style.left = e.clientX - containerRect.left - shiftX + 'px';
  element.style.top = e.clientY - containerRect.top - shiftY + 'px';
};

const onDivTestmouseup = () => {
  if (!element) return;
  const elRect = element.getBoundingClientRect();

  refs.divTest.querySelectorAll('.span').forEach(span => {
    if (span !== element) {
      const r = span.getBoundingClientRect();
      if (
        elRect.left < r.right &&
        elRect.right > r.left &&
        elRect.top < r.bottom &&
        elRect.bottom > r.top
      ) {
        swapPositions(element, span);
      }
    }
  });
  isDragging = false;
  element = null;
};

refs.btnTest.addEventListener('click', onBtnTestClick);
refs.divTest.addEventListener('mousedown', onDivTestMousedown);
refs.divTest.addEventListener('mousemove', onDivTestMousemove);
document.addEventListener('mouseup', onDivTestmouseup);

// const createSpans = text => {
//   refs.divTest.innerHTML = [...text]
//     .map(ch => `<span class="span">${ch}</span>`)
//     .join('');
// };

// // 1) Після створення — «заморожуємо» верстку: absolute + координати відносно контейнера
// const freezeLayout = () => {
//   let count = 0;
//   const box = refs.divTest.getBoundingClientRect();
//   refs.divTest.querySelectorAll('.span').forEach(el => {
//     const r = el.getBoundingClientRect();
//     el.style.position = 'absolute';
//     el.style.left = r.left - box.left + count + 'px';
//     el.style.top = r.top - box.top + 'px';
//     el.style.margin = 0;
//     count += 30;
//   });
// };

// refs.btnTest.addEventListener('click', () => {
//   createSpans(refs.inputTest.value);
//   refs.inputTest.value = '';
//   freezeLayout();
// });

// // ---- Drag & Swap ----
// let isDragging = false;
// let activeEl = null;
// let shiftX = 0,
//   shiftY = 0;
// let originLeft = 0,
//   originTop = 0; // стартові координати активного (для свопу)
// let lastClientX = 0,
//   lastClientY = 0;

// const onMousedown = e => {
//   if (e.target.tagName !== 'SPAN') return;

//   const box = refs.divTest.getBoundingClientRect();
//   activeEl = e.target;

//   isDragging = true;

//   // 2) запам'ятовуємо стартові координати активного елемента (в системі контейнера)
//   originLeft = parseFloat(activeEl.style.left) || 0;
//   originTop = parseFloat(activeEl.style.top) || 0;

//   // готуємо fixed-перетягування
//   const rect = activeEl.getBoundingClientRect();
//   shiftX = e.clientX - rect.left;
//   shiftY = e.clientY - rect.top;

//   activeEl.style.pointerEvents = 'none'; // щоб клік «пробивався» до елемента під ним
//   activeEl.style.position = 'fixed';
//   activeEl.style.zIndex = 1000;

//   // поставимо під курсор, щоб не «стрибав»
//   moveAt(e.clientX, e.clientY);
//   e.preventDefault();
// };

// const moveAt = (clientX, clientY) => {
//   lastClientX = clientX;
//   lastClientY = clientY;
//   activeEl.style.left = clientX - shiftX + 'px';
//   activeEl.style.top = clientY - shiftY + 'px';
// };

// const onMousemove = e => {
//   if (!isDragging || !activeEl) return;
//   moveAt(e.clientX, e.clientY);
// };

// const onMouseup = () => {
//   if (!isDragging || !activeEl) return;

//   const box = refs.divTest.getBoundingClientRect();

//   // 3) шукаємо елемент під курсором
//   const dropTarget = document.elementFromPoint(lastClientX, lastClientY);

//   // перерахунок координат активного з window -> у систему контейнера
//   const activeNewLeft = parseFloat(activeEl.style.left) - box.left;
//   const activeNewTop = parseFloat(activeEl.style.top) - box.top;

//   // повертаємо активному нормальні pointer events
//   activeEl.style.pointerEvents = '';

//   // переводимо назад в absolute
//   activeEl.style.position = 'absolute';

//   if (dropTarget && dropTarget.tagName === 'SPAN' && dropTarget !== activeEl) {
//     // координати цільового (в системі контейнера)
//     const targetLeft =
//       parseFloat(dropTarget.style.left) ||
//       dropTarget.getBoundingClientRect().left - box.left;
//     const targetTop =
//       parseFloat(dropTarget.style.top) ||
//       dropTarget.getBoundingClientRect().top - box.top;

//     // SWAP: цільовий переїжджає на місце, де був активний ДО перетягування
//     dropTarget.style.left = originLeft + 'px';
//     dropTarget.style.top = originTop + 'px';

//     // активний стає на координати цілі
//     activeEl.style.left = targetLeft + 'px';
//     activeEl.style.top = targetTop + 'px';
//   } else {
//     // не на іншу літеру — просто ставимо туди, де відпустили
//     activeEl.style.left = activeNewLeft + 'px';
//     activeEl.style.top = activeNewTop + 'px';
//   }

//   // clean up
//   isDragging = false;
//   activeEl = null;
// };

// refs.divTest.addEventListener('mousedown', onMousedown);
// document.addEventListener('mousemove', onMousemove);
// document.addEventListener('mouseup', onMouseup);
