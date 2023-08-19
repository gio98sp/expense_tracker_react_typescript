import * as C from './styles'

type ResumeItemProps = {
  title: string,
  value: number
}

export const ResumeItem = ({title, value}: ResumeItemProps) => {

  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={value < 0 ? 'red' : value > 0 ? 'green' : '#000'} >R$ {value}</C.Info>
    </C.Container>
  )
}