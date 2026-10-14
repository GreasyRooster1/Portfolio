import {useEffect} from "react";

export function useClickOutside(ref, callback) {
    useEffect(() => {
        function handleClickOutside(event) {
            // Check if the click target is NOT a child of the referenced element
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        // Bind the event listener to the document
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}