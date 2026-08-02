/**
 * Drop-in <img> that renders a labelled SVG placeholder when the real file fails to load.
 * Mirrors the fallback script from the original index_2.html.
 */
export default function Img({ src, alt, width = 800, height = 600, className = '', ...rest }) {
  function handleError(e) {
    if (e.target.dataset.ph) return;
    e.target.dataset.ph = '1';
    const name = (src || 'image').split('/').pop();
    const fs = Math.max(13, Math.round(width / 34));
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">` +
      `<rect width="100%" height="100%" fill="#151319"/>` +
      `<rect width="100%" height="100%" fill="none" stroke="#242230" stroke-width="2"/>` +
      `<text x="50%" y="50%" text-anchor="middle" fill="#DFC5FE" font-family="IBM Plex Mono, monospace" font-size="${fs}" letter-spacing="2">${name}</text>` +
      `</svg>`;
    e.target.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      {...rest}
    />
  );
}
