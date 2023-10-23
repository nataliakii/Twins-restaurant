const menuItems = [
  {
    image: "/menu/caesar.jpg",
    title: "Caesar",
    price: "5",
    category: "Salad",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/bread-barrel.jpg",
    title: "Bread",
    price: "5",
    category: "Starter",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/greek-salad.jpg",
    title: "Greek Salad",
    price: "5",
    category: "Starter",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/spinach-salad.jpg",
    title: "Spinach Salat",
    price: "5",
    category: "Salad",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/cake.jpg",
    title: "Greek Cake",
    price: "5",
    category: "Desserts",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/lobster-roll.jpg",
    title: "Lobster Roll",
    price: "15",
    category: "Main",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/lobster-bisque.jpg",
    title: "Lobster Bisque",
    price: "15",
    category: "Main",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/mozzarella.jpg",
    title: "Mozzarella",
    price: "5",
    category: "Starter",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
  {
    image: "/menu/tuscan-grilled.jpg",
    title: "Tuscan Grilled",
    price: "15",
    category: "Main",
    ingredients: "lorem isfcsf, sadffg, asfa, awerawe,sdfsdf",
  },
];

const filterMenuItems = (category) => {
  return menuItems.filter((menuItem) =>
    category === "*" ? true : menuItem.category === category
  );
};

//const getUniqueCategories = () => {
//  // Use Set to collect unique categories
//  const categoriesSet = new Set(menuItems.map((menuItem) => menuItem.category));
//  // Convert Set back to an array
//  const uniqueCategories = [...categoriesSet];
//  return uniqueCategories;
//};

module.exports = {
  menuItems,
  filterMenuItems,
  //getUniqueCategories, // Export the function to get unique categories
};
