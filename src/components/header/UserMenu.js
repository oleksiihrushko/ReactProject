import React, { useState } from "react";
import Modal from "../modal/Modal";
import Exit from "./Exit";
import ExitMobile from "./ExitMobile";
import styles from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import authSlice from "../../redux/auth/authSlice";
import { logOut } from "../../redux/auth/authOperations";

const UserMenu = () => {
  const [localState, setLocalState] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const closeModal = () => {
    setLocalState(false);
  };
  const openModal = () => {
    setLocalState(true);
  };

  const signOut = () => {
    console.log("state.auth.googleLogin", state.auth.googleLogin);
    if (state.auth.googleLogin) {
      const googleSignOut = () => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        GoogleAuth.signOut({
          scope: "profile email",
        }).then(() => console.log("signOut SUCCESS"));
      };
      googleSignOut();
      dispatch(authSlice.actions.logoutGoogleSuccess());
    } else {
      dispatch(logOut());
    }
    closeModal();
  };

  return (
    <ul className={styles.headerUlUl}>
      <li>
        {localState && (
          <Modal
            text="Вы действительно хотите выйты?"
            onTrue={signOut}
            closeModal={closeModal}
          />
        )}
        <ExitMobile open={openModal} photo={state.auth.photo} />
        <Exit open={openModal} name={state.auth.name.firstName} />
      </li>
    </ul>
  );
};

export default UserMenu;
