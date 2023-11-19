const filterButtons = document.querySelectorAll(".filter-buttons a");
const images = document.querySelector(".images");
const buttons = document.querySelectorAll(".filter-buttons a");

//removing the 'active' class from all buttons.
const removeActive = () => {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

buttons.forEach((button) => {
  //adding a 'click' event on every filter button.
  button.addEventListener("click", () => {
    //clearing all 'active' classes first.
    removeActive();

    //adding active class on clicking the button
    button.classList.add("active");
  });
});

//data
let data = [
  {
    files: [
      { link: "./images/bts1.jpeg" },
      { link: "./images/bts2.jpeg" },
      { link: "./images/bts3.jpeg" },
      { link: "./images/bts4.jpeg" },
      { link: "./images/bts5.jpeg" },
      { link: "./images/bts6.jpeg" },
      { link: "./images/bts7.jpeg" },
      { link: "./images/bts8.jpeg" },
    ],
    class: "bts",
  },
  {
    files: [
      { link: "./images/mdl1.jpeg" },
      { link: "./images/mdl2.jpeg" },
      { link: "./images/mdl3.jpeg" },
      { link: "./images/mdl4.jpeg" },
      { link: "./images/mdl5.jpeg" },
      { link: "./images/mdl6.jpeg" },
      { link: "./images/mdl7.jpeg" },
      { link: "./images/mdl8.jpeg" },
    ],
    class: "model",
  },

  {
    files: [
      { link: "./images/ksr1.jpeg" },
      { link: "./images/ksr2.jpeg" },
      { link: "./images/ksr3.jpeg" },
      { link: "./images/ksr4.jpeg" },
      { link: "./images/ksr5.jpeg" },
      { link: "./images/ksr6.jpeg" },
      { link: "./images/ksr7.jpeg" },
      { link: "./images/ksr8.jpeg" },
    ],
    class: "konser",
  },

  {
    files: [
      { link: "./images/lks1.jpeg" },
      { link: "./images/lks2.jpeg" },
      { link: "./images/lks3.jpeg" },
      { link: "./images/lks4.jpeg" },
      { link: "./images/lks5.jpeg" },
      { link: "./images/lks6.jpeg" },
      { link: "./images/lks7.jpeg" },
      { link: "./images/lks8.jpeg" },
    ],
    class: "art",
  },
];

//function to randomly shuffle images.
const shuffle = (array) => {
  //getting the array length as the current index.
  let currentIndex = array.length;

  //variable to hold a random index.
  let randomIndex;

  //looping through an array.
  while (currentIndex > 0) {
    //getting a random index
    randomIndex = Math.floor(Math.random() * currentIndex); //eg. .5 (Math.random()) * 10 (currentIndex) = 5 (randomIndex)
    //decreasing current index
    currentIndex--;

    //swapping two array values using a temporary variable.
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  //returning array.
  return array;
};

//function that creates and returns liTag
const createLiTag = (image, className) => {
  //create new liTag
  let liTag = document.createElement("li");
  //adding class to the new liTag. eg. 'desert'
  liTag.classList.add(className);

  //adding an <img/> tag as innerHTMl with src.
  liTag.innerHTML = `<img src="${image}" />`;

  //returning liTag.
  return liTag;
};

const generate = (filterString) => {
  //creating an empty array to hold all image file objects.
  let allImages = [];
  //creating an empty array to hold all liTag classes.
  let allClasses = [];

  //clearing all inner HTML inside the images list.
  images.innerHTML = "";

  //showing all images if the filter value is 'all'
  if (filterString === "all") {
    //looping through the 'data' array.
    data.forEach((obj) => {
      //looping through the data array's each objects.
      obj.files.forEach((file) => {
        //pushing all the files to a new array 'allImages'.
        allImages.push(file);
      });
      //combining all classes into a new array 'allClasses'.
      allClasses.push(obj.class);
    });

    //randomly shuffling all images and storing them in the same array.
    allImages = shuffle(allImages);

    //looping through the allImages array.
    allImages.forEach((file, index) =>
      //creating a liTag and appending that to the images list.
      images.appendChild(createLiTag(file.link, allClasses[index]))
    );
  } else {
    //showing all images if the filter value is not 'all'.

    ////looping through the 'data' array.
    data.forEach((obj) => {
      //shuffling each object's file array.
      obj.files = shuffle(obj.files);

      //looping through each object file.
      obj.files.forEach((file) =>
        //creating a liTag and appending that to the images list.
        images.appendChild(createLiTag(file.link, obj.class))
      );
    });
  }
};

const filter = (filterString) => {
  //generate an image gallery.
  generate(filterString);
  //images list
  let imageCards = document.querySelectorAll(".images li");

  //looping through an image list
  imageCards.forEach((image) => {
    //If a particular image contains a class that is equal to filterString, then show those images otherwise show all images.
    if (image.classList.contains(filterString) || filterString === "all") {
      image.classList.add("show");
    } else {
      //hide images
      image.classList.remove("show");
    }
  });
};

filter("all");

console.log(
  images.childNodes.forEach((v, i) => {
    console.log(v);
    if (i == 2) {
      v.childNodes[0].classList.add("big");
    }
  })
);