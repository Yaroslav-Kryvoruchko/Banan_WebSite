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

  const menuBtn = document.querySelector(".menu_btn");
  const menu = document.querySelector(".menu_items");
  const menuClose = document.querySelector(".back-drop");

  menuClose.addEventListener("click", () => {
    menuBtn.classList.remove("open_menu");
    menu.classList.remove("open-main_menu");
    setTimeout(() => {
      menuClose.classList.remove("open-main_menu");
    }, 200);
  });

  let openMenu = false;

  menuBtn.addEventListener("click", () => {
    if (!openMenu) {
      menuBtn.classList.add("open_menu");
      menuClose.classList.add("open-main_menu");
      setTimeout(() => {
        menu.classList.add("open-main_menu");
      }, 200);
      openMenu = true;
    } else {
      menuBtn.classList.remove("open_menu");
      menu.classList.remove("open-main_menu");
      setTimeout(() => {
        menuClose.classList.remove("open-main_menu");
      }, 200);
      openMenu = false;
    }
  });

  const homeItemOne = document.querySelector(".home_item-one");
  const homeItemsOne = document.querySelector(".home_items-one");
  const homeItemTwo = document.querySelector(".home_item-two");
  const homeItemsTwo = document.querySelector(".home_items-two");
  const homeItemTree = document.querySelector(".home_item-tree");
  const homeItemsTree = document.querySelector(".home_items-tree");
  const homeItemFour = document.querySelector(".home_item-four");
  const homeItemsFour = document.querySelector(".home_items-four");

  const openHomeItems = document.querySelector(".home_item-open");
  const openHomeItemsTwo = document.querySelector(".home_item-open-two");
  const openHomeItemsTree = document.querySelector(".home_item-open-tree");
  const openHomeItemsFour = document.querySelector(".home_item-open-four");

  let openHome = false;

  homeItemOne.addEventListener("click", () => {
    if (!openHome) {
      homeItemTwo.classList.add("open-home_items");
      homeItemTree.classList.add("open-home_items");
      homeItemFour.classList.add("open-home_items");

      homeItemsOne.classList.add("home_items-close");
      openHomeItems.classList.add("home_new-items");
      setTimeout(() => {
        document
          .querySelector(".home_new-one h1")
          .classList.add("home_open-text");
        setTimeout(() => {
          document
            .querySelector(".home_new-one p")
            .classList.add("home_open-text");
        }, 150);
      }, 600);
      setTimeout(() => {
        document.getElementById("home-one-one").classList.add("home_open-btn");
      }, 700);
      setTimeout(() => {
        document.getElementById("home-one-two").classList.add("home_open-btn");
      }, 800);
      setTimeout(() => {
        document.getElementById("home-one-tree").classList.add("home_open-btn");
      }, 900);
      setTimeout(() => {
        document.getElementById("home-one-four").classList.add("home_open-btn");
      }, 1000);
      openHome = true;
    } else {
      homeItemTwo.classList.remove("open-home_items");
      homeItemTree.classList.remove("open-home_items");
      homeItemFour.classList.remove("open-home_items");

      homeItemsOne.classList.remove("home_items-close");
      openHomeItems.classList.remove("home_new-items");
      openHome = false;

      document
        .querySelector(".home_new-one h1")
        .classList.remove("home_open-text");
      document
        .querySelector(".home_new-one p")
        .classList.remove("home_open-text");
      document.getElementById("home-one-one").classList.remove("home_open-btn");
      document.getElementById("home-one-two").classList.remove("home_open-btn");
      document
        .getElementById("home-one-tree")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-one-four")
        .classList.remove("home_open-btn");
    }
  });

  homeItemTwo.addEventListener("click", () => {
    if (!openHome) {
      homeItemOne.classList.add("open-home_items");
      homeItemTree.classList.add("open-home_items");
      homeItemFour.classList.add("open-home_items");

      homeItemsTwo.classList.add("home_items-close");
      openHomeItemsTwo.classList.add("home_new-items");
      setTimeout(() => {
        document
          .querySelector(".home_new-two h1")
          .classList.add("home_open-text");
        setTimeout(() => {
          document
            .querySelector(".home_new-two p")
            .classList.add("home_open-text");
        }, 150);
      }, 600);
      setTimeout(() => {
        document.getElementById("home-two-one").classList.add("home_open-btn");
      }, 700);
      setTimeout(() => {
        document.getElementById("home-two-two").classList.add("home_open-btn");
      }, 800);
      setTimeout(() => {
        document.getElementById("home-two-tree").classList.add("home_open-btn");
      }, 900);
      setTimeout(() => {
        document.getElementById("home-two-four").classList.add("home_open-btn");
      }, 1000);
      openHome = true;
    } else {
      homeItemOne.classList.remove("open-home_items");
      homeItemTree.classList.remove("open-home_items");
      homeItemFour.classList.remove("open-home_items");

      homeItemsTwo.classList.remove("home_items-close");
      openHomeItemsTwo.classList.remove("home_new-items");

      document
        .querySelector(".home_new-two h1")
        .classList.remove("home_open-text");
      document
        .querySelector(".home_new-two p")
        .classList.remove("home_open-text");
      document.getElementById("home-two-one").classList.remove("home_open-btn");
      document.getElementById("home-two-two").classList.remove("home_open-btn");
      document
        .getElementById("home-two-tree")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-two-four")
        .classList.remove("home_open-btn");

      openHome = false;
    }
  });

  homeItemTree.addEventListener("click", () => {
    if (!openHome) {
      homeItemOne.classList.add("open-home_items");
      homeItemTwo.classList.add("open-home_items");
      homeItemFour.classList.add("open-home_items");

      homeItemsTree.classList.add("home_items-close");
      openHomeItemsTree.classList.add("home_new-items");
      setTimeout(() => {
        document
          .querySelector(".home_new-tree h1")
          .classList.add("home_open-text");
        setTimeout(() => {
          document
            .querySelector(".home_new-tree p")
            .classList.add("home_open-text");
        }, 150);
      }, 600);
      setTimeout(() => {
        document.getElementById("home-tree-one").classList.add("home_open-btn");
      }, 700);
      setTimeout(() => {
        document.getElementById("home-tree-two").classList.add("home_open-btn");
      }, 800);
      setTimeout(() => {
        document
          .getElementById("home-tree-tree")
          .classList.add("home_open-btn");
      }, 900);
      setTimeout(() => {
        document
          .getElementById("home-tree-four")
          .classList.add("home_open-btn");
      }, 1000);
      openHome = true;
    } else {
      homeItemOne.classList.remove("open-home_items");
      homeItemTwo.classList.remove("open-home_items");
      homeItemFour.classList.remove("open-home_items");

      homeItemsTree.classList.remove("home_items-close");
      openHomeItemsTree.classList.remove("home_new-items");

      document
        .querySelector(".home_new-tree h1")
        .classList.remove("home_open-text");
      document
        .querySelector(".home_new-tree p")
        .classList.remove("home_open-text");
      document
        .getElementById("home-tree-one")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-tree-two")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-tree-tree")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-tree-four")
        .classList.remove("home_open-btn");
      openHome = false;
    }
  });

  homeItemFour.addEventListener("click", () => {
    if (!openHome) {
      homeItemOne.classList.add("open-home_items");
      homeItemTwo.classList.add("open-home_items");
      homeItemTree.classList.add("open-home_items");

      homeItemsFour.classList.add("home_items-close");
      openHomeItemsFour.classList.add("home_new-items");
      setTimeout(() => {
        document
          .querySelector(".home_new-four h1")
          .classList.add("home_open-text");
        setTimeout(() => {
          document
            .querySelector(".home_new-four p")
            .classList.add("home_open-text");
        }, 150);
      }, 600);
      setTimeout(() => {
        document.getElementById("home-four-one").classList.add("home_open-btn");
      }, 700);
      setTimeout(() => {
        document.getElementById("home-four-two").classList.add("home_open-btn");
      }, 800);
      setTimeout(() => {
        document
          .getElementById("home-four-tree")
          .classList.add("home_open-btn");
      }, 900);
      setTimeout(() => {
        document
          .getElementById("home-four-four")
          .classList.add("home_open-btn");
      }, 1000);
      openHome = true;
    } else {
      homeItemOne.classList.remove("open-home_items");
      homeItemTwo.classList.remove("open-home_items");
      homeItemTree.classList.remove("open-home_items");

      homeItemsFour.classList.remove("home_items-close");
      openHomeItemsFour.classList.remove("home_new-items");

      document
        .querySelector(".home_new-four h1")
        .classList.remove("home_open-text");
      document
        .querySelector(".home_new-four p")
        .classList.remove("home_open-text");
      document
        .getElementById("home-four-one")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-four-two")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-four-tree")
        .classList.remove("home_open-btn");
      document
        .getElementById("home-four-four")
        .classList.remove("home_open-btn");
      openHome = false;
    }
  });

  const varietyItemOne = document.querySelector(".variety_item");
  const varietyItemTwo = document.querySelector(".variety_item-two");
  const varietyItemTree = document.querySelector(".variety_item-tree");
  const varietyItemFour = document.querySelector(".variety_item-four");
  const varietyAllItemOne = document.getElementById("variety-one");
  const varietyAllItemTwo = document.getElementById("variety-two");
  const varietyAllItemTree = document.getElementById("variety-tree");
  const varietyAllItemFour = document.getElementById("variety-four");

  function varietyOne() {
    newParag = document.createElement("p");
    newParag.className = ".variety_all--item p";
    newParag.innerHTML = `
    The green banana is a separate cultivar, not unripe bananas. The
    fruits are large and inedible when raw. Here they make banana
    chips. They can also be prepared, etc. It is sold not in fruit
    shops, but in vegetable stores, along with cabbage and potatoes.
    `;

    setTimeout(() => {
      varietyAllItemOne.append(newParag);
    }, 500);
    varietyAllItemOne.classList.add("open_variety-all");
  }

  function varietyTwo() {
    newParagTwo = document.createElement("p");
    newParagTwo.className = ".variety_all--item p";
    newParagTwo.innerHTML = `
  Nendrum banana - also called Kerala here. Large, pointed, yellow. The pulp is
  orange, dense, almost crunchy, with a hard core. Sweet, aromatic,
  with a slight sourness - very tasty! It costs 40 rupees (30
  rubles) per kilogram (7-8 pieces). Unlike other varieties, this
  one is for some reason sold in kilograms, and not in pieces.
  Locals love this variety and believe that it is good for your
  health. Although I doubt the other varieties are not helpful.
    `;

    setTimeout(() => {
      varietyAllItemTwo.append(newParagTwo);
    }, 500);
    varietyAllItemTwo.classList.add("open_variety-all");
  }

  function varietyTree() {
    newParagTree = document.createElement("p");
    newParagTree.className = ".variety_all--item p";
    newParagTree.innerHTML = `
  Red banana - large, thick. The skin is very thin and peels off along with the top 
  layer of pulp. The pulp is yellow, very soft, sweet, aromatic.
    `;

    setTimeout(() => {
      varietyAllItemTree.append(newParagTree);
    }, 500);
    varietyAllItemTree.classList.add("open_variety-all");
  }

  function varietyFour() {
    newParagFour = document.createElement("p");
    newParagFour.className = ".variety_all--item p";
    newParagFour.innerHTML = `
  Honey banana - the skin is orange, thin, peeled off with the top layer of pulp. 
  The pulp is light orange, tender, aromatic. It is tasty, about like red, but with 
  a little sourness. They cost as much as large bananas, and per unit of weight are correspondingly more expensive.
    `;

    setTimeout(() => {
      varietyAllItemFour.append(newParagFour);
    }, 500);
    varietyAllItemFour.classList.add("open_variety-all");
  }

  let varietyOpenOne = false;
  let varietyOpenTwo = false;
  let varietyOpenTree = false;
  let varietyOpenFour = false;
  const varietyBtn = document.querySelector(".variety_btn-open");
  const varietyBtnTwo = document.querySelector(".variety_btn-open-two");
  const varietyBtnTree = document.querySelector(".variety_btn-open-tree");
  const varietyBtnFour = document.querySelector(".variety_btn-open-four");

  varietyItemOne.addEventListener("click", () => {
    if (!varietyOpenOne) {
      varietyOne();
      varietyBtn.classList.add("variety_open");
      varietyOpenOne = true;
    } else {
      newParag.remove();
      varietyAllItemOne.classList.remove("open_variety-all");
      varietyBtn.classList.remove("variety_open");

      varietyOpenOne = false;
    }
  });

  varietyItemTwo.addEventListener("click", () => {
    if (!varietyOpenTwo) {
      varietyTwo();
      varietyBtnTwo.classList.add("variety_open");
      varietyOpenTwo = true;
    } else {
      newParagTwo.remove();
      varietyAllItemTwo.classList.remove("open_variety-all");
      varietyBtnTwo.classList.remove("variety_open");

      varietyOpenTwo = false;
    }
  });

  varietyItemTree.addEventListener("click", () => {
    if (!varietyOpenTree) {
      varietyTree();
      varietyBtnTree.classList.add("variety_open");
      varietyOpenTree = true;
    } else {
      newParagTree.remove();
      varietyAllItemTree.classList.remove("open_variety-all");
      varietyBtnTree.classList.remove("variety_open");

      varietyOpenTree = false;
    }
  });

  varietyItemFour.addEventListener("click", () => {
    if (!varietyOpenFour) {
      varietyFour();
      varietyBtnFour.classList.add("variety_open");
      varietyOpenFour = true;
    } else {
      newParagFour.remove();
      varietyAllItemFour.classList.remove("open_variety-all");
      varietyBtnFour.classList.remove("variety_open");

      varietyOpenFour = false;
    }
  });
}

