import React from 'react';

import styles from './Host.module.scss';
import {NavLink} from "react-router-dom";
import {ABOUT_ROUTE} from "../../utils/consts";

const Host = () => {
  return (
    <section className={styles.sectionHost}>
      <div className="section-inner">
        <div className={`${styles.sectionHostWrapper} container`}>
          <div className="row">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center">
              <div className={styles.sectionHostWrapperTitle}>
                Jacob Paulaner
              </div>
              <div className={styles.sectionHostWrapperDescription}>
                Jacob has a background in audio engineering, and has been podcasting since the early days.
                <br/><br/>
                He’s here to help you level up your game by sharing everything he’s learned along the way.
              </div>
              <div className={styles.sectionHostWrapperBtnBlock}>
                <NavLink to={ABOUT_ROUTE}>
                  <img className="img-fluid" src={require('../../assets/img/host-btn.png')} alt=""/>
                </NavLink>
                <span>Meet your host</span>
              </div>
            </div>
            <div className={`col-12 col-lg-6 ${styles.sectionHostWrapperImage} p-lg-5`}>
              <img className="img-fluid" src={require('../../assets/img/host-img.jpg')} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Host;
