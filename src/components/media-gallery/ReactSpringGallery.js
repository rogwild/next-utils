import React, { useEffect, useState, useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
// import AllIcons from "~components/ui/all-icons";
import useBreakpoint from "../../hooks/use-breakpoint";
import useStyleRewriter from "../../hooks/use-style-rewriter";

function ReactSpringGallery({
  media,
  galleryClassName = "",
  mediaItemClassName = "",
  imageItemClassName = "",
  videoItemClassName = "",
  activeSlide = 0,
  setActiveSlide,
  PreviousNavItemComponent,
  NextNavItemComponent,
  navItemClassName = "",
  mediaContainerClassName = "",
  children,
  setShow,
}) {
  const srGalleryClassName = useStyleRewriter(
    baseGalleryClassName,
    galleryClassName
  );
  const srMediaContainerClassName = useStyleRewriter(
    baseMediaContainerClassName,
    mediaContainerClassName
  );

  const srMediaItemClassName = useStyleRewriter(
    baseMediaItemClassName,
    mediaItemClassName
  );
  const srImageItemClassName = useStyleRewriter(
    baseImageItemClassName,
    imageItemClassName
  );
  const srVideoItemClassName = useStyleRewriter(
    baseVideoItemClassName,
    videoItemClassName
  );

  const isDesktop = useBreakpoint(`md`);

  const [width, setWidth] = useState();

  useEffect(() => {
    if (typeof window === `undefined`) {
      return;
    }

    if (isDesktop) {
      setWidth(window.innerWidth * 0.8);
    } else {
      setWidth(window.innerWidth);
    }
  }, [isDesktop]);
  const ref = useRef(activeSlide);

  const [props, api] = useSprings(media.length, (i) => ({
    x: i === activeSlide ? 0 : width * (i - activeSlide),
    display: i === activeSlide ? `block` : `none`,
  }));

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], cancel }) => {
      if (active && Math.abs(mx) > width / 10) {
        ref.current = clamp(
          ref.current + (xDir > 0 ? -1 : 1),
          0,
          media.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < ref.current - 1 || i > ref.current + 1)
          return { display: `none` };
        const x = (i - ref.current) * width + (active ? mx : 0);
        setActiveSlide(ref.current);
        return { x, display: `block` };
      });
    }
  );

  const setSlidePosition = () =>
    api.start((i) => {
      if (i < ref.current - 1 || i > ref.current + 1)
        return { display: `none` };

      const x = i === ref.current ? 0 : width * (i - ref.current);
      return { x, display: `block` };
    });

  const mediaLength = media.length;
  useEffect(() => {
    if (ref.current !== activeSlide) {
      const next = activeSlide > ref.current;
      const dirMultiplier = next ? 1 : -1;
      for (
        let index = ref.current;
        next ? index <= activeSlide : index >= activeSlide;
        index += dirMultiplier
      ) {
        if (index >= 0 && index < mediaLength) {
          ref.current = index;
          setSlidePosition();
        }
      }
    }
  }, [activeSlide]);

  return (
    <div className={srGalleryClassName}>
      {mediaLength > 1 ? (
        typeof PreviousNavItemComponent === "function" ? (
          <PreviousNavItemComponent
            onClick={() => {
              ref.current = ref.current ? ref.current - 1 : 0;
              setActiveSlide(ref.current);
              setSlidePosition();
            }}
          />
        ) : (
          <NavItem
            next={false}
            navItemClassName={navItemClassName}
            onClick={() => {
              ref.current = ref.current ? ref.current - 1 : 0;
              setActiveSlide(ref.current);
              setSlidePosition();
            }}
          />
        )
      ) : null}

      <div className={srMediaContainerClassName}>
        {/* <div
        onClick={() => setShow(false)}
        className="w-full h-full absolute inset-0"
      /> */}
        {props.map((item, index) => {
          const { x, display } = item;

          const mediaObj = media[index];

          return (
            <animated.div
              {...bind()}
              key={`${mediaObj.id}-${index}`}
              className={srMediaItemClassName}
              style={{ display, x }}
            >
              {mediaObj.renderType === `image` ? (
                <img src={mediaObj.url} className={srImageItemClassName} />
              ) : (
                <video src={url} controls className={srVideoItemClassName} />
              )}
            </animated.div>
          );
        })}
      </div>
      {mediaLength > 1 ? (
        typeof NextNavItemComponent === "function" ? (
          <NextNavItemComponent
            onClick={() => {
              const lastItem = media.length - 1;
              ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
              setActiveSlide(ref.current);
              setSlidePosition();
            }}
          />
        ) : (
          <NavItem
            next={true}
            navItemClassName={navItemClassName}
            onClick={() => {
              const lastItem = media.length - 1;
              ref.current = ref.current < lastItem ? ref.current + 1 : lastItem;
              setActiveSlide(ref.current);
              setSlidePosition();
            }}
          />
        )
      ) : null}
    </div>
  );
}

export default ReactSpringGallery;

const clamp = (number, lower, upper) => {
  number = +number;
  lower = +lower;
  upper = +upper;
  lower = lower === lower ? lower : 0;
  upper = upper === upper ? upper : 0;
  if (number === number) {
    number = number <= upper ? number : upper;
    number = number >= lower ? number : lower;
  }
  return number;
};

// true = next, false = prev
const NavItem = ({ next, onClick, navItemClassName }) => {
  const srNavItemClassName = useStyleRewriter(
    baseNavItemClassName,
    navItemClassName
  );

  return (
    <div
      className={`z-10 absolute h-full top-0 ${
        next ? `right-2` : `left-2`
      }  flex items-center`}
    >
      <div onClick={onClick} className={srNavItemClassName}>
        <ChevronIcon className={`w-[26px] ${next ? `` : `rotate-180`}`} />
      </div>
    </div>
  );
};

const baseGalleryClassName = `
  @ht h-full
  @wh w-full
  @pn relative
`;

const baseMediaContainerClassName = `
  @ht h-full
  @wh w-full
  @pn relative
  @ow overflow-hidden
  @dy flex
  @jyc justify-center
  @ani items-center
`;

const baseMediaItemClassName = `
  @pn absolute
  @wh w-full
  @ht h-full
  @ow overflow-hidden
  @th touch-none
`;

const baseImageItemClassName = `
  @wh w-full
  @ht h-full
  @pre pointer-events-none
  @th touch-none
  @urs select-none
  @otf object-cover
`;

const baseVideoItemClassName = `
  @wh w-full
  @ht h-full
`;

const baseNavItemClassName = `
  @dy flex
  @jyc justify-center
  @ani items-center
  @wh w-[32px]
  @ht h-[50px]
  @brr rounded-full
  @cr cursor-pointer
  @bdc bg-black
  @bdo bg-opacity-30
  @ttc text-white`;

const ChevronIcon = ({ className }) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`fill-current ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.3923 17.9512L10.106 4.81458L11.4102 3.61536L26.9999 17.9506L26.8933 18.0487L26.894 18.0493L11.3042 32.3845L10 31.1853L24.3923 17.9512Z"
      />
    </svg>
  );
};
