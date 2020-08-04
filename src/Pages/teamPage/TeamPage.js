import React from 'react';
import { useHistory, useLocation} from 'react-router-dom';
import s from './TeamPage.module.css';
import ContactUs from "./ContactUs";
import { ReactComponent as ArrowBackHome } from './btnBackPageContact/back.svg';

const TeamPage = () => {
    // const history = useHistory;
    // const location = useLocation;
    // const Contacts = location.pathname.split('/')[1] === 'team';
    // const ClickBack = () => {
    //     history.push('/');
{/* <Link
  to={{
    pathname: '/team',
    state: { from: 'useHistory' },
  }}
/> */}
// console.log(this.props);
        return (
            <div className={s.contacts_div_main}>
                {(
                    <>
                    <button
                    className={s.arrowBtn}
                    type="button"
                    // onClick={ClickBack}
                    ><ArrowBackHome />
                    <p className={s.textBackBtn}>Назад</p>
                    </button>
                    </>
                )}
                <ContactUs />
                
            </div>
        );
}

export default TeamPage;