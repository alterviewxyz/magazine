/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOnClickOutside = (
  ref: React.MutableRefObject<null>,
  handler: (event: MouseEvent | TouchEvent) => void
): void => {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent): void => {
        // Do nothing if clicking ref's element or descendent elements
        // @ts-ignore
        if (!ref.current || ref?.current?.contains(event.target)) {
          return;
        }
        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return (): void => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },

    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};
