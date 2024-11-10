
const FooterItem = ({ href, label, isExternal }) => {
  return (
    <li className="list-inline-item list-none">
      <a
        className="text-muted hover:underline"
        href={href}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
      >
        {label}
      </a>
    </li>
  );
};

export default FooterItem;
