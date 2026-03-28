const products = [

  // FACE CAPS
  {
    id: 1,
    name: "Classic Black Face Cap",
    oldPrice: 12000,
    newPrice: 8500,
    category: "cap",
    image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d"
  },
  {
    id: 2,
    name: "White Minimal Face Cap",
    oldPrice: 11000,
    newPrice: 7900,
    category: "cap",
    image: "https://images.unsplash.com/photo-1593032465171-8c6b5e52a7bb"
  },
  {
    id: 3,
    name: "Sport Baseball Cap",
    oldPrice: 13000,
    newPrice: 9200,
    category: "cap",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee"
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
    image: "https://images.unsplash.com/photo-1519744346363-df3f0a4e4e8c"
  },
  {
    id: 6,
    name: "Urban Face Cap",
    oldPrice: 12000,
    newPrice: 8500,
    category: "cap",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },

  // TROUSERS
  {
    id: 7,
    name: "Men Slim Fit Trousers",
    oldPrice: 22000,
    newPrice: 16500,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6"
  },
  {
    id: 8,
    name: "Classic Office Trousers",
    oldPrice: 21000,
    newPrice: 15800,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 9,
    name: "Black Formal Trousers",
    oldPrice: 23000,
    newPrice: 17000,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 10,
    name: "Casual Brown Trousers",
    oldPrice: 20000,
    newPrice: 14900,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157"
  },
  {
    id: 11,
    name: "Modern Straight Trousers",
    oldPrice: 22000,
    newPrice: 16200,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1520975922321-4a89e7a73c2f"
  },
  {
    id: 12,
    name: "Men Fashion Trousers",
    oldPrice: 21000,
    newPrice: 15500,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1520975922321-4a89e7a73c2f"
  },

  // JOGGERS
  {
    id: 13,
    name: "Black Joggers",
    oldPrice: 19000,
    newPrice: 13500,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942"
  },
  {
    id: 14,
    name: "Grey Sport Joggers",
    oldPrice: 18000,
    newPrice: 12800,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
  },
  {
    id: 15,
    name: "Premium Cotton Joggers",
    oldPrice: 20000,
    newPrice: 14500,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"
  },
  {
    id: 16,
    name: "Streetwear Joggers",
    oldPrice: 19500,
    newPrice: 13900,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1602810316544-52b0b66c74fd"
  },
  {
    id: 17,
    name: "Men Slim Joggers",
    oldPrice: 18000,
    newPrice: 12900,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1588854337061-b8f5b4c6b2f0"
  },
  {
    id: 18,
    name: "Urban Joggers",
    oldPrice: 19000,
    newPrice: 13400,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6"
  },

  // JERSEYS
  {
    id: 19,
    name: "Football Jersey Black",
    oldPrice: 17000,
    newPrice: 12500,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
  },
  {
    id: 20,
    name: "Sport Jersey White",
    oldPrice: 16500,
    newPrice: 11900,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d"
  },
  {
    id: 21,
    name: "Premium Sport Jersey",
    oldPrice: 18000,
    newPrice: 13200,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 22,
    name: "Men Training Jersey",
    oldPrice: 17000,
    newPrice: 12400,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 23,
    name: "Modern Sport Jersey",
    oldPrice: 17500,
    newPrice: 12900,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157"
  },
  {
    id: 24,
    name: "Casual Training Jersey",
    oldPrice: 16500,
    newPrice: 11900,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1520975922321-4a89e7a73c2f"
  },

  // TOPS
  {
    id: 25,
    name: "Casual Women Top",
    oldPrice: 15000,
    newPrice: 10900,
    category: "tops",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 26,
    name: "Black Fashion Top",
    oldPrice: 14500,
    newPrice: 10200,
    category: "tops",
    image: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6"
  },
  {
    id: 27,
    name: "White Minimal Top",
    oldPrice: 14000,
    newPrice: 9900,
    category: "tops",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 28,
    name: "Summer Women Top",
    oldPrice: 15000,
    newPrice: 10900,
    category: "tops",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157"
  },
  {
    id: 29,
    name: "Street Style Top",
    oldPrice: 14500,
    newPrice: 10300,
    category: "tops",
    image: "https://images.unsplash.com/photo-1520975922321-4a89e7a73c2f"
  },
  {
    id: 30,
    name: "Premium Cotton Top",
    oldPrice: 15000,
    newPrice: 10800,
    category: "tops",
    image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d"
  },

  // TANK TOPS
  {
    id: 31,
    name: "Men Armless Tank Black",
    oldPrice: 12000,
    newPrice: 8500,
    category: "tank",
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942"
  },
  {
    id: 32,
    name: "Sport Tank White",
    oldPrice: 11000,
    newPrice: 7900,
    category: "tank",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
  },
  {
    id: 33,
    name: "Premium Gym Tank",
    oldPrice: 12500,
    newPrice: 8800,
    category: "tank",
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"
  },
  {
    id: 34,
    name: "Modern Fitness Tank",
    oldPrice: 13000,
    newPrice: 9100,
    category: "tank",
    image: "https://images.unsplash.com/photo-1602810316544-52b0b66c74fd"
  },
  {
    id: 35,
    name: "Men Sport Tank",
    oldPrice: 12000,
    newPrice: 8600,
    category: "tank",
    image: "https://images.unsplash.com/photo-1588854337061-b8f5b4c6b2f0"
  },

  
  {
    id: 36,
    name: "Modern Black Joggers",
    oldPrice: 20000,
    newPrice: 14800,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6"
  },
  {
    id: 37,
    name: "Street Face Cap",
    oldPrice: 12000,
    newPrice: 8700,
    category: "cap",
    image: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d"
  },
  {
    id: 38,
    name: "Slim Fit Trousers",
    oldPrice: 22000,
    newPrice: 16500,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 39,
    name: "Premium Women Top",
    oldPrice: 15000,
    newPrice: 10900,
    category: "tops",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 40,
    name: "Men Training Joggers",
    oldPrice: 19000,
    newPrice: 13900,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  },

  {
    id: 41,
    name: "Modern White Cap",
    oldPrice: 11500,
    newPrice: 8200,
    category: "cap",
    image: "https://images.unsplash.com/photo-1593032465171-8c6b5e52a7bb"
  },
  {
    id: 42,
    name: "Sport Gym Tank",
    oldPrice: 12000,
    newPrice: 8500,
    category: "tank",
    image: "https://images.unsplash.com/photo-1584865288642-42078afe6942"
  },
  {
    id: 43,
    name: "Modern Sport Jersey",
    oldPrice: 17000,
    newPrice: 12500,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716f"
  },
  {
    id: 44,
    name: "Urban Slim Trousers",
    oldPrice: 21500,
    newPrice: 16000,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157"
  },
  {
    id: 45,
    name: "Street Style Top",
    oldPrice: 15000,
    newPrice: 10800,
    category: "tops",
    image: "https://images.unsplash.com/photo-1520975922321-4a89e7a73c2f"
  },
  {
    id: 46,
    name: "Classic Men Joggers",
    oldPrice: 19000,
    newPrice: 13800,
    category: "joggers",
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"
  },
  {
    id: 47,
    name: "Premium Face Cap",
    oldPrice: 13000,
    newPrice: 9200,
    category: "cap",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee"
  },
  {
    id: 48,
    name: "Premium Black Jersey",
    oldPrice: 17500,
    newPrice: 12900,
    category: "jersey",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38"
  },
  {
    id: 49,
    name: "Casual Men Trousers",
    oldPrice: 21000,
    newPrice: 15500,
    category: "trousers",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
  },
  {
    id: 50,
    name: "Modern Street Top",
    oldPrice: 14500,
    newPrice: 10500,
    category: "tops",
    image: "https://images.unsplash.com/photo-1551022372-0bdac482b9d6"
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

let productContainer = document.querySelector('#productContainer');
let pagination = document.querySelector('#pagination');
let searchForm = document.querySelector('#searchForm');
let searchInput = document.querySelector('#searchInput');
let menuBtn = document.querySelector('#menuBtn');
let mobileMenu = document.querySelector('#mobileMenu');

let filteredProducts = products.slice();
let currentPage = 1;
let itemsPerPage = 8;


// ================= DISPLAY PRODUCTS =================
function displayProducts() {

    let start = (currentPage - 1) * itemsPerPage;
    let paginatedItems = filteredProducts.slice(start, start + itemsPerPage);

    productContainer.innerHTML = paginatedItems.map(function(value, index, array){
        return `
        <div class="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">

            <img src="${value.image}" class="w-full h-60 object-cover">

            <div class="p-4">
                <h3 class="font-semibold">${value.name}</h3>

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
}


// ================= PAGINATION =================
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

function changePage(page){
    currentPage = page;
    displayProducts();
}


// ================= SEARCH =================
searchForm.addEventListener('submit', function(e){

    e.preventDefault();

    let searchValue = document.querySelector('#searchInput').value;


    filteredProducts = products.filter(function(value, index, array){
        return value.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    currentPage = 1;
    displayProducts();
});


// ================= RESPONSIVE MENU =================
menuBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('hidden');
});


// ================= LOAD PRODUCTS =================
displayProducts();