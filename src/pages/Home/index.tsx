import React, { useCallback, useMemo, useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormHandles } from '@unform/core';
import { FiSun, FiMoon } from 'react-icons/fi';

import { ThemeProvider } from 'styled-components';
import Input from '../../components/Input';
import FormModal from '../../components/FormModal';

import { ApplicationState } from '../../store';
import { addTodo, changeDoneState } from '../../store/ducks/todos/actions';
import {
  changeModalState,
  changeTheme,
} from '../../store/ducks/components/actions';
import { ToDo } from '../../store/ducks/todos/types';
import GlobalStyle from '../../styles/global';
import {
  Container,
  ThemeButton,
  LigthContainer,
  DarkContainer,
  MainContainer,
  AddButton,
  TitleContainer,
  TodoList,
} from './styles';
import { darkTheme, ligthTheme } from '../../styles/theme';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório.'),
  description: Yup.string(),
});

const Home: React.FC = () => {
  const todos = useSelector((state: ApplicationState) => state.todos.data);
  const isLigth = useSelector(
    (state: ApplicationState) => state.components.data.isLigth,
  );
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);

  const handleChangeTodoState = useCallback(
    (todo: ToDo) => {
      dispatch(changeDoneState(todo));
    },
    [dispatch],
  );

  const handleChangeTheme = useCallback(() => {
    dispatch(changeTheme());
  }, [dispatch]);

  const handleChangeModalState = useCallback(() => {
    dispatch(changeModalState());
    formRef.current?.reset();
  }, [dispatch]);

  const handleSubmit = useCallback(
    (e: ToDo) => {
      dispatch(addTodo(e));
    },
    [dispatch],
  );

  const todosMemo = useMemo(() => {
    const pendingToDos = todos.filter(item => item.isDoned !== true);

    return {
      pendingToDosAmount: pendingToDos.length,
    };
  }, [todos]);

  return (
    <ThemeProvider theme={isLigth ? ligthTheme : darkTheme}>
      <GlobalStyle />

      <Container>
        <FormModal
          schema={schema}
          formRef={formRef}
          submitFunction={(e: ToDo): void => handleSubmit(e)}
        >
          <Input placeholder="Tarefa" name="title" />
          <Input placeholder="Descrição" name="descriptio" />
          <div>
            <button type="button" onClick={() => handleChangeModalState()}>
              Cancelar
            </button>
            <button type="submit">Adicionar</button>
          </div>
        </FormModal>
        <MainContainer>
          <ThemeButton>
            <input
              type="checkbox"
              checked={isLigth}
              onChange={() => handleChangeTheme()}
            />
            <div>
              <DarkContainer>
                <FiMoon />
              </DarkContainer>
              <LigthContainer>
                <FiSun />
              </LigthContainer>
            </div>
          </ThemeButton>
          <AddButton onClick={() => handleChangeModalState()}>
            <span>+</span>
          </AddButton>
          <TitleContainer>
            <h1>{todosMemo.pendingToDosAmount}</h1>
            <h3>Tarefas Restantes.</h3>
          </TitleContainer>
          <TodoList>
            {todos.map(todo => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.isDoned}
                  onChange={() => handleChangeTodoState(todo)}
                />
                <div>
                  <p>{todo.title}</p>
                  <span>{todo.description}</span>
                </div>
              </li>
            ))}
          </TodoList>
        </MainContainer>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
