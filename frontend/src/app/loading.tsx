export default function Loading() {
  return (
    <div className="container-pro py-32 flex flex-col items-center gap-4">
      <div className="h-10 w-10 rounded-full border-4 border-brand-200 border-t-brand-600 animate-spin" />
      <p className="text-sm text-ink-500">Loading…</p>
    </div>
  )
}
