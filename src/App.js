import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {random, hexToRgb, distance} from './utils';
import {Form, ColorInput, Button} from './components/Form';
import {Title, Paragraph} from './components/Typography';
import Color from './components/Color';
import Score from './components/Score';
import './App.css';

const guessingColor = random();

function App() {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [score, setScore] = useState();

  const {handleSubmit, register} = useForm();

  const _handleSubmit = () => {
    const d = distance(guessingColor, hexToRgb(selectedColor));
    setScore((100-d).toFixed(2));
  }

  const handleOnChange = ({target}) => setSelectedColor(target.value);
  const colorValidation = {required: true};
  
  return (
    <div className="App">
      <Title tag="h1">Color Match!</Title>
      <Form className="form-container" onSubmit={handleSubmit(_handleSubmit)}>
        <div className="colors-container">
          <Color color={guessingColor} isRGB className="box guessing-color-box" />
          <Color color={selectedColor} className="box">
            <ColorInput ref={register(colorValidation)} className="hidden" name="userColor" id="color" onChange={handleOnChange} />
          </Color>
        </div>
        <Paragraph>Try to match the colors as fast and accurate as you can!</Paragraph>
        <Button className="button" type="submit">That's the color!</Button>
      </Form>
      <Score className="score" value={score} />
    </div>
  );
}

export default App;
