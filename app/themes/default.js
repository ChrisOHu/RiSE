
import {Platform} from 'react-native';

import colors from './colors'

export default {
    brandPrimary    : colors.cornflowerblue,
    brandInfo       : colors.royalblue,
    brandSuccess    : colors.springgreen,
    brandDanger     : colors.red,
    brandWarning    : colors.darkorange,
    brandSidebar    : colors.lightblack,

    brandSecondary  : colors.mediumseagreen, //new style

    inverseTextColor: colors.dark,
    textColor       : colors.white,
    foregroundColor : colors.white,

    rootFontSize    : 15,
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
    toolbarHeight: (Platform.OS === 'ios' ) ? 70 : 55,
    toolbarDefaultBg: colors.mediumseagreen,
    toolbarInverseBg: colors.lightblack,



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

    borderWidth: 1,

    get inputColor () { return this.textColor; },
    get inputColorPlaceholder () { return 'rgba(255, 255, 255, 1.0)'; },

    inputBorderColor: "#fff",
    inputHeightBase: 40,
    inputGroupMarginBottom: 10,
    inputPaddingLeft: 5,
    get inputPaddingLeftIcon () { return this.inputPaddingLeft* 8; },

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
