import { useState } from 'react';
import { UnstyledButton, Checkbox, Text } from '@mantine/core';
import classes from './task-checkbox.module.css'

type checkboxCardProps = {
  userInputTask: string,
  handleRemove: (index: number) => void,
  index: number,
}

export function CheckboxCard({ userInputTask, handleRemove, index }: checkboxCardProps) {

  const [value, onChange] = useState(true);

  return (
    <UnstyledButton onClick={() => onChange(!value)} className={classes.button} style={{ width: '640px', margin: '5px' }}>
      <Checkbox
        checked={!value}
        onChange={() => {}}
        tabIndex={-1}
        size="md"
        mr="xl"
        styles={{ input: { cursor: 'pointer' } }}
        aria-hidden
      />

      <div>
        <Text fw={500} mb={7} lh={1}>
        {userInputTask}
        </Text>
        <Text fz="sm" c="dimmed">
          To-Do Task
        </Text>
      </div>
      <button style={{ marginLeft: '90px' }} onClick={() => handleRemove(index)}>Remove</button>
    </UnstyledButton>
  );
}