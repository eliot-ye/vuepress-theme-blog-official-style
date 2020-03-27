/**
 * 防抖函数。
 * [immediate=false] 函数会从上一次被调用后，延迟 wait 毫秒后调用 callback；
 * [immediate=true] callback 被立即调用，并不能再调用，函数会从上一次被调用后，倒计时 wait 毫秒后可调用 callback
 * @param {Function} callback - 要做防抖处理的执行动作
 * @param {object} [option]
 * @param {number} [option.wait] - 延迟毫秒数，默认：500
 * @param {boolean} [option.immediate] - true 立即执行，并等待 wait 时间后才能执行 / false 等待 wait 时间后执行，默认：false
 *
 * @return {Function} - 防抖函数体
 */
export function debounce(callback, option = {}) {
  let timer = null;
  const { wait = 500, immediate = false } = option;
  return function() {
    const args = arguments;
    const _this = this;
    if (timer) clearTimeout(timer);
    if (immediate) {
      if (!timer) callback.apply(_this, args);
      timer = setTimeout(() => (timer = null), wait);
    } else {
      timer = setTimeout(() => {
        timer = null;
        callback.apply(_this, args);
      }, wait);
    }
  };
}