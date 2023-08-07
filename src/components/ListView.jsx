import ShopItem from "./ShopItem"

export default function ListView({items}) {
    return (
        <div className="items">{items.map((i, ind) => <ShopItem item={i} key={ind} />)}</div>
    )
}