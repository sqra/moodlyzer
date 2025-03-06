import Button from './ui/Button';
import Input from './ui/Input';
import Dialog from './ui/Dialog';

import styles from './Form.module.scss';
import { useState } from 'react';
import SentimentResults from './SentimentResults';
import { FormErrors, FormValues, SentimentScore } from '../types';
import { postSentimentAction } from '../api/postSentimentAction';
import { validateForm } from '../utils/validateForm';

const Form: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [response, setResponse] = useState<SentimentScore[]>([]);
  const [resetInput, setResetInput] = useState<boolean>(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setErrors({});
    setResponse([]);
    setResetInput(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const formValues: FormValues = {
      sentimentInput: formData.get('sentiment-input'),
    };
    const validationError = validateForm(formValues);
    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      setIsLoading(true);
      try {
        const result = await postSentimentAction(
          formValues.sentimentInput as string
        );
        setResponse(result);
        setIsDialogOpen(true);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        aria-label="Check sentiment"
      >
        <Input
          type="text"
          name="sentiment-input"
          maxlength={500}
          disabled={isLoading}
          placeholder="Type your text here"
          error={errors.sentimentInput}
          autofocus={true}
          reset={resetInput ? () => setResetInput(false) : undefined}
        />

        <Button
          isLoading={isLoading}
          name="submit"
          type="submit"
          disabled={isLoading}
        />
      </form>
      {response && (
        <Dialog isOpen={isDialogOpen} onClose={handleDialogClose}>
          <SentimentResults data={response} />
        </Dialog>
      )}
    </>
  );
};

export default Form;
