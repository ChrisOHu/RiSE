import { Platform } from 'react-native'
import theme from 'themes'

export default {
  /** */
  h1: {
    color: theme.textColor,
    fontSize: theme.fontSizeH1
  },
  h2: {
    color: theme.textColor,
    fontSize: theme.fontSizeH2
  },
  h3: {
    color: theme.textColor,
    fontSize: theme.fontSizeH3
  },
  /** Text */
  text: {
		color: theme.foregroundColor,
		fontSize: theme.fontSizeBase,
  },
  title: {
    color: theme.foregroundColor,
    fontSize: theme.titleFontSize,
    fontWeight: "500",
    alignSelf: 'center'
  },
  /** Icon */
  icon: {
    fontSize: theme.iconFontSize,
    color: theme.foregroundColor
  },
  /** Header */
  header: {
    root: {
      backgroundColor: theme.toolbarDefaultBg,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      paddingTop: (Platform.OS === 'ios' ) ? 25 : 15,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      height: theme.toolbarHeight
    },
    left: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginLeft: -14
    },
    center: {
      flex: 3,
      alignSelf: 'center'
    },
    right: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginRight: -14
    }
  },
  /** Footer */
  footer: {
    root: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      height: theme.footerHeight
    },
    left: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      marginLeft: -14
    },
    center: {
      flex: 3,
      alignSelf: 'center'
    },
    right: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginRight: -14
    }
  }
}
