import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.min.css';

const errors = {
  400: 'Wrong email or password',
};

export const dropError = code => {
  return PushNotifyError(errors[code]);
};

export function PushNotify(text) {
  return new Notify({
    status: 'success',
    title: 'Success !',
    text: `contact ${text} added.`,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 1500,
    gap: 80,
    distance: 20,
    type: 2,
    position: 'right top',
  });
}

export function PushNotifyError(text) {
  return new Notify({
    status: 'error',
    title: 'Error !',
    text: `${text}`,
    effect: 'fade',
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 1500,
    gap: 80,
    distance: 20,
    type: 2,
    position: 'right top',
  });
}
