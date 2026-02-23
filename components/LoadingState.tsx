export function LoadingState({ label = 'Loading dashboard data...' }: { label?: string }) {
  return <div className="placeholder">{label}</div>;
}
