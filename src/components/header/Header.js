import React, { useState } from 'react';
import Modal from '../modal/Modal';
import Exit from './Exit';
import ExitMobile from './ExitMobile';
import styles from './style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import authSlice from '../../redux/auth/authSlice';
import { logOut } from '../../redux/auth/authOperations';

const Header = () => {
  const [localState, setLocalState] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(state => state);

  const closeModal = () => {
    setLocalState(false);
  };
  const openModal = () => {
    setLocalState(true);
  };

  const signOut = () => {
    console.log('state.auth.googleLogin', state.auth.googleLogin);
    if (state.auth.googleLogin) {
      const googleSignOut = () => {
        const GoogleAuth = window.gapi.auth2.getAuthInstance();
        GoogleAuth.signOut({
          scope: 'profile email',
        }).then(() => console.log('signOut SUCCESS'));
      };
      googleSignOut();
      dispatch(authSlice.actions.logoutGoogleSuccess());
    } else {
      dispatch(logOut());
    }
    closeModal();
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.headerUl}>
          <li>LOGO</li>
          <li>
            {state.auth.token && (
              <ul className={styles.headerUlUl}>
                <li>
                  <span
                    style={{
                      fontFamily: 'RobotoRegular',
                      backgroundColor: '#f4f7fa',
                      paddingBottom: 5,
                      paddingTop: 5,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderRadius: '50%',
                      fontSize: 14,
                    }}
                  >
                    {state.firstLetter}
                  </span>
                </li>
                <li>
                  <ExitMobile />
                  {/* <Exit name={this.state.users.user.userData.name.fullName} /> */}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
