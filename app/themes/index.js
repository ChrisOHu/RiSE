export { default as lightTheme } from './light'
export { default as darkTheme }  from './dark'
export { defualt as colors } from './colors'

export function getTheme(plainThemeWithoutGetters) {
  const T = plainThemeWithoutGetters

  const fullTheme = {
    // Badge
    badgeBg                 : T.badgeBg,
    badgeColor              : T.badgeColor,

    // Button
    btnFontFamily           : T.btnFontFamily,
    btnDisabledBg           : T.btnDisabledBg,
    btnDisabledClr          : T.btnDisabledClr,
    buttonPadding           : T.buttonPadding,

    // Card
    cardDefaultBg           : T.cardDefaultBg,

    // Check Box
    checkboxBgColor         : T.checkboxBgColor,
    checkboxSize            : T.checkboxSize,
    checkboxTickColor       : T.checkboxTickColor,

    // Color
    brandPrimary            : T.brandPrimary,
    brandInfo               : T.brandInfo,
    brandSuccess            : T.brandSuccess,
    brandDanger             : T.brandDanger,
    brandWarning            : T.brandWarning,
    brandSidebar            : T.brandSidebar,

    // Font
    fontFamily              : T.fontFamily,
    fontSizeBase            : T.fontSizeBase,

    // Footer
    footerHeight            : T.footerHeight,
    footerDefaultBg         : T.footerDefaultBg,

    //FooterTab
    tabBarTextColor         : T.tabBarTextColor,
    tabBarActiveTextColor   : T.tabBarActiveTextColor,
    tabActiveBgColor        : T.tabActiveBgColor,

    // Header
    iosToolbarBtnColor      : T.iosToolbarBtnColor,
    toolbarDefaultBg        : T.toolbarDefaultBg,
    toolbarHeight           : T.toolbarHeight,
    toolbarIconSize         : T.toolbarIconSize,
    toolbarInputColor       : T.toolbarInputColor,
    toolbarInverseBg        : T.toolbarInverseBg,
    toolbarTextColor        : T.toolbarTextColor,

    // Icon
    iconFamily              : T.iconFamily,
    iconFontSize            : T.iconFontSize,
    iconMargin              : T.iconMargin,

    // InputGroup
    inputFontSize           : T.inputFontSize,
    inputBorderColor        : T.inputBorderColor,
    inputSuccessBorderColor : T.inputSuccessBorderColor,
    inputErrorBorderColor   : T.inputErrorBorderColor,
    inputGroupMarginBottom  : T.inputGroupMarginBottom,
    inputHeightBase         : T.inputHeightBase,
    inputPaddingLeft        : T.inputPaddingLeft,

    // Line Height
    btnLineHeight           : T.btnLineHeight,
    lineHeightH1            : T.lineHeightH1,
    lineHeightH2            : T.lineHeightH2,
    lineHeightH3            : T.lineHeightH3,
    iconLineHeight          : T.iconLineHeight,
    lineHeight              : T.lineHeight,

    // List
    listBorderColor         : T.listBorderColor,
    listDividerBg           : T.listDividerBg,
    listItemHeight          : T.listItemHeight,
    listItemPadding         : T.listItemPadding,
    listNoteColor           : T.listNoteColor,
    listNoteSize            : T.listNoteSize,

    // Progress Bar
    defaultProgressColor    : T.defaultProgressColor,
    inverseProgressColor    : T.inverseProgressColor,

    // Radio Button
    radioBtnSize            : T.radioBtnSize,
    radioColor              : T.radioColor,

    // Spinner
    defaultSpinnerColor     : T.defaultSpinnerColor,
    inverseSpinnerColor     : T.inverseSpinnerColor,

    // Tabs
    tabBgColor              : T.tabBgColor,
    tabFontSize             : T.tabFontSize,
    tabTextColor            : T.tabTextColor,

    // Text
    textColor               : T.textColor,
    inverseTextColor        : T.inverseTextColor,

    // Title
    titleFontSize           : T.titleFontSize,
    subTitleFontSize        : T.subTitleFontSize,
    subtitleColor           : T.subtitleColor,

    // Other
    borderRadiusBase        : T.borderRadiusBase,
    borderWidth             : T.borderWidth,
    contentPadding          : T.contentPadding,

    dropdownBg              : T.dropdownBg,
    dropdownLinkColor       : T.dropdownLinkColor,
    inputLineHeight         : T.inputLineHeight,
    jumbotronBg             : T.jumbotronBg,
    jumbotronPadding        : T.jumbotronPadding,

    // ========= Here goes the getters

    get btnPrimaryBg()          { return this.brandPrimary                                                    } ,
    get btnPrimaryColor()       { return this.inverseTextColor                                                } ,
    get btnInfoBg()             { return this.brandInfo                                                       } ,
    get btnInfoColor()          { return this.inverseTextColor                                                } ,
    get btnSuccessBg()          { return this.brandSuccess                                                    } ,
    get btnSuccessColor()       { return this.inverseTextColor                                                } ,
    get btnDangerBg()           { return this.brandDanger                                                     } ,
    get btnDangerColor()        { return this.inverseTextColor                                                } ,
    get btnWarningBg()          { return this.brandWarning                                                    } ,
    get btnWarningColor()       { return this.inverseTextColor                                                } ,
    get btnTextSize()           { return (Platform.OS==='ios') ? this.fontSizeBase* 1.1 : this.fontSizeBase-1 } ,
    get btnTextSizeLarge()      { return this.fontSizeBase * 1.5                                              } ,
    get btnTextSizeSmall()      { return this.fontSizeBase * .8                                               } ,
    get borderRadiusLarge()     { return this.fontSizeBase * 3.8                                              } ,
    get iconSizeLarge()         { return this.iconFontSize * 1.5                                              } ,
    get iconSizeSmall()         { return this.iconFontSize * .6                                               } ,
    get fontSizeH1()            { return this.fontSizeBase * 1.8                                              } ,
    get fontSizeH2()            { return this.fontSizeBase * 1.6                                              } ,
    get fontSizeH3()            { return this.fontSizeBase * 1.4                                              } ,
    get statusBarColor()        { return Color(this.toolbarDefaultBg).darken(0.2).hexString()                 } ,
    get inputColor()            { return this.textColor                                                       } ,
    get inputColorPlaceholder() { return '#575757'                                                            } ,
    get inputPaddingLeftIcon()  { return this.inputPaddingLeft * 8                                            } ,
    get radioSelectedColor()    { return Color(this.radioColor).darken(0.2).hexString()                       } ,
    get darkenHeader()          { return Color(this.tabBgColor).darken(0.03).hexString()                      }
  }

  return fullTheme
}

