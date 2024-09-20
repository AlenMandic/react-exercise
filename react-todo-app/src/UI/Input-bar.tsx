import { TextInput, ActionIcon, useMantineTheme } from '@mantine/core';

type inputValueProps = {
  inputValue: string,
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleAdd: () => void,
}

export function InputWithButton({inputValue, handleInput, handleAdd }:inputValueProps) {

  const theme = useMantineTheme();

  return (
    <TextInput
      radius="sm"
      size="xl"
      style={{ width: '640px', margin: '5px' }}
      placeholder="Enter new To-Do task"
      rightSectionWidth={42}
      rightSection={
        <ActionIcon size={40} radius="xl" color={theme.primaryColor} variant="filled" onClick={handleAdd}>
            Send
        </ActionIcon>
      }
      value={inputValue}
      onChange={handleInput}
    />
  );
}