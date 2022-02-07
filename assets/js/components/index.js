export var initResponsiveNavigation = function () {
  var mainEl = ".navigation-main"
  var mainTargetSelectors = document.querySelectorAll(
    ".js-main-navigation-toggle"
  )
  for (let i = 0; i < mainTargetSelectors.length; i++) {
    mainTargetSelectors[i].addEventListener("click", function (event) {
      event.preventDefault()
      var parentNavTarget = event.target.closest(mainEl)
      if (parentNavTarget.classList.contains("is-opened")) {
        parentNavTarget.classList.remove("is-opened")
      } else {
        parentNavTarget.classList.add("is-opened")
      }
    })
  }
}

export var initAccordion = function () {
  var accordionItem = document.querySelectorAll(".accordion__header")

  for (let i = 0; i < accordionItem.length; i++) {
    accordionItem[i].addEventListener("click", function (event) {
      event.preventDefault()
      var parentNavTarget = event.target.closest(".accordion__item")
      var bodyContentEl = parentNavTarget.querySelector(
        ".accordion__body-content"
      )
      var bodyEl = parentNavTarget.querySelector(".accordion__body")
      var contentHeight = bodyContentEl.scrollHeight
      if (parentNavTarget.classList.contains("is-opened")) {
        bodyEl.style.height = contentHeight + "px"
        parentNavTarget.classList.remove("is-opened")
        setTimeout(function () {
          bodyEl.style.height = "0px"
        }, 20)
      } else {
        bodyEl.style.height = contentHeight + "px"
        setTimeout(function () {
          bodyEl.style.height = ""
        }, 200) //Transition length
        parentNavTarget.classList.add("is-opened")
      }
    })
  }
}
