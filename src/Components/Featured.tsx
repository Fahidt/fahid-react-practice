import React, { useState, useEffect } from 'react';
import './Featured.css';

const Featured = () => {
  // Sample dictionary of items
  const items: { [key: string]: string } = {
    "Chicken Tikka Masala":  "Tikka Masala is a traditional Indian dish made up of chicken that's been marinated in yogurt, charred and simmered in a rich, creamy tomato-based spiced sauce. The gorgeous color comes from Garam Masala, which is blend of cinnamon, black pepper, coriander, cumin, and cardamon.",
    "Prawn Rezala": "The Rezala is a traditional dish from East India which is very much rooted in decadent Mughlai cuisine. It's a beautifully rich dish that combines a selection of wonderful spices, nut pastes and different techniques to produce a very fragrant dish. It comprises of a mild white sauce that boasts a gorgeous balance of sweet and tanginess, that's thin in consistency (but you can make it thicker if you prefer) and is topped off with a garnish of vibrant red chillies that float on top.",
    "Lamb Jalfrezi": "Tender chunks of lamb cooked in a spicy tomato gravy then finished with a fry up of chunky onions, peppers and tomoatoes and fresh garam masala.",
    "Beans on Toast": "Indulge in a symphony of flavors and textures with our exquisite culinary creation, 'Haricot Fagioli on Toasted Brioche.' This delectable masterpiece features meticulously slow-cooked haricot fagioli, harvested from the most coveted bean gardens, in a velvety reduction of handpicked heirloom tomatoes. Served atop lightly toasted artisanal brioche, each bite is a journey through the finest gastronomy, harmonizing the rich, earthy notes of the legumes with the delicate crunch of perfectly baked bread. A drizzle of truffle-infused olive oil adds a touch of opulence, transforming this humble classic into a transcendent epicurean experience.",
  };

  // State to store the selected item name
  const [selectedItem, setSelectedItem] = useState(items[Object.keys(items)[0]]);
  const [selectedDesc, setSelectedDesc] = useState(items[Object.values(items)[0]]);

  // Event handler function
  const handleItemClick = (itemName: string, itemDesc : string) => {
    setSelectedItem(itemName);
    setSelectedDesc(itemDesc);    
  };

  useEffect(() => {
    // Set the initial selected item and description on component mount
    setSelectedItem(Object.keys(items)[0]);
    setSelectedDesc(items[Object.keys(items)[0]]);
  }, []);

  return (
    <div>
      <h2>Featured Dishes</h2>
      <div className="container">
        <div className="left">
          <ul className="whole_list">
            {Object.entries(items).map(([key, value]) => (
              <li 
              className={selectedItem === key ? 'selected' : 'listed_item'}
              key={key} 
                onClick={() => handleItemClick(key,value)}
              >
                {key}
              </li>
              ))}
          </ul>
        </div>
        <div className="right">
          <h3>{selectedItem}</h3>
          <p>{selectedDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
