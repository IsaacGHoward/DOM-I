const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Fixing nav links
let nav = document.querySelector("nav");
let navLinks = nav.children;
for(var i=0;i<navLinks.length;i++){
  navLinks[i].innerHTML = siteContent["nav"][`nav-item-${i}`];
}

//Fixing cta
let cta = document.querySelector(".cta");
cta.children[1].setAttribute('src', siteContent["cta"]["img-src"]);
cta.children[0].children[0].innerHTML = siteContent["cta"]["h1"];
cta.children[0].children[1].innerHTML = siteContent["cta"]["button"];

//Fixing main-content
let main_content = document.querySelector(".main-content");
main_content.children[0].children[0].children[0].innerHTML = siteContent["main-content"]["features-h4"];
main_content.children[0].children[0].children[1].innerHTML = siteContent["main-content"]["features-content"];
main_content.children[0].children[1].children[0].innerHTML = siteContent["main-content"]["about-h4"];
main_content.children[0].children[1].children[1].innerHTML = siteContent["main-content"]["about-content"];
main_content.children[1].setAttribute('src', siteContent["main-content"]["middle-img-src"]);
main_content.children[2].children[0].children[0].innerHTML = siteContent["main-content"]["services-h4"];
main_content.children[2].children[0].children[1].innerHTML = siteContent["main-content"]["services-content"];
main_content.children[2].children[1].children[0].innerHTML = siteContent["main-content"]["product-h4"];
main_content.children[2].children[1].children[1].innerHTML = siteContent["main-content"]["product-content"];
main_content.children[2].children[2].children[0].innerHTML = siteContent["main-content"]["vision-h4"];
main_content.children[2].children[2].children[1].innerHTML = siteContent["main-content"]["vision-content"];

//Fixing contact
let contact = document.querySelector(".contact");
contact.children[0].innerHTML = siteContent["contact"]["contact-h4"];
contact.children[1].innerHTML = siteContent["contact"]["address"];
contact.children[2].innerHTML = siteContent["contact"]["phone"];
contact.children[3].innerHTML = siteContent["contact"]["email"];