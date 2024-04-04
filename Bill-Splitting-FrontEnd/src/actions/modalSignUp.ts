export function initModal(): void {
  const botaoAbrirs: HTMLElement | null = document.querySelector(
    '[data-modal="abrir"]'
  );
  const botaoFechars: HTMLElement | null = document.querySelector(
    '[data-modal="fechar"]'
  );
  const containerModals: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );

  if (botaoAbrirs && botaoFechars && containerModals) {
    botaoAbrirs.addEventListener("click", abrirModals);
    botaoFechars.addEventListener("click", fecharModals);
    containerModals.addEventListener("click", cliqueForaModals);
  }
}

export function abrirModals(event: Event): void {
  event.preventDefault();
  const containerModals: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );
  containerModals?.classList.add("ativo");
}

export function fecharModals(event: Event): void {
  event.preventDefault();
  const containerModals: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );
  containerModals?.classList.remove("ativo");
}

export function cliqueForaModals(event: Event): void {
  const containerModals: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );
  if (event.target === containerModals) {
    fecharModals(event);
  }
}

initModal();
