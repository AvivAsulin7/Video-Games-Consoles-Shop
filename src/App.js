import { useState, useEffect } from "react";
import "./App.css";
import Console from "./components/Consoles/Console";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";
import Games from "./components/Games/Games";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import { SliderData } from "./components/Carousel/SliderData";
import ProductsContext from "./contexts/ProductsContext";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "FIFA 22",
      category: "game",
      console: "all",
      imgconsole: "https://i.postimg.cc/yxkgTxyc/all.png",
      img: "https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png",
      price: 59.99,
    },
    {
      id: 2,
      name: "Battlefield 2042",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/img/rnd/202111/0818/6OFhqtXvBpBavqM50dciqeRH.png",
      price: 59.99,
    },
    {
      id: 3,
      name: "Avengers",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://upload.wikimedia.org/wikipedia/he/thumb/7/72/Marvel%27s_Avengers_2020_Video_Game.jpg/800px-Marvel%27s_Avengers_2020_Video_Game.jpg",
      price: 49.99,
    },
    {
      id: 4,
      name: "Pokemon Arceus",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://m.media-amazon.com/images/I/81m+RzOulpL._AC_SL1500_.jpg",
      price: 59.99,
    },
    {
      id: 5,
      name: "NBA 2K22",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://s1.gaming-cdn.com/images/products/8997/orig-fallback-v1/nba-2k22-pc-game-steam-europe-cover.jpg?v=1651052657",
      price: 59.99,
    },
    {
      id: 6,
      name: "GTA V",
      category: "game",
      console: "all",
      imgconsole: "https://i.postimg.cc/yxkgTxyc/all.png",
      img: "https://upload.wikimedia.org/wikipedia/he/thumb/d/d6/GTA_V_COVER.jpg/800px-GTA_V_COVER.jpg",
      price: 44.99,
    },
    {
      id: 7,
      name: "Metroid Dread",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://i.etsystatic.com/11277520/r/il/b7ba25/3186750798/il_570xN.3186750798_30lc.jpg",
      price: 47.99,
    },
    {
      id: 8,
      name: "WWE 2K22",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://sportshub.cbsistatic.com/i/2022/01/20/f5e68dff-95b3-442c-a48e-43210900fb47/wwe-2k22-deluxe-cover-2.jpg?auto=webp&width=1461&height=1840&crop=0.794:1,smart",
      price: 53.99,
    },
    {
      id: 9,
      name: "New Pokemon Snap",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://assets-prd.ignimgs.com/2021/03/01/new-pokemon-snap-button-1614639848584.jpg",
      price: 54.99,
    },
    {
      id: 10,
      name: "Horizon",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://upload.wikimedia.org/wikipedia/he/c/c9/Horizon_Forbidden_West_Cover.png",
      price: 59.99,
    },
    {
      id: 11,
      name: "Assassins Creed VALHALLA",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://cdn.unikey.co.il/wp-content/uploads/2021/01/assassin-s-creed-valhalla-raid-i96340.jpg",
      price: 59.99,
    },
    {
      id: 12,
      name: "Red Dead Redemption 2",
      category: "game",
      console: "xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
      price: 27.99,
    },
    {
      id: 13,
      name: "Spider-Man",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png",
      price: 52.99,
    },
    {
      id: 14,
      name: "Gears 5",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://store-images.s-microsoft.com/image/apps.10933.65494054591008504.4eae27ba-1cfe-4af2-950a-4af81f8cd22a.b5b2909d-8884-48d0-b25a-68d6518c9b73",
      price: 54.99,
    },
    {
      id: 15,
      name: "Ratchet & Clank: Rift Apart",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/DwVjpbKOsFOyPdNzmSTSWuxG.png",
      price: 47.99,
    },
    {
      id: 16,
      name: "Dragon Ball:Xenoverse",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://www.mobygames.com/images/covers/l/387595-dragon-ball-xenoverse-xbox-one-front-cover.png",
      price: 34.99,
    },
    {
      id: 17,
      name: "Returnal",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png",
      price: 44.99,
    },
    {
      id: 18,
      name: "Demon's Souls",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/GemRaOZaCMhGxQ9dRhnQQyT5.png",
      price: 57.99,
    },
    {
      id: 19,
      name: "FORTNITE",
      category: "game",
      console: "all",
      imgconsole: "https://i.postimg.cc/yxkgTxyc/all.png",
      img: "https://s2.gaming-cdn.com/images/products/2500/orig-fallback-v1/fortnite-pc-game-epic-games-cover.jpg?v=1645021449",
      price: 59.99,
    },
    {
      id: 20,
      name: "LEGO Star Wars: The Skywalker Saga",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://cdn1.epicgames.com/offer/9c59efaabb6a48f19b3485d5d9416032/EGS_LEGOStarWarsTheSkywalkerSaga_TTGames_S2_1200x1600-fba27b1ae598e355c3ad42d04d9025ba",
      price: 52.99,
    },
    {
      id: 21,
      name: "Gran Turismo® 7",
      category: "game",
      console: "all",
      imgconsole: "https://i.postimg.cc/yxkgTxyc/all.png",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202202/2806/wpHT6JXmOA9iECLZKRPRvt0U.png",
      price: 57.99,
    },
    {
      id: 22,
      name: "Sackboy™: A Big Adventure",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/img/rnd/202010/1614/TJiBEQMJ9qa93lWBu4sKScY9.png",
      price: 52.99,
    },
    {
      id: 23,
      name: "Call of Duty® Vanguard",
      category: "game",
      console: "all",
      imgconsole: "https://i.postimg.cc/yxkgTxyc/all.png",
      img: "http://cdn.shopify.com/s/files/1/0526/0663/2093/products/call-of-duty-vanguard-standard-edition-exon-1.jpg?v=1639666812",
      price: 59.99,
    },
    {
      id: 24,
      name: "Elden Ring",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png",
      price: 42.99,
    },
    {
      id: 25,
      name: "Apex Legends",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://upload.wikimedia.org/wikipedia/he/a/a4/Apex_Legends_Cover.jpg",
      price: 39.99,
    },
    {
      id: 26,
      name: "Ghost of Tsushima",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://www.mobygames.com/images/covers/l/666918-ghost-of-tsushima-playstation-4-front-cover.png",
      price: 44.99,
    },
    {
      id: 27,
      name: "Kirby and the Forgotten Land",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://www.mobygames.com/images/covers/l/802936-kirby-and-the-forgotten-land-nintendo-switch-front-cover.jpg",
      price: 54.99,
    },
    {
      id: 28,
      name: "Watch dogs",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://cdn.europosters.eu/image/750/posters/watch-dogs-cover-i15072.jpg",
      price: 34.99,
    },
    {
      id: 30,
      name: "Watch dogs 2",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://store-images.s-microsoft.com/image/apps.26142.69997608528322872.06dc9610-5c4e-484e-b028-58ad215e637a.b216af15-301f-4f23-83a3-69a59a87985b",
      price: 49.99,
    },
    {
      id: 31,
      name: "UNCHARTED: Legacy of Thieves Collection",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202111/2000/gTUWTlvPHzxFJ2JAxtDyI2eS.png",
      price: 59.99,
    },
    {
      id: 32,
      name: "MINECRAFT",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://upload.wikimedia.org/wikipedia/he/thumb/5/51/Minecraft_cover.png/640px-Minecraft_cover.png",
      price: 47.99,
    },
    {
      id: 33,
      name: "MARIO STRIKERS: BATTLE LEAGUE FOOTBALL",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://player1-israel.b-cdn.net/images/thumbs/0004678_mario-strikers-battle-league-football_625.jpeg",
      price: 54.99,
    },
    {
      id: 34,
      name: "Cities:Skylines",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "http://cdn.shopify.com/s/files/1/0526/0663/2093/products/cities-skylines-deluxe-edition-exon-1.jpg?v=1639666916",
      price: 34.99,
    },
    {
      id: 35,
      name: "MLB The Show 22",
      category: "game",
      console: "Sony Playstation",
      imgconsole: "https://i.postimg.cc/fbf9z6bt/1sony.png",
      img: "https://sm.ign.com/ign_il/cover/m/mlb-the-sh/mlb-the-show-22_2kx4.jpg",
      price: 39.99,
    },
    {
      id: 36,
      name: "Fire Emblem Warriors: Three Hopes",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://sm.ign.com/ign_il/cover/f/fire-emble/fire-emblem-warriors-three-hopes_264s.jpg",
      price: 55.99,
    },
    {
      id: 37,
      name: "FAR CRY Primal",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://image.api.playstation.com/cdn/EP0001/CUSA03309_00/UBraNNd519BfMsRLYJ3MEEOkIo1iiwgB.png",
      price: 47.99,
    },
    {
      id: 38,
      name: "Monster Hunter Rise",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://e.snmc.io/lk/l/x/0b1009c971324e996c6d0e73080f109f/9359358",
      price: 34.99,
    },
    {
      id: 39,
      name: "Sonic Origin",
      category: "game",
      console: "Ninetendo",
      imgconsole: "https://i.postimg.cc/sXnGS773/ninetendo.png",
      img: "https://cdn1.epicgames.com/offer/78705aae6f39495e920966615c7a22ae/SO_base_portrait_1200x1600-b6561f0de87bd51dd83b3b338dd54310",
      price: 39.99,
    },
    {
      id: 40,
      name: "Asphalt 9:Legends",
      category: "game",
      console: "all",
      imgconsole: "https://i.postimg.cc/yxkgTxyc/all.png",
      img: "https://play-lh.googleusercontent.com/ZqXVUqmt6tddV3Il_qugha47UBONsBMtduwCEUC1YXL_QHD2mMmFtZZ-hQt5Fpu16dE",
      price: 49.99,
    },
    {
      id: 41,
      name: "eFootball 2022",
      category: "game",
      console: "Xbox",
      imgconsole: "https://i.postimg.cc/76PTfmCB/1xbox.png",
      img: "https://s2.gaming-cdn.com/images/products/7318/orig-fallback-v1/efootball-2022-pc-game-steam-cover.jpg?v=1632993144",
      price: 49.99,
    },
  ]);

  const [consoles, setConsoles] = useState([
    {
      id: 1,
      name: "Nintendo",
      category: "console",
      console: "Ninetendo",
      img: "https://i.postimg.cc/kgtYHV36/nintendo.png",
      price: 999.9,
    },
    {
      id: 2,
      name: "Playstation",
      category: "console",
      console: "Sony Playstation",
      img: "https://i.postimg.cc/VNWgyn76/sony.png",
      price: 999.9,
    },
    {
      id: 3,
      name: "Xbox",
      category: "console",
      console: "Xbox",
      img: "https://i.postimg.cc/fTSvz6H1/xbox.png",
      price: 999.9,
    },
  ]); // for 3 consoles,to console component

  // const [products, setProducts] = useState([]);
  const [updateproducts, setUpdateproducts] = useState(products); // for the filter
  const [productsCart, setProductsCart] = useState([]); // for the Cart
  const [cart, setCart] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // function fetchProducts() {
  //   fetch("http://localhost:8000/products")
  //     .then((res) => res.json())
  //     .then((items) => {
  //       setProducts(items);
  //       setUpdateproducts(items);
  //     });
  // }

  const filterProduct = (choose, x) => {
    if (choose === "All") setUpdateproducts(products);
    else if (x === "console")
      setUpdateproducts(
        products.filter(
          (item) => item.console === choose || item.console === "all"
        )
      );
    else if (x === "name")
      setUpdateproducts(products.filter((item) => item.name == choose));
  };

  const sortProducts = () => {
    setUpdateproducts(
      updateproducts.sort(function (a, b) {
        return a.price - b.price;
      })
    );
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filterProduct,
        sortProducts,
        productsCart,
        setProductsCart,
        cart,
        setCart,
        showCart,
        setShowCart,
        totalPrice,
        setTotalPrice,
      }}
    >
      <Router>
        <Navbar />
        <Cart></Cart>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Welcome />
                <Console consoles={consoles}></Console>
              </div>
            }
          ></Route>

          <Route
            path="products"
            element={
              <div>
                <Header />
                <Games
                  updateproducts={updateproducts}
                  setUpdateproducts={setUpdateproducts}
                />
              </div>
            }
          ></Route>

          <Route
            path="upcominggames"
            element={<Carousel slides={SliderData}></Carousel>}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </ProductsContext.Provider>
  );
}

export default App;
