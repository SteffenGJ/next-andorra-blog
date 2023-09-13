import Image from "next/image";
import { register } from "swiper/element/bundle";
import CloseIcon from "@mui/icons-material/Close";

register();

const ImageGallery = ({ closer, urls }) => {
  return (
    <div className="bg-black w-screen h-screen popup-content flex flex-col items-end">
      <button onClick={closer} className="text-white p-4">
        <CloseIcon fontSize="medium" />
      </button>
      <div className="h-full w-full">
        <swiper-container
          slides-per-view="1"
          navigation="true"
          pagination="true"
        >
          {urls.map((url) => {
            return (
              <swiper-slide key={url}>
                <div className="bg-black h-screen ">
                  <Image
                    className="object-contain pb-20"
                    alt="Blog image"
                    fill={true}
                    src={url}
                  />
                </div>
              </swiper-slide>
            );
          })}
          {/* <swiper-slide>
            <div className="w-screen h-screen bg-black">
              <Image
                className="object-contain"
                alt="dfjasl"
                fill={true}
                src="https://images.unsplash.com/photo-1581430071803-e50df4dd3434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJhcmNlbG9uYSUyMGFpcnBvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="w-screen h-screen bg-black">
              <Image
                className="object-contain"
                alt="dfjasl"
                fill={true}
                src="https://images.unsplash.com/photo-1514850453958-d39cf3ebf5ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhcmNlbG9uYSUyMGFpcnBvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              />
            </div>
          </swiper-slide> */}
        </swiper-container>
      </div>
    </div>
  );
};

export default ImageGallery;
