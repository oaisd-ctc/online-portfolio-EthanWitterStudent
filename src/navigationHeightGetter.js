const navigationHeight = document.querySelector('.navFlexContainer').offsetHeight;

document.documentElement.style.setProperty('--TopScrollPadding', navigationHeight - 1 + "px");
