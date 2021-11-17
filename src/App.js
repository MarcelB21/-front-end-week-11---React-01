import React from 'react';
import './App.css';
import Button from "./Button.js";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import Product from "./Product.js";
import brand from "./assets/brand.png";
import ourStory from "./assets/our_story.png"
import Tile from "./Tile.js";

function App() {
  return (
      <div>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              typeOfButton="button"
              buttonMessage="To the collection"
              buttonTitle="To the collection"
              enabled={false}
          />
          <Button
              typeOfButton="button"
              buttonMessage="Shop all bags"
              buttonTitle="Shop all bags"
              enabled={false}
          />
          <Button
              typeOfButton="button"
              buttonMessage="Pre-orders"
              buttonTitle="Pre-orders"
              enabled={true}
          />
        </nav>
        <main>
          <Product
              category="Best seller"
              image={bag1}
              name="Bag1"
              title="The handy bag"
              price="€400,-"
          />
          <Product
              category="Best seller"
              image={bag2}
              name="Bag2"
              title="The stylish bag"
              price="€250,-"
          />
          <Product
              category="New collection"
              image={bag3}
              name="Bag3"
              title="The simple bag"
              price="€300,-"
          />
          <Product
              category="New collection"
              image={bag4}
              name="Bag4"
              title="The trendy bag"
              price="€150,-"
          />
        </main>
        <footer>
          <Tile
              title="The Brand"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam debitis dicta dolore fugiat impedit inventore ipsum, iusto obcaecati praesentium sapiente!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ea fugit hic magnam molestiae officia repellat repudiandae rerum saepe tempore!"
          />
          <Tile
              image={brand}
              image_name="brand"
          />
          <Tile
              title="Our story"
              paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at atque cum distinctio, et eveniet facilis ipsa labore, minus nisi odit quasi reiciendis veritatis. Debitis doloremque magnam qui quidem repudiandae."
          />
          <Tile
              image={ourStory}
              image_name="story"
          />
        </footer>

      </div>
  );
}

export default App;



