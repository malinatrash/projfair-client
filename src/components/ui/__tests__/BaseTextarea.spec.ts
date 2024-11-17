import { VueWrapper, shallowMount } from '@vue/test-utils';
import BaseTextarea from '../BaseTextarea.vue';

const getInputValue = (wrapper: VueWrapper) =>
  wrapper.find('textarea').element.value;

describe('BaseTextarea.vue', () => {
  describe(':props', () => {
    it('modelValue изменяет textarea.value', async () => {
      const modelValue = '123';
      const wrapper = shallowMount(BaseTextarea, { props: { modelValue } });
      expect(getInputValue(wrapper)).toEqual(modelValue);
    });
    it('maxlength счётчик отображается правильно', async () => {
      const maxlength = 255;
      const modelValue = '123';
      const wrapper = shallowMount(BaseTextarea, {
        props: { modelValue, maxlength },
      });
      expect(getInputValue(wrapper)).toEqual(modelValue);
      expect(wrapper.find('.maxlength').text()).toEqual(
        `${modelValue.length}/${maxlength}`,
      );
    });
  });

  describe('@emits', () => {
    it('ввод в textarea изменяет modelValue', async () => {
      const wrapper = shallowMount(BaseTextarea, {
        props: {
          'onUpdate:modelValue': async (modelValue: any) => {
            await wrapper.setProps({ modelValue });
          },
        },
      });
      // по дефолту пустая строка
      expect(getInputValue(wrapper)).toEqual('');
      const newValue = 'new value';
      await wrapper.find('textarea').setValue(newValue);
      expect(wrapper.vm.modelValue).toEqual(newValue);
    });
  });
});
