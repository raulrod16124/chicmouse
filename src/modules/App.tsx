import {useContext} from 'react';
import {Main, DefaultBackground} from './App.styles';
import {Root} from 'routes/Root';
import {LanguageContext} from 'context/LanguageContext';
import {LoadingScreen} from 'common/LoadingScreen';

function App() {
  const {language} = useContext(LanguageContext);

  if (!language) {
    return <LoadingScreen />;
  }

  return (
    <>
      <DefaultBackground />
      <Main data-testid="main-app-id">
        <Root />
      </Main>
    </>
  );
}

export default App;
