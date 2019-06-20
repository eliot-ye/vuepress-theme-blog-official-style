/**
 * 防抖功能
 * @param {number} [time=500] - 防抖动的时间，单位：毫秒，默认：500ms
 * @example
 * const AntiShakeObj = new AntiShake();
 * function doSomeThing(){
 *   AntiShakeObj.handle(()=>{
 *     console.log("only one")
 *     // do some thing here
 *   })
 * }
 * doSomeThing()
 * doSomeThing()
 * doSomeThing()
 */
export class AntiShake {
  /**
   * @private
   * @type {NodeJS.Timeout}
   */
  theTimeOut = null;

  constructor(time = 500) {
    /** @private */
    this.time = time;
  }

  /**
   * @public
   * @param {Function} callback - 要做防抖处理的执行动作
   * @param {number} [time] - 防抖动的时间，单位：毫秒
   */
  handle(callback, time) {
    if (this.theTimeOut) clearTimeout(this.theTimeOut);
    this.theTimeOut = setTimeout(() => {
      this.theTimeOut = null;
      callback();
    }, time || this.time);
  }
}