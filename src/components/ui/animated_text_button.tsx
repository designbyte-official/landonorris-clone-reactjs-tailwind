import React, { useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface AnimatedTextButtonProps {
  text: string;
  href?: string;
  target?: string;
  rel?: string;
  icon?: string;
  iconAlt?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  onClick?: () => void;
}

const AnimatedTextButton: React.FC<AnimatedTextButtonProps> = ({
  text,
  href,
  target,
  rel,
  icon,
  iconAlt = 'Icon',
  className = '',
  iconClassName = '',
  textClassName = '',
  onClick,
}) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const letterContainersRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const letters = useMemo(() => text.split(''), [text]);
  const elementRef = href ? anchorRef : buttonRef;

  useGSAP(() => {
    // Set initial state for letters
    letterContainersRef.current.forEach((container) => {
      if (!container) return;
      const letter = container.querySelector('.letter-current');
      const letterNext = container.querySelector('.letter-next');
      
      if (letter) {
        gsap.set(letter, {
          y: 0,
          opacity: 1,
        });
      }
      
      if (letterNext) {
        gsap.set(letterNext, {
          y: 20,
          opacity: 0,
        });
      }
    });

    const handleMouseEnter = () => {
      letterContainersRef.current.forEach((container, index) => {
        if (!container) return;
        
        const letter = container.querySelector('.letter-current');
        const letterNext = container.querySelector('.letter-next');
        
        if (letter && letterNext) {
          gsap.to(letter, {
            y: -20,
            opacity: 0,
            duration: 0.4,
            delay: index * 0.05,
            ease: 'power2.in',
          });
          
          gsap.to(letterNext, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: index * 0.05,
            ease: 'power2.out',
          });
        }
      });
    };

    const handleMouseLeave = () => {
      letterContainersRef.current.forEach((container, index) => {
        if (!container) return;
        
        const letter = container.querySelector('.letter-current');
        const letterNext = container.querySelector('.letter-next');
        
        if (letter && letterNext) {
          // Reset letter-next back to below
          gsap.to(letterNext, {
            y: 20,
            opacity: 0,
            duration: 0.3,
            delay: index * 0.03,
            ease: 'power2.in',
          });
          
          // Bring letter-current back from above
          gsap.fromTo(letter,
            {
              y: -20,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.3,
              delay: index * 0.03,
              ease: 'power2.out',
            }
          );
        }
      });
    };

    const button = elementRef.current;
    if (button) {
      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, { scope: elementRef });

  const content = (
    <>
      {icon && (
        <img
          src={icon}
          alt={iconAlt}
          className={iconClassName}
        />
      )}
      <span className={`leading-none inline-flex ${textClassName}`}>
        {letters.map((letter, index) => (
          <div
            key={index}
            ref={(el) => {
              letterContainersRef.current[index] = el;
            }}
            className="inline-block relative overflow-hidden h-[1em]"
          >
            <span className="letter-current inline-block">{letter === ' ' ? '\u00A0' : letter}</span>
            <span className="letter-next absolute top-0 left-0 inline-block">{letter === ' ' ? '\u00A0' : letter}</span>
          </div>
        ))}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={anchorRef}
        href={href}
        target={target}
        rel={rel}
        className={className}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      className={className}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default AnimatedTextButton;

