import { ButtonStyled, ButtonModule } from '../components/Button'

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 gap-8">
      <ButtonStyled>This is a Styled Button</ButtonStyled>
      <ButtonModule>This is a Button with CSS module</ButtonModule>
    </main>
  )
}
