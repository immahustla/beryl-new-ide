const el = document.getElementById('app');
if (el) {
  el.innerHTML = `
    <div style="font-family: system-ui; padding: 24px">
      <h1>Dyad (dev)</h1>
      <p>Renderer is live. <code>window.api?.ping?.()</code> → <b>${(window as any).api?.ping?.() ?? 'n/a'}</b></p>
    </div>
  `;
}
