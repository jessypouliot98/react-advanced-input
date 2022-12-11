import {Input, InputProps} from "./Input";
import {createStorybookTemplate} from "../../utils/storybook";

export default {
  title: 'Input',
  component: Input,
}

const COMMON_PROPS = {
  id: 'example',
  name: 'example',
  placeholder: 'Insert value',
}

const Template = createStorybookTemplate<InputProps>((props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input {...props} />
    </form>
  )
})

export const Text = Template.createVariant({
  ...COMMON_PROPS,
  type: 'text',
});
export const String = Template.createVariant({
  ...COMMON_PROPS,
  type: 'string',
});
export const Password = Template.createVariant({
  ...COMMON_PROPS,
  type: 'password',
});
export const Email = Template.createVariant({
  ...COMMON_PROPS,
  type: 'email',
});
export const Url = Template.createVariant({
  ...COMMON_PROPS,
  type: 'url',
});
export const TextArea = Template.createVariant({
  ...COMMON_PROPS,
  type: 'textarea',
});
export const Number = Template.createVariant({
  ...COMMON_PROPS,
  type: 'number',
});
export const Float = Template.createVariant({
  ...COMMON_PROPS,
  type: 'float',
});
export const Int = Template.createVariant({
  ...COMMON_PROPS,
  type: 'int',
});
export const Uint = Template.createVariant({
  ...COMMON_PROPS,
  type: 'uint',
});
export const Select = Template.createVariant({
  ...COMMON_PROPS,
  type: 'select',
  nullable: true,
  options: [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
    { value: 'baz', label: 'Baz' },
  ],
});
export const Checkbox = Template.createVariant({
  ...COMMON_PROPS,
  type: 'checkbox',
  options: [
    { value: 'foo', label: 'Foo' },
    { value: 'bar', label: 'Bar' },
    { value: 'baz', label: 'Baz' },
  ],
});