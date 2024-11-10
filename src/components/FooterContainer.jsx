import FooterItem from './FooterItem';

const FooterContainer = () => {
  return (
    <footer className="footer bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-gray-600 text-sm">

          <div className="text-start">
            <p className="mb-0">
              <a
                className="text-gray-600 hover:text-gray-800 hover:underline"
                href="https://adminkit.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>AdminKit</strong>
              </a>{" "}
              -{" "}
              <a
                className="text-gray-600 hover:text-gray-800 hover:underline"
                href="https://adminkit.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Bootstrap Admin Template</strong>
              </a>{" "}
              &copy;
            </p>
          </div>

          <div className="flex space-x-4">
            <FooterItem href="https://adminkit.io/" label="Support" isExternal={true} />
            <FooterItem href="https://adminkit.io/" label="Help Center" isExternal={true} />
            <FooterItem href="https://adminkit.io/" label="Privacy" isExternal={true} />
            <FooterItem href="https://adminkit.io/" label="Terms" isExternal={true} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContainer;

