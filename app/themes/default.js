
import {
  Platform,
  PixelRatio
} from 'react-native'

import colors from './colors'

const NAV_BAR_HEIGHT = 44;
const STATUS_BAR_HEIGHT = Platform.OS === 'android' ? 0 : 20;
const NAV_HEIGHT = NAV_BAR_HEIGHT + STATUS_BAR_HEIGHT;

export default {
    brandPrimary    : colors.tomato,
    brandInfo       : colors.royalblue,
    brandSuccess    : colors.springgreen,
    brandDanger     : colors.red,
    brandWarning    : colors.darkorange,
    brandSidebar    : colors.lightblack,

    brandSecondary  : colors.mediumseagreen, //new style

    inverseTextColor: colors.white,
    textColor       : colors.black,
    foregroundColor : colors.white,

    rootFontSize    : 15,
    fontSizeBase    : 15,
    titleFontSize   : 18,

    get fontSizeH1 () { return this.rootFontSize*1.8; },
    get fontSizeH2 () { return this.rootFontSize* 1.6; },
    get fontSizeH3 () { return this.rootFontSize* 1.4; },
    get btnTextSize () { return this.rootFontSize* 1.1; },
    get btnTextSizeLarge () { return this.rootFontSize* 1.5; },
    get btnTextSizeSmall () { return this.rootFontSize* .8; },
    get iconSizeLarge () { return this.iconFontSize* 1.4; },
    get iconSizeSmall () { return this.iconFontSize* .6; },

    borderRadiusBase: 4,

    get borderRadiusLarge () { return this.rootFontSize* 3.8; },

    footerHeight: 55,
    statusBarHeight: STATUS_BAR_HEIGHT,
    navBarHeight: NAV_BAR_HEIGHT,
    toolbarHeight: NAV_HEIGHT,
    toolbarDefaultBg: colors.mediumseagreen,
    toolbarInverseBg: colors.lightblack,
    toolbarBorderColor: '#E2E2E2',



    get btnPrimaryBg () { return this.brandPrimary; },
    get btnPrimaryColor () { return this.inverseTextColor; },
    get btnSuccessBg () { return this.brandSuccess; },
    get btnSuccessColor () { return this.inverseTextColor; },
    get btnDangerBg () { return this.brandDanger; },
    get btnDangerColor () { return this.inverseTextColor; },
    get btnInfoBg () { return this.brandInfo; },
    get btnInfoColor () { return this.inverseTextColor; },
    get btnWarningBg () { return this.brandWarning; },
    get btnWarningColor () { return this.inverseTextColor; },

    borderWidth: 1 / PixelRatio.get(),
    lineWidth: 1 / PixelRatio.get(),
    lineColor: 'rgba(0, 0, 0, 1)',

    get inputColor () { return this.textColor; },
    get inputColorPlaceholder () { return colors.grey; },

    inputBorderColor: "#fff",
    inputHeightBase: 40,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () { return this.inputPaddingLeft* 8; },

    checkboxBgColor: '#039BE5',
    checkboxTickColor: '#fff',
    checkboxSize: 23,

    dropdownBg: colors.black,
    dropdownLinkColor: "#414142",

    jumbotronPadding: 30,
    jumbotronBg: "#C9C9CE",

    contentPadding: 10,

    listBorderColor: "rgba(181, 181, 181, 0.34)",
    listDividerBg: "#f2f2f2",
    listItemPadding: 15,
    listNoteColor: "#ddd",
    listBg: "#fff",

    iconFontSize: 37,

    badgeColor: "#fff",
    badgeBg: "#ED1727",

    lineHeight: 21,

    defaultSpinnerColor: "#45D56E",
    inverseSpinnerColor: "#1A191B",

    defaultProgressColor: "#E4202D",
    inverseProgressColor: "#1A191B"
}
