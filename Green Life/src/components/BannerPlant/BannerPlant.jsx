import './BannerPlant.css'


function BannerPlant() {
  return (
    <>
      <div className="hero">
        <img
          className="bannerImage"
          alt="logo de green life"
          src="https://res.cloudinary.com/ddtolhmab/image/upload/v1711282900/Green%20LIfe/pexels-surene-palvie-2062061_3_e3kalf.png"
        />
        <div className="hero-text">
          <h1>
            <b>Intercambia Tus Esquejes</b>
          </h1>
          <p>¿A que estás esperando? </p>
        </div>
      </div>
    </>
  );
}

export default BannerPlant;
