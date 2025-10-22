var data = [
    {
      sellername: "Ravi",
      sellernum: "+91 8933633737",
      product: "Cupboard",
      price: "10,000",
      image1: "./images/pro1ii.jpg",
      image2: "./images/pro1iii.jpg",
      image3: "./images/pro1iv.jpg",
      description:
        "Cupboard in a very good condition. Having mirror in the front and No any damage anywhere. ",
      postTime: "Karol Bagh,New Delhi. 3 mins ago",
    },
    {
      sellername: "Hemang",
      sellernum: "+91812345889",
      product: "New Fashion Bike",
      price: "42,500",
      image1: "./images/motor1.webp",
      image2: "./images/motor2.webp",
      image3: "./images/motor3.webp",
      description:
        "New Bike with Orange Color having good look with no any scratch on it.Urgent Sale For money problem.",
      postTime: "South Extension. 1 mins ago",
    },
    {
      sellername: "Nilesh Maurya",
      sellernum: "+91912456678",
      product: "Vivo Y15 New Set",
      price: "25,000",
      image1: "./images/vivo3.jpg",
      image2: "./images/mobile2.webp",
      image3: "./images/vivo2.jpg",
      description: "Vivo Mobile having three camera one at the front and two back camera.Condition are very good and Having appropriate looking with color of the mobile.",
      postTime: "Laxmi Nagar 2,New Delhi. 1 week ago",
    },
    {
      sellername: "Mohan Kumar",
      sellernum: "+91762434656",
      product: "HP Color Laser Printer",
      price: "40,000",
      image1: "./images/printer1.webp",
      image2: "./images/printer2.webp",
      image3: "./images/printer3.webp",
      description:
        "New Printer of HP.45W having faster printing speed with good printing.HP Laser Color Printing machine with no any issues.",
      postTime: "Anand Vihar,New Delhi. 3 week ago",
    },
    {
      sellername: "Seema Kumari",
      sellernum: "+91912345623",
      product: "Single Bed",
      price: "2,000",
      image1: "./images/bed1.jpg",
      image2: "./images/bed2.webp",
      image3: "./images/bed3.webp",
      description:
        "Single Bed with Blue bedsheet having neat and clean. The bed is more comfortable for single person and New look with enough space.",
      postTime: "Laxmi Nagar,New DElhi. 1 mins ago",
    },
  ];
  
  var onClickFunc = function (item) {
    console.log(item);
    sessionStorage.setItem("products", JSON.stringify(item));
    var getUserMail = sessionStorage.getItem("mail");
    if (getUserMail) {
      location.href = "products.html";
    } else {
      alert("SignIn Required to view the product details");
    }
  };
  
  window.onload = function () {
    var getDataFromStorage = localStorage.getItem("DATA");
    if (!getDataFromStorage) {
      localStorage.setItem("DATA", JSON.stringify(data));
    }
  
    var getData = localStorage.getItem("DATA");
    var Arrangedata = JSON.parse(getData);
  
    var row = null;
    Arrangedata.forEach(function (item, index) {
      if (index % 4 === 0) {
        row = document.createElement("div");
        row.className = "row mt-1";
      }
      var itemContainer = document.createElement("div");
      itemContainer.className =
        "card mt-3 col col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3";
      itemContainer.onclick = function () {
        onClickFunc(item);
      };
      // itemContainer.onclick = onClickFunc(item);
      var datahtml = `<div class="card-div">
                   <img src="${item.image1}" class="cardimg car" alt="...">
                 </div>
                 <div id='cardbo' class="card-body">
                   <p class="card-text">${item.product}</p><br>
                   <h5 class="card-title">Rs ${item.price}</h5><br>
                   <p class="card-text"><small class="text-muted">${item.postTime}</small></p>
                 </div>
               `;
      itemContainer.innerHTML = datahtml;
      row?.appendChild(itemContainer);
      document.getElementById("product-container")?.appendChild(row);
  
      // console.log(getData);
    });
  
    // console.log(data);
    // var logout = (document.getElementById("log").innerText = "Login");
    // var logvalue = sessionStorage.setItem("log", "logout");
  };
  
  function post() {
    var sellerName = document.getElementById("sellername").value;
    var sellerNum = document.getElementById("sellernum").value;
    var productTitle = document.getElementById("productName").value;
    var price = document.getElementById("price").value;
    var Location = document.getElementById("Location").value;
    var productDetail = document.getElementById("productDetail").value;
    var Image1 = document.getElementById("img1").value;
    var Image2 = document.getElementById("img2").value;
    var Image3 = document.getElementById("img3").value;
    var obj = {
      sellername: sellerName,
      sellernum: sellerNum,
      product: productTitle,
      price: price,
      image1: Image1,
      image2: Image2,
      image3: Image3,
      description: productDetail,
      postTime: Location,
    };
  
    var getData = localStorage.getItem("DATA");
    var Arrangedata = JSON.parse(getData);
    Arrangedata.push(obj);
    localStorage.setItem("DATA", JSON.stringify(Arrangedata));
    // console.log(Arrangedata);
    location.href = "index.html";
    // match = false;
    // sessionStorage.setItem("SetData", JSON.stringify(data));
    // console.log(setdata);
  }
  