import * as React from "react";

const LogoSVG = (props: React.SVGProps<SVGSVGElement>) => {
  const length = 19719.580774788763;
  const path =
    "M132 1352s698.406-279.47 768-704c69.594-424.531-510.621 979.12 343-42 853.62-1021.116-595.375 214.675-336 843 259.38 628.32 909.3-842.884 1067-1210s-749.09 904.71-661 1237 797.74-777.696 1008-1187-960.71 933.75-619 1138 561.16-831.044-272-597c-833.164 234.04 2344.2-186.241 920-726-220.63-83.617-873.46-47.804-1299 154-2175.32 1031.61-320.059 1568.61 1484 937";

  return (
    <svg
      className="logo-svg-wrapper"
      viewBox="0 0 2802 1674"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d={path}
        id="logo-svg-glow-cyan"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={21}
        strokeDasharray={length}
        strokeDashoffset={length}
      />
      <path
        d={path}
        id="logo-svg-glow-magenta"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={21}
        strokeDasharray={length}
        strokeDashoffset={length}
      />
      <path
        d={path}
        id="logo-svg"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={21}
      />
      <path
        d={path}
        id="logo-svg-trace-cyan"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={21}
        strokeDasharray={length}
        strokeDashoffset={length}
      />
      <path
        d={path}
        id="logo-svg-treace-magenta"
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={21}
        strokeDasharray={length}
        strokeDashoffset={length}
      />
    </svg>
  );
};

export default LogoSVG;
