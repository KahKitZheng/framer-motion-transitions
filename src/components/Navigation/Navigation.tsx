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
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
          <li>lorem</li>
        </ul>
      </nav>
    </header>
  );
}
