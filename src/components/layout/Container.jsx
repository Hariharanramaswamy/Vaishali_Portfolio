export default function Container({ children, className = '' }) {
  return (
    <div
      className={`w-full max-w-container mx-auto px-[clamp(22px,5vw,56px)] ${className}`}
    >
      {children}
    </div>
  );
}
