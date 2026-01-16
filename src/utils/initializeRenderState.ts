export const initializeRenderState = () => {
    requestAnimationFrame(() => {
        if (import.meta.env.DEV) document.querySelector('[data-dev-fouc]')?.remove();
        requestAnimationFrame(() => {
            document.documentElement.classList.add('ready');
        });
    });
};