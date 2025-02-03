import AnimateOnScroll from '../ui/animateOnScroll';

export default function GoogleMap() {
  return (
    <AnimateOnScroll>
      <section className="h-[600px] w-full fade-up-element">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5191461213087!2d77.70674661482283!3d13.198893990731592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1cfe75446265%3A0x296c70e9a129418e!2sKempegowda%20International%20Airport%20Bengaluru!5e0!3m2!1sen!2sin!4v1647291234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="filter grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </section>
    </AnimateOnScroll>
  );
}
