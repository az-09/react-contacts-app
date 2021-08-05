import { Confirm, TransitionablePortal } from 'semantic-ui-react';
import ReactDOM from 'react-dom';

export default (message, callback, confirmOpen, setConfirmOpen) => {
  const container = document.createElement('div');
  container.setAttribute('custom-confirm-view', '');

  const handleConfirm = (callbackState) => {
    ReactDOM.unmountComponentAtNode(container);
    callback(callbackState);
    setConfirmOpen(false);
  };

  const handleCancel = () => {
    ReactDOM.unmountComponentAtNode(container);
    callback();
    setConfirmOpen(false);
  };
  document.body.appendChild(container);
  const { header, content } = JSON.parse(message);

  ReactDOM.render(
    <TransitionablePortal open={confirmOpen} onClose={handleCancel}>
      <Confirm
        content={content}
        open={confirmOpen}
        header={header}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />

    </TransitionablePortal>,
    container,
  );
};
