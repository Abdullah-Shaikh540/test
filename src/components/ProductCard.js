import './ProductCard.css';

const ProductCard = ({ id, title, price, category, image }) => {
    return (
      <div className="card row justify-content-center col-6">
        <img className="card-image" src={image} alt={title} />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-price">${price}</p>
          <p className="card-category">{category}</p>
        </div>
      </div>
    );
  };

export default ProductCard;
