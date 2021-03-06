import { InputDiv, Form, CheckboxInput, Error } from './LoginForm.styles';

type InputType = {
  type: 'email' | 'password';
  children: React.ReactNode;
};

type CheckboxType = {
  type: 'checkbox';
  name: 'remember';
  children: React.ReactNode;
};

const LoginForm = () => {
  const error = false;

  // Render methods
  const RenderInput = ({ type, children }: InputType) => (
    <InputDiv>
      <label htmlFor={type}>{children}</label>
      <input type={type} name={type} id={type} />
    </InputDiv>
  );

  const RenderCheckbox = ({ type, name, children }: CheckboxType) => (
    <CheckboxInput>
      <input type={type} name={name} id={name} />
      <label htmlFor={name}>{children}</label>
    </CheckboxInput>
  );

  const RenderError = () => <Error>Email or password are incorrect</Error>;

  // Event handlers
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Sign in with your account </h3>
      {error && <RenderError />}
      <RenderInput type="email">Email</RenderInput>
      <RenderInput type="password">Password</RenderInput>
      <RenderCheckbox type="checkbox" name="remember">
        remember me
      </RenderCheckbox>
      <button type="submit">LOGIN</button>
    </Form>
  );
};

export default LoginForm;
