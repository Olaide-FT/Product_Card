const products = [

  // FACE CAPS
  {
    id: 1,
    name: "Classic Black Face Cap",
    oldPrice: 12000,
    newPrice: 8500,
    category: "cap",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "White Minimal Face Cap",
    oldPrice: 11000,
    newPrice: 7900,
    category: "cap",
    image: "https://media.istockphoto.com/id/2157042908/photo/happy-man-wearing-a-white-cap.webp?a=1&b=1&s=612x612&w=0&k=20&c=hHsIhVwb7MiVpVtTPTbTh4tvp61ZzudY-XbKYlQWIFQ="
  },
  {
    id: 3,
    name: "Sport Baseball Cap",
    oldPrice: 13000,
    newPrice: 9200,
    category: "cap",
    image: "https://images.unsplash.com/photo-1530398257477-3e1b0b0ed605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhc2ViYWxsJTIwY2FwfGVufDB8fDB8fHww"
  },
  {
    id: 4,
    name: "Street Style Cap",
    oldPrice: 12500,
    newPrice: 8800,
    category: "cap",
    image: "https://images.unsplash.com/photo-1534215754734-18e55d13e346"
  },
  {
    id: 5,
    name: "Premium Cotton Cap",
    oldPrice: 14000,
    newPrice: 9700,
    category: "cap",
    image: "https://plus.unsplash.com/premium_photo-1727967194388-d838e1f37dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y290dG9uJTIwY2FwfGVufDB8fDB8fHww"
  },
  {
    id: 6,
    name: "Urban Face Cap",
    oldPrice: 12000,
    newPrice: 8500,
    category: "cap",
    image: "https://images.unsplash.com/photo-1647243498368-8c19cf82031a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVyYmFuJTIwZmFjZSUyMGNhcHxlbnwwfHwwfHx8MA%3D%3D"
  },

  // TROUSERS
  {
    id: 7,
    name: "Men ripped Trousers",
    oldPrice: 22000,
    newPrice: 16500,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1696889450800-e94ec7a32206?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzUwfHx0cm91c2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 8,
    name: "Classic Office Trousers",
    oldPrice: 21000,
    newPrice: 15800,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942"
  },
  {
    id: 9,
    name: "Black Formal Trousers",
    oldPrice: 23000,
    newPrice: 17000,
    category: "trousers",
    image: "https://i.pinimg.com/1200x/f5/e1/bc/f5e1bca3e285c299d674fc311043634e.jpg"
  },
  {
    id: 10,
    name: "Casual Brown Trousers",
    oldPrice: 20000,
    newPrice: 14900,
    category: "trousers",
    image: "https://i.pinimg.com/1200x/6a/2b/b7/6a2bb73026171dd587f9477220f89db0.jpg"
  },
  {
    id: 11,
    name: "Modern Straight Trousers",
    oldPrice: 22000,
    newPrice: 16200,
    category: "trousers",
    image: "https://i.pinimg.com/control1/736x/51/f8/9e/51f89ea328babc55b10e614d0dbdf0b0.jpg"
  },
  {
    id: 12,
    name: "Men Fashion Trousers",
    oldPrice: 21000,
    newPrice: 15500,
    category: "trousers",
    image: "https://i.pinimg.com/1200x/c2/9e/d7/c29ed770b3b307a0d735b20d6bf933e7.jpg"
  },

  // JOGGERS
  {
    id: 13,
    name: "Black Joggers",
    oldPrice: 19000,
    newPrice: 13500,
    category: "joggers",
    image: "https://i.pinimg.com/1200x/28/4c/bc/284cbcbd2c8440ad90026145fbc4a56a.jpg"
  },
  {
    id: 14,
    name: "Grey Sport Joggers",
    oldPrice: 18000,
    newPrice: 12800,
    category: "joggers",
    image: "https://i.pinimg.com/736x/5c/08/89/5c08896a0d579bbbfd73c419d8f4deb8.jpg"
  },
  {
    id: 15,
    name: "Premium Cotton Joggers",
    oldPrice: 20000,
    newPrice: 14500,
    category: "joggers",
    image: "https://i.pinimg.com/1200x/9f/a9/f2/9fa9f2f82136f0e1705a44a3d850c1f2.jpg"
  },
  {
    id: 16,
    name: "Streetwear Joggers",
    oldPrice: 19500,
    newPrice: 13900,
    category: "joggers",
    image: "https://i.pinimg.com/736x/ff/99/5c/ff995c80e9feccd2344b1eea96b3465c.jpg"
  },
  {
    id: 17,
    name: "Men Slim Joggers",
    oldPrice: 18000,
    newPrice: 12900,
    category: "joggers",
    image: "https://i.pinimg.com/1200x/86/dc/ed/86dceda29e9f1eb1b48e28e04f402cbe.jpg"
  },
  {
    id: 18,
    name: "Urban Joggers",
    oldPrice: 19000,
    newPrice: 13400,
    category: "joggers",
    image: "https://i.pinimg.com/1200x/9b/e0/fb/9be0fb41256f710f40a37fa3b3bf3c93.jpg"
  },

  // JERSEYS
  {
    id: 19,
    name: "Football Jersey Black",
    oldPrice: 17000,
    newPrice: 12500,
    category: "jersey",
    image: "https://i.pinimg.com/736x/77/de/32/77de32b439f565d82a313194469506ee.jpg"
  },
  {
    id: 20,
    name: "Sport Jersey White",
    oldPrice: 16500,
    newPrice: 11900,
    category: "jersey",
    image: "https://i.pinimg.com/736x/9c/be/72/9cbe72f812f76851231742516436480b.jpg"
  },
  {
    id: 21,
    name: "Premium Sport Jersey",
    oldPrice: 18000,
    newPrice: 13200,
    category: "jersey",
    image: "https://i.pinimg.com/736x/e5/73/2f/e5732fafa45c11dad7d739872fea4584.jpg"
  },
  {
    id: 22,
    name: "Men Training Jersey",
    oldPrice: 17000,
    newPrice: 12400,
    category: "jersey",
    image: "https://i.pinimg.com/736x/b8/c0/e7/b8c0e7161f76be9e08dc575e5bb2d3cf.jpg"
  },
  {
    id: 23,
    name: "Modern Sport Jersey",
    oldPrice: 17500,
    newPrice: 12900,
    category: "jersey",
    image: "https://i.pinimg.com/736x/dd/24/d4/dd24d49db8fb6f0182ad26492ec24154.jpg"
  },
  {
    id: 24,
    name: "Casual Training Jersey",
    oldPrice: 16500,
    newPrice: 11900,
    category: "jersey",
    image: "https://i.pinimg.com/736x/84/ff/bc/84ffbc38c86f265e9fd516a573ef9131.jpg"
  },

  // TOPS
  {
    id: 25,
    name: "Casual Women Top",
    oldPrice: 15000,
    newPrice: 10900,
    category: "tops",
    image: "https://i.pinimg.com/control1/736x/09/c5/dd/09c5dd7a635ac0d552aa16ead16d1ea9.jpg"
  },
  {
    id: 26,
    name: "Black Fashion Top",
    oldPrice: 14500,
    newPrice: 10200,
    category: "tops",
    image: "https://i.pinimg.com/736x/26/7d/c5/267dc5ba1d8cc559c82c2f4517b7dd8c.jpg"
  },
  {
    id: 27,
    name: "White Minimal Top",
    oldPrice: 14000,
    newPrice: 9900,
    category: "tops",
    image: "https://i.pinimg.com/1200x/a1/e4/7e/a1e47e77d5172013b5b1f3955668296d.jpg"
  },
  {
    id: 28,
    name: "Summer Women Top",
    oldPrice: 15000,
    newPrice: 10900,
    category: "tops",
    image: "https://i.pinimg.com/1200x/9d/5d/9c/9d5d9c8fe2accee958487ecbbc4c1e2e.jpg"
  },
  {
    id: 29,
    name: "Street Style Top",
    oldPrice: 14500,
    newPrice: 10300,
    category: "tops",
    image: "https://i.pinimg.com/control1/736x/1a/60/1e/1a601ea39d6ba6b77f394f5138ba6c09.jpg"
  },
  {
    id: 30,
    name: "Premium Cotton Top",
    oldPrice: 15000,
    newPrice: 10800,
    category: "tops",
    image: "https://i.pinimg.com/control1/1200x/db/ef/e3/dbefe3c28d1ee94f997ce174a2b805e1.jpg"
  },

  // TANK TOPS
  {
    id: 31,
    name: "Men Armless Tank Black",
    oldPrice: 12000,
    newPrice: 8500,
    category: "tank",
    image: "https://i.pinimg.com/1200x/99/ab/4b/99ab4b038fd896b6e213f9a8f026f5e5.jpg"
  },
  {
    id: 32,
    name: "Sport Tank White",
    oldPrice: 11000,
    newPrice: 7900,
    category: "tank",
    image: "https://i.pinimg.com/1200x/7b/14/78/7b1478199fd22f8a4d3235f36cb1dee4.jpg"
  },
  {
    id: 33,
    name: "Premium Gym Tank",
    oldPrice: 12500,
    newPrice: 8800,
    category: "tank",
    image: "https://i.pinimg.com/736x/e2/0b/c8/e20bc83a09745e708820198b900be812.jpg"
  },
  {
    id: 34,
    name: "Modern Fitness Tank",
    oldPrice: 13000,
    newPrice: 9100,
    category: "tank",
    image: "https://i.pinimg.com/736x/c1/f8/60/c1f860757f210c3a16bf91a3ae4935b6.jpg"
  },
  {
    id: 35,
    name: "Men Sport Tank",
    oldPrice: 12000,
    newPrice: 8600,
    category: "tank",
    image: "https://i.pinimg.com/1200x/91/a6/9e/91a69e3411eb25d3e95f5f471fa3a3a5.jpg"
  },


  {
    id: 36,
    name: "Modern Black Joggers",
    oldPrice: 20000,
    newPrice: 14800,
    category: "joggers",
    image: "https://i.pinimg.com/1200x/ae/78/c0/ae78c0d48279ce3797a3906e5a932894.jpg"
  },
  {
    id: 37,
    name: "Street Face Cap",
    oldPrice: 12000,
    newPrice: 8700,
    category: "cap",
    image: "https://i.pinimg.com/736x/3f/0b/98/3f0b9871c91e0d8e3922d3d7271d33ad.jpg"
  },
  {
    id: 38,
    name: "Slim Fit Trousers",
    oldPrice: 22000,
    newPrice: 16500,
    category: "trousers",
    image: "https://i.pinimg.com/control1/736x/35/91/a0/3591a08b527942cccb58041caa423956.jpg"
  },
  {
    id: 39,
    name: "Premium Women Top",
    oldPrice: 15000,
    newPrice: 10900,
    category: "tops",
    image: "https://i.pinimg.com/736x/e0/81/eb/e081ebfcdd5ee5f6282162629061b39f.jpg"
  },
  {
    id: 40,
    name: "Men Training Joggers",
    oldPrice: 19000,
    newPrice: 13900,
    category: "joggers",
    image: "https://i.pinimg.com/1200x/d1/00/78/d10078da1ece4c84c6b129002590ac06.jpg"
  },

  {
    id: 41,
    name: "Modern White Cap",
    oldPrice: 11500,
    newPrice: 8200,
    category: "cap",
    image: "https://i.pinimg.com/736x/97/cc/d5/97ccd5de120b6499723c307f965013c3.jpg"
  },
  {
    id: 42,
    name: "Sport Gym Tank",
    oldPrice: 12000,
    newPrice: 8500,
    category: "tank",
    image: "https://i.pinimg.com/736x/e2/0b/c8/e20bc83a09745e708820198b900be812.jpg"
  },
  {
    id: 43,
    name: "Modern Sport Jersey",
    oldPrice: 17000,
    newPrice: 12500,
    category: "jersey",
    image: "https://i.pinimg.com/736x/dd/24/d4/dd24d49db8fb6f0182ad26492ec24154.jpg"
  },
  {
    id: 44,
    name: "Urban Slim Trousers",
    oldPrice: 21500,
    newPrice: 16000,
    category: "trousers",
    image: "https://i.pinimg.com/control1/736x/35/91/a0/3591a08b527942cccb58041caa423956.jpg"
  },
  {
    id: 45,
    name: "Street Style Top",
    oldPrice: 15000,
    newPrice: 10800,
    category: "tops",
    image: "https://i.pinimg.com/736x/2c/1e/93/2c1e9384c419931ef615c641abe733e0.jpg"
  },
  {
    id: 46,
    name: "Classic Men Joggers",
    oldPrice: 19000,
    newPrice: 13800,
    category: "joggers",
    image: "https://i.pinimg.com/736x/ff/99/5c/ff995c80e9feccd2344b1eea96b3465c.jpg"
  },
  {
    id: 47,
    name: "Premium Face Cap",
    oldPrice: 13000,
    newPrice: 9200,
    category: "cap",
    image: "https://i.pinimg.com/736x/3f/0b/98/3f0b9871c91e0d8e3922d3d7271d33ad.jpg"
  },
  {
    id: 48,
    name: "Premium Black Jersey",
    oldPrice: 17500,
    newPrice: 12900,
    category: "jersey",
    image: "https://i.pinimg.com/736x/d7/fd/79/d7fd79788139d0a77d63aaf2e7c6d827.jpg"
  },
  {
    id: 49,
    name: "Casual Men Trousers",
    oldPrice: 21000,
    newPrice: 15500,
    category: "trousers",
    image: "https://i.pinimg.com/1200x/6c/c7/bc/6cc7bc8c67104ee65764a4994848b69c.jpg"
  },
  {
    id: 50,
    name: "Modern Street Top",
    oldPrice: 14500,
    newPrice: 10500,
    category: "tops",
    image: "https://i.pinimg.com/control1/1200x/5e/4c/07/5e4c070d38ab47290bc13912d7a35746.jpg"
  }

];

