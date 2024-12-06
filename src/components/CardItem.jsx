const CardItem = ({ title, price, description }) => {
    return (
      <div className="w-full lg:w-1/3 px-4 mb-6">
        <div className="single-menu bg-white shadow-md rounded-lg p-4">
          <div className="title-div flex justify-between items-center mb-2">
            <h4 className="text-lg text-black font-semibold">{title}</h4>
            <p className="price text-lg text-amber-600">${price}</p>
          </div>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CardItem;
  