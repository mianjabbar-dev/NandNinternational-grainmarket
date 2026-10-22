/* Central product data — N&N International @ Grain Market Stores
   Classic script (no ES modules) so the site works when index.html is
   opened directly from disk as well as when deployed.
   Deliberately no commercial fields of any kind — showcase only. */
(function () {
  window.NN_CATEGORIES = [
    { id: "all", label: "All Products" },
    { id: "rice-grains", label: "Rice & Grains" },
    { id: "pulses", label: "Pulses" },
    { id: "spices", label: "Spices" }
  ];

  window.NN_PRODUCTS = [
    {
      id: "basmati-rice",
      name: "Basmati Rice",
      category: "rice-grains",
      categoryLabel: "Rice & Grains",
      image: "images/products/basmati-rice.jpg",
      alt: "Uncooked long-grain basmati rice",
      description: "A long-grain rice variety known for its distinctive aroma and characteristic grain length."
    },
    {
      id: "irri-6-rice",
      name: "IRRI-6 Rice",
      category: "rice-grains",
      categoryLabel: "Rice & Grains",
      image: "images/products/irri-6-rice.jpg",
      alt: "Uncooked white rice grains on a bamboo surface",
      description: "A widely traded white rice variety, commonly used as an everyday staple grain."
    },
    {
      id: "chickpeas-chana",
      name: "Chickpeas (Chana)",
      category: "pulses",
      categoryLabel: "Pulses",
      image: "images/products/chickpeas-chana.jpg",
      alt: "Dried chickpeas in an open sack at a grain market shop",
      description: "A widely used pulse found in traditional dishes, snacks, and everyday cooking."
    },
    {
      id: "red-lentils-masoor",
      name: "Red Lentils (Masoor Dal)",
      category: "pulses",
      categoryLabel: "Pulses",
      image: "images/products/red-lentils-masoor.jpg",
      alt: "Split red lentils spread on a bamboo mat",
      description: "Small split lentils with a characteristic orange-red colour that soften quickly when cooked."
    },
    {
      id: "split-pigeon-peas-toor",
      name: "Split Pigeon Peas (Toor Dal)",
      category: "pulses",
      categoryLabel: "Pulses",
      image: "images/products/split-pigeon-peas.jpg",
      alt: "Split pigeon peas (toor dal) in a dish",
      description: "A yellow split pulse that is a staple ingredient in dal preparations and lentil soups."
    },
    {
      id: "yellow-split-peas-matar",
      name: "Yellow Split Peas (Matar Dal)",
      category: "pulses",
      categoryLabel: "Pulses",
      image: "images/products/yellow-split-peas.jpg",
      alt: "Dried yellow split peas in close-up",
      description: "Dried peas split in half, used in soups, curries, and a range of savoury dishes."
    },
    {
      id: "whole-red-chillies",
      name: "Whole Red Chillies",
      category: "spices",
      categoryLabel: "Spices",
      image: "images/products/whole-red-chillies.jpg",
      alt: "Dried whole red chillies in open sacks at a grain market",
      description: "Dried whole chillies used to add heat and colour to cooking, whole or ground."
    },
    {
      id: "turmeric-powder",
      name: "Turmeric Powder",
      category: "spices",
      categoryLabel: "Spices",
      image: "images/products/turmeric-powder.jpg",
      alt: "Ground turmeric powder heaped on a plate",
      description: "A finely ground spice with a deep golden colour, used in curries and spice blends."
    },
    {
      id: "maize-corn",
      name: "Maize (Corn)",
      category: "rice-grains",
      categoryLabel: "Rice & Grains",
      image: "images/products/maize-corn.jpg",
      alt: "Dried maize kernels spread out to dry",
      description: "A versatile cereal grain used in food preparation and various agricultural applications."
    },
    {
      id: "wheat-grain",
      name: "Wheat Grain",
      category: "rice-grains",
      categoryLabel: "Rice & Grains",
      image: "images/products/wheat-grain.jpg",
      alt: "Wheat ears in close-up",
      description: "A fundamental cereal grain, milled into flour for breads and other staple foods."
    }
  ];
})();
