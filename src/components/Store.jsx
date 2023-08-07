import { useState } from "react";
import CardView from "./CardsView";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";

export default function Store({ products }) {
    const [icon, setIcon] = useState('view_list');

    const onSwitch = () => {
        setIcon((icon) => icon ==='view_list' ? 'view_module' : 'view_list');
    }

    const view = (type) => {
        let markup;
        switch (type) {
            case 'view_list':
                markup = <CardView cards={products} />;
                break;
                default: 
                markup = <ListView items={products} />
        }
        return markup;
    }

    return (
        <div className="store">
            <IconSwitch icon={icon} onSwitch={onSwitch} />{view(icon)}
        </div>
    )
}