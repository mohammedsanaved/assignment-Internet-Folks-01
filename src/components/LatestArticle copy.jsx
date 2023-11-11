import { useMemo } from "react";
import { Button, IconButton } from "@chakra-ui/react";

const LatestArticle = ({
  imageAltText,
  recipeTitle,
  snackImageUrl,
  imageDimensions,
  recipeImageUrl,
  imageDimensionsAltText,
  propLeft,
}) => {
  const groupSectionStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <section
      className="absolute top-[1614px] left-[108px] w-[1225px] h-[679px] text-left text-2xl text-primary font-poppins"
      style={groupSectionStyle}
    >
      <h1 className="m-0 absolute top-[0px] left-[0px] text-37xl tracking-[0.04em] leading-[42px] font-semibold font-source-sans-pro inline-block w-[461px] h-[84px]">
        Latest Articles
      </h1>
      <div className="absolute top-[125px] left-[0px] w-[381px] h-[554px]">
        <div className="absolute top-[0px] left-[0px] rounded-[20.94px] bg-white box-border w-[381px] h-[554px] border-[1.4px] border-solid border-lightsteelblue-200" />
        <img
          className="absolute top-[27px] left-[27px] rounded-2xl w-[326px] h-[257px] object-cover"
          alt=""
          src={imageAltText}
        />
        <div className="absolute top-[319.5px] left-[43.2px] w-[295px] h-[194.5px] flex flex-col items-start justify-start gap-[27.41px]">
          <div className="h-[125px] flex flex-col items-start justify-start gap-[14px]">
            <h3 className="m-0 relative text-inherit leading-[27px] font-bold font-inherit">
              {recipeTitle}
            </h3>
            <div className="relative text-mini tracking-[-0.02em] leading-[27px] font-open-sans text-body inline-block w-[295px]">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
          </div>
          <Button variant="solid" w="131px" colorScheme="teal">
            Read More
          </Button>
        </div>
      </div>
      <div className="absolute top-[125px] left-[422px] w-[381px] h-[554px]">
        <div className="absolute top-[0px] left-[0px] w-[381px] h-[554px]">
          <div className="absolute top-[0px] left-[0px] rounded-[20.94px] bg-white box-border w-[381px] h-[554px] border-[1.4px] border-solid border-lightsteelblue-200" />
          <div className="absolute top-[319.5px] left-[43.2px] flex flex-col items-start justify-start gap-[27.41px]">
            <div className="flex flex-col items-start justify-start gap-[13.7px]">
              <h3 className="m-0 relative text-inherit leading-[27px] font-bold font-inherit">
                {snackImageUrl}
              </h3>
              <div className="relative text-mini tracking-[-0.02em] leading-[27px] font-open-sans text-body inline-block w-[295px]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </div>
            </div>
            <Button variant="solid" w="131px" colorScheme="teal">
              Read More
            </Button>
          </div>
        </div>
        <img
          className="absolute top-[27px] left-[27px] rounded-2xl w-[326px] h-[258px] object-cover"
          alt=""
          src={imageDimensions}
        />
      </div>
      <div className="absolute top-[125px] left-[844px] w-[381px] h-[554px]">
        <div className="absolute top-[0px] left-[0px] w-[381px] h-[554px]">
          <div className="absolute top-[0px] left-[0px] rounded-[20.94px] bg-white box-border w-[381px] h-[554px] border-[1.4px] border-solid border-lightsteelblue-200" />
          <div className="absolute top-[319.5px] left-[43.2px] flex flex-col items-start justify-start gap-[27.41px]">
            <div className="flex flex-col items-start justify-start gap-[13.7px]">
              <h3 className="m-0 relative text-inherit leading-[27px] font-bold font-inherit">
                {recipeImageUrl}
              </h3>
              <div className="relative text-mini tracking-[-0.02em] leading-[27px] font-open-sans text-body inline-block w-[295px]">
                PLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard...
              </div>
            </div>
            <Button variant="solid" colorScheme="teal">
              Read More
            </Button>
          </div>
        </div>
        <img
          className="absolute top-[27px] left-[27px] rounded-2xl w-[326px] h-[258px] object-cover"
          alt=""
          src={imageDimensionsAltText}
        />
      </div>
    </section>
  );
};

export default LatestArticle;
