import {Input, InputProps} from "./Input";
import {createStorybookTemplate} from "../../utils/storybook";

export default {
  title: 'Input',
  component: Input,
}

const COMMON_PROPS = {
  id: 'example',
  name: 'example',
  placeholder: 'Placeholder..',
}

const BASE_OPTIONS = [
  { value: 'foo', label: 'Foo' },
  { value: 'bar', label: 'Bar' },
  { value: 'baz', label: 'Baz' },
];

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
export const Select = Template.createVariant({
  ...COMMON_PROPS,
  type: 'select',
  options: BASE_OPTIONS,
});
export const SelectNullable = Template.createVariant({
  ...COMMON_PROPS,
  type: 'select',
  nullable: true,
  options: BASE_OPTIONS,
});
export const File = Template.createVariant({
  ...COMMON_PROPS,
  type: 'file',
})