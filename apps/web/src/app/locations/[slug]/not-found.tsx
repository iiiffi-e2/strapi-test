import Link from "next/link";

export default function HospitalNotFound() {
  return (
    <div className="container" style={{ padding: "120px 40px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: 16 }}>Location not found</h1>
      <p style={{ color: "var(--ink-soft)", marginBottom: 24 }}>
        We could not find that hospital page. It may have been moved or is not published yet.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to home
      </Link>
    </div>
  );
}
