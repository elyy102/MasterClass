const ModalMore = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal_more">
        <div className="modal_head">
          <p className="p_modal_head">О событии</p>
          <button className="close_card" onClick={onCloseButtonClick}>х</button>
        </div>
          <div className="modal_content_more">
              <div className="modal_content_more_1">
                  <div className="modal_content_more_1_1">
                      <h1 className="modal_content_more_1_h1">Место проведения </h1>
                      <p className="modal_content_more_1_p">Студия скульптуры и рисования «Объём»</p>
                  </div>
                  <div className="modal_content_more_1_1">
                      <h1 className="modal_content_more_1_h1">Цена</h1>
                      <p className="modal_content_more_1_p">1390 Р</p>
                  </div>
                  <div className="modal_content_more_1_1">
                      <h1 className="modal_content_more_1_h1">Возрастное ограничение</h1>
                      <p className="modal_content_more_1_p">12+</p>
                  </div>
              </div>
              <div className="modal_content_more_2">
                  <div className="modal_content_more_1_1">
                      <h1 className="modal_content_more_1_h1">Адрес </h1>
                      <p className="modal_content_more_1_p">ул. Земляной вал, д. 52/16, стр. 2.</p>
                  </div>
                  <div className="modal_content_more_1_1">
                      <h1 className="modal_content_more_1_h1">Образовательная тематика </h1>
                      <p className="modal_content_more_1_p">Искусство, Рисунок, Иллюстрация</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ModalMore;
