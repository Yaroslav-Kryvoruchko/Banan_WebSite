const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHight = animItem.offsetHeight;
      const animItemOffSet = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHight / animStart;

      if (animItemHight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffSet - animItemPoint &&
        pageYOffset < animItemOffSet + animItemHight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

const varietyItemOne = document.querySelector(".variety_item");
const varietyAllItem = document.getElementById("variety-one");

function variety() {
  newParag = document.createElement("p");
  newParag.className = ".variety_all--item p";
  newParag.innerHTML = `
    The green banana is a separate cultivar, not unripe bananas. The
    fruits are large and inedible when raw. Here they make banana
    chips. They can also be prepared, etc. It is sold not in fruit
    shops, but in vegetable stores, along with cabbage and potatoes.
    `;

  setTimeout(() => {
    varietyAllItem.append(newParag);
  }, 500);
  varietyAllItem.classList.add("open_variety-all");
}

let varietyOpen = false;
const varietyBtn = document.querySelector(".variety_btn-open");

varietyItemOne.addEventListener("click", () => {
  if (!varietyOpen) {
    variety();
    varietyBtn.classList.add("variety_open");
    varietyOpen = true;
  } else {
    newParag.remove();
    varietyAllItem.classList.remove("open_variety-all");
    varietyBtn.classList.remove("variety_open");

    varietyOpen = false;
  }
});

// const secHome = document.getElementById("home");

// function galery() {
//   const itemOne = document.createElement("div");
//   itemOne.className = "home_item-one";
//   itemOne.innerHTML = `
//   <h1>The banana palm</h1>
//   <p>Is a herb, not a tree, and the banana itself is not a fruit, but a berry</p>
//   `;

//   const itemTwo = document.createElement("div");
//   itemTwo.className = "home_item-two";
//   itemTwo.innerHTML = `
//   <h1>Banana varieties</h1>
//   <p>Almost all banana varieties are radioactive</p>
//   `;

//   const itemTree = document.createElement("div");
//   itemTree.className = "home_item-tree";
//   itemTree.innerHTML = `
//   <h1>Written sources</h1>
//   <p>The first written sources mentioning bananas as an edible plant were written just under three thousand years ago</p>
//   `;

//   secHome.append(itemOne, itemTwo, itemTree);
//   itemOne.classList.add("item-one");

//   setTimeout(() => {
//     itemTwo.classList.add("open_home");
//     setTimeout(() => {
//       itemOne.remove();
//       itemOne.classList.remove("item-one");
//     }, 1600);
//   }, 4000);

//   setTimeout(() => {
//     itemTree.classList.add("open_home");
//     setTimeout(() => {
//       itemTwo.remove();
//       secHome.append(itemOne);
//     }, 1600);
//   }, 9000);

//   setTimeout(() => {
//     itemOne.classList.add("open_home");
//     setTimeout(() => {
//       itemTree.remove();
//     }, 1600);
//   }, 14000);
// }

// galery();

// setInterval(() => {
//   galery();
// }, 16000);
