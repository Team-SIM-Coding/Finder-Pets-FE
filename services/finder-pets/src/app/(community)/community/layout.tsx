export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>탭1</div>
        <div>탭2</div>
      </div>
      {children}
    </div>
  );
}
