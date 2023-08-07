export default function ShopItem ({item}){
    return(
       <div className="item">
           <img className="item__img" src={item.img} alt="" />
           <h2 className="item__title">{item.name}</h2>
           <div className="item__color">{item.color}</div>
            <span className="price">&#36;{item.price}</span>
            <button className="button">Add to cart</button>
       </div>
    )
}