import './Product.css';

const Product = ({_id,title,thumbnail,price,discountPercentage,rating,handleClick,handleView}) => {
  return (  
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="image-container">
                <div className="first">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="discount">-{discountPercentage}%</span>
                    <span className="wishlist">
                      <i className="fa fa-trash" onClick={()=>handleClick(_id)}/>
                     <a href={"/edit/"+_id} >
                      <i className="fa fa-edit"/>
                      </a>
                    </span>
                  </div>
                </div>
                <img
                  src={thumbnail}
                  className="img-fluid rounded thumbnail-image"
                  alt={title}
                />
              </div>
              <div className="product-detail-container p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="dress-name">{title}</h5>
                  <div className="d-flex flex-column mb-2">
                    <span className="new-price">$  {price- (price*discountPercentage/100).toFixed(2)}</span>
                    <small className="old-price text-right">$ {price}</small>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div>
                    <i className="fa fa-star-o rating-star" />
                    <span className="rating-number">{rating}</span>
                  </div>
                  <span className="buy" onClick={()=>handleView(_id)}>BUY +</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
