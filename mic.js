// Once you type, claude.ai hides its Dictate button (it stays in the page,
// just invisible and `inert`). We float a copy just left of Send that
// clicks the real one, so recording and transcription are still Claude's.
const SEND = '[data-testid="chat-input-send"]';
const IDLE_SLOT = '[data-cds-part="idle-slot"]';
const SEND_SLOT = '[data-cds-part="send-slot"]';
const DICTATE = 'button[aria-label="Dictate"]';
const GAP = 4;

let proxy = null;

function hiddenDictate() {
  const slot = document.querySelector(IDLE_SLOT + '.invisible');
  return slot && slot.querySelector(DICTATE);
}

function makeProxy(source) {
  const btn = source.cloneNode(true);
  btn.removeAttribute('id');
  btn.setAttribute('aria-label', 'Dictate (keep text)');
  btn.title = 'Dictate';
  btn.style.cssText = 'position:fixed;z-index:2147483647;visibility:visible;opacity:1;pointer-events:auto;display:none;';
  // Keep the caret where it is in the message box.
  btn.addEventListener('mousedown', (e) => e.preventDefault());
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const real = hiddenDictate();
    if (!real) return;
    real.closest(IDLE_SLOT).removeAttribute('inert');
    real.click();
  });
  document.body.appendChild(btn);
  return btn;
}

function update() {
  const send = document.querySelector(SEND);
  const real = hiddenDictate();
  // Claude shows its own mic next to Send after you've dictated once.
  const nativeShown = !!document.querySelector(SEND_SLOT + ' ' + DICTATE);
  const show = send && real && !nativeShown && send.offsetWidth > 0;

  if (show) {
    if (!proxy || !proxy.isConnected) proxy = makeProxy(real);
    const r = send.getBoundingClientRect();
    proxy.style.width = r.height + 'px';
    proxy.style.height = r.height + 'px';
    proxy.style.top = r.top + 'px';
    proxy.style.left = r.left - r.height - GAP + 'px';
    proxy.style.display = '';
  } else if (proxy) {
    proxy.style.display = 'none';
  }
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