// // GENERATE MORE PRODUCTS
// for (let i = 4; i <= 50; i++) {
//   const categories = ["cap", "trousers", "joggers", "jersey", "tops", "tank"];
//   let cat = categories[i % categories.length];

//   products.push({
//     id: i,
//     name: `${cat.toUpperCase()} Fashion ${i}`,
//     oldPrice: 20000 + i * 200,
//     newPrice: 15000 + i * 200,
//     category: cat,
//     image: `https://source.unsplash.com/400x400/?fashion,${cat},clothing`
//   });
// }

/// SELECT ELEMENTS 
let productContainer = document.querySelector('#productContainer');
let pagination = document.querySelector('#pagination');

let searchForm = document.querySelector('#searchForm');
let searchInput = document.querySelector('#searchInput');

let mobileSearchInput = document.querySelector('#mobileSearchInput');

let menuBtn = document.querySelector('#menuBtn');
let mobileMenu = document.querySelector('#mobileMenu');

let categoryButtons = document.querySelectorAll('.category-btn');


//  VARIABLES 
let filteredProducts = products.slice();
let currentPage = 1;
let itemsPerPage = 8;


// DISPLAY PRODUCTS 
function displayProducts() {

  let start = (currentPage - 1) * itemsPerPage;
  let paginatedItems = filteredProducts.slice(start, start + itemsPerPage);

  productContainer.innerHTML = paginatedItems.map(function (value, index, array) {
    return `
    <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden fade-in">

      <img src="${value.image}" class="w-full h-56 sm:h-60 md:h-64 object-cover">

      <div class="p-4">
        <h3 class="font-semibold truncate">${value.name}</h3>

        <div class="flex gap-3 mt-2 items-center">
          <span class="text-red-500 font-bold">₦${value.newPrice}</span>
          <span class="text-gray-400 line-through">₦${value.oldPrice}</span>
        </div>

        <button class="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-red-500">
          Add to Cart
        </button>
      </div>

    </div>
    `;
  }).join('');

  showPagination();
  showAnimation();
}


