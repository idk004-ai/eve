import { useEffect, type RefObject } from 'react';

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;
  isVisible: boolean;
  onOutsideClick: () => void;
}

const useOutsideClick = ({ 
  ref, 
  isVisible, 
  onOutsideClick 
}: UseOutsideClickProps): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isVisible && ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, ref, onOutsideClick]);
};

export default useOutsideClick;
