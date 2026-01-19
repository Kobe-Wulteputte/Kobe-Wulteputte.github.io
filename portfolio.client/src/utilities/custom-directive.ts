import type { DirectiveBinding } from 'vue'

export const highlightDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.style.backgroundColor = 'yellow'
  }
}
