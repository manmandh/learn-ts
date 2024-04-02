// Improving Type Inference for Tuples
{
  function tuple<T extends unknown[]
  >(
    ...ts: T
  ): T {
    return ts
  }
  let a = tuple(1, true) // [number, boolean]
  console.log(a);
}

// User-Defined Type Guards
{
  type LegacyDialog = {
    legacyProp: string;
  }

  type Dialog = {
    commonProp: number;
  }

  function isLegacyDialog(
    dialog: LegacyDialog | Dialog
  ): dialog is LegacyDialog {
    return 'legacyProp' in dialog;
  }

  function isString(a: unknown): a is string {
    return typeof a === 'string';
  }

  function parseInput(input: string | number) {
    let formattedInput: string;

    if (isString(input)) {
      formattedInput = input.toUpperCase();
    }
  }
  console.log( parseInput("hello"));
  console.log(parseInput(123));

  const dialog: LegacyDialog = { legacyProp: "Legacy Dialog" };
  console.log(isLegacyDialog(dialog));

  const anotherDialog: Dialog = { commonProp: 123 };
  console.log(isLegacyDialog(anotherDialog));
}
