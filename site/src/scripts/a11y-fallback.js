/**
 * Keep the HTML fallback in the accessibility tree.
 * display:none removes it for screen readers and keyboard users.
 */
function concealFallbackContent(pageWrapper) {
    const wrapper = pageWrapper || document.getElementById('page-wrapper');
    if (!wrapper) {
        return;
    }

    wrapper.classList.add('is-concealed');
    wrapper.style.removeProperty('display');
    wrapper.style.removeProperty('opacity');
    wrapper.style.removeProperty('transition');
    wrapper.style.pointerEvents = 'none';
}

window.concealFallbackContent = concealFallbackContent;
