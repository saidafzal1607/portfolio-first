"use strict";

window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });
  var menuBtn = document.querySelector('.menu-btn');
  var navigation = document.querySelector('.navigation');
  var navItems = document.querySelectorAll('.navigation a');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
  });
  navItems.forEach(function (navItem) {
    navItem.addEventListener('click', function () {
      menuBtn.classList.remove('active');
      navigation.classList.remove('active');
    });
  });
  var scrollBtn = document.querySelector('.scrollToTop-btn');
  window.addEventListener('scroll', function () {
    scrollBtn.classList.toggle('active', window.scrollY > 500);
  });
  scrollBtn.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  window.addEventListener('scroll', function () {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  });
});