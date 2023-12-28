import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = ({ resData }) => {
  const {name,cuisines,costForTwo,avgRating,deliveryTime,cloudinaryImageId} =resData?.info
  console.log(resData)
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Star Ratings</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const reslist=[{
  "info": {
    "id": "758905",
    "name": "Om Restaurant",
    "cloudinaryImageId": "c3bc32ad3ed9515bb0bf77c419d5a429",
    "locality": "Gandhi Road",
    "areaName": "Murari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "South Indian",
      "Fast Food"
    ],
    "avgRating": 3.2,
    "veg": true,
    "parentId": "151677",
    "avgRatingString": "3.2",
    "totalRatingsString": "3",
    "sla": {
      "deliveryTime": 49,
      "lastMileTravel": 9,
      "serviceability": "SERVICEABLE",
      "slaString": "49 mins",
      "lastMileTravelString": "9.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/om-restaurant-gandhi-road-murari-nagar-khujra-758905",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "753043",
    "name": "Pizza Club",
    "cloudinaryImageId": "e565c4ad2e3450129c54c8d333557bdc",
    "locality": "Jayka Restaurant",
    "areaName": "Murari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Chinese"
    ],
    "avgRating": 4.8,
    "veg": true,
    "parentId": "2874",
    "avgRatingString": "4.8",
    "totalRatingsString": "3",
    "sla": {
      "deliveryTime": 51,
      "lastMileTravel": 8.3,
      "serviceability": "SERVICEABLE",
      "slaString": "51 mins",
      "lastMileTravelString": "8.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-club-jayka-restaurant-murari-nagar-khujra-753043",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "753090",
    "name": "The Pizza Express",
    "cloudinaryImageId": "a1b474576d7b2801cfd53a77475d5cbe",
    "locality": "Tilak Park",
    "areaName": "Murari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Pizzas",
      "Burgers",
      "Fast Food",
      "Snacks"
    ],
    "veg": true,
    "parentId": "15478",
    "avgRatingString": "NEW",
    "sla": {
      "deliveryTime": 56,
      "lastMileTravel": 8.3,
      "serviceability": "SERVICEABLE",
      "slaString": "56 mins",
      "lastMileTravelString": "8.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 21:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/the-pizza-express-tilak-park-murari-nagar-khujra-753090",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "753069",
    "name": "Burger Club",
    "cloudinaryImageId": "1ee43c51aca0582a1e951d722bbae644",
    "locality": "Hanuman Complax",
    "areaName": "Murari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Burgers"
    ],
    "avgRating": 3.8,
    "veg": true,
    "parentId": "51256",
    "avgRatingString": "3.8",
    "totalRatingsString": "3",
    "sla": {
      "deliveryTime": 51,
      "lastMileTravel": 8.3,
      "serviceability": "SERVICEABLE",
      "slaString": "51 mins",
      "lastMileTravelString": "8.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-club-hanuman-complax-murari-nagar-khujra-753069",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "753129",
    "name": "Khurjawasi",
    "cloudinaryImageId": "cf91af0ad62b20612678a67b324401b3",
    "locality": "Gopi Krishan Vihar",
    "areaName": "Murari Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Chinese",
      "Indian",
      "South Indian"
    ],
    "avgRating": 4.8,
    "parentId": "445671",
    "avgRatingString": "4.8",
    "totalRatingsString": "50+",
    "sla": {
      "deliveryTime": 41,
      "lastMileTravel": 9.1,
      "serviceability": "SERVICEABLE",
      "slaString": "41 mins",
      "lastMileTravelString": "9.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/khurjawasi-gopi-krishan-vihar-murari-nagar-khujra-753129",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "752817",
    "name": "Chaska Chaap Ka",
    "cloudinaryImageId": "3682c031e389ac4c09effc8f11400d7a",
    "locality": "Near Kamdhenu",
    "areaName": "Murari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Chinese"
    ],
    "avgRating": 3.8,
    "parentId": "445898",
    "avgRatingString": "3.8",
    "totalRatingsString": "10+",
    "sla": {
      "deliveryTime": 49,
      "lastMileTravel": 8.2,
      "serviceability": "SERVICEABLE",
      "slaString": "49 mins",
      "lastMileTravelString": "8.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "40% OFF",
      "subHeader": "UPTO ₹80"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/chaska-chaap-ka-near-kamdhenu-murari-nagar-khujra-752817",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "719590",
    "name": "Chai Sutta Yaari",
    "cloudinaryImageId": "7953390cdc0e565013d3bc6fcc48bd9d",
    "locality": "Zenith Public School",
    "areaName": "Murari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "North Indian",
      "Fast Food",
      "Pizzas",
      "Beverages"
    ],
    "avgRating": 4.3,
    "parentId": "57171",
    "avgRatingString": "4.3",
    "totalRatingsString": "50+",
    "sla": {
      "deliveryTime": 42,
      "lastMileTravel": 6.3,
      "serviceability": "SERVICEABLE",
      "slaString": "42 mins",
      "lastMileTravelString": "6.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/chai-sutta-yaari-zenith-public-school-murari-nagar-khujra-719590",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "753232",
    "name": "Desi Bite Chinese Hut",
    "cloudinaryImageId": "b55af8b5ef37471a5e003b697f89873e",
    "locality": "Station Nagar",
    "areaName": "Murari Nagar",
    "costForTwo": "₹100 for two",
    "cuisines": [
      "Chinese",
      "Burgers"
    ],
    "parentId": "445709",
    "avgRatingString": "NEW",
    "sla": {
      "deliveryTime": 48,
      "lastMileTravel": 7.7,
      "serviceability": "SERVICEABLE",
      "slaString": "48 mins",
      "lastMileTravelString": "7.7 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/desi-bite-chinese-hut-station-nagar-murari-nagar-khujra-753232",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{
  "info": {
    "id": "758129",
    "name": "Pizza Kign Cafe",
    "cloudinaryImageId": "414ed51cb369d06a40abe77651eb1acb",
    "locality": "Mark Plaza",
    "areaName": "Murari Nagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Pizzas",
      "Fast Food",
      "Beverages"
    ],
    "avgRating": 3.8,
    "veg": true,
    "parentId": "448287",
    "avgRatingString": "3.8",
    "totalRatingsString": "8",
    "sla": {
      "deliveryTime": 48,
      "lastMileTravel": 8.3,
      "serviceability": "SERVICEABLE",
      "slaString": "48 mins",
      "lastMileTravelString": "8.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2023-12-28 22:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "isNewlyOnboarded": true,
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    "context": "seo-data-994883d4-c33f-4e3d-b097-eb81b6f998e9"
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-kign-cafe-mark-plaza-murari-nagar-khujra-758129",
    "text": "RESTAURANT_MENU",
    "type": "WEBLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
]
const Body = () => {
  return (
    <div className="Body">
      <div className="Search">Search</div>
      <div className="res-container">
       
        {reslist.map((data)=>{
         return  <RestaurantCard resData={data} key={data.info.id}/>
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
