type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="service-card">
      <span aria-hidden="true" className="service-card__mark" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
