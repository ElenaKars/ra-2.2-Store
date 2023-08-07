Arrangment of goods
===

You need to make an application to display products in an online store. The customer wants the user to be able to see the products in the form of cards or in the form of a list, depending on which location he chooses.

![cards view](./assets/card_view.png)

## Description of the project

Implement a `Store` component that manages the state of the application, stores a list of products in the `products` attribute.

The markup icon that indicates switching between product layout types is implemented in the stateless `IconSwitch` component, to which we pass two properties from `Store`:
- `icon` is the name of the icon we want to show. The name of the icon corresponds to the name of the class from the [material icons](https://material.io/icons/#ic_view_module) library. In our case, this is either `view_list` or `view_module`.
- `onSwitch()` is an event handler that reacts when the user clicks on the icon.

Example:
```jsx
<IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")}/>
```
The products themselves are displayed in stateless `CardsView` or `ListView` components.

We pass the `cards` property to the `CardsView` component from `Store` - an array with data, each element from which is then already displayed using the `ShopCard` product card.

That is, `CardsView` displays many `ShopCard` cards. For one product - one card `ShopCard`.

We pass only one `items` property to the `ListView` component from `Store` - an array with data, each element from which is then already displayed using `ShopItem` for the products that we want to display.

That is, `ListView` displays many `ShopItem`. One `ShopItem` per item.

In order for the `Store` component to respond to the user's choice of markup, a state must be added to the `Store` class.

Your task:
- set the state of the selected markup type in the event handler, which `Store` passes to the `onSwitch` property of the `IconSwitch` component;
- pass the correct icon from the `Store` component to the `icon` property of the `IconSwitch` component;
- in the `Store` component, display products in the `CardsView` or `ListView` component according to the state of the `App` component.

![list_view](./assets/list_view.png)

Don't forget to include Material Icons:
```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons')
```

Data to display:
```js
const products = [{
   name: "Nike Metcon 2",
   price: "130",
   color: "red",
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
   name: "Nike Metcon 2",
   price: "130",
   color: "green",
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
   name: "Nike Metcon 2",
   price: "130",
   color: "blue",
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
   name: "Nike Metcon 2",
   price: "130",
   color: "black",
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
   name: "Nike free run",
   price: "170",
   color: "black",
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
   name: "Nike Metcon 3",
   price: "150",
   color: "green",
   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];
```