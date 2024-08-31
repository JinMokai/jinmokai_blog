import '@src/utils/interface/index.d.ts'

/**
 * 防抖函数
 * @param func 要执行的函数
 * @param delay 延迟时间（毫秒）
 */
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number,
): T {
  let timer: ReturnType<typeof setTimeout> | null

  return function (this: ThisParameterType<T>, ...args: Parameters<T>): void {
    const context = this

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  } as T
}

/**
 *  监听元素宽度变化
 * @param element 监听元素
 * @param cb 回调函数
 * @returns Function 取消监听
 */
function onWidthChange(element: HTMLElement, cb?: (info: WidthChangeInfo) => void) {
  if (!element) return console.warn('element is required')

  let lastWidth = element.getBoundingClientRect().width || 0

  const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    entries.forEach((entry) => {
      let newWidth = entry.contentRect.width
      if (newWidth !== lastWidth) {
        lastWidth = newWidth
        typeof cb === 'function' && cb({
          width: newWidth,
          height: entry.contentRect.height,
          element: entry.target as HTMLElement
        })
      }
    })
  })

  resizeObserver.observe(element)

  return () => {
    resizeObserver.unobserve(element)
  }
}

export { debounce, onWidthChange }
