import { img, Links } from "../utils/assets";

// eslint-disable-next-line react/prop-types
function ContactInfo({ iconSrc, contactText, altText }) {
  return (
    <div className="flex gap-5 mt-8 whitespace-nowrap">
      <img
        loading="lazy"
        src={iconSrc}
        alt={altText}
        className="shrink-0 aspect-square w-[30px]"
      />
      <div>{contactText}</div>
    </div>
  );
}

function ContactUs() {
  return (
    <section className="flex flex-col items-center pt-20 bg-white">
      <div className="mt-28 w-full max-w-[1160px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-stone-600 max-md:mt-10">
              <h2 className="text-6xl font-extrabold text-center max-md:text-4xl">
                Liên hệ
              </h2>
              <div className="flex flex-col mt-11 text-2xl max-md:mt-10 ">
                <ContactInfo
                className="bg-blue-200 p-4 rounded-lg mb-4"
                  iconSrc={img.phoneIcon}
                  contactText="08687989353"
                  altText="Phone"
                />
                <ContactInfo
                className="bg-blue-200 p-4 rounded-lg mb-4"
                  iconSrc={img.emailIcon}
                  contactText="piorneercrafts@gmail.com"
                  altText="Email"
                />
                <ContactInfo
                className="bg-blue-200 p-4 rounded-lg mb-4"
                  iconSrc={img.locationIcon}
                  contactText="FPT University"
                  altText="Location"
                />
                <a href={Links.facebook} target="_blank" >
                  <ContactInfo
                  
                    iconSrc={img.faceContact}
                    contactText="Pioneer Crafts"
                    altText="Facebook"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={img.contactImg}
              alt=""
              className="grow w-full aspect-[1.67] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
