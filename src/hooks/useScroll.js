import { useRef } from 'react';

const safeDocument = typeof document !== 'undefined' ? document : {};

const useScroll = () => {
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right')
      ) || 0;

    html.style.position = 'relative'; /* [1] */
    html.style.overflow = 'hidden'; /* [2] */
    html.style.height = '100%';
    body.style.position = 'relative'; /* [1] */
    body.style.overflow = 'hidden'; /* [2] */
    body.style.height = '100%';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    html.style.height = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';
    body.style.maxHeight = '';

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};

export default useScroll;
