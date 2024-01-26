import { Validators } from '@angular/forms';

export const defaultValues = {
  name: '',
  isActive: false,
};

export const setForm = (form) => {
  return {
    name: [form.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    isActive: [form.isActive, []],
  };
};

export const setProps = (labels) => {
  return {
    ngCols: ['col-md-12', 'col-md-12'],
    properties: [
      {
        name: 'name',
        type: 'text',
        label: labels.name,
        placeholder: labels.name,
        inputType: 'field',
      },
      {
        name: 'isActive',
        type: 'checkbox',
        msg: labels.isAnActiveCategory,
        label: labels.isActive,
        inputType: 'checkbox',
      },
    ],
  };
};
