const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a href="/home" className="link link-hover">Home</a>
        <a href="/data" className="link link-hover">Data</a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Panti Rapih
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
