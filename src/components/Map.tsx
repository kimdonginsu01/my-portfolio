import React from "react";

const Map = () => {
  return (
    <div className="relative text-center w-full h-[400px] dark:invert dark:grayscale invert-0 grayscale-[0.8]">
      <div className="overflow-hidden !bg-none h-full w-full">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=mitec technology&t=&z=16&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
};

export default Map;
