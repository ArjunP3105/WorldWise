import { useEffect } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";

function User() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
