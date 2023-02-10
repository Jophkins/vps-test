import React from 'react';
import styles from "../../pages/HomePage/HomePage.module.scss";

const EpisodePreview = () => {
  return (
    <div className={`row ${styles.contentRow}`}>
      <div className="col-12">
        <div className={`row ${styles.sectionEpisodesWrapperContent}`}>
          <div className="col-12 col-lg-4 align-self-center mb-4">
            <img className="section-episodes-wrapper__content-image img-fluid" src={require('../../assets/img/episode3-img.jpg')}
                 alt=""/>
          </div>
          <div className="col-12 col-lg-8">
            <div className={styles.sectionEpisodesWrapperContentTags}>
              Gear
            </div>
            <div className={styles.sectionEpisodesWrapperContentEpisodeNumber}>
              Episode 3
            </div>
            <div className={styles.sectionEpisodesWrapperContentTitle}>
              Should you get outboard audio gear?
            </div>
            <div className={styles.sectionEpisodesWrapperContentDescription}>
              Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our
              reasons on why you might want to consider picking something up.
            </div>
            <button className={styles.sectionEpisodesWrapperBtn}>View Episode Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePreview;
