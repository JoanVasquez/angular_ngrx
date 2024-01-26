import Swal from 'sweetalert2';

export function deleteConfig(event$, id, labels) {
  Swal.mixin({
    customClass: {
      confirmButton: 'ml-2 mr-2 btn btn-success',
      cancelButton: 'ml-2 mr-2 btn btn-danger',
    },
    buttonsStyling: false,
  })
    .fire({
      title: labels.areYouSure,
      text: labels.warningDelete,
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: labels.deleteIt,
      cancelButtonText: labels.keepIt,
      reverseButtons: true,
    })
    .then((result) => {
      if (result.value) {
        event$.emit(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(labels.cancelled, labels.deleteCancelled, 'error');
      }
    });
}
