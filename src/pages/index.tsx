import { useLocales } from "@hooks/useLocales";
import { Button } from "@mui/material";
import { useApp } from "@hooks/useApp";
import Link from "next/link";

const Home = () => {
  const {t, changeLocale, currentLocale} = useLocales();
  const {paletteMode} = useApp();

  const changeThemeClick = async () => {
  }

  return (
      <>
        <Link href="/auth/login">Link</Link>
        <Button variant="contained" onClick={changeThemeClick}>
          {paletteMode}
        </Button>
        <Button variant="contained"
                onClick={() => changeLocale(currentLocale == "faIR" ? "enUS" : "faIR")}>
          {currentLocale}
        </Button>
        <h2>{t('demo.title')}</h2>
        تست فارسی 123
      </>
  )
}

export default Home;
