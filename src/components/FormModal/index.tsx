/* eslint-disable react/require-default-props */
import React, { MouseEvent, ReactNode, useCallback } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { ApplicationState } from '../../store';
import { changeModalState } from '../../store/ducks/components/actions';

import { Modal, Container } from './styles';

interface FormModalProps {
  children: ReactNode;
  schema: Yup.AnySchema;
  submitFunction(e: unknown): void;
  formRef: React.RefObject<FormHandles>;
}

const FormModal: React.FC<FormModalProps> = ({
  children,
  submitFunction,
  schema,
  formRef,
}) => {
  const modalIsOpen = useSelector(
    (state: ApplicationState) => state.components.data.modalIsOpen,
  );
  const dispatch = useDispatch();

  const handleChangeModalState = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        dispatch(changeModalState());
      }
    },
    [dispatch],
  );

  const handleSubmit = useCallback(async () => {
    if (formRef.current) {
      try {
        const data = formRef.current.getData();
        formRef.current.setErrors({});

        await schema.validate(data, {
          abortEarly: false,
        });

        dispatch(changeModalState());
        submitFunction(data);
        formRef.current.reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors: { [x: string]: string } = {};

          err.inner.forEach(error => {
            if (error.path) {
              validationErrors[error.path] = error.message;
            }
          });
          formRef.current.setErrors(validationErrors);
        }
      }
    }
  }, [submitFunction, dispatch, formRef, schema]);

  return (
    <Modal onClick={handleChangeModalState} isOpened={modalIsOpen}>
      <Container>
        <Form onSubmit={handleSubmit} ref={formRef}>
          {children}
        </Form>
      </Container>
    </Modal>
  );
};

export default FormModal;
