"use client"

import { useEffect } from 'react';

const WidgetScript = () => {
  useEffect(() => {
    const config = {
      phone: "971557746715",
      call: "Message Us",
      position: "ww-right",
      size: "ww-normal",
      text: "Hi, I want to inquire about DAMAC Violet.",
      type: "ww-extended",
      brand: "",
      subtitle: "",
      welcome: ""
    };

    const proto = document.location.protocol;
    const host = "cloudfront.net";
    const url = proto + "//d3kzab8jj16n2f." + host;
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.async = true;
    script.src = url + "/v2/main.js";

    script.onload = function () {
      tmWidgetInit(config);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything in the DOM
};

export default WidgetScript;
