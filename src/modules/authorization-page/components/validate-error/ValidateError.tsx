import s from './ValidateError.module.scss'
type Props = {
  message: string | undefined
}

const ValidateError = ({ message }: Props) => (
  <p className={s.validate}>
    {message}
  </p>
)

export default ValidateError