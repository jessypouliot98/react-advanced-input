# React Advanced Input

`react-advanced-input` is an input library aiming improve on the base HTML input's by extending on them and bringing them together with extra features.

## Why should you use React Advanced Input ?

`react-advanced-input` is mostly a 1:1 mapping of `input`/`textarea`/`select` to `Input`, but with extra features like simplifying select's and making textarea part of `Input`.

### The future of React Advanced Input

- add `onChangeValue` on all input's to have a normalized version of the changed value instead of passing by the event and figuring things out
- add full new custom inputs, some in mind: "boolean", "int", etc.
- implement a way to extend `<Input>` type's with extra types with first or third-party addon packages

## Installation

Npm
```
npm i --save react-advanced-input
```
Yarn
```
yarn add react-advanced-input
```

## Usage

Importing
```javascript
import Input from 'react-advanced-input'
// or import { Input } from 'react-advanced-input'
```

Example usage
```javascript
const App = () => {
  const [form, setForm] = useState({
    text: '',
    number: 0,
    textarea: '',
    select: '',
  });
  
  const handleChange = (e) => { 
    setForm((prevForm) => ({ 
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  }
  
  return (
    <>
      <Input
        type="text"
        name="text"
        value={form.text}
        onChange={handleChange}
      />
      <Input
        type="number"
        name="number"
        value={form.number}
        onChange={handleChange}
      />
      <Input
        type="textarea"
        name="textarea"
        value={form.textarea}
        onChange={handleChange}
      />
      <Input
        type="select"
        name="select"
        value={form.select}
        options={[
          { value: 'foo' },
          { value: 'bar', label: 'Ipsum' },
          { value: 'baz', label: 'Baz' },
        ]}
        onChange={handleChange}
      />
    </>
  );
};
```