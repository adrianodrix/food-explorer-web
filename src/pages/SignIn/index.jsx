import { CiMail, CiUser, CiLock} from "react-icons/ci";
import { Container, Form, SideLogo } from "./styles";
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { Logo } from "../../components/Logo";

export function SignIn() {
    return (
        <Container>
            <SideLogo>
                <Logo />
            </SideLogo>

            <Form>                
                <Logo />

                <h2>Log into my account</h2>

                <div className="InputWrapper">
                    <label htmlFor="email">Email</label>
                    <Input type='email' placeholder='your_best@email.com' icon={ CiMail } name='email' id='email' required />
                </div>

                <div className="InputWrapper">
                    <label htmlFor="password">Password</label>
                    <Input type='password' placeholder='At least 6 characters' icon={ CiLock } name='password' id='password'  minLength={6} required />
                </div>

                <Button title='Log In' type='submit' />

                <span>
                    <a href="#">Create my account</a>
                </span>
            </Form>
        </Container>
    )
}