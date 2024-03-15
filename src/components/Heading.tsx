import { ReactElement } from "react";
import Tagline from "./Tagline";

interface HeadingProps {
  className: string;
  title?: string;
  text?: string;
  tag?: ReactElement;
}

const Heading = (props: HeadingProps) => {
  const { className, tag, title, text } = props;

  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
			{tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
			{title && <h2 className="h2">{title}</h2>}
			{text && <p className="body-2 m-4 text-n-4">{text}</p>}
		</div>
  );
};

export default Heading;
