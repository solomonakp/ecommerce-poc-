import {useSelector} from "react-redux";
import {RootState} from "../redux/reducers/index";

interface Theme {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    hrColor: string;
    primaryLight: string;
    secondaryDark: string;
  };
  spacing: {
    sectionSpace: string;
    blogCard: string;
    blogCardSide: string;
  };
  size: {
    mainHeading: string;
    sectionHeading: string;
    paragraph: string;
    textHeading: string;
  };
  border: {
    cartBorder: string;
  };
  shadow: {
    contact: string;
  };
  effects: {
    allIn: (duration: number) => string;
    allOut: (duration: number) => string;
  };
  breakPoints: {
    minSm: string;
    minMd: string;
    minLg: string;
    minXl: string;
    minXxL: string;
    maxXs: string;
    maxSm: string;
    maxMd: string;
    maxLg: string;
    maxXl: string;
  };
  // [key: string]: string | {} | ((param: string) => string);
}

const useTheme = () => {
  const dark = useSelector((state: RootState) => state.ui.isDark);

  const theme: Theme = {
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      tertiary: "#001524",
      hrColor: "#E4E4E4",
      primaryLight: "#2c2c2c",
      secondaryDark: "#cccccc",
    },
    spacing: {
      sectionSpace: "11rem",
      blogCard: "7.188rem",
      blogCardSide: "5.25rem",
    },
    size: {
      mainHeading: "4rem",
      sectionHeading: "2.5rem",
      paragraph: "1rem",
      textHeading: "1.5rem",
    },
    border: {
      cartBorder: "4px solid #E4E4E4",
    },
    shadow: {
      contact: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    },
    effects: {
      allIn: (duration: number): string => {
        return `all ${duration}ms ease-in`;
      },
      allOut: (duration: number): string => {
        return `all ${duration}ms ease-out`;
      },
    },
    breakPoints: {
      minSm: "min-width: 576px",
      minMd: "min-width: 768px",
      minLg: "min-width: 992px",
      minXl: "min-width: 1200px",
      minXxL: "min-width: 1400px",
      maxXs: "max-width: 575.98px",
      maxSm: "max-width: 767.98px",
      maxMd: "max-width: 991.98px",
      maxLg: "max-width: 1199.98px",
      maxXl: "max-width: 1399.98px",
    },
  };

  return theme;
};

export default useTheme;
