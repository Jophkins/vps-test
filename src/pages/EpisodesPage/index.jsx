import React, {useEffect} from 'react';

import styles from './EpisodesPage.module.scss';

const EpisodesPage = () => {

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);

    scrollToTop()
  }, []);

  return (
    <section className={styles.sectionEpisodes}>
      <div className="section-inner">
        <div className={`${styles.sectionEpisodesWrapper} container`}>
          <div className={styles.sectionEpisodesWrapperTitle}>
            Episodes
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-12">
              <div className={styles.sectionEpisodesWrapperCard}>
                <div className={`${styles.sectionEpisodesWrapperCardVideoBlock} ratio ratio-16x9`}>
                  <iframe src="https://www.youtube.com/embed/BqDDFe6dfXs"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
                </div>
                <div className={styles.sectionEpisodesWrapperCardEpisodeNumber}>
                  Episode 3
                </div>
                <div className={styles.sectionEpisodesWrapperCardTitle}>
                  Should you get outboard audio gear?
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.sectionEpisodesWrapperCard}>
                <div className={`${styles.sectionEpisodesWrapperCardVideoBlock} ratio ratio-16x9`}>
                  <iframe src="https://www.youtube.com/embed/BqDDFe6dfXs"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
                </div>
                <div className={styles.sectionEpisodesWrapperCardEpisodeNumber}>
                  Episode 3
                </div>
                <div className={styles.sectionEpisodesWrapperCardTitle}>
                  Should you get outboard audio gear?
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.sectionEpisodesWrapperCard}>
                <div className={`${styles.sectionEpisodesWrapperCardVideoBlock} ratio ratio-16x9`}>
                  <iframe src="https://www.youtube.com/embed/BqDDFe6dfXs"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
                </div>
                <div className={styles.sectionEpisodesWrapperCardEpisodeNumber}>
                  Episode 3
                </div>
                <div className={styles.sectionEpisodesWrapperCardTitle}>
                  Should you get outboard audio gear?
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-4 col-12">
              <div className={styles.sectionEpisodesWrapperCard}>
                <div className={`${styles.sectionEpisodesWrapperCardVideoBlock} ratio ratio-16x9`}>
                  <iframe src="https://www.youtube.com/embed/BqDDFe6dfXs"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
                </div>
                <div className={styles.sectionEpisodesWrapperCardEpisodeNumber}>
                  Episode 3
                </div>
                <div className={styles.sectionEpisodesWrapperCardTitle}>
                  Should you get outboard audio gear?
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.sectionEpisodesWrapperCard}>
                <div className={`${styles.sectionEpisodesWrapperCardVideoBlock} ratio ratio-16x9`}>
                  <iframe src="https://www.youtube.com/embed/BqDDFe6dfXs"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
                </div>
                <div className={styles.sectionEpisodesWrapperCardEpisodeNumber}>
                  Episode 3
                </div>
                <div className={styles.sectionEpisodesWrapperCardTitle}>
                  Should you get outboard audio gear?
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className={styles.sectionEpisodesWrapperCard}>
                <div className={`${styles.sectionEpisodesWrapperCardVideoBlock} ratio ratio-16x9`}>
                  <iframe src="https://www.youtube.com/embed/BqDDFe6dfXs"
                          title="YouTube video player" frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen />
                </div>
                <div className={styles.sectionEpisodesWrapperCardEpisodeNumber}>
                  Episode 3
                </div>
                <div className={styles.sectionEpisodesWrapperCardTitle}>
                  Should you get outboard audio gear?
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EpisodesPage;
