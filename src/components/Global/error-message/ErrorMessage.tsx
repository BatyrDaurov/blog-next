import { useRouter } from 'next/router'
import { PrimaryButton } from '../../../UI/buttons'
import s from './ErrorMessage.module.scss'
type Props = { message: string, redirectURL: string }

const ErrorMessage = ({ message, redirectURL }: Props) => {
  const router = useRouter()
  return (
    <div className={s.error}>
      <h1 className={s.error__title}>{message}</h1>
      <PrimaryButton onClick={() => router.push(redirectURL)}>Redirect back</PrimaryButton>
    </div>
  )
}

export default ErrorMessage