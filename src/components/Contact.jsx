import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          {/* <ImageClipBox
            src="/img/circuit.png"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/smile.png"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          /> */}
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          <ImageClipBox
            src="/img/cyberhead.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="let&#39;s t<b>a</b>lK wh<b>a</b>t & h<b>o</b>w fast"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          {/* Email Button */}
          <a
            href="mailto:justinguerrerowork@gmail.com"
            className="mt-10 cursor-pointer"
          >
            <Button title="contact me" containerClass="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
