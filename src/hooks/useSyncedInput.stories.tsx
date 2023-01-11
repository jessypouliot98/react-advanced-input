import React, {useRef, useState} from "react";
import {useSyncedInput} from "./useSyncedInput";
import {Input} from "../components";

const slugify = (v: string) => v.replace(/\s/g, '_');

export const Test: React.FC = () => {
  const defaultValues = { primary: '', secondary: '' };
  const [form, setForm] = useState(defaultValues);

  const slugUncontrolledRef = useRef<HTMLInputElement | null>(null);
  const {
    onPrimaryInputChange: onChangeUncontrolledPrimary,
    onSecondaryInputChange: onChangeUncontrolledSecondary
  } = useSyncedInput({
    defaultValues,
    transform: slugify,
    setSecondaryValue: (v) => {
      if (slugUncontrolledRef.current) {
        slugUncontrolledRef.current.value = v;
      }
    }
  });

  const {
    onPrimaryInputChange: onChangeControlledPrimary,
    onSecondaryInputChange: onChangeControlledSecondary
  } = useSyncedInput({
    defaultValues,
    transform: slugify,
    setSecondaryValue: (v) => {
      setForm((prevForm) => ({ ...prevForm, secondary: v }));
    }
  });

  return (
    <form>
      <div>
        <h2>Uncontrolled Sync</h2>
        <Input type="text" defaultValue={defaultValues.primary} placeholder="main" onChange={onChangeUncontrolledPrimary} />
        <Input ref={slugUncontrolledRef} type="text" defaultValue={defaultValues.secondary} placeholder="slug" onChange={onChangeUncontrolledSecondary} />
      </div>
      <div>
        <h2>Controlled Sync</h2>
        <Input type="text" value={form.primary} placeholder="main" onChange={(e) => {
          onChangeControlledPrimary(e);
          setForm((prevForm) => ({ ...prevForm, primary: e.target.value }))
        }} />
        <Input type="text" value={form.secondary} placeholder="slug" onChange={(e) => {
          onChangeControlledSecondary(e);
          setForm((prevForm) => ({ ...prevForm, secondary: slugify(e.target.value) }))
        }} />
      </div>
    </form>
  )
}

export default {
  title: 'hooks/UseSyncedInput',
  component: Test,
}