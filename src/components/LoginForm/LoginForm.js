import { useState } from 'react';
import { Form, Label } from './LoginForm.styled';
import { login } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input
          onChange={e => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
        />
      </Label>
      <Label>
        Password
        <input
          onChange={e => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
        />
      </Label>
      <button type="submit">Log In</button>
    </Form>
  );
};
