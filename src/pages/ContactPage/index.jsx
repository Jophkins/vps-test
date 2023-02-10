import React, {useEffect} from 'react';

const ContactPage = () => {

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);

    scrollToTop()
  }, []);
  
  return (
    <div>
      Contact Page
    </div>
  );
};

export default ContactPage;
