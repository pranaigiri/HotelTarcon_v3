import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  vodkabasedCocktails:any=[
    {
      name:"screwdriver",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"martini",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"sex on the beach",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"cosmopolition",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"bloody merry",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"blue lagoon",
      category:"",
      price:"200",
      icon:"",
    }
  ]
    ginBasedCocktails:any=[
    {
      name:"gim late",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"tom collins",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"monkey gland",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"gin tonic",
      category:"",
      price:"200",
      icon:"",
    }
  ]
    whiskyBasedCocktails:any=[
    {
      name:"old fashion",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"manhattan",
      category:"",
      price:"200",
      icon:"",
    }
  ]

  winebasedCocktails:any=[
    {
      name:"sangria",
      category:"",
      price:"300",
      icon:"",
    }
  ]

  rum:any=[
    {
      name:"old monk 30/60ml",
      category:"",
      price:"50/90",
      icon:"",
    },
    {
      name:"bacardi 30/60ml",
      category:"",
      price:"90/100",
      icon:"",
    }
  ]

  brandy:any=[
    {
      name:"honey bee 30/60ml",
      category:"",
      price:"50/90",
      icon:"",
    },
    {
      name:"morpheus 30/60ml",
      category:"",
      price:"60/120",
      icon:"",
    },
    {
      name:"mansion house 30/60ml",
      category:"",
      price:"50/90",
      icon:"",
    }
  ]

  gin:any=[
    {
      name:"blue riband gin 30/60ml",
      category:"",
      price:"80/150",
      icon:"",
    },
    {
      name:"bombay sapphire gin 30/60ml",
      category:"",
      price:"80/150",
      icon:"",
    }
  ]

  wine:any=[
    {
      name:"white wine 150/750ml",
      category:"",
      price:"200/1000",
      icon:"",
    },
    {
      name:"red wine 150/750ml",
      category:"",
      price:"200/1000",
      icon:"",
    },
    {
      name:"peach wine 150/750ml",
      category:"",
      price:"200/1000",
      icon:"",
    }
  ]

  superDeluxeScotchWhisky:any=[
    {
      name:"j&w black label scotch whisky 30/60ml",
      category:"",
      price:"250/400",
      icon:"",
    },
    {
      name:"j&w red label scotch whisky 30/60ml",
      category:"",
      price:"250/400",
      icon:"",
    }
  ]

  blendedScotchWhisky:any=[
    {
      name:"teachers origin 30/60ml",
      category:"",
      price:"220/430",
      icon:"",
    },
    {
      name:"teachers hi lands cream 30/60ml",
      category:"",
      price:"120/250",
      icon:"",
    }
    ,
    {
      name:"teachers 50 30/60ml",
      category:"",
      price:"220/400",
      icon:"",
    }
    ,
    {
      name:"black&white 30/60ml",
      category:"",
      price:"200/350",
      icon:"",
    }
    ,
    {
      name:"vat 69 30/60ml",
      category:"",
      price:"150/250",
      icon:"",
    }
    ,
    {
      name:"black dog gold reserve 30/60ml",
      category:"",
      price:"210/400",
      icon:"",
    }
    ,
    {
      name:"black dog centenary 30/60ml",
      category:"",
      price:"150/250",
      icon:"",
    }
  ]

  premiumDeluxeWhisky:any=[
    {
      name:"blenders pride 30/60ml",
      category:"",
      price:"80/150",
      icon:"",
    },
    {
      name:"100 pipers 30/60ml",
      category:"",
      price:"130/250",
      icon:"",
    },
    {
      name:"signature 30/60ml",
      category:"",
      price:"100/150",
      icon:"",
    },
    {
      name:"antiquity blue 30/60ml",
      category:"",
      price:"100/150",
      icon:"",
    },
    {
      name:"royal stag barrel select 30/60ml",
      category:"",
      price:"60/100",
      icon:"",
    },
    {
      name:"royal challenge 30/60ml",
      category:"",
      price:"60/100",
      icon:"",
    }
  ]

  vodka:any=[
    {
      name:"smirnoff 30/60ml",
      category:"",
      price:"60/100",
      icon:"",
    },
    {
      name:"magic moment 30/60ml",
      category:"",
      price:"50/100",
      icon:"",
    },
    {
      name:"absolut vodka 30/60ml",
      category:"",
      price:"150/250",
      icon:"",
    },
    {
      name:"graygos vodka 30/60ml",
      category:"",
      price:"300/500",
      icon:"",
    }
  ]

  beer:any=[
    {
      name:"kingfisher premium 650ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"kingfisher strong 650ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"sikkim hit beer 650ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"dansberg blue 650ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"tuborg beer",
      category:"",
      price:"200",
      icon:"",
    }
  ]

  breezer:any=[
    {
      name:"jamaican passion 275ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"blackberry crush 275ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"blueberry 275ml",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"cranberry 275ml",
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
      name:"pinacolada",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"mojito",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"daiquiri",
      category:"",
      price:"200",
      icon:"",
    },
    {
      name:"liit",
      category:"",
      price:"300",
      icon:"",
    }
  ]

  mocktail:any=[
    {
      name:"fruit punch",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"jed garden",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"orange blossome",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"coconut mint coolar",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"mango mania",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"flavour of ice tea",
      category:"",
      price:"100",
      icon:"",
    },
    {
      name:"humpi dumpi",
      category:"",
      price:"150",
      icon:"",
    },
    {
      name:"guava mint coolar",
      category:"",
      price:"150",
      icon:"",
    }
  ]

  tarconBarSignature:any=[
    {
      name:"roasted panner",
      category:"",
      price:"250",
      icon:"",
    },
    {
      name:"cheery pineapple stick",
      category:"",
      price:"300",
      icon:"",
    },
    {
      name:"golden fried prawns",
      category:"",
      price:"350",
      icon:"",
    }
  ]

  //to include champaigne and sodas

  filterOption: any = "FEATURED";
  constructor() { }

  ngOnInit() {
  }

  filterMenu(category: any) {
    this.filterOption = category;
  }

}
