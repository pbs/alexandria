import jQuery from 'jquery';
import Modal from '../../scripts/new-modal';

/**
 * Modal for Heavy Traffic Mode, appears after uses are redirected from a disabled page
 */

jQuery(($) => {
  /**
   * Initializes.
   */
  const init = () => {
    // Only creates modal if Heavy Traffic Mode is on
    if (document.getElementById('heavyTrafficModalWindow')) {
      setupHeavyTrafficModal();
    }
  };

  /**
   * Sets up the Heavy Traffic Modal using new-modal.js
   */
  const setupHeavyTrafficModal = () => {
    const options = {
      modalId: '#heavyTrafficModalWindow',
      focusTarget: 'btn--close'
    };
    const heavyTrafficModal = new Modal(options);
    heavyTrafficModal.showModal();
  };

  init();

});
