import Container from './Container';

export default function Section({ children, className = '', id, ...props }) {
  return (
    <section
      id={id}
      className={`py-[clamp(88px,12vw,168px)] ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}
