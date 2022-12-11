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
    <form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.target as any);
      console.log(Object.fromEntries(Array.from(formData.entries())));
    }}>
      <Input {...props} />
    </form>
  )
})

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