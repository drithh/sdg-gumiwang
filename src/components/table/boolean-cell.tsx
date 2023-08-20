interface BooleanCellRendererParams {
  value: boolean | null | undefined;
}

export default function BooleanCellRenderer({
  value,
}: BooleanCellRendererParams) {
  // check if value is null or undefined
  if (value == null) {
    return null;
  }
  const text = value ? "Ya" : "Tidak";

  return <p className="text-left">{text}</p>;
}
