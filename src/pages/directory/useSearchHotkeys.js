import { useEffect } from "react";

// "/" focuses the input. Esc closes an open menu, or clears and blurs the input.
// Clicking outside the container closes any open menu.
export function useSearchHotkeys({ containerRef, inputRef, isMenuOpen, closeMenu, clearQuery }) {
    useEffect(() => {
        function handleMouseDown(event) {
            if (!containerRef.current?.contains(event.target)) closeMenu();
        }

        function handleKeyDown(event) {
            const input = inputRef.current;
            const inputFocused = document.activeElement === input;

            if (event.key === "/" && !inputFocused) {
                event.preventDefault();
                input?.focus();
                return;
            }

            if (event.key !== "Escape") return;

            if (isMenuOpen) {
                closeMenu();
            } else if (inputFocused) {
                clearQuery();
                input.blur();
            }
        }

        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [containerRef, inputRef, isMenuOpen, closeMenu, clearQuery]);
}