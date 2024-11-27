const AboutPage = () => {
  return (
    <div style={pageStyle}>
      <main style={mainStyle}>
        <section style={sectionStyle}>
          <h2 style={headingStyle}>About Our Store</h2>
          <div style={contentStyle}>
            <p>
              Welcome to <strong>Our Store</strong>, where quality meets affordability! Founded in 2010, we have 
              grown to be a trusted name in the retail industry, offering a diverse range of products, from stylish 
              clothing to cutting-edge electronics. Our mission is to provide you with an enjoyable shopping experience 
              that keeps you coming back for more.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Our Mission</h2>
          <div style={contentStyle}>
            <p>
              Our mission is simple: to bring you the best products at the best prices, coupled with 
              exceptional customer service. We continuously strive to enhance our offerings, ensuring that you find 
              exactly what you're looking for every time you visit us.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={headingStyle}>Meet Our Team</h2>
          <div style={contentStyle}>
            <p>
            Our dedicated team is at the heart of everything we do. From customer service to product selection, each member plays a vital role in ensuring that you have a fantastic experience.
              <strong> We’re here to help!</strong>
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
    <h2 style={headingStyle}>What Our Customers Say</h2>    
    <blockquote style={blockquoteStyle}>
        "Shopping at Our Store has been a fantastic experience! The variety of products is incredible, and I always find what I need."
        <cite>— Sarah J.</cite>
    </blockquote>          
    <blockquote style={blockquoteStyle}>
        "I ordered a laptop from here, and it arrived in perfect condition. Excellent service and fast shipping!"
        <cite>— John D.</cite>
    </blockquote>          
    <blockquote style={blockquoteStyle}>
        "The customer support team is amazing! They helped me with my order, and I couldn't be happier with my purchase."
        <cite>— Emily R.</cite>
    </blockquote>
    <blockquote style={blockquoteStyle}>
        "Our Store always has the best deals! I've saved so much money shopping here, and the quality is top-notch."
        <cite>— Michael T.</cite>
    </blockquote>
    <blockquote style={blockquoteStyle}>
        "I love the selection of clothing! Every time I visit, I leave with something stylish and affordable."
        <cite>— Jessica L.</cite>
    </blockquote>
    <blockquote style={blockquoteStyle}>
        "The organic products are fantastic! I can trust that I'm buying healthy options for my family."
        <cite>— Anna K.</cite>
    </blockquote>
    <blockquote style={blockquoteStyle}>
        "I appreciate the sustainability focus of this store. It makes shopping feel good!"
        <cite>— Tom R.</cite>
    </blockquote>
    <blockquote style={blockquoteStyle}>
        "Quick delivery and great customer service. I will definitely be a repeat customer!"
        <cite>— Lisa M.</cite>
    </blockquote>
    <blockquote style={blockquoteStyle}>
        "The store's layout is so easy to navigate. I can find what I need without hassle."
        <cite>— Mark S.</cite>
    </blockquote>
</section>

      </main>
    </div>
  );
};

export default AboutPage;

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f0f4f8",
  minWidth: "100vh",
};

const mainStyle = {
  flex: 1,
  padding: "20px",
};

const sectionStyle = {
  margin: "20px 0",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  color: "#007bff",
  borderBottom: "2px solid #007bff",
  paddingBottom: "10px",
  marginBottom: "15px",
};

const contentStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const blockquoteStyle = {
  fontStyle: "italic",
  borderLeft: "4px solid #007bff",
  paddingLeft: "10px",
  margin: "10px 0",
  color: "#555",
};
