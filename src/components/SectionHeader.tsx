export function SectionHeader({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-2xl bg-neutral-100 dark:bg-neutral-800 shadow-sm">
        <Icon className="w-5 h-5" />
      </div>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}
