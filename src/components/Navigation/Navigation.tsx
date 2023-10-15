type NavigationProps = {
  brand: string;
};

export default function Navigation(props: NavigationProps) {
  const { brand } = props;

  return (
    <header>
      <nav className="nav">
        <p className="logo">{brand}</p>
        <ul className="menu-links">
          <li>Example 1.</li>
          <li>Example 2.</li>
          <li>Example 3.</li>
          <li>Example 4.</li>
        </ul>
      </nav>
    </header>
  );
}
