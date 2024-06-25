import { Button } from '@components/ui/button'
import { belleza } from '@utils/fonts'
import clsx from 'clsx'
import styles from './index.module.scss'

export default function Home() {
  return (
    <main>
      <section>
        <h1 className={clsx(belleza.className, styles.title)}>
          Barbearia&apos;s Matta
        </h1>
        <Button>Agendar horário</Button>
      </section>
    </main>
  )
}
