import "./MenuToggle.css";

export default function MenuToggle({ sidebarState, setSidebarState }) {
  function toggleSidebar() {
    setSidebarState(!sidebarState);
  }

  return (
    <span
      className="menu-icon material-symbols-outlined"
      onClick={toggleSidebar}
    >
      menu
    </span>
  );
}
