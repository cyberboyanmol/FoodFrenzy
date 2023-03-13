/**
 *
 * @format
 */
import React from 'react';
import {PortalProvider} from '@gorhom/portal';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './src/navigation';

const App = () => {
  // const [dataLoaded, setDataLoaded] = React.useState(false);
  // React.useEffect(() => {
  //   const rehydrate = async () => {
  //     setTimeout(() => {
  //       setDataLoaded(true);
  //     }, 2000);
  //   };
  //   rehydrate();
  // }, []);
  return (
    <SafeAreaProvider>
      <PortalProvider>
        <AppNavigation />
        {/* {dataLoaded ? <AppNavigation /> : <Loading />} */}
      </PortalProvider>
    </SafeAreaProvider>
  );
};

export default App;
