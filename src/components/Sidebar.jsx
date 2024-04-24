import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error soluta
        veniam omnis, nobis non deserunt odio quia suscipit fuga officiis alias
        possimus at incidunt reiciendis laudantium ut debitis, delectus facilis.
      </p>
    </div>
  );
}

export default Sidebar;
