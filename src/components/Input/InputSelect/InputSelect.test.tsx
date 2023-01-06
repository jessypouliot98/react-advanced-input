import {queryHelpers, render} from "@testing-library/react";
import {InputSelect, NULL_OPTION_VALUE} from "./InputSelect";
import React from "react";
import {Option} from "../types";

describe('<InputSelect>', () => {
  const optionA = { value: 'a' } satisfies Option;
  const optionB = { value: 'b', label: 'Foo' } satisfies Option;

  describe('placeholder option', () => {
    it('should show when placeholder is defined', () => {
      const view = render(<InputSelect type="select" placeholder="Foo Bar" />);
      expect(queryHelpers.queryByAttribute('data-option-placeholder', view.container, 'true')?.tagName).toBe('OPTION');
    });

    it.each([false, true])('should show when nullable is defined and %s', (nullable) => {
      const view = render(<InputSelect type="select" nullable={nullable} />);
      expect(queryHelpers.queryByAttribute('data-option-placeholder', view.container, 'true')?.tagName).toBe('OPTION');
    });
  });

  describe('options', () => {
    const optionResultMap = new Map<string, { option: Option, label: string }>([
      [optionA.value, { option: optionA, label: optionA.value }],
      [optionB.value, { option: optionB, label: optionB.label }],
    ]);
    const options = [optionA, optionB];

    it('should render option appropriately', () => {
      const view = render(<InputSelect type="select" options={options} />);
      // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
      const renderedOptions = view.container.querySelectorAll('option');

      expect(renderedOptions).toHaveLength(options.length);
      renderedOptions.forEach((renderedOption) => {
        const expectedLabel = optionResultMap.get(renderedOption.value);
        expect(expectedLabel).toBeDefined();
        expect(renderedOption.text).toBe(expectedLabel!.label);
      });
    });
  });

  describe('defaultValue', () => {
    // Test skipped because defaultValue is not being applied correctly in testing-library
    it.skip('should be equal to NULL_OPTION_VALUE when value & defaultValue is not defined', () => {
      const view = render(<InputSelect type="select" />);
      // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
      const selectElement = view.container.querySelector('select')!;
      expect(selectElement.selectedIndex).toBe(0);
      expect(selectElement.value).toBe(NULL_OPTION_VALUE);
    });
  });
});