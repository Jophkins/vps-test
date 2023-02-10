import React, {useEffect} from 'react';
import Host from "../../components/Host";

const AboutPage = () => {

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);

    scrollToTop()
  }, []);

  return (
    <Host />
  );
};

export default AboutPage;
