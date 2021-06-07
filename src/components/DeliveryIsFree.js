import React from 'react';

function DeliveryIsFree() {
    return(
    <div className="DeliverySection">
        <div className="DeliveryGrid" id="delId">
            <h2 className="DeliveryFree">Доставка</h2>
            <h3 className="DeliveryInMailBox">Доставляем в почтовый ящик</h3>
            <p className="DeliveryText1">Мы отправляем посылки с помощью Почты России. Благодаря компактному размеру упаковки, срок доставки — от двух до семи дней.
            </p>
            <h3 className="forRF">Бесплатно по всей РФ</h3>
            <p className="DeliveryText2">Бесплатная доставка масок каждую неделю для регулярного ухода за кожей лица, даже если живёте в удалённой части России.
            </p>
        </div>
    </div>
  )
}

export default DeliveryIsFree;
