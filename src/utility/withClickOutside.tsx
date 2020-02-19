import * as React from 'react';

/* 
    This is a hook to add a method when user clicks outside a
    component. It can be used to close a dropdown or a modal.
    To use this hook, you need to add a ref to the component. Example:

    const App: React.FC: () {
        const ref = useRef<HTMLElement>();

        const [isOpen, setOpen] = useState(false);
        useOnClickOutside(ref, () => setOpen(false));

        return (
            <div>
            {isOpen ? (
                <div ref={ref}>

                </div>
            ) : (
                <button onClick={() => setOpen(true)}>Open </button>
            )}
            </div>
        );
    }
*/

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: (e: MouseEvent | TouchEvent) => void
) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
