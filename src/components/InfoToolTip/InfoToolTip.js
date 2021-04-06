import './InfoToolTip.css'

const InfoToolTip = ({ onClose, isOpen, requestStatus }) => {
  return (
    <section className={`modal-tooltip ${isOpen && "modal-tooltip_opened"}`}>
      <div className="modal-tooltip__container">
        <h2 className="modal-tooltip__message">{requestStatus.message}</h2>
        <button
          className="modal-tooltip__close-button"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
};

export default InfoToolTip;
