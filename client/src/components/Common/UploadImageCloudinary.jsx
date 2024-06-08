import { useRef, useEffect, useState } from "react";

const UploadImageCloudinary = ({
  folderName,
  setImage,
  isMultiple,

  buttonName,

  isDisabled,
  isDisplayImageName,
}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  const [imageName, setImageName] = useState("");

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dvl7qms1h",
        uploadPreset: "hr7fqe1y",
        // select file and url
        sources: ["local", "url"],
        // add one image limit
        multiple: isMultiple,
        // maxFiles: limit,
        // upload folder
        folder: folderName,
        // crop image
        cropping: true,
        croppingAspectRatio: 1,
        croppingCoordinatesMode: "custom",
        croppingShowDimensions: true,
        croppingDefaultSelectionRatio: 0.75,
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result);
          setImage(result.info.secure_url); // Use result.info.secure_url
          setImageName(result.info.original_filename);
        }
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <button
        disabled={isDisabled ? isDisabled : false}
        onClick={() => widgetRef.current.open()}
      >
        {buttonName ? buttonName : "upload"}
      </button>
      <p
        style={{
          display: isDisplayImageName ? "flex" : "none",
          marginLeft: "5px",
        }}
      >
        {imageName}
      </p>
    </div>
  );
};

export default UploadImageCloudinary;
