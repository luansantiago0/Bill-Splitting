export function initModal(): void {
  const botaoAbrir: HTMLElement | null = document.querySelector(
    '[data-modal="abrir"]'
  );
  const botaoFechar: HTMLElement | null = document.querySelector(
    '[data-modal="fechar"]'
  );
  const containerModal: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

export function abrirModal(event: Event): void {
  event.preventDefault();
  const containerModal: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );
  containerModal?.classList.add("ativo");
}

export function fecharModal(event: Event): void {
  event.preventDefault();
  const containerModal: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );
  containerModal?.classList.remove("ativo");
}

export function cliqueForaModal(event: Event): void {
  const containerModal: HTMLElement | null = document.querySelector(
    '[data-modal="container"]'
  );
  if (event.target === containerModal) {
    fecharModal(event);
  }
}

initModal();
