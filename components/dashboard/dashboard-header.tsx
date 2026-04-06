interface DashboardHeaderProps {
  title: string;
  name: string;
  subtitle: string;
}

export function DashboardHeader({
  title,
  name,
  subtitle,
}: DashboardHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground mb-2">
        {title}, {name}! 👋
      </h1>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}