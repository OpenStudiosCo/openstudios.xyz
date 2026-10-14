/**
 * HTML fallback
 *
 * Hide the page without display:none so screen readers can still reach it.
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

// text-transform changes the name screen readers get. Keep the written heading.
function preserveHeadingNames(root) {
    const scope = root || document;
    scope.querySelectorAll('h1').forEach((heading) => {
        const text = heading.textContent.replace(/\s+/g, ' ').trim();
        if (!text || heading.hasAttribute('aria-label')) {
            return;
        }

        heading.setAttribute('aria-label', text);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    preserveHeadingNames(document);
});
