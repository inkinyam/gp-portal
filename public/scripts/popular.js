
class Popular {
  constructor (selector, serviceList) {
    this.block = document.querySelector(selector);
    this.services = serviceList;
    this.popup = this.block.querySelector('.popular__popup');
    this.openButton = this.block.querySelector('.popular__edit');
    this.closePopupButton = this.block.querySelector('.popular__popup-exit');
    this.serviceTemplate = '.popular-service-item';
    this.serviceCardTemplate = '.popular-element-item';
    this.selectedItems = [];

    this._initBlock();
  }

  //получаем темплейт карточки для попапа
  _getSelectItemTemplate () {
    let element =  document.querySelector(this.serviceTemplate).content.querySelector('.popular__popup-item').cloneNode(true);
    return element;
  }

  // слушатели на элемент карточки попапа
  _addEventListenerToSelectItem(item, element) {
    element.addEventListener('click', (e)=> {
      e.preventDefault();
      let button = element.querySelector('.popular__popup-button');
     
      let index = this.selectedItems.indexOf(item);
      if (index === -1) {
        this.selectedItems.push(item);
        element.classList.add('active');
      } else {
        element.classList.remove('active');
        this.selectedItems.splice(index, 1);
        button.textContent = '';
      }
      this._countSelectedElements();
    })
  }

  // цифры в карточках при выборе
  _countSelectedElements () {
    this.selectedItems.forEach((item, indx) => {
      let element = this.popup.querySelector(`[data-id='${item.id}']`);
      let button = element.querySelector('.popular__popup-button');
      button.textContent = indx+1;
    })
  }


 //отрисовываем карточки для попапа
  _renderSelectElement (item) {
    let element = this._getSelectItemTemplate();
    let elementText = element.querySelector('.popular__popup-text');
    let elementButton = element.querySelector('.popular__popup-button');
    // дб. слушатель на клик на элементе, и клик на кнопке
    elementText.textContent = item.title;
    element.setAttribute('data-id', item.id);

    this._addEventListenerToSelectItem(item, element)
    return element;
  }

  _renderSelectList () {
    let popupList = this.popup.querySelector('.popular__popup-list');
    this.services.forEach(item => {
      popupList.append(this._renderSelectElement(item));
    })
  }

  //получаем темплейт карточки для попапа
  _getCardTemplate () {
    let element =  document.querySelector(this.serviceCardTemplate).content.querySelector('.popular__item').cloneNode(true);
    return element;
  }

  _renderCardElement (item) {
    let element = this._getCardTemplate();
    let elementText = element.querySelector('.popular__item-text');
    elementText.textContent = item.title;
    elementText.setAttribute('href', item.link);
    element.setAttribute('data-id', item.id);
    return element;
  }

  _renderCardsList () {
    let cardList = this.block.querySelector('.popular__list');
    cardList.textContent= '';

    this.selectedItems.forEach(item => {
      let newItem = this._renderCardElement(item);
      cardList.append(newItem);
    })
  }
  


  //клик на открытие попапа
  _handleOpenPopupClick () {
    this.openButton.addEventListener('click', (e)=> {
      e.preventDefault();
      this._openPopup();
    })
  }

  //клик на крестик попапа
  _handleClosePopupClick () {
    this.closePopupButton.addEventListener('click', (e)=> {
      e.preventDefault();
      this._closePopup();
      this._renderCardsList();
    })
  }

  _openPopup() {
    this.popup.classList.add('active');

    this.selectedItems.forEach((item, inx) => {
      let element = this.popup.querySelector(`[data-id='${item.id}']`);
      element.classList.add('active');
    })
    this._countSelectedElements();
  }

  _closePopup() {
    this.popup.classList.remove('active');
  }

  

  _initBlock () {
    this._handleOpenPopupClick();
    this._handleClosePopupClick();
    this._renderSelectList();
  }
}


serviceList = [
  {
    id: 1,
    title: "Телефонный справочник",
    link: "#"
  },
  {
    id: 2,
    title: "Почта @str.mos.ru",
    link: "#"
  },
  {
    id: 3,
    title: "Почта genplanmos.ru",
    link: "#"
  },
  {
    id: 4,
    title: "Файлообменный сервер",
    link: "#"
  },
  {
    id: 5,
    title: "Дни рождения",
    link: "#"
  },
  {
    id: 6,
    title: "МОСЭДО",
    link: "#"
  },
  {
    id: 7,
    title: "Городское видеонаблюдение",
    link: "#"
  },
  {
    id: 8,
    title: "Портал smart.mos.ru",
    link: "#"
  },
  {
    id: 9,
    title: "Актион 360",
    link: "#"
  },
  {
    id: 10,
    title: "Облачная бухгалтерия",
    link: "#"
  },
  {
    id: 11,
    title: "Сайт казначейства",
    link: "#"
  },
  {
    id: 12,
    title: "Кабинет юрлица на mos.ru",
    link: "#"
  },
  {
    id: 13,
    title: "ЕАИСТ",
    link: "#"
  },
  {
    id: 14,
    title: "ОАСИ МКА",
    link: "#"
  },
  {
    id: 15,
    title: "ЕГИП МКА",
    link: "#"
  },
  {
    id: 16,
    title: "ИАИС ОГД",
    link: "#"
  },
  {
    id: 17,
    title: "Портал открытых данных",
    link: "#"
  },
  {
    id: 18,
    title: "ТАС УГД",
    link: "#"
  },
  {
    id: 19,
    title: "Распознавание в FineReader",
    link: "#"
  },
  {
    id: 20,
    title: "Генератор QrCode",
    link: "#"
  },
  {
    id: 21,
    title: "КонсультантПлюс",
    link: "#"
  },
]

let newPopular = new Popular('.popular', serviceList)