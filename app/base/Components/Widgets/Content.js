/* @flow */
'use strict';

import React from 'react';
// import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'app/components/KeyboardAwareViews'
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';


export default class Content extends NativeBaseComponent {

	prepareRootProps() {

		var type = {
			backgroundColor: 'transparent',
			flex: 1
		}

		var defaultProps = {
			style: type
		}

		return computeProps(this.props, defaultProps);
	}

	render() {
		return(
			<KeyboardAwareScrollView
        {...this.prepareRootProps()}
        contentContainerStyle={{
          padding: (this.props.padder) ? this.getTheme().contentPadding : 0
        }} >
        {this.props.children}
      </KeyboardAwareScrollView>
		);
	}
}
