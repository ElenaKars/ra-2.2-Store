export default function ShopCard ({card}){
    return(
       <div className="card">
           <h2 className="card__title">{card.name}</h2>
           <div className="card__color">{card.color}</div>
           <img className="card__img" src={card.img} alt="" />
           <div className="card__footer">
               <span className="price">&#36;{card.price}</span>
               <button className="button">Add to cart</button>
           </div>
       </div>
    )
}