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

/**
 * CSS text-transform changes the name Chrome exposes, so the script face
 * can stay lowercase while the heading is announced as written.
 */
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
