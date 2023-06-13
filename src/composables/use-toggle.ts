import { ref } from 'vue';

export function useToggle(value: boolean = false) {
  const on = ref(value);

  function toggle() {
    on.value = !on.value;
  }

  function set(value: boolean) {
    on.value = value;
  }

  return { on, toggle };
}