//  PAGINATION 
function showPagination() {

  let pages = Math.ceil(filteredProducts.length / itemsPerPage);
  pagination.innerHTML = '';

  for (let i = 1; i <= pages; i++) {

    pagination.innerHTML += `
      <button onclick="changePage(${i})"
        class="px-4 py-2 border rounded-lg ${i === currentPage ? "bg-black text-white" : ""}">
        ${i}
      </button>
    `;
  }
}

function changePage(page) {
  currentPage = page;
  displayProducts();
}


// SEARCH FUNCTION 
function filterProducts(value) {

  filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(value.toLowerCase());
  });

  currentPage = 1;
  displayProducts();
}


//  DESKTOP SEARCH 
if (searchForm) {

  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    filterProducts(searchInput.value);
  });

}


// MOBILE SEARCH 
if (mobileSearchInput) {

  mobileSearchInput.addEventListener('input', function () {
    filterProducts(this.value);
  });

}

console.log(mobileSearchInput);


// CATEGORY FILTER 
categoryButtons.forEach(function (btn) {

  btn.addEventListener('click', function () {

    let category = this.getAttribute('data-category');

    if (category === "all") {
      filteredProducts = products.slice();
    } else {
      filteredProducts = products.filter(function (product) {
        return product.category === category;
      });
    }

    currentPage = 1;
    displayProducts();
  });

});


// SCROLL ANIMATION 
function showAnimation() {

  var cards = document.querySelectorAll(".fade-in");

  cards.forEach(function (card, index) {

    setTimeout(function () {
      card.classList.add("show");
    }, index * 100);

  });
}


// RESPONSIVE MENU 
if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
}


//  LOAD PRODUCTS 
displayProducts();


