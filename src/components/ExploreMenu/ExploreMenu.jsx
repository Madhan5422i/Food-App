/* eslint-disable react/prop-types */
import "./ExploreMenu.css";
import { menu_list } from "/src/assets/assets.js";

function ExploreMenu({category,setCategory}) {
  console.log(category)
  return (
    <>
      <div id="#Explore" className="body">
        <div className="body-heading">
          <h1>Explore Menu</h1>
          <p>
            Choose from a diverse menu featuring a delectable array of dishes,
            one delicious meal at a time.
          </p>
        </div>
        <div className="explore-elements-list">
          {menu_list.map((item, index) => {
            return (
              <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-elements-items" key={index}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="items" />
                <p>{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr/>
      </div>
    </>
  );
}

export default ExploreMenu;
