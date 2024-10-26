import "./Sidebar.css";

export default function Sidebar({
  linkIndex,
  setLinkIndex,
  sidebarState,
  setSidebarState,
}) {
  let items = [
    { title: "Zitate", icon: "comment" },
    { title: "Abi-Motto", icon: "adjust" },
    { title: "Pausenverkauf", icon: "point_of_sale" },
  ];

  return (
    <aside
      className={
        sidebarState
          ? "sidebar animate-left sidebar-active "
          : "sidebar animate-left"
      }
    >
      <div className="header">
        <p className="user">
          <span className="material-symbols-outlined ">account_circle</span>
          Ilyas Kleine
        </p>
        <h3>Q12 - Dashboard</h3>
        <span className="subheading">HSG Erlenbach a. Main</span>
      </div>
      <ul className="sidebar-links">
        {items.map((item, index) => (
          <li
            key={item.title}
            onClick={() => {
              setLinkIndex(index);
              setSidebarState(false);
            }}
          >
            <a href="#" className={linkIndex === index ? "active" : ""}>
              <span className="material-symbols-outlined"> {item.icon} </span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
