import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  breakFastArr:any=[]
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
      title: "Buffet With Sambar",
      price: "250",
      category: "options-green"
    },
    {
      title: "idli with sambar (3PCS)",
      price: "120",
      category: "options-green"
    },
    {
      title: "allo paratha (1PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "panner paratha (1PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "gobi paratha (1PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "chole with bhature (2PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "cheese uttapum (1PCS)",
      price: "50",
      category: "options-green"
    },
    {
      title: "bread omelette (2PCS)",
      price: "50",
      category: "options-green"
    },
    {
      title: "poori with bhaji (4PCS)",
      price: "120",
      category: "options-green"
    },
    {
      title: "plain paratha with bhaji (1PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "poha",
      price: "120",
      category: "options-green"
    },
    {
      title: "upma",
      price: "120",
      category: "options-green"
    },
    {
      title: "plain dosa",
      price: "120",
      category: "options-green"
    },
    {
      title: "masala dosa (1PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "cheese masala dosa (1PCS)",
      price: "180",
      category: "options-green"
    },
    {
      title: "plain uttapam (1PCS)",
      price: "60",
      category: "options-green"
    },
    {
      title: "masala uttapam (1PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "midu vada (1PCS)",
      price: "120",
      category: "options-green"
    }
  ]
  hotBeveragesArr:any=[]
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
      price: "50",
      category: "options-red"
    },
    {
      title: "Bournvita (Glass)",
      price: "50",
      category: "options-red"
    },
    {
      title: "Hot Chocolate (Glass)",
      price: "50",
      category: "options-red"
    }
  ]
  coldBeveragesArr:any=[]
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
      price: "50",
      category: "options-blue"
    },
    {
      title: "Butter Milk",
      price: "50",
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
      price: "50",
      category: "options-blue"
    },
    {
      title: "Aerated Drinks (Glass)",
      price: "80",
      category: "options-blue"
    },
    {
      title: "Mocktails Available",
      price: "150",
      category: "options-blue"
    }
  ]
  sikkimBreakfastArr:any=[]
  sikkimBreakfast: any = [
    {
      title: "veg maggi",
      price: "60",
      category: "options-green"
    },
    {
      title: "egg maggi",
      price: "80",
      category: "options-red"
    },
    {
      title: "chicken maggi",
      price: "50",
      category: "options-red"
    },
    {
      title: "veg momo (8PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "veg fried momos (8PCS)",
      price: "80",
      category: "options-green"
    },
    {
      title: "veg thukpa",
      price: "70",
      category: "options-green"
    },
    {
      title: "egg thukpa",
      price: "50",
      category: "options-red"
    },
    {
      title: "chicken thupka",
      price: "150",
      category: "options-red"
    },
    {
      title: "chicken momos (8PCS)",
      price: "120",
      category: "options-red"
    },
    {
      title: "chicken fried momos (8PCS)",
      price: "120",
      category: "options-red"
    }
  ]
  sandwichArr:any=[]
  sandwich: any = [
    {
      title: "plain veg sandwich (4PCS)",
      price: "50",
      category: "options-green"
    },
    {
      title: "veg grilled sandwich (4PCS)",
      price: "50",
      category: "options-green"
    },
    {
      title: "veg coleslaw sandwich",
      price: "150",
      category: "options-green"
    },
    {
      title: "cheese sandwich (4PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "chicken sandwich (4PCS)",
      price: "150",
      category: "options-red"
    },
    {
      title: "chicken grilled sandwich",
      price: "150",
      category: "options-red"
    },
    {
      title: "chicken club sandwich",
      price: "200",
      category: "options-red"
    },
    {
      title: "egg grilled sandwich",
      price: "150",
      category: "options-red"
    }
  ]
  eggItemArr:any=[]
  eggItem: any = [
    {
      title: "boiled egg (2PCS)",
      price: "40",
      category: "options-red"
    },
    {
      title: "sunny sideup (2PCS)",
      price: "50",
      category: "options-red"
    },
    {
      title: "poached egg (2PCS)",
      price: "50",
      category: "options-red"
    },
    {
      title: "cheese omlette (2PCS)",
      price: "120",
      category: "options-red"
    },
    {
      title: "masala omlette double egg",
      price: "60",
      category: "options-red"
    },
    {
      title: "plain omlette double egg",
      price: "60",
      category: "options-red"
    },
    {
      title: "scrambled double egg",
      price: "50",
      category: "options-red"
    }
  ]
  soupArr:any=[]
  soup: any = [
    {
      title: "cream of tomato",
      price: "0",
      category: "options-green"
    },
    {
      title: "veg sweet corn",
      price: "120",
      category: "options-green"
    },
    {
      title: "veg hot & sour",
      price: "120",
      category: "options-green"
    },
    {
      title: "veg manchow",
      price: "120",
      category: "options-green"
    },
    {
      title: "veg won ton",
      price: "120",
      category: "options-green"
    },
    {
      title: "veg clear",
      price: "120",
      category: "options-green"
    },
    {
      title: "chicken sweet corn",
      price: "150",
      category: "options-red"
    },
    {
      title: "chicken hot & sour",
      price: "150",
      category: "options-red"
    },
    {
      title: "chicken manchow",
      price: "150",
      category: "options-red"
    },
    {
      title: "chicken won ton",
      price: "150",
      category: "options-red"
    },
    {
      title: "chicken clear",
      price: "150",
      category: "options-red"
    }
  ]
  vegetableStartersArr:any=[]
  vegetableStarters: any = [
    {
      title: "french fry",
      price: "120",
      category: "options-green"
    },
    {
      title: "onion pakoda",
      price: "120",
      category: "options-green"
    },
    {
      title: "crispy chilli baby corn",
      price: "250",
      category: "options-green"
    },
    {
      title: "corn salt & pepper",
      price: "250",
      category: "options-green"
    },
    {
      title: "veg seekh kabab",
      price: "250",
      category: "options-green"
    },
    {
      title: "hara bhara kabab",
      price: "250",
      category: "options-green"
    },
    {
      title: "tandoori aloo",
      price: "250",
      category: "options-green"
    },
    {
      title: "tandoori gobi",
      price: "250",
      category: "options-green"
    },
    {
      title: "vegetable pakoda",
      price: "150",
      category: "options-green"
    },
    {
      title: "paneer pakoda (8PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "chilli potato dry",
      price: "150",
      category: "options-green"
    },
    {
      title: "veg manchurian dry (8PCS)",
      price: "150",
      category: "options-green"
    },
    {
      title: "tandoori paneer tikka (6PCS)",
      price: "300",
      category: "options-green"
    },
    {
      title: "malai paneer tikka (6PCS)",
      price: "300",
      category: "options-green"
    },
    {
      title: "pahadi paneer tikka (6PCS)",
      price: "300",
      category: "options-green"
    },
    {
      title: "mixed veg plater (5PCS)",
      price: "450",
      category: "options-green"
    }
  ]
  nonvegStartersArr:any=[]
  nonvegStarters: any = [
    {
      title: "crispy chicken",
      price: "250",
      category: "options-red"
    },
    {
      title: "chicken seekh kabab",
      price: "300",
      category: "options-red"
    },
    {
      title: "tandoori chicken (FULL)",
      price: "600",
      category: "options-red"
    },
    {
      title: "tandoori chicken (HALF)",
      price: "350",
      category: "options-red"
    },
    {
      title: "tandoori prawns (6PCS)",
      price: "500",
      category: "options-red"
    },
    {
      title: "tandoori fish tikka (6PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "golden fried prawns (6PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken dry fry (8PCS)",
      price: "250",
      category: "options-red"
    },
    {
      title: "chicken pakoda (6PCS)",
      price: "250",
      category: "options-red"
    },
    {
      title: "chicken chilli dry (6PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken manchurian dry(8PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "tandoori chicken tikka (6PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "malai chicken tikka (6PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "pahadi chicken tikka (6PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "mixed non veg plater (5PCS)",
      price: "600",
      category: "options-red"
    },
    {
      title: "fish chilli dry",
      price: "300",
      category: "options-red"
    }
  ]
  chineseVegMainCourseArr:any=[]
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
  chineseNonVegMainCourseArr:any=[]
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
  noodlesArr:any=[]
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
  continentalArr:any=[]
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
  indianDessertArr:any=[]
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
  riceArr:any=[]
  rice:any=[
    {
      title: "steamed rice",
      price: "50",
      category: "options-green"
    },
    {
      title: "jeera rice",
      price: "150",
      category: "options-green"
    },
    {
      title: "green peas pulao",
      price: "150",
      category: "options-green"
    },
    {
      title: "vegetable pulao",
      price: "150",
      category: "options-green"
    },
    {
      title: "navrtan pulao",
      price: "180",
      category: "options-green"
    },
    {
      title: "veg biryani",
      price: "200",
      category: "options-green"
    },
    {
      title: "chicken biryani",
      price: "250",
      category: "options-red"
    },
    {
      title: "mutton",
      price: "350",
      category: "options-red"
    },
    {
      title: "tawa roti (PLAIN)",
      price: "25",
      category: "options-green"
    },
    {
      title: "tawa roti (BUTTER)",
      price: "30",
      category: "options-green"
    },
    {
      title: "tandoori roti (PLAIN)",
      price: "40",
      category: "options-green"
    },
    {
      title: "tandoori roti (BUTTER)",
      price: "45",
      category: "options-green"
    },
    {
      title: "butter naan",
      price: "60",
      category: "options-green"
    },
    {
      title: "masala kulcha",
      price: "70",
      category: "options-green"
    },
    {
      title: "lachha paratha",
      price: "60",
      category: "options-green"
    },
    {
      title: "garlic naan",
      price: "70",
      category: "options-green"
    }
  ]
  curryVegArr:any=[]
  curryVeg:any=[
    {
      title: "mixed vegetable",
      price: "250",
      category: "options-green"
    },
    {
      title: "vegetable jalfrezi",
      price: "250",
      category: "options-green"
    },
    {
      title: "malai kofta",
      price: "300",
      category: "options-green"
    },
    {
      title: "hyderbadi kofta",
      price: "300",
      category: "options-green"
    },
    {
      title: "hariyali kofta",
      price: "300",
      category: "options-green"
    },
    {
      title: "aloo dum panjabi style",
      price: "220",
      category: "options-green"
    },
    {
      title: "aloo do pyaza",
      price: "220",
      category: "options-green"
    },
    {
      title: "aloo jeera dry",
      price: "220",
      category: "options-green"
    },
    {
      title: "chana masala",
      price: "220",
      category: "options-green"
    },
    {
      title: "corn masala",
      price: "250",
      category: "options-green"
    },
    {
      title: "matar nethi malai",
      price: "250",
      category: "options-green"
    },
    {
      title: "aloo gobi masala",
      price: "220",
      category: "options-green"
    },
    {
      title: "mushroom masala",
      price: "280",
      category: "options-green"
    },
    {
      title: "paneer butter masala",
      price: "300",
      category: "options-green"
    },
    {
      title: "paneer tikka masala",
      price: "300",
      category: "options-green"
    },
    {
      title: "paneer do pyaza",
      price: "300",
      category: "options-green"
    },
    {
      title: "kadai paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "palak paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "mattar paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "shahi paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "shahi paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "hyderabadi paneer",
      price: "300",
      category: "options-green"
    },
    {
      title: "patal aloo dum",
      price: "220",
      category: "options-green"
    },
    {
      title: "aloo posto",
      price: "220",
      category: "options-green"
    },
    {
      title: "shukto",
      price: "250",
      category: "options-green"
    }
  ]
  curryNonVegArr:any=[]
  curryNonVeg:any=[
    {
      title: "egg curry (2PCS)",
      price: "150",
      category: "options-red"
    },
    {
      title: "katla fish curry (2PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "ruhi fish curry (2PCS)",
      price: "250",
      category: "options-red"
    },
    {
      title: "ruhi fish bhaja (2PCS)",
      price: "200",
      category: "options-red"
    },
    {
      title: "fish amritsari masala (4PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "dahi katla (2PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "prawn masala (6PCS)",
      price: "400",
      category: "options-red"
    },
    {
      title: "chingri malai curry (6PCS)",
      price: "400",
      category: "options-red"
    },
    {
      title: "chicken bharta",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken curry (4PCS)",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken butter masala",
      price: "350",
      category: "options-red"
    },
    {
      title: "chicken do pyaza",
      price: "300",
      category: "options-red"
    },
    {
      title: "kadai chicken",
      price: "300",
      category: "options-red"
    },
    {
      title: "palak chicken",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken kasha",
      price: "300",
      category: "options-red"
    },
    {
      title: "chicken razala",
      price: "300",
      category: "options-red"
    },
    {
      title: "mutton curry",
      price: "400",
      category: "options-red"
    },
    {
      title: "mutton rogan josh",
      price: "400",
      category: "options-red"
    },
    {
      title: "mutton razala",
      price: "400",
      category: "options-red"
    },
    {
      title: "mutton kosha",
      price: "400",
      category: "options-red"
    }
  ]
  dalArr:any=[]
  dal:any=[
    {
      title: "plain yellow dal",
      price: "130",
      category: "options-green"
    },
    {
      title: "yellow dal fry",
      price: "140",
      category: "options-green"
    },
    {
      title: "yellow dal tadka",
      price: "150",
      category: "options-green"
    },
    {
      title: "dal makhani",
      price: "180",
      category: "options-green"
    },
    {
      title: "sona moong dal",
      price: "150",
      category: "options-green"
    },
    {
      title: "vegetable moong dal",
      price: "150",
      category: "options-green"
    },
    {
      title: "jhuri aloo bhaja",
      price: "50",
      category: "options-green"
    },
    {
      title: "karala bhaja",
      price: "50",
      category: "options-green"
    },
    {
      title: "bagan bhaja (4PCS)",
      price: "50",
      category: "options-green"
    },
    {
      title: "bhendi bhaja",
      price: "50",
      category: "options-green"
    },
    {
      title: "papad bhaja (1PCS)",
      price: "20",
      category: "options-green"
    },
    {
      title: "home style aloo bhaja",
      price: "120",
      category: "options-green"
    }
  ]
  curdArr:any=[]
  curd:any=[
    {
      title: "fresh green salad",
      price: "50",
      category: "options-green"
    },
    {
      title: "chinese salad",
      price: "120",
      category: "options-green"
    },
    {
      title: "onion salad",
      price: "50",
      category: "options-green"
    },
    {
      title: "aloo chana",
      price: "150",
      category: "options-green"
    },
    {
      title: "plain curd",
      price: "50",
      category: "options-green"
    },
    {
      title: "mix veg raita",
      price: "120",
      category: "options-green"
    },
    {
      title: "pineapple raita",
      price: "150",
      category: "options-green"
    },
    {
      title: "bhondi raita",
      price: "150",
      category: "options-green"
    },
    {
      title: "roasted papad (1PCS)",
      price: "20",
      category: "options-green"
    },
    {
      title: "peanut masala",
      price: "120",
      category: "options-green"
    },
    {
      title: "masala papad (1PCS)",
      price: "30",
      category: "options-green"
    },
    {
      title: "cheeri p/l stick 8 stick",
      price: "300",
      category: "options-green"
    },
  ]
  filterOption: any = "FEATURED";


  constructor() { 
    this.sliceMenu();
  }

  ngOnInit() {
  }
  
  filterMenu(category: any) {
    this.filterOption = category;
    this.sliceMenu()
  }

  sliceMenu(){
    if(this.filterOption  != "FEATURED"){
    this.breakFastArr=this.breakFast.slice()
    this.hotBeveragesArr=this.hotBeverages.slice()
    this.coldBeveragesArr=this.coldBeverages.slice()
    this.sikkimBreakfastArr=this.sikkimBreakfast.slice()
    this.sandwichArr=this.sandwich.slice()
    this.eggItemArr=this.eggItem.slice()
    this.soupArr=this.soup.slice()
    this.vegetableStartersArr=this.vegetableStarters.slice()
    this.nonvegStartersArr=this.nonvegStarters.slice()
    this.chineseVegMainCourseArr=this.chineseVegMainCourse.slice()
    this.chineseNonVegMainCourseArr=this.chineseNonVegMainCourse.slice()
    this.noodlesArr=this.noodles.slice()
    this.continentalArr=this.continental.slice()
    this.indianDessertArr=this.indianDessert.slice()
    this.riceArr=this.rice.slice()
    this.curryVegArr=this.curryVeg.slice()
    this.curryNonVegArr=this.curryNonVeg.slice()
    this.dalArr=this.dal.slice()
    this.curdArr=this.curd.slice()
    }
    else{
      this.breakFastArr=this.breakFast.slice(0,5)
    this.hotBeveragesArr=this.hotBeverages.slice(0,5)
    this.coldBeveragesArr=this.coldBeverages.slice(0,5)
    this.sikkimBreakfastArr=this.sikkimBreakfast.slice(0,5)
    this.sandwichArr=this.sandwich.slice(0,5)
    this.eggItemArr=this.eggItem.slice(0,5)
    this.soupArr=this.soup.slice(0,5)
    this.vegetableStartersArr=this.vegetableStarters.slice(0,5)
    this.nonvegStartersArr=this.nonvegStarters.slice(0,5)
    this.chineseVegMainCourseArr=this.chineseVegMainCourse.slice(0,5)
    this.chineseNonVegMainCourseArr=this.chineseNonVegMainCourse.slice(0,5)
    this.noodlesArr=this.noodles.slice(0,5)
    this.continentalArr=this.continental.slice(0,5)
    this.indianDessertArr=this.indianDessert.slice(0,5)
    this.riceArr=this.rice.slice(0,5)
    this.curryVegArr=this.curryVeg.slice(0,5)
    this.curryNonVegArr=this.curryNonVeg.slice(0,5)
    this.dalArr=this.dal.slice(0,5)
    this.curdArr=this.curd.slice(0,5)
    }
  }

}
