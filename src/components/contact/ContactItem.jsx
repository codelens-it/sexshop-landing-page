import './contact.css';

const ContactItem = ({ icon, alt, text }) => {
  return (
    <div className="contact-item">
      <div className="contact-icon">
        <img 
          src={icon} 
          alt={alt} 
          width="24" 
          height="24" 
          loading="lazy"
        />
      </div>
      <div className="contact-info">
        <p className="contact-text">{text}</p>
      </div>
    </div>
  );
};

export default ContactItem;