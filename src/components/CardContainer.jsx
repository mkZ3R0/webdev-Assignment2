import CardItem from "./CardItem";

const CardContainer = () => {
  const coffeeMenu = [
    {
      title: "Cappuccino",
      price: "49",
      description: "Usage of the Internet is becoming more common due to rapid advance.",
    },
    {
      title: "Latte",
      price: "39",
      description: "A perfect blend of espresso and steamed milk with a touch of foam.",
    },
    {
      title: "Espresso",
      price: "29",
      description: "Strong and bold, served as a shot for true coffee enthusiasts.",
    },
    {
      title: "Americano",
      price: "19",
      description: "A single shot of espresso with a cup of hot water.",
    },
    {
      title: "Mocha",
      price: "59",
      description: "A blend of espresso, chocolate, steamed milk, and foam.",
    },
    {
      title: "Macchiato",
      price: "35",
      description: "A shot of espresso with a dash of frothy steamed milk.",
    },
    {
      title: "Affogato",
      price: "45",
      description: "A scoop of vanilla ice cream topped with a shot of espresso.",
    },
    {
      title: "Flat White",
      price: "55",
      description: "A shot of espresso with two parts steamed milk and a thin layer of microfoam.",
    }
  ];

  return (
    <div className="container pt-4 mx-auto px-4 bg-gray-200">
      <div className="menu-content pb-12 lg:pb-20 max-w-5xl mx-auto">
        <div className="title text-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-black">
            What kind of Coffee we serve for you
          </h1>
          <p className="text-gray-600">
            Who are in extremely love with eco-friendly systems.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-4">
        {coffeeMenu.map((item, index) => (
          <CardItem
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
