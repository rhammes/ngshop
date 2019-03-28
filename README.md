# Angular Shop

This exercise has two parts:

1. Browsing the shop and viewing each item (Services, DI)
2. The shopping cart (Observables, Routing)

> TODO: Add a JSON file or other data file for shop items.
## Setup

```
git clone
cd ngshop
npm install
ng serve --open
```

# Lesson

## Part I: The Shop

1. Create a new component, `DogList`
2. OPTIONAL: Create a class, `Dog` (will work without this, use as a value add if needed for the lesson)

`DogList` should display a gallery of dogs along with their names. The data source for the dogs is stored in `dogdata.json`. 

`tsconfig.json` is has been configured with 3 properties to handle JSON files: `resolveJsonModule, esModuleInterop, and allowSyntheticDefaultImports`. 

With that, JSON files can be imported as follows: `import jsonName from `path/to/json;`

**dogs.service.ts**
- Import dogdata.json
- Add a private property to `DogService` 

**dog-list.component.ts**
- Import `DogService`
- Inject `DogService` into the constructor as `dogService`
- Add a method `getAll()` which returns all the dogs.
- Add property `dogs` with value `this.getAll()`

**dog-list.component.html**
- Create a div with `ngFor` directive to loop through dogs.
- Display the dog name and image.

## Part II: Shopping Cart


### Components

- DogList
- DogDetail

### Services

- Dogs
- Notifications

### Models

- Dog
- Cart
- Notification

## Stories

**User**
- Users can browse a gallery of products
- Users can view a detail page for a product
- Users can add an item to a shopping cart
- Users can update/remove an item to a shopping cart

**Cart**
- Cart can contain a list of items.
- Cart tracks quantity, item and cost
- Cart displays total
- Cart can notify user if an item is out of stock
