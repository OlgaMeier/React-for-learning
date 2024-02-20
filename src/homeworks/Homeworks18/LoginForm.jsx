import Input from './Input';
import Button from './Button';
import './LoginForm.css'; // Подключаем стили для формы

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы

    // Проверяем, заполнены ли поля email и password
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields'); // Выводим предупреждение, если поля не заполнены
    } else {
      // Отправляем данные на сервер или выполняем другие действия по вашему выбору
      console.log('Email:', email);
      console.log('Password:', password);
    }
  }

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter your email" label="Email" value={email} onChange={handleEmailChange} />
        <Input name="password" type="password" placeholder="Enter your password" label="Password" value={password} onChange={handlePasswordChange} />
        <Button name="Login" type="submit" />
      </form>
    </div>
  );
}

export default LoginForm;