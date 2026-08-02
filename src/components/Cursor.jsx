import { useCursor } from '../hooks/useCursor';

export default function Cursor() {
  const { cursorRef, isOn, isLink } = useCursor();

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={[
        'cursor-ring',
        isOn ? 'is-on' : '',
        isLink ? 'is-link' : '',
      ].join(' ')}
    />
  );
}
