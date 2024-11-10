import React from 'react';
import DisplayInput from './DisplayInput';
import Change from './Change';
import LiveUpdate from './LiveUpdate';
import Submit from './Submit';
import ChangeBackgroundColor from './ChangeBackgroundColor';
import ToggleVisibilityText from './ToggleVisibilityText';
import ClickCounter from './ClickCounter';
import AddList from './AddList';
import Focus from './Focus';
import ChangeText from './ChangeText';
import OnOff from './OnOff';


function App() {
  return (
    <div className="App">
      <DisplayInput />
      <Change />
      <LiveUpdate />
      <Submit />
      <ChangeBackgroundColor />
      <ToggleVisibilityText />
      <ClickCounter />
      <AddList />
      <Focus />
      <ChangeText />
      <OnOff />
    </div>
  );
}

export default App;
