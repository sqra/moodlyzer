import Button from './ui/Button';
import Input from './ui/Input';
import Dialog from './ui/Dialog';

import styles from './Form.module.scss';
import { submitFormAction } from '../actions/submitForm.action';
import { useActionState, useEffect, useState } from 'react';
import SentimentResults from './SentimentResults';

const Form: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [resetInput, setResetInput] = useState<boolean>(false);
  const [state, formAction, isPending] = useActionState(submitFormAction, null);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setResetInput(true);
  };

  useEffect(() => {
    if (state?.status === 'success') setIsDialogOpen(true);
  }, [state]);

  return (
    <>
      <form
        action={formAction}
        className={styles.form}
        aria-label="Check sentiment"
      >
        <Input
          type="text"
          name="sentiment-input"
          maxlength={500}
          placeholder="Type your text here"
          disabled={isPending}
          error={state?.status === 'error' ? state.message : undefined}
          autofocus={true}
          reset={resetInput ? () => setResetInput(false) : undefined}
        />

        <Button name="submit" type="submit" isLoading={isPending}>
          Analize
        </Button>
      </form>
      {state?.data && (
        <Dialog isOpen={isDialogOpen} onClose={handleDialogClose}>
          <SentimentResults data={state.data} />
        </Dialog>
      )}
    </>
  );
};

export default Form;
