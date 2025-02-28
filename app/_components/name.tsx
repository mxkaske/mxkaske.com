import Link from "next/link";

export function Name() {
  return (
    <Link href="/" className="group">
      <span className="font-cal text-lg text-foreground">
        <span className="text-foreground group-hover:text-muted-foreground">
          mx
        </span>
        <span className="text-muted-foreground group-hover:text-foreground">
          kaske
        </span>
      </span>
    </Link>
  );
}
