const ModalRecord = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal_head">
            <p className="p_modal_head">Запись</p>
            <button className="close_card" onClick={onCloseButtonClick}>х</button>
          </div>
          <div className="modal_content">
            <input className='login_input' placeholder='Введите ФИО...' type="text" />
            <input  className='password_input' placeholder='Введите номер телефона...' type="password" />
            <input className='login_input' placeholder='Введите email...' type="email" />
            <button className='logout_btn'>Записаться</button>
        </div>
        </div>
      </div>
    );
};
  
export default ModalRecord;
  