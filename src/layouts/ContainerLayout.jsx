import { Link } from "react-router-dom";
function ContainerLayout({ title, description="Aliquam lacinia diam quis lacus euismod", link,children }) {
  return (
    <div className="layout">
      <div className="layout__wrapper">
        <div className="layout__wrapper--text">
          <h4 className="layout__wrapper--title">{title}</h4>
          <p className="layout__wrapper--description">
            {description}
          </p>
        </div>
        <Link to="#" className="layout__wrapper--link">{link}</Link>
      </div>
      <div className="layout__container">
        {children}
      </div>
    </div>
  );
}

export default ContainerLayout;
