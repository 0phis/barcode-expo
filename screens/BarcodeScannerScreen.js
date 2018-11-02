import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class BarcodeScannerScreen extends React.Component {
  static navigationOptions = {
    title: 'Barcode Scanner Screen',
  };

  state = {
    hasCameraPermission: null,
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ ...StyleSheet.absoluteFillObject }}
            >
              <View style={styles.layerTop} />
                <View style={styles.layerCenter}>
                  <View style={styles.layerLeft} />
                  <View style={styles.focused} />
                  <View style={styles.layerRight} />
                </View>
              <View style={styles.layerBottom} />
            </BarCodeScanner>
        }
      </View>
    );
  }
  // async componentWillMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({hasCameraPermission: status === 'granted'});
  //   }

  // render() {
  //   const { hasCameraPermission } = this.state;

  //   if (hasCameraPermission === null) {
  //     return <Text>Requesting for camera permission</Text>;
  //   }
  //   if (hasCameraPermission === false) {
  //     return <Text>No access to camera</Text>;
  //   }
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <BarCodeScanner
  //         onBarCodeScanned={this.handleBarCodeScanned}
  //         style={StyleSheet.absoluteFill}
  //       />
  //     </View>
  //   );
  // }

  // handleBarCodeScanned = ({ type, data }) => {
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // }
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row',
  },
  layerLeft: {
    flex: 1,
    
    backgroundColor: opacity
  },
  focused: {
    flex: 10,
    borderColor: '#00b4b6',
    borderWidth: 1,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});