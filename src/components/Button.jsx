import React from 'react';
import classNames from 'classnames';

export function Button({
  onClick, children, outline, base, className, disabled, withIcon, bordered, ...props
}) {
  const classes = classNames('px-10 py-2 font-medium border-2 tracking-wider duration-150', {
    'text-white hover:shadow-lg border-blue-400 bg-blue-400 drop-shadow-md rounded': base,
    'bg-transparent border-transparent drop-shadow-none text-blue-400 hover:text-blue-600': outline,
    'flex justify-center items-center gap-2': withIcon,
    'border-blue-400 border-2 rounded text-blue-400 font-bold mt-6 hover:text-blue-500 hover:border-blue-500': bordered,
  });

  return (
    <button {...props} onClick={onClick} className={`${classes} ${className}`} disabled={disabled}>{children}</button>
  );
}
