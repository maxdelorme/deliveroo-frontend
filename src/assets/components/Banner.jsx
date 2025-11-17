const Banner = ({ restaurant }) => {
  return (
    <section className="banner">
      <img src={restaurant.picture} alt={restaurant.name}></img>
      <dd>
        <h3>{restaurant.name}</h3>
        <p>{restaurant.description}</p>
      </dd>
    </section>
  );
};

export default Banner;