document.getElementById("radius-one").addEventListener("mouseover", () => {
  document.getElementById("radius-one_info").style.display = "flex";
  setTimeout(() => {
    document
      .getElementById("radius-one_info")
      .classList.add("open-one_info");
  }, 100);
});

document.getElementById("radius-one").addEventListener("mouseout", () => {
  document
    .getElementById("radius-one_info")
    .classList.remove("open-one_info");
  setTimeout(() => {
    document.getElementById("radius-one_info").style.display = "none";
  }, 500);
});

document.getElementById("radius-two").addEventListener("mouseover", () => {
  document.getElementById("radius-two_info").style.display = "flex";
  setTimeout(() => {
    document
      .getElementById("radius-two_info")
      .classList.add("open-two_info");
  }, 100);
});

document.getElementById("radius-two").addEventListener("mouseout", () => {
  document
    .getElementById("radius-two_info")
    .classList.remove("open-two_info");
  setTimeout(() => {
    document.getElementById("radius-two_info").style.display = "none";
  }, 500);
});

document.getElementById("radius-tree").addEventListener("mouseover", () => {
  document.getElementById("radius-tree_info").style.display = "flex";
  setTimeout(() => {
    document
      .getElementById("radius-tree_info")
      .classList.add("open-tree_info");
  }, 100);
});

document.getElementById("radius-tree").addEventListener("mouseout", () => {
  document
    .getElementById("radius-tree_info")
    .classList.remove("open-tree_info");
  setTimeout(() => {
    document.getElementById("radius-tree_info").style.display = "none";
  }, 500);
});

document.getElementById("radius-four").addEventListener("mouseover", () => {
  document.getElementById("radius-four_info").style.display = "flex";
  setTimeout(() => {
    document
      .getElementById("radius-four_info")
      .classList.add("open-four_info");
  }, 100);
});

document.getElementById("radius-four").addEventListener("mouseout", () => {
  document
    .getElementById("radius-four_info")
    .classList.remove("open-four_info");
  setTimeout(() => {
    document.getElementById("radius-four_info").style.display = "none";
  }, 500);
});