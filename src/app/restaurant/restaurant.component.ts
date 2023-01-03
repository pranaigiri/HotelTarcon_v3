import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  breakFastArr: any = []
  breakFast: any = [
    {
      title: "Toast With Butter",
      price: "60",
      category: "options-green"
    },
    {
      title: "Toast With Jam",
      price: "60",
      category: "options-green"
    },
    {
      title: "Buffet Breakfast",
      price: "250",
      category: "options-green"
    },
    {
      title: "Idli with Sambar (3 PCS)",
      price: "120",
      category: "options-green"
    },
    {
      title: "Aloo Paratha (1 PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "Panner Paratha (1 PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "Gobi Paratha (1 PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "Chole with Bhature (2 PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "Cheese Uttapum (1 PCS)",
      price: "100",
      category: "options-green"
    },
    {
      title: "Bread Omelette (2 PCS)",
      price: "100",
      category: "options-green"
    },
    {
      title: "Poori with Bhaji (4 PCS)",
      price: "120",
      category: "options-green"
    },
    {
      title: "Plain Paratha with Bhaji (1 PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "Poha",
      price: "120",
      category: "options-green"
    },
    {
      title: "Upma",
      price: "120",
      category: "options-green"
    },
    {
      title: "Plain Dosa",
      price: "120",
      category: "options-green"
    },
    {
      title: "Masala Dosa (1 PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "Cheese Masala Dosa (1 PCS)",
      price: "180",
      category: "options-green"
    },
    {
      title: "Plain Uttapam (1 PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "Masala Uttapam (1 PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "Midu Vada (1 PCS)",
      price: "120",
      category: "options-green"
    }
  ]
  hotBeveragesArr: any = []
  hotBeverages: any = [
    {
      title: "Milk Tea",
      price: "50",
      category: "options-red"
    },
    {
      title: "Black Tea",
      price: "40",
      category: "options-red"
    },
    {
      title: "Lemon Ginger Black Tea",
      price: "50",
      category: "options-red"
    },
    {
      title: "Darjeeling Tea",
      price: "60",
      category: "options-red"
    },
    {
      title: "Green Tea",
      price: "60",
      category: "options-red"
    },
    {
      title: "Lemon Ginger Green Tea",
      price: "60",
      category: "options-red"
    },
    {
      title: "Milk Coffee",
      price: "60",
      category: "options-red"
    },
    {
      title: "Black Coffee",
      price: "50",
      category: "options-red"
    },
    {
      title: "Hot Milk (Glass)",
      price: "100",
      category: "options-red"
    },
    {
      title: "Bournvita (Glass)",
      price: "100",
      category: "options-red"
    },
    {
      title: "Hot Chocolate (Glass)",
      price: "100",
      category: "options-red"
    }
  ]
  coldBeveragesArr: any = []
  coldBeverages: any = [
    {
      title: "Cold Coffee",
      price: "150",
      category: "options-blue"
    },
    {
      title: "Lassi (Sweet)",
      price: "150",
      category: "options-blue"
    },
    {
      title: "Lassi (Salted)",
      price: "150",
      category: "options-blue"
    },
    {
      title: "Fresh Lime Soda",
      price: "100",
      category: "options-blue"
    },
    {
      title: "Butter Milk",
      price: "100",
      category: "options-blue"
    },
    {
      title: "Variety of Milkshake",
      price: "150",
      category: "options-blue"
    },
    {
      title: "Fresh Fruit Juice",
      price: "150",
      category: "options-blue"
    },
    {
      title: "Variety of Ice Tea",
      price: "100",
      category: "options-blue"
    },
    {
      title: "Aerated Drinks (Glass)",
      price: "80",
      category: "options-blue"
    },
    {
      title: "Mocktails as per Available",
      price: "150",
      category: "options-blue"
    }
  ]
  sikkimBreakfastArr: any = []
  sikkimBreakfast: any = [
    {
      title: "Veg Maggi",
      price: "60",
      category: "options-green"
    },
    {
      title: "Egg Maggi",
      price: "80",
      category: "options-red"
    },
    {
      title: "Chicken Maggi",
      price: "100",
      category: "options-red"
    },
    {
      title: "Veg Momos (8 PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "Veg fried Momos (8 PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "Veg Thukpa",
      price: "70",
      category: "options-green"
    },
    {
      title: "Egg Thukpa",
      price: "100",
      category: "options-red"
    },
    {
      title: "Chicken Thupka",
      price: "150",
      category: "options-red"
    },
    {
      title: "Chicken Momos (8 PCS)",
      price: "120",
      category: "options-red"
    },
    {
      title: "Chicken Fried Momos (8 PCS)",
      price: "120",
      category: "options-red"
    }
  ]
  sandwichArr: any = []
  sandwich: any = [
    {
      title: "Plain Veg Sandwich (4 PCS)",
      price: "100",
      category: "options-green"
    },
    {
      title: "Veg Grilled Sandwich (4 PCS)",
      price: "100",
      category: "options-green"
    },
    {
      title: "Veg Coleslaw Sandwich",
      price: "150",
      category: "options-green"
    },
    {
      title: "Cheese Sandwich (4 PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "Chicken Sandwich (4 PCS)",
      price: "150",
      category: "options-red"
    },
    {
      title: "Chicken Grilled Sandwich",
      price: "150",
      category: "options-red"
    },
    {
      title: "Chicken Club Sandwich",
      price: "200",
      category: "options-red"
    },
    {
      title: "Egg Grilled Sandwich",
      price: "150",
      category: "options-red"
    }
  ]
  eggItemArr: any = []
  eggItem: any = [
    {
      title: "Boiled Egg (2 PCS)",
      price: "40",
      category: "options-red"
    },
    {
      title: "Sunny Sideup (2 PCS)",
      price: "50",
      category: "options-red"
    },
    {
      title: "Poached Egg (2 PCS)",
      price: "50",
      category: "options-red"
    },
    {
      title: "Cheese Omlette (2 PCS)",
      price: "120",
      category: "options-red"
    },
    {
      title: "Masala Omlette Double Egg",
      price: "60",
      category: "options-red"
    },
    {
      title: "Plain Omlette Double Egg",
      price: "60",
      category: "options-red"
    },
    {
      title: "Scrambled Double Egg",
      price: "100",
      category: "options-red"
    }
  ]
  soupArr: any = []
  soup: any = [
    {
      title: "Cream of Tomato Soup",
      price: "120",
      category: "options-green"
    },
    {
      title: "Veg Sweet Corn Soup",
      price: "120",
      category: "options-green"
    },
    {
      title: "Veg Hot & Sour Soup",
      price: "120",
      category: "options-green"
    },
    {
      title: "Veg Manchow Soup",
      price: "120",
      category: "options-green"
    },
    {
      title: "Veg Won Ton Soup",
      price: "120",
      category: "options-green"
    },
    {
      title: "Veg Clear Soup",
      price: "120",
      category: "options-green"
    },
    {
      title: "Chicken Sweet Corn Soup",
      price: "150",
      category: "options-red"
    },
    {
      title: "Chicken Hot & Sour Soup",
      price: "150",
      category: "options-red"
    },
    {
      title: "Chicken Manchow Soup",
      price: "150",
      category: "options-red"
    },
    {
      title: "Chicken Won Ton Soup",
      price: "150",
      category: "options-red"
    },
    {
      title: "Chicken Clear Soup",
      price: "150",
      category: "options-red"
    }
  ]
  vegetableStartersArr: any = []
  vegetableStarters: any = [
    {
      title: "French Fry",
      price: "120",
      category: "options-green"
    },
    {
      title: "Onion Pakoda",
      price: "120",
      category: "options-green"
    },
    {
      title: "Crispy Chilli Baby Corn",
      price: "250",
      category: "options-green"
    },
    {
      title: "Corn Salt & Pepper",
      price: "250",
      category: "options-green"
    },
    {
      title: "Veg Seekh Kabab",
      price: "250",
      category: "options-green"
    },
    {
      title: "Hara Bhara Kabab (8 PCS)",
      price: "250",
      category: "options-green"
    },
    {
      title: "Tandoori Aloo (6 PCS)",
      price: "250",
      category: "options-green"
    },
    {
      title: "Tandoori Gobi (6 PCS)",
      price: "250",
      category: "options-green"
    },
    {
      title: "Vegetable Pakoda",
      price: "150",
      category: "options-green"
    },
    {
      title: "Paneer Pakoda (8 PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "Chilli Potato Dry",
      price: "150",
      category: "options-green"
    },
    {
      title: "Veg Manchurian Dry (8 PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "Tandoori Paneer Tikka (6 PCS)",
      price: "300",
      category: "options-green"
    },
    {
      title: "Malai Paneer Tikka (6 PCS)",
      price: "300",
      category: "options-green"
    },
    {
      title: "Pahadi Paneer Tikka (6 PCS)",
      price: "300",
      category: "options-green"
    },
    {
      title: "Mixed Veg Plater (10 PCS)",
      price: "450",
      category: "options-green"
    }
  ]
  nonvegStartersArr: any = []
  nonvegStarters: any = [
    {
      title: "Crispy Chicken",
      price: "250",
      category: "options-red"
    },
    {
      title: "Chicken Seekh Kabab",
      price: "300",
      category: "options-red"
    },
    {
      title: "Tandoori Chicken (FULL)",
      price: "600",
      category: "options-red"
    },
    {
      title: "Tandoori Chicken (HALF)",
      price: "350",
      category: "options-red"
    },
    {
      title: "Tandoori Prawns (6 PCS)",
      price: "500",
      category: "options-red"
    },
    {
      title: "Tandoori Fish Tikka Vasa (6 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Golden Fried Prawns (6 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Chicken Dry Fry (8 PCS)",
      price: "250",
      category: "options-red"
    },
    {
      title: "Chicken Pakoda (6 PCS)",
      price: "250",
      category: "options-red"
    },
    {
      title: "Chicken Chilli Dry (6 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Chicken Manchurian Dry (8 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Tandoori Chicken Tikka (6 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Malai Chicken Tikka (6 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Pahadi Chicken Tikka (6 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Mixed Non Veg Plater (10 PCS)",
      price: "600",
      category: "options-red"
    },
    {
      title: "Fish Chilli Dry",
      price: "300",
      category: "options-red"
    }
  ]
  chineseVegMainCourseArr: any = []
  chineseVegMainCourse: any = [
    {
      title: "veggise in chilli sauce",
      price: "220",
      category: "options-green"
    },
    {
      title: "veggise in hot garlic sauce",
      price: "220",
      category: "options-green"
    },
    {
      title: "veggise in manchurian sauce",
      price: "220",
      category: "options-green"
    },
    {
      title: "veggise in schezwan sauce",
      price: "220",
      category: "options-green"
    },
    {
      title: "veggise in garlic sauce",
      price: "220",
      category: "options-green"
    },
    {
      title: "veggise in sweet & sour sauce",
      price: "220",
      category: "options-green"
    },
    {
      title: "paneer in chilli sauce",
      price: "250",
      category: "options-green"
    },
    {
      title: "paneer in garlic sauce",
      price: "250",
      category: "options-green"
    },
    {
      title: "paneer in hot garlic sauce",
      price: "250",
      category: "options-green"
    },
    {
      title: "paneer in manchurian sauce",
      price: "250",
      category: "options-green"
    },
    {
      title: "paneer in schezwan sauce",
      price: "250",
      category: "options-green"
    },
    {
      title: "paneer in sweet & sour sauce",
      price: "250",
      category: "options-green"
    }
  ]
  chineseNonVegMainCourseArr: any = []
  chineseNonVegMainCourse: any = [
    {
      title: "fish in chilli sauce",
      price: "280",
      category: "options-red"
    },
    {
      title: "fish in hot garlic sauce",
      price: "280",
      category: "options-red"
    },
    {
      title: "fish in manchurian sauce",
      price: "280",
      category: "options-red"
    },
    {
      title: "fish in schezwan sauce",
      price: "280",
      category: "options-red"
    },
    {
      title: "fish in garlic sauce",
      price: "280",
      category: "options-red"
    },
    {
      title: "fish in sweet & sour sauce",
      price: "280",
      category: "options-red"
    },
    {
      title: "prawns in lemon honey sauce",
      price: "400",
      category: "options-red"
    },
    {
      title: "prawns in hot garlic sauce",
      price: "400",
      category: "options-red"
    },
    {
      title: "chicken in chilli sauce",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken in garlic sauce",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken in hot garlic sauce",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken in manchurian sauce",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken in schezwan sauce",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken in sweet & sour sauce",
      price: "300",
      category: "options-red"
    },
    {
      title: "prawns in chilli sauce",
      price: "400",
      category: "options-red"
    },
    {
      title: "prawns in manchurian sauce",
      price: "400",
      category: "options-red"
    }
  ]
  noodlesArr: any = []
  noodles: any = [
    {
      title: "veg hakka noodles",
      price: "150",
      category: "options-green"
    },
    {
      title: "egg hakka noodles",
      price: "180",
      category: "options-red"
    },
    {
      title: "chicken hakka noodles",
      price: "220",
      category: "options-red"
    },
    {
      title: "mixed hakka noodles",
      price: "250",
      category: "options-red"
    },
    {
      title: "schezwan hakka noodles veg",
      price: "170",
      category: "options-green"
    },
    {
      title: "schezwan hakka noodles chicken",
      price: "250",
      category: "options-red"
    },
    {
      title: "schezwan hakka noodles mixed",
      price: "300",
      category: "options-red"
    },
    {
      title: "veg fried rice",
      price: "150",
      category: "options-green"
    },
    {
      title: "egg fried rice",
      price: "180",
      category: "options-red"
    },
    {
      title: "chicken fried rice",
      price: "220",
      category: "options-red"
    },
    {
      title: "mixed fried rice",
      price: "250",
      category: "options-green"
    },
    {
      title: "schezwan fried rice veg",
      price: "170",
      category: "options-green"
    },
    {
      title: "schezwan fried rice chicken",
      price: "250",
      category: "options-red"
    },
    {
      title: "schezwan fried rice mixed",
      price: "300",
      category: "options-red"
    }
  ]
  continentalArr: any = []
  continental: any = [
    {
      title: "penne with arrabiata sauce",
      price: "300",
      category: "options-green"
    },
    {
      title: "penne alfredo",
      price: "300",
      category: "options-green"
    },
    {
      title: "penne with mix sauce",
      price: "300",
      category: "options-green"
    },
    {
      title: "mach & cheese",
      price: "350",
      category: "options-green"
    },
    {
      title: "cheese chilli toast (8PCS)",
      price: "200",
      category: "options-green"
    },
    {
      title: "cheese garlic toast (8PCS)",
      price: "200",
      category: "options-green"
    },
    {
      title: "veg burger",
      price: "80",
      category: "options-green"
    },
    {
      title: "chicken burger",
      price: "120",
      category: "options-red"
    },
    {
      title: "fish finger (6PCS)",
      price: "250",
      category: "options-red"
    },
    {
      title: "mushroom on toast (6PCS)",
      price: "250",
      category: "options-green"
    },
    {
      title: "french toast",
      price: "150",
      category: "options-green"
    },
    {
      title: "barbeque crispy chicken",
      price: "250",
      category: "options-red"
    }
  ]
  indianDessertArr: any = []
  indianDessert: any = [
    {
      title: "hot gulabjamun (2PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "hot rosogolla (2PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "sandesh (2PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "ice cream (2CUBS)",
      price: "120",
      category: "options-green"
    },
    {
      title: "browni with ice cream",
      price: "200",
      category: "options-green"
    },
    {
      title: "ras malai",
      price: "150",
      category: "options-green"
    }
  ]
  riceArr: any = []
  rice: any = [
    {
      title: "Steamed Rice",
      price: "100",
      category: "options-green"
    },
    {
      title: "Jeera Rice",
      price: "150",
      category: "options-green"
    },
    {
      title: "Green Peas Pulao",
      price: "150",
      category: "options-green"
    },
    {
      title: "Veg Pulao",
      price: "150",
      category: "options-green"
    },
    {
      title: "Navrtan Pulao",
      price: "180",
      category: "options-green"
    },
    {
      title: "Veg Biryani",
      price: "200",
      category: "options-green"
    },
    {
      title: "Chicken Biryani",
      price: "250",
      category: "options-red"
    },
    {
      title: "Mutton Biryani",
      price: "350",
      category: "options-red"
    }
  ]
  rotiArr: any = []
  roti: any = [
    {
      title: "Tawa Roti (PLAIN)",
      price: "25",
      category: "options-green"
    },
    {
      title: "Tawa Roti (BUTTER)",
      price: "30",
      category: "options-green"
    },
    {
      title: "Tandoori Roti (PLAIN)",
      price: "40",
      category: "options-green"
    },
    {
      title: "Tandoori Roti (BUTTER)",
      price: "45",
      category: "options-green"
    },
    {
      title: "Butter Naan",
      price: "60",
      category: "options-green"
    },
    {
      title: "Masala Kulcha",
      price: "70",
      category: "options-green"
    },
    {
      title: "Lachha Paratha",
      price: "60",
      category: "options-green"
    },
    {
      title: "Garlic Naan",
      price: "70",
      category: "options-green"
    }
  ]
  curryVegArr: any = []
  curryVeg: any = [
    {
      title: "Mixed Veg",
      price: "250",
      category: "options-green"
    },
    {
      title: "Veg Jalfrezi",
      price: "250",
      category: "options-green"
    },
    {
      title: "Veg Malai Kofta (4 PCS)",
      price: "300",
      category: "options-green"
    },
    {
      title: "Veg Hyderbadi Kofta",
      price: "300",
      category: "options-green"
    },
    {
      title: "Veg Hariyali Kofta",
      price: "300",
      category: "options-green"
    },
    {
      title: "Aloo Dum Panjabi Style",
      price: "220",
      category: "options-green"
    },
    {
      title: "Aloo Do Pyaza",
      price: "220",
      category: "options-green"
    },
    {
      title: "Aloo Jeera Dry",
      price: "220",
      category: "options-green"
    },
    {
      title: "Chana Masala",
      price: "220",
      category: "options-green"
    },
    {
      title: "Corn Masala",
      price: "250",
      category: "options-green"
    },
    {
      title: "Matar Nethi Malai",
      price: "250",
      category: "options-green"
    },
    {
      title: "Aloo Gobi Masala",
      price: "220",
      category: "options-green"
    },
    {
      title: "Mushroom Masala",
      price: "280",
      category: "options-green"
    },
    {
      title: "Paneer Butter Masala",
      price: "300",
      category: "options-green"
    },
    {
      title: "Paneer Tikka Masala",
      price: "300",
      category: "options-green"
    },
    {
      title: "Paneer Do Pyaza",
      price: "300",
      category: "options-green"
    },
    {
      title: "Kadai Paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "Palak Paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "Mattar Paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "Shahi Paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "Hyderabadi Paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "Patal Aloo Dum",
      price: "220",
      category: "options-green"
    },
    {
      title: "Aloo Posto",
      price: "220",
      category: "options-green"
    },
    {
      title: "Shukto",
      price: "250",
      category: "options-green"
    }
  ]
  curryNonVegArr: any = []
  curryNonVeg: any = [
    {
      title: "Egg Curry (2 PCS)",
      price: "150",
      category: "options-red"
    },
    {
      title: "Katla Fish Curry (2 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Ruhi Fish Curry (2 PCS)",
      price: "250",
      category: "options-red"
    },
    {
      title: "Ruhi Fish Bhaja (2 PCS)",
      price: "200",
      category: "options-red"
    },
    {
      title: "Fish Amritsari Masala (4 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Dahi Katla (2 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Prawn Masala (6 PCS)",
      price: "400",
      category: "options-red"
    },
    {
      title: "Chingri Malai Curry (6 PCS)",
      price: "400",
      category: "options-red"
    },
    {
      title: "Chicken Bharta",
      price: "300",
      category: "options-red"
    },
    {
      title: "Chicken Curry (4 PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "Chicken Butter Masala",
      price: "350",
      category: "options-red"
    },
    {
      title: "Chicken Do Pyaza",
      price: "300",
      category: "options-red"
    },
    {
      title: "Kadai Chicken",
      price: "300",
      category: "options-red"
    },
    {
      title: "Palak Chicken",
      price: "300",
      category: "options-red"
    },
    {
      title: "Chicken Kasha",
      price: "300",
      category: "options-red"
    },
    {
      title: "Chicken Razala",
      price: "300",
      category: "options-red"
    },
    {
      title: "Mutton Curry",
      price: "400",
      category: "options-red"
    },
    {
      title: "Mutton Rogan Josh",
      price: "400",
      category: "options-red"
    },
    {
      title: "Mutton Razala",
      price: "400",
      category: "options-red"
    },
    {
      title: "Mutton Kosha",
      price: "400",
      category: "options-red"
    }
  ]
  dalArr: any = []
  dal: any = [
    {
      title: "Plain Yellow Dal",
      price: "130",
      category: "options-green"
    },
    {
      title: "Yellow Dal Fry",
      price: "140",
      category: "options-green"
    },
    {
      title: "Yellow Dal Tadka",
      price: "150",
      category: "options-green"
    },
    {
      title: "Dal Makhani",
      price: "180",
      category: "options-green"
    },
    {
      title: "Sona Moong Dal",
      price: "150",
      category: "options-green"
    },
    {
      title: "Vegetable Moong Dal",
      price: "150",
      category: "options-green"
    }
  ]
  bhajaBhujiArr: any = []
  bhajaBhuji: any = [
    {
      title: "Jhuri Aloo Bhaja",
      price: "100",
      category: "options-green"
    },
    {
      title: "Karala Bhaja",
      price: "100",
      category: "options-green"
    },
    {
      title: "Bagan Bhaja (4 PCS)",
      price: "100",
      category: "options-green"
    },
    {
      title: "Bhendi Bhaja",
      price: "100",
      category: "options-green"
    },
    {
      title: "Papad Bhaja (1 PCS)",
      price: "20",
      category: "options-green"
    },
    {
      title: "Home Style Aloo Bhaja",
      price: "120",
      category: "options-green"
    }
  ]

  saladArr:any=[]
  salad:any=[    {
    title: "Fresh Green Salad",
    price: "100",
    category: "options-green"
  },
  {
    title: "Chinese Salad",
    price: "120",
    category: "options-green"
  },
  {
    title: "Onion Salad",
    price: "100",
    category: "options-green"
  },
  {
    title: "Aloo Chana Chat",
    price: "150",
    category: "options-green"
  },]

  curdArr: any = []
  curd: any = [
    {
      title: "Plain Curd",
      price: "100",
      category: "options-green"
    },
    {
      title: "Mix Veg Raita",
      price: "120",
      category: "options-green"
    },
    {
      title: "Pineapple Raita",
      price: "150",
      category: "options-green"
    },
    {
      title: "Boondi Raita",
      price: "150",
      category: "options-green"
    },
    {
      title: "Roasted Papad (1 PCS)",
      price: "20",
      category: "options-green"
    },
    {
      title: "Peanut Masala",
      price: "120",
      category: "options-green"
    },
    {
      title: "Masala Papad (1 PCS)",
      price: "30",
      category: "options-green"
    },
    {
      title: "Cheese Cheeri p/l Stick (8 Sticks)",
      price: "300",
      category: "options-green"
    },
  ]
  filterOption: any = "FEATURED";


  constructor() {
    this.sliceMenu();
  }

  ngOnInit() {
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 10);
  }

  filterMenu(category: any) {
    this.filterOption = category;
  }

  sliceMenu() {
    this.breakFastArr = this.breakFast.slice()
    this.hotBeveragesArr = this.hotBeverages.slice()
    this.coldBeveragesArr = this.coldBeverages.slice()
    this.sikkimBreakfastArr = this.sikkimBreakfast.slice()
    this.sandwichArr = this.sandwich.slice()
    this.eggItemArr = this.eggItem.slice()
    this.soupArr = this.soup.slice()
    this.vegetableStartersArr = this.vegetableStarters.slice()
    this.nonvegStartersArr = this.nonvegStarters.slice()
    this.chineseVegMainCourseArr = this.chineseVegMainCourse.slice()
    this.chineseNonVegMainCourseArr = this.chineseNonVegMainCourse.slice()
    this.noodlesArr = this.noodles.slice()
    this.continentalArr = this.continental.slice()
    this.indianDessertArr = this.indianDessert.slice()
    this.riceArr = this.rice.slice()
    this.rotiArr = this.roti.slice()
    this.curryVegArr = this.curryVeg.slice()
    this.curryNonVegArr = this.curryNonVeg.slice()
    this.dalArr = this.dal.slice()
    this.bhajaBhujiArr = this.dal.slice()
    this.saladArr = this.salad.slice()
    this.curdArr = this.curd.slice()
  }

}
