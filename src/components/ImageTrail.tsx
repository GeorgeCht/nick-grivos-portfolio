import { useEffect, useRef } from 'react';
import Image from 'next/image'
import { gsap } from 'gsap';

const ImageTrail = () => {
  const contentRef  = useRef<HTMLDivElement>(null);
  const imagesRef   = useRef<Array<HTMLImageElement>>([]);
  const imagesTotal = useRef(0);
  const imgPosition = useRef(0);
  const zIndexVal   = useRef(1);
  const threshold   = 340;

  const imagePaths = [
    '/img/1.webp',
    '/img/2.webp',
    '/img/3.webp',
    '/img/4.webp',
    '/img/5.webp',
    '/img/6.webp',
    '/img/7.webp',
    '/img/8.webp',
    '/img/9.webp',
    '/img/10.webp',
  ];

  const mathUtils = {
    lerp: (a:number, b:number, n:number) => (1 - n) * a + n * b,
    distance: (x1:number, y1:number, x2:number, y2:number) => Math.hypot(x2-x1, y2-y1),
    random: (min:number, max:number) => Math.random() * (max - min) + min
  };

  const mousePos      = useRef({ x: 0, y: 0 });
  const lastMousePos  = useRef({ x: 0, y: 0 });
  const cacheMousePos = useRef({ x: 0, y: 0 });

  const getMousePos = (ev: MouseEvent) => {
    const posx = ev.clientX;
    const posy = ev.clientY;
    return { x: posx, y: posy };
  };

  const getMouseDistance = () => mathUtils.distance(mousePos.current.x, mousePos.current.y, lastMousePos.current.x, lastMousePos.current.y);

  const introAnimation = () => {
    const img = imagesRef.current[0];
    const w = window.innerWidth;
    const h = window.innerHeight;
    const centerWidth = w / 2 - img.width / 2;
    const centerHeight = h / 2 - img.height / 2;

    gsap.timeline().set(imagesRef.current[0], {
      startAt: { opacity: 0, scale: 1 },
      opacity: 1,
      scale: 1.185,
      x: centerWidth - img.width * (2 - .5),
      y: centerHeight,
      rotate: mathUtils.random(0, 10) * 1,
    })
    .to(imagesRef.current[0], {
      duration: 0.9,
      ease: 'expo.easeOut',
      x: (centerWidth - img.width * (2 - .5)) + (img.width / 2),
      y: centerHeight + mathUtils.random(0, (img.width / 2)),
      rotate: mathUtils.random(0, 10) * -1,
    }, 0)
    .to(imagesRef.current[0], {
      duration: 1,
      ease: 'quint.easeOut',
      scale: .2,
      opacity: 0,
    }, .666);

    setTimeout(() => {
      gsap.timeline().set(imagesRef.current[1], {
        startAt: { opacity: 0, scale: 1 },
        opacity: 1,
        scale: 1.075,
        x: centerWidth - img.width * (2 - 1.8),
        y: centerHeight,
        rotate: mathUtils.random(10, 20) * -1,
      })
      .to(imagesRef.current[1], {
        duration: 0.9,
        ease: 'expo.easeOut',
        x: (centerWidth - img.width * (2 - 1.8)) + (img.width / 2),
        y: centerHeight + mathUtils.random(0, (img.width / 5)),
        rotate: mathUtils.random(0, 10) * -1,
      }, 0)
      .to(imagesRef.current[1], {
        duration: 1,
        ease: 'quint.easeOut',
        scale: .2,
        opacity: 0,
      }, .666);
    }, 100);

    setTimeout(() => {
      gsap.timeline().set(imagesRef.current[2], {
        startAt: { opacity: 0, scale: 1 },
        opacity: 1,
        scale: .825,
        x: centerWidth - img.width * (2 - 2.8),
        y: centerHeight - img.width * (.5),
        rotate: mathUtils.random(10, 20) * -1,
      })
      .to(imagesRef.current[2], {
        duration: 0.9,
        ease: 'expo.easeOut',
        x: (centerWidth - img.width * (2 - 2.8)) + (img.width / 2),
        y: centerHeight - img.width * (.5),
        rotate: mathUtils.random(0, 10) * -1,
      }, 0)
      .to(imagesRef.current[2], {
        duration: 1,
        ease: 'quint.easeOut',
        scale: .2,
        opacity: 0,
      }, .666);
    }, 200);

    setTimeout(() => {
      gsap.timeline().set(imagesRef.current[3], {
        startAt: { opacity: 0, scale: 1 },
        opacity: 1,
        scale: .666,
        x: centerWidth - img.width * (2 - 3.666),
        y: centerHeight - img.width * (1.075),
        rotate: mathUtils.random(10, 20) * -1,
      })
      .to(imagesRef.current[3], {
        duration: 0.9,
        ease: 'expo.easeOut',
        x: (centerWidth - img.width * (2 - 3.666)) + (img.width / 2),
        y: centerHeight - img.width * (1.075) + mathUtils.random(0, 10),
        rotate: mathUtils.random(0, 10) * -1,
      }, 0)
      .to(imagesRef.current[3], {
        duration: 1,
        ease: 'quint.easeOut',
        scale: .2,
        opacity: 0,
      }, .666);
    }, 300);

  }

  const showNextImage = () => {
    const img = imagesRef.current[imgPosition.current];
    if (!img) return;

    gsap.killTweensOf(img);
    const distance = getMouseDistance();
    const timeline = gsap.timeline();
    const direction = cacheMousePos.current.x > mousePos.current.x ? -1 : 1;

    timeline
      .set(img, {
        startAt: { opacity: 0, scale: 1 },
        opacity: 1,
        scale: 1,
        zIndex: zIndexVal.current,
        x: cacheMousePos.current.x - img.width / 2,
        y: cacheMousePos.current.y - img.height / 2,
        rotate: mathUtils.random(0, distance / 10) * direction,
      })
      .to(img, {
        duration: .9,
        ease: 'expo.easeOut',
        x: mousePos.current.x - img.width / 2,
        y: mousePos.current.y - img.height / 2,
        rotate: mathUtils.random(0, distance / 10) * direction,
      }, 0)
      .to(img, {
        duration: 1,
        ease: 'quint.easeOut',
        scale: 0,
      }, .25)
      // .to(img, {
      //   duration: 1,
      //   ease: 'power1.easeOut',
      //   opacity: 0,
      // }, .25);
  };

  const resizeImages = () => {
    imagesRef.current.forEach((img) => {
      if (img) {
        gsap.set(img, {
          scale: 1,
          x: 0,
          y: 0,
          opacity: 0,
        });
      }
    });
  };

  const checkIdleState = () => {
    let isIdle = true;
    imagesRef.current.forEach((img) => {
      if (img && (gsap.isTweening(img) || img.style.opacity !== '0')) {
        isIdle = false;
      }
    });
    if (isIdle && zIndexVal.current !== 1) {
      zIndexVal.current = 1;
    }
  };

  const onMouseMove = (ev: MouseEvent) => {
    mousePos.current = getMousePos(ev);
  };

  useEffect(() => {
    imagesRef.current = Array.from(contentRef.current?.querySelectorAll('.content__img') || []);
    imagesTotal.current = imagesRef.current.length;

    window.addEventListener('resize', resizeImages);
    window.addEventListener('mousemove', onMouseMove);

    introAnimation();

    const render = (a: number) => {
      const distance = getMouseDistance();
      cacheMousePos.current = {
        x: mathUtils.lerp(cacheMousePos.current.x || mousePos.current.x, mousePos.current.x, .1),
        y: mathUtils.lerp(cacheMousePos.current.y || mousePos.current.y, mousePos.current.y, .1),
      };

      if (distance > threshold) {
        showNextImage();

        zIndexVal.current += 1;
        imgPosition.current =
          imgPosition.current < imagesTotal.current - 1
            ? imgPosition.current + 1
            : 0;

        lastMousePos.current = { ...mousePos.current };
      }

      checkIdleState();
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeImages);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className={'trail__container'} ref={contentRef}>
    {imagePaths.map((path, index) => (
      <Image
        key={index}
        className={'content__img block w-[160px] md:w-[315px] h-[160px] md:h-[315px] aspect-square'}
        src={path}
        width={315}
        height={315}
        alt='Display image'
        priority={true}
      />
    ))}
  </div>
  );
};

export default ImageTrail;