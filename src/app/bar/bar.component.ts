import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  //HORIZONTAL SCROLL
  onWheel(event: WheelEvent): void {
    if (event.deltaY > 0) document.querySelector('.horizontal-scroll')!.scrollLeft += 150;
    else document.querySelector('.horizontal-scroll')!.scrollLeft -= 150;
    event.preventDefault();
  }

  vodkabasedCocktails:any=[
    {
      name:"Screwdriver",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Martini",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Sex on the Beach",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Cosmopolition",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Bloody Merry",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Blue Lagoon",
      category:"",
      price:"200",
      icon:"",
    }
  ]
    ginBasedCocktails:any=[
    {
      name:"Gim Late",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Tom Collins",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Monkey Gland",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Gin tonic",
      category:"",
      price:"200",
      icon:"",
    }
  ]
    whiskyBasedCocktails:any=[
    {
      name:"Old Fashion",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Manhattan",
      category:"",
      price:"200",
      icon:"",
    }
  ]

  winebasedCocktails:any=[
    {
      name:"Sangria",
      category:"",
      price:"300",
      icon:"",
    }
  ]

  rum:any=[
    {
      name:"Old Monk 30/60 ml",
      category:"",
      price:"50/90",
      icon:"",
    },
    {
      name:"Bacardi 30/60 ml",
      category:"",
      price:"80/100",
      icon:"",
    }
  ]

  brandy:any=[
    {
      name:"Honey Bee 30/60 ml",
      category:"",
      price:"50/90",
      icon:"",
    },
    {
      name:"Morpheus 30/60 ml",
      category:"",
      price:"60/120",
      icon:"",
    },
    {
      name:"Mansion House 30/60 ml",
      category:"",
      price:"50/90",
      icon:"",
    }
  ]

  gin:any=[
    {
      name:"Blue Riband Gin 30/60 ml",
      category:"",
      price:"80/150",
      icon:"",
    },
    {
      name:"Bombay Sapphire Gin 30/60 ml",
      category:"",
      price:"80/150",
      icon:"",
    }
  ]

  wine:any=[
    {
      name:"White Wine 150/750 ml",
      category:"",
      price:"200/1000",
      icon:"",
    },
    {
      name:"Red Wine 150/750 ml",
      category:"",
      price:"200/1000",
      icon:"",
    },
    {
      name:"Peach Wine 150/750 ml",
      category:"",
      price:"200/1000",
      icon:"",
    }
  ]

  superDeluxeScotchWhisky:any=[
    {
      name:"J&W Black Label Scotch Whisky 30/60 ml",
      category:"",
      price:"250/400",
      icon:"",
    },
    {
      name:"J&W Red Label Scotch Whisky 30/60 ml",
      category:"",
      price:"250/400",
      icon:"",
    }
  ]

  blendedScotchWhisky:any=[
    {
      name:"Teachers Origin 30/60 ml",
      category:"",
      price:"220/430",
      icon:"",
    },
    {
      name:"Teachers Hi Lands Cream 30/60 ml",
      category:"",
      price:"120/250",
      icon:"",
    }
    ,
    {
      name:"Teachers 50 30/60ml",
      category:"",
      price:"220/400",
      icon:"",
    }
    ,
    {
      name:"Black&white 30/60 ml",
      category:"",
      price:"200/350",
      icon:"",
    }
    ,
    {
      name:"Vat 69 30/60 ml",
      category:"",
      price:"150/250",
      icon:"",
    }
    ,
    {
      name:"Black Dog Gold Reserve 30/60 ml",
      category:"",
      price:"210/400",
      icon:"",
    }
    ,
    {
      name:"Black Dog Centenary 30/60 ml",
      category:"",
      price:"150/250",
      icon:"",
    }
  ]

  premiumDeluxeWhisky:any=[
    {
      name:"Blenders Pride 30/60 ml",
      category:"",
      price:"80/150",
      icon:"",
    },
    {
      name:"100 Pipers 30/60 ml",
      category:"",
      price:"130/250",
      icon:"",
    },
    {
      name:"Signature 30/60 ml",
      category:"",
      price:"100/150",
      icon:"",
    },
    {
      name:"Antiquity Blue 30/60 ml",
      category:"",
      price:"100/150",
      icon:"",
    },
    {
      name:"Royal Stag Barrel Select 30/60 ml",
      category:"",
      price:"60/100",
      icon:"",
    },
    {
      name:"Royal Challenge 30/60 ml",
      category:"",
      price:"60/100",
      icon:"",
    }
  ]

  vodka:any=[
    {
      name:"Smirnoff 30/60 ml",
      category:"",
      price:"60/100",
      icon:"",
    },
    {
      name:"Magic Moment 30/60 ml",
      category:"",
      price:"50/100",
      icon:"",
    },
    {
      name:"Absolute Vodka 30/60 ml",
      category:"",
      price:"150/250",
      icon:"",
    },
    {
      name:"Graygoos Vodka 30/60 ml",
      category:"",
      price:"300/500",
      icon:"",
    }
  ]

  beer:any=[
    {
      name:"Kingfisher Premium 650 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Kingfisher Strong 650 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Sikkim Hit Beer 650 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Dansberg Blue 650 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Tuborg Beer",
      category:"",
      price:"200",
      icon:"",
    }
  ]

  breezer:any=[
    {
      name:"Jamaican Passion 275 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Blackberry Crush 275 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Blueberry 275 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Cranberry 275 ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"watermelon 275ml",
      category:"",
      price:"150",
      icon:"",
    }
  ]

  rumBasedCocktail:any=[
    {
      name:"Pinacolada",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Mojito",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Daiquiri",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"Liit",
      category:"",
      price:"300",
      icon:"",
    }
  ]

  mocktail:any=[
    {
      name:"Fruit Punch",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Jed Garden",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Orange Blossome",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Coconut Mint Coolar",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Mango Mania",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Flavour of Ice Tea",
      category:"",
      price:"100",
      icon:"",
    },
    {
      name:"Humpi Dumpi",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"Guava Mint Coolar",
      category:"",
      price:"150",
      icon:"",
    }
  ]

  tarconBarSignature:any=[
    {
      name:"Roasted Paneer",
      category:"",
      price:"250",
      icon:"",
    },
    {
      name:"Cheese Cheery Pineapple Stick",
      category:"",
      price:"300",
      icon:"",
    },
    {
      name:"Golden Fried Prawns",
      category:"",
      price:"350",
      icon:"",
    }
  ]

  //to include champaigne and sodas

  filterOption: any = "FEATURED";
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      window.scrollTo(0,0);
    }, 10);
  }

  filterMenu(category: any) {
    this.filterOption = category;
  }

}
