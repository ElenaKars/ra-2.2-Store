import ShopCard from "./ShopCard";

export default function CardView({cards}) {
    return (
        <div className="cards">{cards.map((c, ind) => <ShopCard card={c} key={ind} />)}</div>
    )
}