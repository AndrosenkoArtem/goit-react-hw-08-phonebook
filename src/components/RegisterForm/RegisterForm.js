import { useState } from 'react';
import { Form, Label } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
        />
      </Label>
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
      <button type="submit">Register</button>
    </Form>
  );
};
